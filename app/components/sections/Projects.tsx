"use client";

import React from "react";
import { NewCard } from "./NewCard";
import { NewGlobe } from "./NewGlobe";


// TODO update the svg images for the tech stack
const projects = [
  {
    title: "Aculead",
    description: "A leading platform for managing leads and sales.",
    image: "/img.png",
    url: "/project/aculead",
    iconLists: ["/re.svg", "/tail.svg", "/re.svg", "/tail.svg", "/re.svg", "/tail.svg"],
  },
  {
    title: "Contromoist",
    description: "A moisture control and monitoring system.",
    image: "/img.png",
    url: "/project/contromoist",
    iconLists: ["/re.svg", "/tail.svg", "/re.svg", "/tail.svg", "/re.svg", "/tail.svg"],
  },
  {
    title: "Currency Network",
    description: "A network for managing and exchanging currencies.",
    image: "/img-2.jpg",
    url: "/project/currency-network",
    iconLists: ["/re.svg", "/tail.svg", "/re.svg", "/tail.svg", "/re.svg", "/tail.svg"],
  },
  {
    title: "Grocernest",
    description: "An online platform for grocery shopping.",
    image: "/img.png",
    url: "/project/grocernest",
    iconLists: ["/re.svg", "/tail.svg", "/re.svg", "/tail.svg", "/re.svg", "/tail.svg"],
  },
  {
    title: "Docusense",
    description: "A document management and collaboration tool.",
    image: "/img.png",
    url: "/project/docusense",
    iconLists: ["/re.svg", "/tail.svg", "/re.svg", "/tail.svg", "/re.svg", "/tail.svg"],
  },
];

export function Projects() {
  return (
    <div className="min-h-screen w-full dark:bg-dot-white/[0.2] bg-white bg-dot-black/[0.2] relative flex flex-col items-center justify-center py-12">
      <h2 className="text-6xl font-extralight mb-20 text-neutral-700">Work</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-12 w-full">
        {projects.map((project, index) => (
          <div key={index} className="flex justify-around items-start">
            <NewCard
              title={project.title}
              image={project.image}
              description={project.description}
              link = {project.url}
            //   url={project.url}
            //   iconLists={project.iconLists}
            />
          </div>
        ))}
      </div>
    {/* <NewGlobe /> */}
    </div>
  );
}
