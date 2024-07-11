import React from "react";
import { PinContainer } from "../ui/3d-pin";


//TODO update the svg images for the tech stack
const projects = [
  {
    title: "Aculead",
    description: "A leading platform for managing leads and sales.",
    image: "/img.png",
    url: "https://example.com/aculead",
    iconLists: ["/re.svg", "/tail.svg","/re.svg", "/tail.svg","/re.svg", "/tail.svg"],
  },
  {
    title: "Contromoist",
    description: "A moisture control and monitoring system.",
   image: "/img.png",
    url: "https://example.com/contromoist",
    iconLists: ["/re.svg", "/tail.svg","/re.svg", "/tail.svg","/re.svg", "/tail.svg"],
  },
  {
    title: "Currency Network",
    description: "A network for managing and exchanging currencies.",
   image: "/img.png",
    url: "https://example.com/currency-network",
    iconLists: ["/re.svg", "/tail.svg","/re.svg", "/tail.svg","/re.svg", "/tail.svg"],
  },
  {
    title: "Grocernest",
    description: "An online platform for grocery shopping.",
   image: "/img.png",
    url: "https://example.com/grocernest",
    iconLists: ["/re.svg", "/tail.svg","/re.svg", "/tail.svg","/re.svg", "/tail.svg"],
  },
  {
    title: "Docusense",
    description: "A document management and collaboration tool.",
   image: "/img.png",
    url: "https://example.com/docusense",
    iconLists: ["/re.svg", "/tail.svg","/re.svg", "/tail.svg","/re.svg", "/tail.svg"],
  },
];

export function Projects() {
  return (
    <div className="min-h-screen w-full dark:bg-dot-white/[0.2] bg-black bg-dot-white/[0.2] relative flex flex-col items-center justify-center py-12">
      <h2 className="text-7xl font-light mb-20 text-neutral-600">Work</h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 px-4 w-full">
        {projects.map((project, index) => (
          <div key={index} className="p-4 flex justify-center items-center">
            <PinContainer title={project.title} href={project.url}>
            <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg mb-2"
                  />
              <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-full max-w-xs">
             
                <h3 className="font-light text-2xl text-slate-100 ">
                  {project.title}
                </h3>
                <div className="text-base font-base text-slate-500 mb-4 w-screen">
                  {project.description}
                </div>
              
                
               
                <div className="flex items-center">
                  {project.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 10}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>
              </div>
            
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
