"use client";

import Link from "next/link";
import { Button } from "./ui/button";

interface IProps{
  label:string;
  href:string;
}

const BackButton = ({label,href}:IProps) => {
  return (
    <Button variant={"link"} className="font-normal w-full" size={"sm"} asChild>
      <Link href={href}>{label}</Link>
    </Button>
  )
}

export default BackButton