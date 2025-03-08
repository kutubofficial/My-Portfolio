import { useEffect, useState } from "react";
import image from "/images/heroImage.jpg";
import About from "./About";
import Projects from "./Projects";
import Contacts from "./Contacts";
import Footer from "../hero/Footer";
import cv from "../../assets/CV.pdf";

const Home = () => {
  const bio =
    "I am a passionate MERN Stack Developer skilled in MongoDB, Express.js, React.js, and Node.js, along with JavaScript (ES6+), HTML5, CSS3, Bootstrap, and Tailwind CSS.";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (index < bio.length) {
      timeout = setTimeout(() => {
        setDisplayedText(bio.slice(0, index + 1));
        setIndex(index + 1);
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [index, bio]);
  return (
    <>
      <section id="#homepage" className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-[-10]">
          <img
            src={image}
            alt="profile-picture"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-24">
          <div className="text-white max-w-3xl">
            <div className="mb-8">
              <span className="text-xl md:text-2xl font-light tracking-widest">
                Hello, I'm
              </span>
            </div>
            <h1 className="text-6xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="block ">KUTUBUDDIN ANSARI</span>
              <span className="block text-3xl text-blue-600 md:text-4xl font-normal mt-4">
                Front-End Developer
              </span>
            </h1>
            <p className="text-lg md:text-xl font-light leading-relaxed">
              {displayedText}
              <span className="animate-pulse">|</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mt-10">
              <button className="bg-transparent border border-white hover:bg-white/10 text-white px-4 py-2 rounded-full">
                <a
                  href="https://github.com/kutubofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View My Work →
                </a>
              </button>
              <button className="bg-blue-600 text-white px-4 py-3 rounded-full hover:bg-blue-700">
                <a href={cv} target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
};

export default Home;
