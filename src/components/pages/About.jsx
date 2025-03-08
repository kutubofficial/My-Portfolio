import React from "react";
import { FaCode, FaDatabase, FaTools, FaUserCheck } from "react-icons/fa";
// import aboutImage from "/images/about.png";

const About = () => {
  return (
    <section className=" min-h-screen overflow-hidden">
      <div className=" z-10 h-full flex flex-col justify-center px-6 lg:px-24">
        <div className=" max-w-6xl text-center mt-15 mx-auto">
          <h1 className="text-4xl text-blue-600 md:text-5xl font-bold mb-8 leading-tight">
            <span className="block">ABOUT ME</span>
          </h1>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 md:p-10 shadow-xl">
            <div className="mb-8">
              <p className=" mb-4 text-lg leading-relaxed">
                Hi, I'm Kutubuddin Ansari, a passionate MERN stack developer
                with a strong foundation in JavaScript, React.js, and backend
                development. I love building web applications that are
                efficient, scalable, and user-friendly. With expertise in C,
                C++, HTML5, CSS3, Bootstrap, and Tailwind CSS, I continuously
                explore new technologies and improve my problem-solving skills.
              </p>
              <p className=" text-lg leading-relaxed">
                Currently, I'm enhancing my backend skills with Node.js and
                MongoDB while working on real-world projects. I enjoy
                collaborating on innovative ideas and contributing to
                open-source projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                  <FaCode className="mr-2 text-blue-400" />
                  Technical Skills
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-center ">
                    <span className="bg-blue-400/20 rounded-full p-2 mr-3">
                      <FaCode className="text-blue-400" />
                    </span>
                    Frontend: React.js, JavaScript, HTML5, CSS3, Tailwind CSS,
                    Bootstrap
                  </li>
                  <li className="flex items-center ">
                    <span className="bg-blue-400/20 rounded-full p-2 mr-3">
                      <FaDatabase className="text-blue-400" />
                    </span>
                    Backend: Node.js, Express.js
                  </li>
                  <li className="flex items-center ">
                    <span className="bg-blue-400/20 rounded-full p-2 mr-3">
                      <FaDatabase className="text-blue-400" />
                    </span>
                    Database: MongoDB
                  </li>
                  <li className="flex items-center ">
                    <span className="bg-blue-400/20 rounded-full p-2 mr-3">
                      <FaTools className="text-blue-400" />
                    </span>
                    Other: Git, GitHub, REST APIs, JSON, Zustand (learning)
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4  flex items-center">
                  <FaUserCheck className="mr-2 text-green-400" />
                  Soft Skills
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-center ">
                    <span className="bg-green-400/20 rounded-full p-2 mr-3">
                      <FaUserCheck className="text-green-400" />
                    </span>
                    Problem-Solving
                  </li>
                  <li className="flex items-center ">
                    <span className="bg-green-400/20 rounded-full p-2 mr-3">
                      <FaUserCheck className="text-green-400" />
                    </span>
                    Team Collaboration
                  </li>
                  <li className="flex items-center ">
                    <span className="bg-green-400/20 rounded-full p-2 mr-3">
                      <FaUserCheck className="text-green-400" />
                    </span>
                    Communication
                  </li>
                  <li className="flex items-center ">
                    <span className="bg-green-400/20 rounded-full p-2 mr-3">
                      <FaUserCheck className="text-green-400" />
                    </span>
                    Adaptability
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
