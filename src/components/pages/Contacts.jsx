import React from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarker,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Footer from "../hero/Footer";

const Contacts = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold md:text-5xl text-blue-600 mb-2">
              CONTACT ME
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Have a question or want to work together? Send me a message!
            </p>
          </div>

          <div className=" grid md:grid-cols-2 gap-10 lg:gap-20">
            {/* Contact Details */}
            <div className="space-y-8 bg-white p-6 rounded-xl h-full shadow-lg">
              <div id="my-details" className="space-y-3">
                <div className="p-4 rounded-lg hover:bg-gray-50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="bg-blue-100 p-3 rounded-lg">
                      <FaEnvelope className="text-blue-600 text-2xl" />
                    </span>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-gray-800 mb-1">
                        Email
                      </h2>
                      <a
                        href="mailto:kutubofficial599@gmail.com"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        kutubofficial599@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg hover:bg-gray-50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="bg-green-100 p-3 rounded-lg">
                      <FaPhone className="text-green-600 text-2xl" />
                    </span>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-gray-800 mb-1">
                        Phone
                      </h2>
                      <a
                        href="tel:+918601657441"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        +91 8601657441
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg hover:bg-gray-50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="bg-green-100 p-3 rounded-lg">
                      <FaWhatsapp className="text-green-600 text-2xl" />
                    </span>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-gray-800 mb-1">
                        WhatsApp
                      </h2>
                      <a
                        href="https://wa.me/918601657441"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        Send me a message
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg hover:bg-gray-50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="bg-blue-100 p-3 rounded-lg">
                      <FaMapMarker className="text-blue-600 text-2xl" />
                    </span>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-gray-800 mb-1">
                        Address
                      </h2>
                      <p className="text-gray-600">
                        Noida sector 15,
                        <br />
                        Uttar Pradesh, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className=" bg-white py-8 px-6 shadow rounded-xl h-full">
              <form className="space-y-8">
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="John Doe"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="john@example.com"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    placeholder="Your message here..."
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center mt-15 py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="mt-12 bg-white rounded-xl p-6  shadow-lg">
            <div className="flex justify-center space-x-6 md:space-x-10">
              <a
                href="https://github.com/kutubofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-100 rounded-full hover:bg-blue-200 transition-all duration-300 hover:-translate-y-1 shadow-sm"
              >
                <FaGithub className="text-3xl text-gray-800" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/kutubofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-500 rounded-full hover:bg-blue-700 transition-all duration-300 hover:-translate-y-1 shadow-sm"
              >
                <FaLinkedin className="text-3xl text-white" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:kutubofficial599@gmail.com"
                className="p-3 bg-red-100 rounded-full hover:bg-red-200 transition-all duration-300 hover:-translate-y-1 shadow-sm"
              >
                <FaEnvelope className="text-3xl text-red-500" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Contacts;
