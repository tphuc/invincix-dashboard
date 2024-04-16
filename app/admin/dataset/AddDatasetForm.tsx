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


export function AddDatasetForm() {
    const user = useSession()?.data?.user as any;
    const form = useForm({

        // resolver: zodResolver(z.object({
        // }))
    });

    const router = useRouter()
    const { mutate } = useSWRConfig();
    const [isLoading, setLoading] = useState(false);
    const closeRef = useRef<any>();


    const sendAction = async (values: any) => {
        console.log(values)
        try {

            if (!values.name) {
                form.setError('name', { message: 'this field is required' })
                return
            }

            if (!values.file) {
                form.setError('file', { message: 'this field is required' })
                return
            }
            setLoading(true);


            const formdata = new FormData()
            formdata.append('name', values.name)
            formdata.append('file', values.file)

            let res = await fetch(`/api/dataset`, {
                method: 'POST',
                body: formdata
            })


            if (res?.ok) {
                toast({
                    title: "Add New Dataset Sucessfully",
                });

                closeRef?.current?.click();

                // router?.prefetch('/talent-dashboard/my-orders')
                mutate(
                    key => typeof key === 'string' && key.startsWith('/api/dataset'),
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
            <p className="text-2xl">Add New Dataset</p>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(sendAction)}
                    className="space-y-4 py-4"
                >

                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="col-span-2">
                                <FormLabel></FormLabel>
                                <FormControl aria-required>
                                    <Input
                                        required
                                        className="bg-background/50"
                                        placeholder="Give your dataset a name"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="file"
                        render={({ field }) => (
                            <FormItem className="col-span-2">
                                <FormLabel></FormLabel>
                                <FormControl aria-required>
                                    <Input
                                        type='file'
                                        required
                                        className="bg-background/50"
                                        onChange={(e) => field.onChange(e.target.files?.[0])}
                                    />
                                </FormControl>
                                <FormMessage />
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
