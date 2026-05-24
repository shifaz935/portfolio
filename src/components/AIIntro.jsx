import { motion } from "framer-motion"
import { useEffect, useState } from "react"

function AIIntro() {

  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {

    // CREATE AUDIO

    const audio = new Audio("/intro.mp3")

    // FUNCTION TO START AUDIO

    const startAudio = () => {

      audio.play()

      // REMOVE EVENT AFTER START

      document.removeEventListener(
        "click",
        startAudio
      )

    }

    // MOBILE SUPPORT

    document.addEventListener(
      "click",
      startAudio
    )

    // DESKTOP AUTO PLAY

    audio.play().catch(() => {

      console.log(
        "Waiting for user interaction"
      )

    })

    // CLOSE INTRO AFTER VOICE FINISHES

    audio.onended = () => {

      setShowIntro(false)

    }

    return () => {

      audio.pause()

      document.removeEventListener(
        "click",
        startAudio
      )

    }

  }, [])

  // HIDE COMPONENT

  if (!showIntro) return null

  return (

    <motion.div

      initial={{ opacity: 0 }}

      animate={{ opacity: 1 }}

      exit={{ opacity: 0 }}

      transition={{
        duration: 0.8,
        ease: "easeInOut"
      }}

      className="
        fixed
        inset-0
        bg-black/90
        backdrop-blur-xl
        z-[9999]
        flex
        items-center
        justify-center
        px-4
      "
    >

      <motion.div

        initial={{
          scale: 0.8,
          opacity: 0
        }}

        animate={{
          scale: 1,
          opacity: 1
        }}

        transition={{
          duration: 1,
          ease: "easeInOut"
        }}

        className="
          relative
          bg-white/10
          border
          border-cyan-500/20
          rounded-[40px]
          p-8
          md:p-10
          w-full
          max-w-2xl
          text-center
          shadow-[0_0_50px_rgba(0,255,255,0.2)]
          overflow-hidden
        "
      >

        {/* BACKGROUND GLOW */}

        <div className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15),transparent_70%)]
        " />

        {/* AI AVATAR */}

        <div className="
          relative
          flex
          justify-center
          z-10
        ">

          {/* RING 1 */}

          <motion.div

            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.5, 0.1, 0.5]
            }}

            transition={{
              duration: 2,
              repeat: Infinity
            }}

            className="
              absolute
              w-44
              h-44
              rounded-full
              border
              border-cyan-400/30
            "
          />

          {/* RING 2 */}

          <motion.div

            animate={{
              scale: [1.2, 1.6, 1.2],
              opacity: [0.3, 0.05, 0.3]
            }}

            transition={{
              duration: 3,
              repeat: Infinity
            }}

            className="
              absolute
              w-60
              h-60
              rounded-full
              border
              border-cyan-400/20
            "
          />

          {/* ROBOT */}

          <motion.div

            animate={{
              scale: [1, 1.05, 1]
            }}

            transition={{
              duration: 1.5,
              repeat: Infinity
            }}

            className="
              relative
              w-32
              h-32
              rounded-full
              bg-cyan-500
              flex
              items-center
              justify-center
              text-6xl
              shadow-[0_0_50px_cyan]
              z-10
            "
          >

            🤖

          </motion.div>

        </div>

        {/* SOUND WAVES */}

        <div className="
          flex
          justify-center
          items-end
          gap-2
          mt-12
          relative
          z-10
        ">

          {[...Array(7)].map((_, i) => (

            <motion.div

              key={i}

              animate={{
                height: [15, 70, 15]
              }}

              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.12
              }}

              className="
                w-[6px]
                bg-cyan-400
                rounded-full
                shadow-[0_0_10px_cyan]
              "
            />

          ))}

        </div>

        {/* TITLE */}

        <motion.h1

          initial={{
            y: 30,
            opacity: 0
          }}

          animate={{
            y: 0,
            opacity: 1
          }}

          transition={{
            delay: 0.5,
            duration: 0.8
          }}

          className="
            text-4xl
            md:text-6xl
            font-bold
            text-white
            leading-tight
            mt-10
            relative
            z-10
          "
        >

          Hi, I'm Shifas

        </motion.h1>

        {/* SUBTITLE */}

        <motion.p

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          transition={{
            delay: 1
          }}

          className="
            text-cyan-400
            text-2xl
            md:text-3xl
            mt-6
            font-semibold
            relative
            z-10
          "
        >

          AI & Data Science Graduate

        </motion.p>

        {/* DESCRIPTION */}

        <motion.p

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          transition={{
            delay: 1.5
          }}

          className="
            text-gray-300
            mt-8
            text-base
            md:text-lg
            leading-8
            md:leading-9
            relative
            z-10
          "
        >

          Welcome to my AI-powered portfolio.
          Explore my projects, skills,
          certifications, and smart innovations.

        </motion.p>

      </motion.div>

    </motion.div>

  )
}

export default AIIntro