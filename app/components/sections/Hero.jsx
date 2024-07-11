"use client";
import React from "react";
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
        </div>
      </TracingBeam>
    </Vortex>
  );
}
