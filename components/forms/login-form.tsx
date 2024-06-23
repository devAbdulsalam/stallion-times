"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/schemas";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import { useToast } from "@/components/ui/use-toast";

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const router = useRouter();
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/login.php`;
    try {
      setIsLoading(true);
      const { data } = await axios.post(url, values);

      Cookies.set("token", data.token, { expires: 7 });
      localStorage.setItem("token", data?.token);
      setIsLoading(false);
      router.push("/dashboard/admin");
    } catch (error) {
      toast({ title: "Invalid credentials", variant: "destructive" });
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-balance text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="*****" {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isLoading}>
          Login
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
