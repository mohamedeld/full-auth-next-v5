"use client";

import BackButton from "./BackButton";
import Header from "./header";
import Social from "./Social";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

interface IProps{
  children:React.ReactNode;
  headerLabel:string;
  backButtonLabel:string;
  backButtonHref:string;
  showSocial?:boolean;
}

const CardWrapper = ({children,headerLabel,backButtonHref,backButtonLabel,showSocial}:IProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel}/>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      {showSocial && (
        <CardFooter>
          <Social/>
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref}/>
      </CardFooter>
    </Card>
  )
}

export default CardWrapper