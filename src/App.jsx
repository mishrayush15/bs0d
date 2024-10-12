import { useEffect } from "react";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Lenis from "lenis";

const App = () => {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.3,
      easing: (t) => t,
      smooth: true,
    });

    const scroll = (time) => {
      lenis.raf(time);
      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div id="top" className="text-white w-full flex flex-col relative min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="landing-page flex pt-20">
        <LandingPage />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills" className="flex-grow">
        <Skills />
      </div>
      <Footer />
    </div>
  );
}

export default App;
