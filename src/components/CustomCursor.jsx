import { useEffect, useState } from "react"

function CustomCursor() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {

    // CHECK MOBILE

    if (window.innerWidth < 768) {

      setIsMobile(true)

      return
    }

    const moveCursor = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY
      })

    }

    window.addEventListener("mousemove", moveCursor)

    return () => {

      window.removeEventListener(
        "mousemove",
        moveCursor
      )

    }

  }, [])

  // HIDE ON MOBILE

  if (isMobile) return null

  return (

    <div
      className="
        fixed
        w-5
        h-5
        rounded-full
        bg-cyan-400
        pointer-events-none
        z-[9999]
        shadow-[0_0_25px_cyan]
      "
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)"
      }}
    />

  )
}

export default CustomCursor