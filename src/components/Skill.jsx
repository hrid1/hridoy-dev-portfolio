import React from "react";
import { SKILLS } from "../constants";
import { FaCss3Alt, FaGithub, FaHtml5, FaNodeJs } from "react-icons/fa6";
import { SiFirebase, SiMongodb, SiTailwindcss } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";

const Skill = () => {
  const allSkills = [
    {
      icon: <FaHtml5 className="text-4xl text-orange-600 lg:text-5xl" />,
      name: "HTML",
      experience: "3+ years",
    },
    {
      icon: <FaCss3Alt className="text-4xl text-blue-500 lg:text-5xl" />,
      name: "CSS",
      experience: "3+ years",
    },
    {
      icon: <SiTailwindcss className="text-4xl text-teal-400 lg:text-5xl" />,
      name: "Tailwind CSS",
      experience: "2+ years",
    },
    {
      icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
      name: "React",
      experience: "2+ years",
    },
    {
      icon: <SiFirebase className="text-4xl text-yellow-500 lg:text-5xl" />,
      name: "Firebase",
      experience: "1+ years",
    },
    {
      icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
      name: "Node.js",
      experience: "2+ years",
    },
    {
      icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
      name: "MongoDB",
      experience: "1.5+ years",
    },
    {
      icon: <FaGithub className="text-4xl text-gray-100 lg:text-5xl" />,
      name: "GitHub",
      experience: "3+ years",
    },
    
  ];

  return (
    <section id="skills" className="container max-auto pt-2">
      <div className="text-center mb-12 mt-20">
        <h2 className=" text-4xl font-semibold">Skills</h2>
        <p className="text-sm md:text-lg mt-4">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {allSkills.map((skill, idx) => (
          <div
            key={idx}
            className="group relative flex flex-col items-center justify-center gap-4 rounded-lg border border-gray-200  p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <div className="text-5xl group-hover:animate-bounce">
              {skill.icon}
            </div>
            <h3 className="text-lg lg:text-xl font-semibold text-gray-100 group-hover:text-teal-500">
              {skill.name}
            </h3>
          
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
