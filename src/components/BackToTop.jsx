import { useEffect, useState } from "react"

import { FaArrowUp } from "react-icons/fa"

function BackToTop() {

  const [visible, setVisible] = useState(false)

  useEffect(() => {

    const toggleVisibility = () => {

      if (window.scrollY > 300) {

        setVisible(true)

      }

      else {

        setVisible(false)

      }

    }

    window.addEventListener(
      "scroll",
      toggleVisibility
    )

    return () =>
      window.removeEventListener(
        "scroll",
        toggleVisibility
      )

  }, [])

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })

  }

  return (

    visible && (

      <button

        onClick={scrollToTop}

        className="
          fixed
          bottom-6
          left-6
          bg-cyan-500
          text-black
          p-4
          rounded-full
          shadow-[0_0_20px_cyan]
          z-50
        "
      >

        <FaArrowUp />

      </button>

    )

  )
}

export default BackToTop