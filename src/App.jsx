import LandingPage from "./components/LandingPage"
import Navbar from "./components/Navbar"
const App = () => {
  return (
    <div className=" text-white w-full h-screen relative">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="main-area flex pt-20 ">
        <LandingPage/>
      </div>
    </div>
  )
}

export default App
