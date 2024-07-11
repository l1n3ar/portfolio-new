"use client";
import React from "react";
import Hero from './components/sections/Hero'
import { Projects } from "./components/sections/Projects";
import About from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <div><Hero /> <Projects /> <About /> <Contact /> </div>
  );
}
