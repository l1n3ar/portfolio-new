"use client";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import React from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import { BackgroundGradient } from "../ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { MovingCards } from "./MovingCards";
import Footer from "./Footer";

export function Contact() {
    const placeholders = [
        "Can I pet that dawg?",
        "Can I PET that DAWG?!",
        "CAN I PET THAT DAWG?!?!",
      ];
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
      };
      const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
      };
  return (
    <BackgroundGradientAnimation>
    <div className="bg-white bg-dot-black/[0.2] w-screen h-dvh">
    <div className="h-full flex flex-col justify-evenly items-center px-4">

      {/* <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      /> */}
      <div className="flex flex-col justify-center items-center space-y-2">
        {/* <h1 className="text-slate-500 text-7xl font-light ">Testimonials </h1> */}
         <MovingCards />
        
         </div>
         <Footer />
    </div>
    </div>
 
    </BackgroundGradientAnimation>
  );
}








