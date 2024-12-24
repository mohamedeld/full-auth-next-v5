"use server";

import * as z from "zod";
import { loginSchema } from "@/schemas";

export const login = async (values:z.infer<typeof loginSchema>) =>{
  console.log(values)
}