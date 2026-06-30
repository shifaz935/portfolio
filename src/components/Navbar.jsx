import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import {
  FaMoon,
  FaSun,
  FaBars,
  FaTimes
} from "react-icons/fa"

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "PM-VIKAS", path: "/pmvikas" },
    { name: "Certificates", path: "/certificates" },
    { name: "Contact", path: "/contact" }
  ]

  return (
    <nav className={`fixed w-full top-0 left-0 z-[999] backdrop-blur-md border-b shadow-[0_4px_30px_rgba(0,0,0,0.4)] transition-colors duration-300 ${
      darkMode
        ? "bg-[#020612]/80 border-cyan-500/10 text-gray-100"
        : "bg-white/90 border-gray-200 text-gray-800"
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 py-5">

        {/* LOGO */}
        <Link to="/" className="group flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#00ffff]" />
          <h1 className={`text-2xl font-extrabold tracking-wider font-mono transition-colors ${
            darkMode ? "text-cyan-400" : "text-cyan-600"
          }`}>
            SHIFAS<span className="text-gray-400 text-sm font-normal font-sans">.AI</span>
          </h1>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm font-mono tracking-wider font-semibold">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-1 transition-colors uppercase ${
                  isActive
                    ? "text-cyan-400"
                    : darkMode
                    ? "text-gray-400 hover:text-cyan-300"
                    : "text-gray-600 hover:text-cyan-600"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_8px_#00ffff]" />
                )}
              </Link>
            )
          })}

          {/* THEME TOGGLE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`text-lg transition-all p-1.5 rounded-lg border cursor-pointer hover:scale-110 ${
              darkMode
                ? "text-cyan-400 border-cyan-500/20 hover:border-cyan-400/40"
                : "text-amber-500 border-gray-300 hover:border-amber-400"
            }`}
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* MOBILE TRIGGER */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`text-lg p-1.5 rounded-lg border cursor-pointer ${
              darkMode
                ? "text-cyan-400 border-cyan-500/20"
                : "text-amber-500 border-gray-300"
            }`}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button
            className={`text-2xl cursor-pointer ${darkMode ? "text-cyan-400" : "text-cyan-600"}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {menuOpen && (
        <div className={`md:hidden flex flex-col gap-5 px-6 pb-6 pt-2 font-mono text-sm uppercase tracking-wider border-b text-left ${
          darkMode
            ? "bg-[#020612]/97 border-cyan-500/15 text-gray-300"
            : "bg-white border-gray-200 text-gray-700"
        }`}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`py-2 border-b ${
                  darkMode ? "border-cyan-500/5" : "border-gray-100"
                } ${isActive ? "text-cyan-400 font-bold" : ""}`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>
      )}
    </nav>
  )
}

export default Navbar