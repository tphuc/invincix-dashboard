"use client";
import { useSWRConfig } from "swr";

import { Button } from "@/components/ui/button";
import { Loader2, Plus, PlusCircle } from "lucide-react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useRef, useState } from "react";
import { toast, useToast } from "@/components/ui/use-toast";
import { useSession } from "next-auth/react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useGetResource } from "@/utils/http";

export function AddUserForm() {
    const user = useSession()?.data?.user as any;
    const form = useForm({

        // resolver: zodResolver(z.object({
        // }))
    });

    const {data: datasets } = useGetResource('/api/dataset')
    const router = useRouter()
    const { mutate } = useSWRConfig();
    const [isLoading, setLoading] = useState(false);
    const closeRef = useRef<any>();


    const sendAction = async (values) => {
        console.log(values)
        try {

            if(!values.password){
                form.setError('password', {message:'this field is required'})
                return
            }
            if(!values.confirmPassword){
                form.setError('confirmPassword', {message:'this field is required'})
                return
            }
            if(!values.datasetId){
                form.setError('datasetId', {message:'this field is required'})
                return
            }
            if(values.confirmPassword !== values.password){
                form.setError('password', {message:'passwords do not match'})
                form.setError('confirmPassword', {message:'passwords do not match'})
                return
            }
            setLoading(true);

            
            let res = await fetch(`/api/user/register`, {
                method: 'POST',
                body: JSON.stringify({
                    username: values.username,
                    password: values.password,
                    datasetId: values?.datasetId
                })
            })


            if(res?.ok){
                toast({
                    title: "Add New User Sucessfully",
                });
    
                closeRef?.current?.click();
    
                // router?.prefetch('/talent-dashboard/my-orders')
                mutate(
                    key => typeof key === 'string' && key.startsWith('/api/user'),
                    undefined,
                    { revalidate: true }
                )
                router.refresh()
               
            }
          
            setLoading(false);
        } catch (e) {
            console.log(e)
            setLoading(false);
            toast({
                title: JSON.stringify(e),
            });
        }
    };



    return (
        <div className="max-h-[90vh] p-4 px-8 scrollbar-hide overflow-scroll space-y-2">
            <p className="text-2xl">Add New User</p>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(sendAction)}
                    className="space-y-4 py-4"
                >

                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem className="col-span-2">
                                <FormLabel></FormLabel>
                                <FormControl aria-required>
                                    <Input
                                        required
                                        className="bg-background/50"
                                        placeholder="username"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem className="col-span-2">
                                <FormLabel></FormLabel>
                                <FormControl aria-required>
                                    <Input
                                        required
                                        type='password'
                                        className="bg-background/50"
                                        placeholder="password"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem className="col-span-2">
                                <FormLabel></FormLabel>
                                <FormControl aria-required>
                                    <Input
                                        required
                                        type='password'
                                        className="bg-background/50"
                                        placeholder="confirmPassword"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

<FormField
                        control={form.control}
                        name="datasetId"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="flex items-center gap-2"> Select dataset </FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                       {datasets?.map?.((item: any,id: any) => <SelectItem key={id} value={item?.id}>{item?.name}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )}
                    />




                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="gap-2 sticky bottom-0 w-full"
                    >
                        Confirm
                        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    </Button>
                    <DialogClose ref={closeRef}></DialogClose>
                </form>
            </Form>
        </div>
    );
}
