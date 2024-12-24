"use client";

import { useForm } from "react-hook-form"
import * as z from "zod";
import CardWrapper from "./CardWrapper"
import { loginSchema } from "@/schemas";
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import FormError from "./formError";
import { login } from "@/actions/login";
import { useTransition } from "react";

const LoginForm = () => {
  const [isPending,startTransition] = useTransition();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues:{
      email:'',
      password:''
    }
  })
  const onSubmit = async (values:z.infer<typeof loginSchema>)=>{
    // startTransition(async ()=>{
    //   await login(values)
    // })
  }
  return (
    <CardWrapper backButtonHref="/auth/register" backButtonLabel="Don't have an account" headerLabel="Welcome back" showSocial>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField control={form.control} disabled={isPending} name="email" render={({field})=>(
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="john@example.com" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} disabled={isPending} name="password" render={({field})=>(
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                <Input {...field} placeholder="Enter your password"/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}/>

          </div>
          <FormError message="Something went wrong"/>
          <Button type="submit" disabled={isPending} className="w-full">Login</Button>
        </form>
      </Form>
    </CardWrapper>
  )
}

export default LoginForm