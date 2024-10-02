"use client";

import { useRouter } from "next/navigation";


interface IProps{
  children:React.ReactNode;
  mode?:'modal' | 'redirect';
  asChild?:boolean;
}

const SignInButton = ({children,mode="redirect",asChild}:IProps) => {
  const router = useRouter();
  const handleClick = ()=>{
    router.push("/auth/login");
  }
  if(mode === 'modal'){
    return (
      <span>TODO: Implement modal</span>
    )
  }
  return (
    <span className="cursor-pointer" onClick={handleClick}>{children}</span>
  )
}

export default SignInButton