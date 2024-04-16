"use client";

import { signIn, useSession } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/form";
import { useForm } from "react-hook-form";
import { AlertTriangle, Mail, User } from "lucide-react";
import { Button } from "@/components/common";
import { PasswordInput } from "@/components/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Alert } from "@/components/common/alert";
import { useToast } from "@/components/ui/use-toast";
import "../styles.css";
// import { setLoginStatus } from "services/auth";

const formSchema = z.object({
  uu: z.string().min(2, 'Email is required').max(50).email(),
  password: z.string().nullable().optional(),
});

export default function LoginPage({ params }: any) {
  const { toast } = useToast();
  const form = useForm();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const user = useSession()?.data?.user as any
  if(user?.id){
    router.push('/dashboard/overview2')
  }


  const searchParams = useSearchParams();
  const error = searchParams?.get('error')
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  async function onSubmit(values: any) {
    try {
      setLoading(true);
    

      let res = await signIn('credentials', {
        username:values?.username,
        password: values?.password,
        callbackUrl:"/login"
      })


      if(res?.error){
        toast({
          title: "Invalid login credentials!"
        });
        setLoading(false);
        return
      }

      toast({
        title: "Sign in succesfully!"
      });
      router.push("/dashboard/overview2")
      setLoading(false);

    } catch (error: any) {
      
      console.log(66, error)
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mx-8 my-8 z-50">
          {Boolean(error) && (
            <div className="my-3">
              <Alert
                icon={<AlertTriangle className="h-4 w-4" />}
                variant="destructive"
                title="Error"
                description={error ?? ''}
              />
            </div>
          )}
          <div className="mb-3 mt-5">
            <Input
              form={form}
              variant="outline"
              name="username"

              endIcon={<User />}
              placeholder={"Username"}
            />
          </div>
          <div className="mb-2">
            <PasswordInput
              variant="outline"
              name="password"
              form={form}
              placeholder={"Password"}
            />
          </div>
          {/* <div className="text-right mb-5">
            <Link href="/forgot-password">{t("forgot_password")}</Link>
          </div> */}
        </div>
        <div className="flex justify-end">
          <div className="flex space-x-2 p-4 rounded-tl-lg bg-sky-800 action-box">
            <Button
              className="bg-white"
              size="lg"
              type="submit"
              loading={loading}
            >
                Login
            </Button>
            {/* <Button
              className="border-white text-white"
              size="lg"
              variant="outline"
            >
              {t("register")}
            </Button> */}
          </div>
        </div>
      </form>
    </Form>
  );
}
