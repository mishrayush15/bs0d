import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer"; 

const App = () => {
  return (
    <div className="text-white w-full flex flex-col relative min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="landing-page flex pt-20">
        <LandingPage />
      </div>
      <div>
        <Projects />
      </div>
      <div className="flex-grow"> 
        <Skills />
      </div>
      <Footer /> 
    </div>
  );
}

export default App;
