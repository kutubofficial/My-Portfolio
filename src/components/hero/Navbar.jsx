import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/50 shadow-sm sticky top-0 z-[60] backdrop-blur-md ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <figure className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              <Link to={"/"}>Portfolio</Link>
            </figure>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <ul className="flex items-center space-x-12">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-blue-600 font-medium transition-colors"
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

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black/80 backdrop-blur-md py-4">
            <div className="px-4 space-y-6">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block text-white hover:text-blue-600 text-lg font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="block text-white hover:text-blue-600 text-lg font-medium"
              >
                About
              </Link>
              <Link
                to="/projects"
                onClick={() => setIsOpen(false)}
                className="block text-white hover:text-blue-600 text-lg font-medium"
              >
                Projects
              </Link>
              <Link
                to="/contacts"
                onClick={() => setIsOpen(false)}
                className="block text-white hover:text-blue-600 text-lg font-medium"
              >
                Contact
              </Link>
              <button className="bg-blue-600 text-white w-full px-6 py-3 rounded-full hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md mt-4">
                <a href="mailto:kutubofficial599@gmail.com">Hire Me</a>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
