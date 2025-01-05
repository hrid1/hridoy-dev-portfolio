import React from "react";
import { useParams } from "react-router-dom";
import { MYPROJECTS } from "../constants";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const ProjectDetails = () => {
  const { id } = useParams();

  const project = MYPROJECTS.find((project) => project.id == id);
  console.log(project);

  return (
    <div className="pt-12">
      <div className="min-h-screen bg-gray-900 p-2 text-white rounded-md">
        <div className="max-w-5xl mx-auto bg-gray-950 shadow-lg rounded-xl overflow-hidden">
          <section className="flex flex-col-reverse md:flex-row p-6 gap-4">
            <div className="w-full md:w-1/2">
              <h1 className="text-3xl font-bold text-gray-100 mb-4">
                {project.name}
              </h1>
              <p className="text-gray-300 mb-4">{project.info}</p>
              <div className="my-4">
                <h4 className="text-gray-100 text-xl font-semibold mb-2">
                  Features
                </h4>
                <ul className="space-y-1">
                  {project.features.map((item, index) => (
                    <li
                      key={index}
                      className="text-gray-400 text-sm md:text-base flex items-start"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-500 mt-1 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <img
              src={project.image}
              alt={project.name}
              className="w-full md:w-1/2 max-h-72 object-cover rounded-xl mb-4"
            />
          </section>
          <div className="p-6">
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-100 mb-2">
                Description
              </h2>
              <p className="text-gray-400 text-sm md:text-base whitespace-pre-line">
                {project.description}
              </p>
            </div>
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-100 mb-4">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technology.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-gradient-to-r from-slate-800 to-blue-900 text-white rounded-full shadow-md hover:from-slate-600 hover:to-blue-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 flex space-x-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm bg-gradient-to-r from-slate-700 to-blue-600 text-white rounded-lg shadow-md hover:from-slate-600 hover:to-blue-500 flex items-center gap-2"
              >
                <FaGithub className="text-lg" />
                View on GitHub
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm bg-gradient-to-r from-slate-700 to-blue-600 text-white rounded-lg shadow-md hover:from-slate-600 hover:to-blue-700 flex items-center gap-2"
              >
                <FaExternalLinkAlt className="text-lg" />
                Visit Live Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
