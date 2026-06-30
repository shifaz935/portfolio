import { useState, useEffect } from "react"
import LoadingScreen from "./components/LoadingScreen"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import ChatBot from "./components/ChatBot"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import PmVikas from "./pages/PmVikas"
import About from "./pages/About"
import Certificates from "./pages/Certificates"
import Contact from "./pages/Contact"
import FloatingSocials from "./components/FloatingSocials"
import BackToTop from "./components/BackToTop"
import AIIntro from "./components/AIIntro"

// Inner wrapper that can use useLocation (must be inside BrowserRouter)
function AppInner({ darkMode, setDarkMode }) {
  const location = useLocation()
  const isHome = location.pathname === "/"

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-[#020612] text-gray-100"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <AIIntro />

      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/about" element={<About darkMode={darkMode} />} />
        <Route path="/pmvikas" element={<PmVikas darkMode={darkMode} />} />
        <Route path="/certificates" element={<Certificates darkMode={darkMode} />} />
        <Route path="/contact" element={<Contact darkMode={darkMode} />} />
      </Routes>

      <ChatBot />
      {/* FloatingSocials only on Home page */}
      {isHome && <FloatingSocials />}
      <BackToTop />
    </div>
  )
}

function App() {
  // Initialize darkMode from localStorage, defaulting to true (dark)
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("shifas-theme")
    return saved !== null ? saved === "dark" : true
  })

  const [loading, setLoading] = useState(true)

  // Persist theme preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("shifas-theme", darkMode ? "dark" : "light")
    // Apply class to html element for global CSS access
    document.documentElement.classList.toggle("dark", darkMode)
  }, [darkMode])

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />
  }

  return (
    <BrowserRouter>
      <AppInner darkMode={darkMode} setDarkMode={setDarkMode} />
    </BrowserRouter>
  )
}

export default App