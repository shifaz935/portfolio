import { useState, useRef } from "react"
import { motion } from "framer-motion"
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaDownload,
  FaPaperPlane,
  FaMapMarkerAlt
} from "react-icons/fa"
import emailjs from "@emailjs/browser"
import myphoto from "../assets/myphoto.jpg"

function Contact({ darkMode }) {
  const formRef = useRef(null)
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("sending")
    try {
      await emailjs.sendForm(
        "service_trxxev9",
        "template_pcg24vd",
        formRef.current,
        "O9wDwuMvey-q_VHP8"
      )
      setStatus("success")
      setFormState({ name: "", email: "", subject: "", message: "" })
    } catch (err) {
      setStatus("error")
    }
  }

  const contactItems = [
    {
      icon: <FaEnvelope className="text-xl text-cyan-400" />,
      label: "Email",
      value: "shifasshamsu2003@gmail.com",
      href: "mailto:shifasshamsu2003@gmail.com"
    },
    {
      icon: <FaPhone className="text-xl text-cyan-400" />,
      label: "Phone",
      value: "+91 7012918968",
      href: "tel:+917012918968"
    },
    {
      icon: <FaMapMarkerAlt className="text-xl text-cyan-400" />,
      label: "Location",
      value: "Thrissur, Kerala, India",
      href: null
    },
    {
      icon: <FaGithub className="text-xl text-cyan-400" />,
      label: "GitHub",
      value: "github.com/shifaz935",
      href: "https://github.com/shifaz935"
    },
    {
      icon: <FaLinkedin className="text-xl text-cyan-400" />,
      label: "LinkedIn",
      value: "shifas-p-s-965895397",
      href: "https://www.linkedin.com/in/shifas-p-s-965895397/"
    }
  ]

  const cardBase = `rounded-3xl border backdrop-blur-md transition-all duration-300 ${
    darkMode
      ? "bg-[#071120]/50 border-cyan-500/15 text-gray-100"
      : "bg-white border-gray-200 text-gray-800 shadow-md"
  }`

  const inputBase = `w-full px-4 py-3.5 rounded-2xl outline-none text-sm transition-all duration-200 border ${
    darkMode
      ? "bg-[#020612]/80 border-cyan-500/20 text-gray-200 placeholder-gray-500 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,255,255,0.1)]"
      : "bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10"
  }`

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen pt-28 pb-20 px-6 md:px-12 ${
        darkMode ? "bg-[#020612]" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-12">

        {/* PAGE HEADER */}
        <div className="text-center space-y-3">
          <h1 className={`text-4xl md:text-5xl font-extrabold tracking-tight ${
            darkMode ? "text-cyan-400 glow-text-cyan" : "text-cyan-600"
          }`}>
            Get In Touch
          </h1>
          <p className={`font-mono text-sm tracking-widest uppercase ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}>
            SYS_CONNECTIVITY_PORTS OPEN
          </p>
          <p className={`text-base max-w-xl mx-auto leading-relaxed ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}>
            Whether you're a recruiter, collaborator, or just curious — I'd love to connect. Reach out through any channel below.
          </p>
        </div>

        {/* TWO COLUMN LAYOUT */}
        <div className="grid lg:grid-cols-5 gap-10">

          {/* LEFT: PHOTO + CONTACT DETAILS */}
          <div className="lg:col-span-2 space-y-6">

            {/* Professional Photo Card */}
            <div className={`${cardBase} overflow-hidden group`}>
              <div className="relative h-64 overflow-hidden">
                <img
                  src={myphoto}
                  alt="Shifas PS"
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  darkMode ? "from-[#071120] via-transparent to-transparent" : "from-white/60 via-transparent to-transparent"
                }`} />
                {/* HUD corner decorations */}
                <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-cyan-400/50" />
                <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-cyan-400/50" />
                <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-cyan-400/50" />
                <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-cyan-400/50" />
                <div className={`absolute bottom-0 left-0 right-0 p-4 text-center font-mono text-xs ${
                  darkMode ? "text-cyan-400/70" : "text-cyan-600/70"
                }`}>
                  SYS_ID: SHIFAS_PS // AVAILABLE: IMMEDIATELY
                </div>
              </div>

              <div className="p-6 space-y-1.5 text-center">
                <h2 className="text-2xl font-extrabold">Shifas P S</h2>
                <p className={`text-sm font-mono ${darkMode ? "text-cyan-400/80" : "text-cyan-600"}`}>
                  B.Tech AI & Data Science · Class of 2026
                </p>
                <p className={`text-xs ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
                  Royal College of Engg & Technology, Kerala
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className={`${cardBase} p-6 space-y-4`}>
              <h3 className={`text-sm font-mono uppercase tracking-widest font-bold pb-3 border-b ${
                darkMode ? "text-cyan-400 border-cyan-500/10" : "text-cyan-600 border-gray-200"
              }`}>Contact Coordinates</h3>

              {contactItems.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                    darkMode ? "bg-cyan-950/40 border border-cyan-500/20" : "bg-cyan-50 border border-cyan-100"
                  }`}>
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className={`text-[10px] font-mono uppercase tracking-wider ${
                      darkMode ? "text-gray-500" : "text-gray-400"
                    }`}>{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className={`text-sm font-semibold truncate block hover:text-cyan-400 transition-colors ${
                          darkMode ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className={`text-sm font-semibold ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://wa.me/917012918968"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white py-3.5 rounded-2xl font-bold text-sm tracking-wide transition-all hover:scale-[1.02] shadow-[0_4px_15px_rgba(34,197,94,0.3)]"
              >
                <FaWhatsapp className="text-lg" /> WhatsApp
              </a>
              <a
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-black py-3.5 rounded-2xl font-bold text-sm tracking-wide transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(0,255,255,0.25)]"
              >
                <FaDownload /> Resume
              </a>
              <a
                href="https://github.com/shifaz935"
                target="_blank"
                rel="noreferrer"
                className={`flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm tracking-wide transition-all hover:scale-[1.02] border ${
                  darkMode
                    ? "bg-[#071120] border-cyan-500/30 hover:border-cyan-400 text-cyan-300"
                    : "bg-white border-gray-300 hover:border-gray-400 text-gray-700 shadow"
                }`}
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/shifas-p-s-965895397/"
                target="_blank"
                rel="noreferrer"
                className={`flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm tracking-wide transition-all hover:scale-[1.02] border ${
                  darkMode
                    ? "bg-[#071120] border-cyan-500/30 hover:border-cyan-400 text-cyan-300"
                    : "bg-white border-gray-300 hover:border-gray-400 text-gray-700 shadow"
                }`}
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>

          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="lg:col-span-3">
            <div className={`${cardBase} p-8 md:p-10 h-full`}>
              <div className="mb-8 space-y-2">
                <h3 className="text-2xl font-bold">Send a Message</h3>
                <p className={`text-sm leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                  Fill in the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className={`text-xs font-mono uppercase tracking-wider ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={inputBase}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className={`text-xs font-mono uppercase tracking-wider ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputBase}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className={`text-xs font-mono uppercase tracking-wider ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className={inputBase}
                  />
                </div>

                <div className="space-y-2">
                  <label className={`text-xs font-mono uppercase tracking-wider ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}>Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={7}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className={`${inputBase} resize-none`}
                  />
                </div>

                {/* Status Message */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl bg-green-500/15 border border-green-500/30 text-green-400 text-sm font-semibold"
                  >
                    ✓ Message sent successfully! I'll get back to you shortly.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl bg-red-500/15 border border-red-500/30 text-red-400 text-sm font-semibold"
                  >
                    ✗ Failed to send. Please email directly at shifasshamsu2003@gmail.com
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-3 bg-cyan-400 hover:bg-cyan-300 disabled:opacity-60 disabled:cursor-not-allowed text-black py-4 rounded-2xl font-bold text-base tracking-wide transition-all shadow-[0_0_20px_rgba(0,255,255,0.25)] hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(0,255,255,0.4)]"
                >
                  <FaPaperPlane className={status === "sending" ? "animate-bounce" : ""} />
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>

              {/* Availability Status Footer */}
              <div className={`mt-8 pt-6 border-t flex items-center justify-between text-xs font-mono ${
                darkMode ? "border-cyan-500/10 text-gray-500" : "border-gray-200 text-gray-400"
              }`}>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
                  <span>Currently available for opportunities</span>
                </div>
                <span>Usually responds within 24h</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </motion.div>
  )
}

export default Contact
