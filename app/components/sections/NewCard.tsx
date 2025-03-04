"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";


export function NewCard({
    title,
    description,
    image,
    link,
}:{
    title : string,
    description : string
    image : string
    link : string
}) {
  return (
    <>
 
    <CardContainer className="inter-var ">
     
      <CardBody className="bg-white relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex flex-col justify-between items-start mt-20 space-y-4">

        <CardItem
            translateZ={20}
            as={Link}
            href={link}
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            The TL;DR
          </CardItem>
           <CardItem
            translateZ={20}
            as="button"
            // href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white disabled text-slate-300 bg-slate-100"
          >
         Quick View → 
          </CardItem> 
          
      
        </div>
       
      </CardBody>
    
     </CardContainer> 
     </>
  );
}
