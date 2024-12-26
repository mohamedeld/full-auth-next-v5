import * as z from 'zod';


export const loginSchema = z.object({
  email:z.string().email(),
  password:z.string().min(6,{
    message:"password must be greater than 6"
  })
})
export const registerSchema = z.object({
  email:z.string().email(),
  password:z.string().min(6,{
    message:"password must be greater than 6"
  }),
  name:z.string().min(1,{
    message:"user name is required"
  })
})
