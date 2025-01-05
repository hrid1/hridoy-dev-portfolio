import { Link } from "react-router-dom";
import { MYPROJECTS } from "../constants";
import { FaGit, FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { RiExternalLinkFill } from "react-icons/ri";
import { MdOutlineHorizontalRule } from "react-icons/md";

const Projects = () => {
  return (
    <section className="pt-20" id="projects">
      <h2 className="mb-8 text-center text-3xl lg:4xl"> Projects</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {MYPROJECTS.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-3xl"
          >
            <img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className=" absolute inset-0 flex flex-col items-center justify-center text-white  opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100 ">
              <h2 className="mb-2 text-xl">{project.name}</h2>
              <p className="mb-12 p-4">{project.info}</p>
              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full text-black bg-white hover:bg-gray-300 border h-8 w-8 flex items-center justify-center"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full text-black bg-white hover:bg-gray-300 border h-8 w-8 flex items-center justify-center"
                >
                  <RiExternalLinkFill className="text-2xl" />
                </a>
              </div>

              <Link to={`projects/${project.id}`}>
                <button className="px-3 mt-4 py-1 bg-white text-black font-semibold rounded-full transition-all hover:bg-gray-900 hover:text-white text-sm flex items-center ">
                  View Details -
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
