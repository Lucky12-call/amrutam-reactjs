import Home from "./components/Home"
import Benefits from "./components/Benefits"
import Consultations from "./components/Consultations"
import BookNow from "./components/BookNow"
import OurApproach from "./components/OurApproach"
import Stories from "./components/Stories"
import Experts from "./components/Experts"
import HomeApp from "./components/HomeApp"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="w-full bg-black">
      <div className="w-full md:w-[90%] md:mx-auto bg-[#FFF7E2] relative">
        <Navbar />
        <Home />
        <Benefits />
        <Consultations />
        <BookNow />
        <OurApproach />
        <Stories />
        <Experts />
        <HomeApp />
        <Contact />
      </div>
    </div>
  )
}

export default App
