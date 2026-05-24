import { useState } from "react"

import { Link } from "react-router-dom"

import {
  FaMoon,
  FaSun,
  FaBars,
  FaTimes
} from "react-icons/fa"

function Navbar({ darkMode, setDarkMode }) {

  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <nav
      className={`

        fixed
        w-full
        z-50
        backdrop-blur-lg
        border-b
        border-cyan-500/20

        ${

          darkMode

            ? "bg-black/30 text-white"

            : "bg-white/80 text-black"

        }

      `}
    >

      <div className="
        flex
        justify-between
        items-center
        px-8
        py-5
      ">

        {/* LOGO */}

        <h1 className="
          text-3xl
          font-bold
          text-cyan-400
        ">

          SHIFAS

        </h1>

        {/* DESKTOP MENU */}

        <div className="
          hidden
          md:flex
          items-center
          gap-10
          text-lg
        ">

          <Link to="/">
            Home
          </Link>

          <Link to="/pmvikas">
            PM VIKAS
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/certificates">
            Certificates
          </Link>

          {/* DARK MODE BUTTON */}

          <button

            onClick={() =>
              setDarkMode(!darkMode)
            }

            className="
              text-xl
              text-cyan-400
            "
          >

            {darkMode
              ? <FaSun />
              : <FaMoon />
            }

          </button>

        </div>

        {/* MOBILE RIGHT SIDE */}

        <div className="
          flex
          items-center
          gap-5
          md:hidden
        ">

          {/* DARK MODE BUTTON */}

          <button

            onClick={() =>
              setDarkMode(!darkMode)
            }

            className="
              text-xl
              text-cyan-400
            "
          >

            {darkMode
              ? <FaSun />
              : <FaMoon />
            }

          </button>

          {/* MOBILE MENU BUTTON */}

          <button

            className="text-3xl"

            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >

            {menuOpen
              ? <FaTimes />
              : <FaBars />
            }

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}

      {menuOpen && (

        <div
          className={`

            md:hidden
            flex
            flex-col
            gap-6
            px-8
            pb-8
            text-xl

            ${

              darkMode

                ? "bg-black text-white"

                : "bg-white text-black"

            }

          `}
        >

          <Link to="/">
            Home
          </Link>

          <Link to="/pmvikas">
            PM VIKAS
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/certificates">
            Certificates
          </Link>

        </div>

      )}

    </nav>

  )
}

export default Navbar