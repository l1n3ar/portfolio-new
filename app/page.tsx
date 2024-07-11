"use client";
import React from "react";
import Hero from './components/sections/Hero'
import AboutSmall from "./components/sections/About-Small";
import { Projects } from "./components/sections/Projects";

export default function Home() {
  return (
    <div><Hero /> <Projects /></div>
  );
}
