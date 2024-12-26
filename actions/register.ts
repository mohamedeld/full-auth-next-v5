"use server";

import * as z from "zod";
import {  registerSchema } from "@/schemas";

export const register = async (values:z.infer<typeof registerSchema>) =>{
  try{
    const validatedValues = registerSchema.safeParse(values);
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