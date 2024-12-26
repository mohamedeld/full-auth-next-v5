"use server";

import * as z from "zod";
import { loginSchema } from "@/schemas";

export const login = async (values:z.infer<typeof loginSchema>) =>{
  try{
    const validatedValues = loginSchema.safeParse(values);
    if(!validatedValues.success){
      throw new Error("Validation failed")
    }
    return {
      success:"Email sent"
    }
  }catch(error){
    console.error(error)
  }
}