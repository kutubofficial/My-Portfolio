import { RouterProvider } from "react-router-dom";
import { myRoutes } from "./components/router/router";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contacts from "./components/pages/Contacts";
import Footer from "./components/hero/Footer";
function App() {
  return (
    <>
      <RouterProvider router={myRoutes} />
      {/* <Home/>
      <About/>
      <Projects/>
      <Contacts/>
      <Footer/> */}
    </>
  );
}

export default App;
