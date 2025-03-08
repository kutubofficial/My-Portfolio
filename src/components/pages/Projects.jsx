import React from "react";
import projectData from "../data/projectData";
import aboutImage from "/images/about.png";

const Projects = () => {
  // const myData = () => {};
  return (
    <div className=" min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className=" max-w-7xl mx-auto">
        <h1 className="text-4xl text-blue-600 md:text-5xl font-bold text-center leading-tight mb-12">
          MY PROJECTS
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <div
              key={project.id}
              className=" rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  {project.name}
                </h2>

                <ul className="flex flex-wrap gap-2 mb-4">
                  {project.topics?.map((feature, index) => (
                    <li
                      key={index}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex space-x-4 mt-4">
                  <button className="flex-1 underline hover:cursor-pointer transition-colors duration-200">
                    <a href={project.projectCode} target="_blank">
                      View Project
                    </a>
                  </button>
                  <button className="flex-1 underline hover:cursor-pointer transition-colors duration-200">
                    <a href={project.live} target="_blank">
                      View Live
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
