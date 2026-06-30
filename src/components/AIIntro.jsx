import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import myphoto from "../assets/myphoto.jpg"

function AIIntro({ onComplete }) {
  const [showIntro, setShowIntro] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [autoplayBlocked, setAutoplayBlocked] = useState(false)
  const [currentText, setCurrentText] = useState("")
  const audioRef = useRef(null)

  useEffect(() => {
    // Instantiate audio
    const audio = new Audio("/intro.mp3")
    audioRef.current = audio

    // Autoplay attempt
    const playPromise = audio.play()

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true)
        })
        .catch((err) => {
          console.log("Autoplay blocked:", err)
          setAutoplayBlocked(true)
        })
    }

    // Subtitle synchronization (approximate timestamps based on the audio script)
    const handleTimeUpdate = () => {
      const time = audio.currentTime
      if (time >= 0 && time < 2.0) {
        setCurrentText("Hi, I'm Shifas.")
      } else if (time >= 2.0 && time < 5.0) {
        setCurrentText("AI and Data Science Graduate.")
      } else if (time >= 5.0) {
        setCurrentText("Welcome to my portfolio.")
      }
    }

    audio.addEventListener("timeupdate", handleTimeUpdate)

    // Complete intro when voice ends
    audio.onended = () => {
      exitIntro()
    }

    return () => {
      audio.pause()
      audio.removeEventListener("timeupdate", handleTimeUpdate)
    }
  }, [])

  const handleStartIntro = () => {
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true)
          setAutoplayBlocked(false)
        })
        .catch((err) => {
          console.error("Playback failed:", err)
          // Fallback if audio fails to play entirely
          setIsPlaying(true)
          setAutoplayBlocked(false)
          setTimeout(() => {
            exitIntro()
          }, 6000)
        })
    } else {
      // Fallback
      setIsPlaying(true)
      setAutoplayBlocked(false)
      setTimeout(() => {
        exitIntro()
      }, 6000)
    }
  }

  const exitIntro = () => {
    setShowIntro(false)
    if (audioRef.current) {
      audioRef.current.pause()
    }
    if (onComplete) {
      onComplete()
    }
  }

  if (!showIntro) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="fixed inset-0 bg-[#020612] z-[9999] flex flex-col items-center justify-center px-4 overflow-hidden"
      >
        {/* Cinematic Backdrop Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08),transparent_65%)]" />
        <div className="absolute inset-0 holo-bg opacity-10 pointer-events-none" />

        {/* Holographic glowing borders */}
        <div className="absolute top-10 left-10 w-24 h-24 border-t-2 border-l-2 border-cyan-500/20" />
        <div className="absolute top-10 right-10 w-24 h-24 border-t-2 border-r-2 border-cyan-500/20" />
        <div className="absolute bottom-10 left-10 w-24 h-24 border-b-2 border-l-2 border-cyan-500/20" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border-b-2 border-r-2 border-cyan-500/20" />

        <div className="relative w-full max-w-xl text-center z-10 flex flex-col items-center">
          
          {autoplayBlocked ? (
            /* Modern Tap To Start Card */
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-cyan-950/20 border border-cyan-500/30 rounded-3xl p-8 backdrop-blur-md shadow-[0_0_50px_rgba(0,255,255,0.15)] flex flex-col items-center"
            >
              <h2 className="text-2xl font-bold text-cyan-400 mb-2 tracking-wide font-mono">
                SHIFAS AI SYSTEM
              </h2>
              <p className="text-gray-400 text-sm mb-8 font-mono">
                AWAITING AUDIO INITIALIZATION
              </p>

              {/* Pulsing Start Button */}
              <motion.button
                onClick={handleStartIntro}
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 255, 255, 0.6)" }}
                whileTap={{ scale: 0.98 }}
                className="relative group bg-cyan-400 text-black font-semibold text-lg py-4 px-10 rounded-2xl cursor-pointer shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300"
              >
                <span className="relative z-10">INITIALIZE INTERFACE</span>
                <span className="absolute inset-0 bg-cyan-300 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </motion.div>
          ) : (
            /* Interactive voice introduction panel */
            <div className="flex flex-col items-center">
              
              {/* Rotating Avatar & Soundwave Container */}
              <div className="relative flex items-center justify-center w-72 h-72">
                
                {/* Holographic Glowing Rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-dashed border-cyan-400/40"
                />

                <motion.div
                  animate={{ scale: [1, 1.06, 1], rotate: -360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 rounded-full border border-cyan-400/20"
                />

                {/* Avatar */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="w-44 h-44 rounded-full overflow-hidden border-[4px] border-cyan-400 shadow-[0_0_40px_rgba(0,255,255,0.4)] z-10 bg-black"
                >
                  <img
                    src={myphoto}
                    alt="Shifas"
                    className="w-full h-full object-cover animate-float"
                  />
                </motion.div>

                {/* Pulsing sound wave circles */}
                {isPlaying && (
                  <>
                    <motion.div
                      animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                      className="absolute w-56 h-56 rounded-full border border-cyan-400/30"
                    />
                    <motion.div
                      animate={{ scale: [1.2, 1.7, 1.2], opacity: [0.2, 0, 0.2] }}
                      transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                      className="absolute w-56 h-56 rounded-full border border-cyan-400/20"
                    />
                  </>
                )}
              </div>

              {/* Spoken script subtitles with high readability */}
              <div className="h-16 flex items-center justify-center mt-6">
                <motion.p
                  key={currentText}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="text-cyan-300 text-2xl font-bold tracking-wide glow-text-cyan font-mono"
                >
                  {currentText || "Initializing Voice Module..."}
                </motion.p>
              </div>

              {/* Sound Bars (Pulsing graphic) */}
              <div className="flex gap-2 items-end justify-center h-10 mt-8">
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={isPlaying ? { height: [8, 36, 8] } : { height: 8 }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      delay: i * 0.08,
                      ease: "easeInOut"
                    }}
                    className="w-1.5 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(0,255,255,0.8)]"
                  />
                ))}
              </div>

              {/* Skip Button */}
              <motion.button
                onClick={exitIntro}
                whileHover={{ scale: 1.05 }}
                className="mt-12 text-sm text-cyan-400/60 hover:text-cyan-400 transition-colors uppercase tracking-widest font-mono cursor-pointer border-b border-cyan-400/20 hover:border-cyan-400/80 pb-1"
              >
                Skip Intro & Enter
              </motion.button>

            </div>
          )}

        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default AIIntro