import { createBrowserRouter } from "react-router-dom";
import Hero from "../hero/Hero";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contacts from "../pages/Contacts";

export const myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
    ],
  },
]);
