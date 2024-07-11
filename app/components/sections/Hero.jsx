"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { motion } from "framer-motion";
import { TracingBeam } from "../ui/tracing-beam";
import { Vortex } from "../ui/vortex";

export default function Home() {
  return (

    <Vortex
    backgroundColor="black"
    className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-screen"
  >
    <TracingBeam  >
    <div className="h-lvh w-full  flex flex-col items-center justify-center overflow-hidden rounded-md relative space-y-2">
   
      <h1 className="md:text-4xl text-3xl lg:text-6xl font-light text-center text-white relative z-20">
        Hi, I'm Mehul.
      </h1>

      <p className="text-sm lg:text-base font-extralight text-center text-neutral-300">I like writing code and unravelling the mysteries of the universe using math. <br></br> </p>
      {/* <p className="md:text-sm text-sm lg:text-sm font-extralight text-center text-neutral-500">( not necessarily in that order)</p> */}
      {/* <div className="w-[40rem] h-40 relative"> */}
        {/* Gradients */}
        {/* <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" /> */}

        {/* Core component */}
        {/* <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        /> */}

        {/* Radial Gradient to prevent sharp edges */}
        {/* <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div> */}
      {/* </div> */}

      {/* SVG at the bottom center
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <motion.svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
          animate={{
            y: [0, -20, 0], // Y-axis positions to animate between
          }}
          transition={{
            duration: 2, // Duration of each animation cycle
            repeat: Infinity, // Repeat the animation indefinitely
            repeatType: "loop", // Loop the animation
            ease: "easeInOut" // Easing function
          }}
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13h-2v-2H9v2H7v-2c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v2zm-4-8H11v4h2V7z"
            fill="currentColor"
          />
        </motion.svg>
      </div> */}
    </div>
    </TracingBeam>
    </Vortex>
  );
}
