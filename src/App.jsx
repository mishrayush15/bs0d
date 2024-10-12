import LandingPage from "./components/LandingPage"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
const App = () => {
  return (
    <div className=" text-white w-full h-screen relative">
      <div className="fixed inset-0 top-0  left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="landing-page flex pt-20 ">
        <LandingPage />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Skills/>
      </div>
    </div>
  )
}

export default App
