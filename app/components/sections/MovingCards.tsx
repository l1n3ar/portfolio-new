"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function MovingCards() {
  return (
    <div className="h-full rounded-md flex flex-col antialiased bg-transparent dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
    {
      quote:
        "It was a pleasure working along-with Mehul in the Digital Currency prototype project. Mehul is extremely technologically adept, passionate, demonstrating positive attitude and ever willing to take-on challenges head-on. He played a pivotal role in solving major technical issues, showcasing his problem-solving abilities and coding expertise across technologies such as Blockchain, Node.js, Go, and Swift. His collaborative nature and leadership qualities positively contributes towards bringing the best out-of everyone in the team within a project. I, highly recommend Mehul for his outstanding work, professional approach, proficiency as a programmer and his passion for technology, and truly believe he is an invaluable asset to any team /organisation.",
      name: "Sibabrata Banerjee",
      title: "CTO @ CurrencyNet",
    },
    {
      quote:
        "I have had the pleasure of working closely with Mehul over the past one year during our Digital Currency project. As a mobile developer, he consistently demonstrated exceptional skills and dedication to delivering high-quality solutions. Mehul possesses a profound understanding of mobile technologies which he adeptly applied to our projects. He played a crucial role in building Quantum-secure Digital Currency wallet, where his innovative approach and problem-solving abilities were instrumental in overcoming challenges and achieving success. What truly sets Mehul apart is his commitment to continuous improvement and learning. He actively seeks out new techniques and stays updated with the latest trends in mobile development, ensuring that his contributions are always at the forefront of technology. I wholeheartedly recommend Mehul for any mobile development role. He would undoubtedly be a valuable asset to any team, bringing expertise, dedication, and a passion for excellence.",
      name: "Animesh Ghosh",
      title: "Founder and CEO @ CurrencyNet",
    },
    {
      quote:
        "I had the pleasure of working closely with Mehul, and I can confidently say that he is an exceptional 'Technophile'. Mehul has consistently demonstrated a strong grasp of technology concepts, a dedication to staying up-to-date with the latest trends, and a knack for solving complex technical challenges. One of Mehul's standout qualities is the ability to quickly adapt to new technologies and tools. Whether it's picking up a new programming language, mastering a new framework, or diving into emerging technologies, Mehul approaches each learning opportunity with enthusiasm and a strong work ethic. This adaptability has not only made him an invaluable asset to our team but has also allowed him to excel in various roles within our organization. Mehul's problem-solving skills are second to none. He has a natural ability to dissect complex technical issues, identify root causes, and develop effective solutions. His attention to detail and commitment to quality are evident in every project he undertakes, consistently delivering results that exceed expectations. What sets Mehul apart is not only his technical prowess but also his strong teamwork and communication skills. He is a team player who thrives in collaborative environments and is always willing to collaborate with team members, share knowledge, and provide mentorship to junior colleagues. Mehul is not just an asset to our technical projects but also a positive influence on our team's dynamics, and his positive attitude and ability to work well with others make him a pleasure to work alongside.",
      name: "Dipta Pratim Banerjee",
      title: "Partner & Head of Data and Analytics @ TuTeck Technologies",
    },
    {
      quote:
        "Mehul is one of the brightest young technologists I have seen in my 25+ year long career. Mehul architects and designs digital solutions in multiple tech stacks, quite amazing for someone with just 3 years of experience. What really differentiates Mehul is his strong understanding of business across multiple domains and seamlessly addressing business problems with technical solutions. Mehul stands tall and drives customer workshops with senior business and technical stakeholders. Mehul ticks all the boxes to be a strong people leader as well. Working in a start up has given Mehul the wings to fly and scale across technology, business, and leadership roles. He has had a tremendous contribution to TuTeck's journey so far and is a key pillar for the growth of the company. I wish Mehul the very best for the future and hope he helps TuTeck to scale new horizons.",
      name: "Soumya Dasgupta",
      title: "Senior Vice President @ TuTeck Technologoies",
    },
    {
      quote:
        "Mehul is a highly dedicated individual with a passion for his role and a desire to deliver the highest quality service to the company, his peers, and his customers. He goes the extra mile when needed and readily accepts additional responsibilities and challenges when required. I can always count on Mehul to perform at the highest levels on my delivery teams across all of his delivery capabilities. He has helped mentor junior teams in the delivery of complex enterprise-wide solutions. Mehul is a person that I have complete trust and confidence in. He has great potential to become a good leader. I would always want to have Mehul as a member of my team.",
      name: "Samantak Panda",
      title: "CEO @ TuTeck Technologies, Partner @ PowerFluence",
    },
    {
        quote:
          "I know Mehul when he started his career just out from his college. He is highly skilled in backend technologies and has consistently developed high-quality, scalable software solutions for the team. He is able to quickly learn and adapt to new technologies, making him a valuable asset in a rapidly evolving field. He is an amazing team player and mentor and can effectively communicate technical information to his team members and non-technical stakeholders too. I want to thank him again for the way that he handles tough situations with a smile and a can-do attitude. It is incredibly encouraging to those who look up to his energy! Last but not least, I appreciate the way he takes on challenges with such a positive attitude. He leaves us with such a great impression.",
        name: "Pratik Banerjee",
        title: "Director of Technology Consulting @ TuTeck Technologies",
      },
      {
        quote:
          "Mehul has consistently demonstrated an impressive level of enthusiasm and proactivity in his work. He possesses a keen intellect and is quick to understand complex technical concepts. His passion for web development is evident in his work, and he consistently brings new and innovative ideas to the table. He has expertise in a range of programming languages and web development frameworks. His deep technical knowledge and skillful use of these technologies have resulted in the creation of highly effective and efficient applications. His strong communication skills coupled with his never-give-up attitude make him an asset for any organization.",
        name: "Aditya Keyal",
        title: "Director of Application Development @ Publicis Sapient",
      },
];
