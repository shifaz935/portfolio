import { useEffect, useState } from "react"
import LoadingScreen from "./components/LoadingScreen"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ChatBot from "./components/ChatBot"
import Navbar from "./components/Navbar"
import CustomCursor from "./components/CustomCursor"
import Home from "./pages/Home"
import PmVikas from "./pages/PmVikas"
import About from "./pages/About"
import Certificates from "./pages/Certificates"
import FloatingSocials from "./components/FloatingSocials"
import BackToTop from "./components/BackToTop"
import AIIntro from "./components/AIIntro"
function App() {
  const [darkMode, setDarkMode] = useState(true)

  const [loading, setLoading] = useState(true)

useEffect(() => {

  setTimeout(() => {

    setLoading(false)

  }, 2500)

}, [])
if (loading) {

  return <LoadingScreen />

}
  return (
    <div

  className={

    darkMode

      ? "bg-gray-950 text-white min-h-screen"

      : "bg-white text-black min-h-screen"

  }

>
    
    
    <BrowserRouter>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <AIIntro />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pmvikas" element={<PmVikas />} />
        <Route path="/about" element={<About />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
      <ChatBot />
      <CustomCursor />
      <FloatingSocials />
      <BackToTop />
    </BrowserRouter>
    </div>
  )
}

export default App