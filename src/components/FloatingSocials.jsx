import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa"

function FloatingSocials() {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/shifaz935",
      icon: <FaGithub className="text-xl" />,
      color: "hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:border-white/50"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/shifas-p-s-965895397/",
      icon: <FaLinkedin className="text-xl" />,
      color: "hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] hover:border-cyan-400/50"
    },
    {
      name: "Email",
      href: "mailto:shifasshamsu2003@gmail.com",
      icon: <FaEnvelope className="text-xl" />,
      color: "hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] hover:border-cyan-400/50"
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/917012918968",
      icon: <FaWhatsapp className="text-xl" />,
      color: "hover:text-green-400 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] hover:border-green-500/50"
    }
  ]

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 z-50 left-auto right-6 md:right-auto md:left-6 flex flex-col items-end md:items-start gap-4 select-none"
    >
      {/* Social Links Glass Panel Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 15 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="w-48 bg-[#071120]/80 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-3 shadow-[0_0_30px_rgba(0,255,255,0.25)] flex flex-col gap-2 z-50"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name === "Email" ? "_self" : "_blank"}
                rel="noreferrer"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border border-transparent bg-cyan-950/15 text-cyan-300 font-mono text-xs font-semibold tracking-wider transition-all duration-300 ${link.color}`}
              >
                {link.icon}
                <span>{link.name}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating circular Contact button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            "0 0 15px rgba(0, 255, 255, 0.3)",
            "0 0 25px rgba(0, 255, 255, 0.6)",
            "0 0 15px rgba(0, 255, 255, 0.3)"
          ]
        }}
        transition={{
          boxShadow: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        className="w-14 h-14 rounded-full bg-[#071120]/80 backdrop-blur-md border border-cyan-400/40 text-cyan-300 flex items-center justify-center cursor-pointer shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-colors hover:border-cyan-300"
        aria-label="Open contact links"
      >
        <MessageCircle className="w-6 h-6 animate-pulse" />
      </motion.button>
    </div>
  )
}

export default FloatingSocials