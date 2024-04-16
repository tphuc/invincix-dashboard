"use client";

import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/form";
import { useForm } from "react-hook-form";
import { AlertTriangle, Mail } from "lucide-react";
import { Button } from "@/components/common";
import { PasswordInput } from "@/components/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Alert } from "@/components/common/alert";
import { useToast } from "@/components/ui/use-toast";
import "../styles.css";


const formSchema = z.object({
  email: z.string().min(2).max(50).email(),
});

export default function Page() {

  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);

      const res = await signIn("credentials", {
        redirect: false,
        email: values.email,
        callbackUrl,
      });

      setLoading(false);

      if (res?.status && res?.status < 300 && res?.status >= 200) {
        toast({
          variant: "success",
          title: "Successfully logged in!",
          description: "Welcome!",
        });
       
        setError("");
      } else {
        setError("Invalid email or password");
      }
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
       
      </form>
    </Form>
  );
}
