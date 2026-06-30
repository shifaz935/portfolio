import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

function LoadingScreen({ onComplete }) {
  const [lines, setLines] = useState([])
  const [progress, setProgress] = useState(0)
  const [status, setStatus] = useState("booting") // booting, completed

  const bootSequence = [
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "SHIFAS AI SYSTEM [v2.4.6-beta]",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "» INITIALIZING MAIN ARCHITECTURE...",
    "» CONNECTING SECURE NEURAL NETWORKS...",
    "» LOADING PROFESSIONAL PROFILE DATA...",
    "» RETRIEVING COMPLETED PROJECTS DATABASE...",
    "» PARSING PM-VIKAS IOT JOURNEY DETAILS...",
    "» ASSEMBLING INTERACTIVE HOLOGRAPHIC DASHBOARDS...",
    "» OPTIMIZING INTERACTION FRAMEWORKS...",
    "» BOOT SUCCESSFUL! READY TO INITIALIZE INTERFACE.",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  ]

  useEffect(() => {
    let currentLineIndex = 0
    const lineInterval = setInterval(() => {
      if (currentLineIndex < bootSequence.length) {
        const lineToAdd = bootSequence[currentLineIndex]
        setLines((prev) => [...prev, lineToAdd])
        currentLineIndex++
      } else {
        clearInterval(lineInterval)
      }
    }, 280)

    return () => clearInterval(lineInterval)
  }, [])

  useEffect(() => {
    const duration = 3500 // 3.5 seconds
    const intervalTime = 35
    const steps = duration / intervalTime
    const increment = 100 / steps
    
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setStatus("completed")
          setTimeout(() => {
            if (onComplete) onComplete()
          }, 800)
          return 100
        }
        return Math.min(prev + increment, 100)
      })
    }, intervalTime)

    return () => clearInterval(progressInterval)
  }, [onComplete])

  return (
    <div className="fixed inset-0 bg-[#020612] flex flex-col items-center justify-center z-[99999] overflow-hidden p-6 font-mono text-cyan-400 select-none">
      
      {/* Background Holographic Grid Effect */}
      <div className="absolute inset-0 holo-bg opacity-30 pointer-events-none" />

      {/* Cyberpunk Scanner Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent h-1/2 w-full animate-[pulse_2s_infinite] pointer-events-none" />

      {/* Center Console */}
      <div className="relative w-full max-w-2xl bg-[#071120]/60 border border-cyan-500/30 rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-[0_0_50px_rgba(0,255,255,0.1)] overflow-hidden">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-cyan-500/20 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/60" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <span className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          <div className="text-xs text-cyan-500/60 tracking-wider">
            SYSTEM BOOT : ACTIVE
          </div>
        </div>

        {/* Scrollable Boot Text */}
        <div className="h-64 overflow-y-auto text-[11px] md:text-sm leading-6 mb-6 space-y-1.5 custom-scrollbar text-left scrollbar-thin">
          <AnimatePresence>
            {lines.map((line, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
                className={
                  line.startsWith("»") 
                    ? "text-cyan-300 font-semibold" 
                    : line.includes("BOOT SUCCESSFUL") 
                      ? "text-green-400 font-bold glow-text-cyan" 
                      : "text-cyan-500/70"
                }
              >
                {line}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Progress Bar & Status */}
        <div className="space-y-3">
          <div className="flex justify-between items-center text-xs md:text-sm">
            <span className="flex items-center gap-2 font-semibold">
              <span className="inline-block w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping" />
              {status === "booting" ? "INITIALIZING INTERFACE..." : "SYSTEM OPERATIONAL"}
            </span>
            <span className="font-bold">{Math.round(progress)}%</span>
          </div>

          {/* Bar */}
          <div className="w-full h-3 bg-[#0a182d] rounded-full overflow-hidden border border-cyan-500/20 p-[2px]">
            <motion.div 
              className="h-full bg-cyan-400 rounded-full shadow-[0_0_15px_#00ffff]"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
        </div>
      </div>

      {/* Decorative details */}
      <div className="absolute bottom-6 left-6 text-[10px] text-cyan-500/40 hidden md:block">
        LOC_REF: SHIFAS_HOME_PORTFOLIO // COORD_X: 2026.06.27
      </div>
      <div className="absolute bottom-6 right-6 text-[10px] text-cyan-500/40 hidden md:block">
        SECURE CONNECTED PORT: 443 // ENCRYPT: AES-256
      </div>
    </div>
  )
}

export default LoadingScreen