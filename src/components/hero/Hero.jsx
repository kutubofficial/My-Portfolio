import React, { useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Hero = () => {
  return (
    <>
      <Navbar  />
      <Outlet  />
      {/* <Footer /> */}
    </>
  );
};

export default Hero;
