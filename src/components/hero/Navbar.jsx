import React from "react";
import { Link } from "react-router-dom";
import logo from "/images/logo.png";
const Navbar = () => {
  return (
    <nav className="bg-black/50 shadow-sm sticky top-0 z-[60] backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <figure
              title="My-Portfolio"
              className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <Link to={"/"}>MyPortfolio</Link>
            </figure>
          </div>
          <div className="hidden md:flex space-x-8">
            <ul className="flex items-center space-x-12">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-blue-600 font-medium transition-colors"
                  id="#homepage"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white hover:text-blue-600 font-medium transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-white hover:text-blue-600 font-medium transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contacts"
                  className="text-white hover:text-blue-600 font-medium transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:flex items-center hidden">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md">
              <a href="mailto:kutubofficial599@gmail.com">Hire Me</a>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
