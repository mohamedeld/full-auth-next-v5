"use client";

import { useForm } from "react-hook-form"
import * as z from "zod";
import CardWrapper from "./CardWrapper"
import {  registerSchema } from "@/schemas";
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import FormError from "./formError";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { register } from "@/actions/register";

const RegisterForm = () => {
  const [isPending,startTransition] = useTransition();
  
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues:{
      name:'',
      email:'',
      password:''
    },
    mode:'onChange'
  })
  const {isSubmitting,errors} = form.formState;
  const onSubmit = async (values:z.infer<typeof registerSchema>)=>{
    try{
      startTransition(async ()=>{
        await register(values).then((data)=>{
          const message = data?.success || 'something went wrong';
          toast.success(message)
        })
      });
      
    }catch(error){
      console.error(error);
    
    }
  }
  return (
    <CardWrapper backButtonHref="/auth/login" backButtonLabel="Already have an account" headerLabel="Create an account" showSocial>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
          <FormField control={form.control} disabled={isPending} name="password" render={({field})=>(
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                <Input {...field} placeholder="Enter your name"/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}/>
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
          {(errors?.email || errors?.password) &&  <FormError message="Something went wrong"/>}
          <Button type="submit" disabled={isSubmitting} className="w-full">{isSubmitting ? 'register...' :'Register'}</Button>
        </form>
      </Form>
    </CardWrapper>
  )
}

export default RegisterForm