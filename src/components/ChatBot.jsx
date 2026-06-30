import { useState, useEffect, useRef } from "react"
import axios from "axios"
import {
  FaRobot,
  FaTimes,
  FaPaperPlane,
  FaVolumeUp,
  FaVolumeMute,
  FaArrowRight
} from "react-icons/fa"

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [voiceEnabled, setVoiceEnabled] = useState(false)
  const messagesEndRef = useRef(null)

  const [messages, setMessages] = useState([
    {
      text: "Hi 👋 I'm Shifas's AI Assistant. Ask me anything about Shifas, his education, skills, projects, the PM-VIKAS program, or career goals. I can answer your questions instantly!",
      sender: "bot"
    }
  ])

  // Suggested questions list
  const suggestions = [
    { label: "Education 🎓", query: "Tell me about Shifas's education." },
    { label: "Skills ⚡", query: "What technical skills does Shifas have?" },
    { label: "Projects 📂", query: "Show me Shifas's key projects." },
    { label: "PM-VIKAS IoT 🤖", query: "What is Shifas's PM-VIKAS IoT experience?" },
    { label: "Career Goals 🎯", query: "What are Shifas's career goals?" },
    { label: "Strengths 💪", query: "What are Shifas's strengths?" },
    { label: "Resume 📄", query: "How can I download Shifas's resume?" },
    { label: "Contact 📞", query: "How do I contact Shifas?" }
  ]

  // Local Recruiter Database (Fallback)
  const fallbackDatabase = {
    education: "Shifas is a B.Tech graduate in Artificial Intelligence and Data Science from the Royal College of Engineering and Technology (affiliated with APJ Abdul Kalam Technological University, Kerala), graduating in 2026. He completed his Higher Secondary at GHSS Kochanoor (82%) and Secondary SSLC at Bethany St. John's English School (88%).",
    skills: "Shifas's core technical stack includes:\n• Languages: Python, JavaScript, SQL, HTML, CSS\n• Hardware/IoT: Arduino, ESP32 board configs, Sensors, Actuators, Relays\n• Frameworks/Tools: React, Node.js, Django REST Framework, Git, Microsoft Excel\n• Domains: Machine Learning, Artificial Intelligence, Embedded Systems, TinyML",
    projects: "Shifas has built several major systems:\n1. AI Task Management System (React, Django REST, WebSockets, AI Assistant integration)\n2. Smart AI Autonomous Robot (Machine learning based navigation, sensors, path-planning controls)\n3. Multi-Branch Inventory System (SQL Database, stock management dashboards, role metrics)\n4. Pay On Purchase System (Python automation script with SQL connectivity)",
    pmvikas: "During the PM-VIKAS program conducted at IIIT Kottayam (under the Ministry of Education), Shifas worked as an IoT Assistant Trainee. He logged 96+ practical training hours mastering Arduino, ESP32 configurations, Wi-Fi webservers, MQTT publishing/subscribing, database Firebase streams, FreeRTOS multitasking, and TinyML edge intelligence.",
    goals: "Shifas aims to work as a professional AI Engineer or Machine Learning and IoT systems developer. He aspires to join innovation leaders such as Google, Microsoft, or Tesla to build hardware-integrated artificial intelligence solutions.",
    strengths: "Shifas's key attributes include: Problem Solving (highly analytical debug mindset), Agile Learning (rapidly picks up hardware boards and software libraries), Team Player (collaborative systems builder), and Adaptability (functions well under tight project delivery targets).",
    resume: "You can download Shifas's resume directly as a PDF from this link: /resume.pdf. The file contains his complete academic history, projects list, credentials, and achievements.",
    contact: "You can contact Shifas via:\n• Email: shifasshamsu2003@gmail.com\n• LinkedIn: linkedin.com/in/shifas-p-s-965895397\n• GitHub: github.com/shifaz935\n• WhatsApp: +91 7012918968"
  }

  // AUTO SCROLL
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // SPEAK TEXT
  const speakText = (text) => {
    if (!voiceEnabled || !window.speechSynthesis) return
    window.speechSynthesis.cancel() // Stop any ongoing speech

    // Remove emojis/markdown symbols before reading
    const cleanText = text.replace(/[*#👋🎓⚡📂🤖🎯💪📄📞•]/g, "")
    const utterance = new SpeechSynthesisUtterance(cleanText)
    utterance.rate = 0.95
    utterance.pitch = 1.0
    window.speechSynthesis.speak(utterance)
  }

  // Mute toggle stops any speaking voice
  useEffect(() => {
    if (!voiceEnabled && window.speechSynthesis) {
      window.speechSynthesis.cancel()
    }
  }, [voiceEnabled])

  // GET LOCAL ANSWER MATCH
  const getLocalAnswer = (query) => {
    const q = query.toLowerCase()
    if (q.includes("education") || q.includes("college") || q.includes("university") || q.includes("degree")) {
      return fallbackDatabase.education
    }
    if (q.includes("skill") || q.includes("technology") || q.includes("programming")) {
      return fallbackDatabase.skills
    }
    if (q.includes("project") || q.includes("task system") || q.includes("robot") || q.includes("inventory")) {
      return fallbackDatabase.projects
    }
    if (q.includes("vikas") || q.includes("pm-vikas") || q.includes("iiit") || q.includes("kottayam") || q.includes("internship")) {
      return fallbackDatabase.pmvikas
    }
    if (q.includes("career") || q.includes("goals") || q.includes("dream") || q.includes("target")) {
      return fallbackDatabase.goals
    }
    if (q.includes("strength") || q.includes("why hire") || q.includes("benefit")) {
      return fallbackDatabase.strengths
    }
    if (q.includes("resume") || q.includes("download") || q.includes("cv") || q.includes("pdf")) {
      return fallbackDatabase.resume
    }
    if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("address") || q.includes("reach")) {
      return fallbackDatabase.contact
    }

    // Default summarizing prompt answer
    return "Shifas is a B.Tech Artificial Intelligence & Data Science graduate. He is an AI and ML enthusiast, an IoT systems builder, and a Full Stack software engineer. You can contact him at shifasshamsu2003@gmail.com, view his projects on GitHub, or click any of the suggestion buttons below for specific credentials!"
  }

  // SEND MESSAGE
  const sendMessage = async (userText) => {
    const textToSend = userText || input
    if (!textToSend.trim()) return

    const userMessage = { text: textToSend, sender: "user" }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setLoading(true)

    // OpenRouter Key checking
    const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY

    if (!apiKey) {
      // Offline/Local fallback mode triggered immediately
      setTimeout(() => {
        const localAnswer = getLocalAnswer(textToSend)
        setMessages((prev) => [...prev, { text: localAnswer, sender: "bot" }])
        setLoading(false)
        speakText(localAnswer)
      }, 600)
      return
    }

    try {
      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model: "openai/gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: `You are an intelligent AI portfolio assistant for Shifas PS.
              Always answer professionally, clearly, recruiter-friendly, and confidently.
              
              ABOUT SHIFAS:
              Full Name: Shifas PS (Never call him Shifa)
              Age: 22
              Location: Thrissur, Kerala, India
              Degree: B.Tech in Artificial Intelligence and Data Science (Class of 2026, APJ Abdul Kalam Technological University)
              College: Royal College of Engineering and Technology, Thrissur
              Career Goal: AI Engineer / ML Developer / IoT Systems Engineer
              
              SKILLS: Python, JavaScript, React, SQL, Git, Microsoft Excel, Arduino ESP32 programming, Sensors, Relays, MQTT, FreeRTOS, TinyML.
              
              PROJECTS:
              1. AI Task Management System (React, Django REST Framework, WebSockets)
              2. Smart AI Autonomous Robot (Machine learning based, Arduino, path-planning)
              3. Multi-Branch Inventory Management (React, SQL database)
              4. Pay on Purchase System (Python, SQL billing automations)
              
              INTERNSHIP:
              PM-VIKAS IoT Assistant program at IIIT Kottayam (96+ hours training in hardware systems, sensors, Wi-Fi webservers, MQTT protocols, FreeRTOS).
              
              CONTACT DETAILS:
              Email: shifasshamsu2003@gmail.com
              GitHub: github.com/shifaz935
              LinkedIn: linkedin.com/in/shifas-p-s-965895397
              WhatsApp: +91 7012918968
              
              Keep responses clean, structured, and recruiter-focused.`
            },
            {
              role: "user",
              content: textToSend
            }
          ]
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json"
          }
        }
      )

      const botReply = response.data.choices[0].message.content
      setMessages((prev) => [...prev, { text: botReply, sender: "bot" }])
      speakText(botReply)
    } catch (error) {
      console.warn("API query failed, fallback used:", error)
      const localAnswer = getLocalAnswer(textToSend)
      setMessages((prev) => [...prev, { text: localAnswer, sender: "bot" }])
      speakText(localAnswer)
    }

    setLoading(false)
  }

  return (
    <>
      {/* GLOWING AI CHAT FLOATING TRIGGER BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[9999] w-16 h-16 rounded-full bg-cyan-400 text-black text-2xl flex items-center justify-center shadow-[0_0_30px_#00ffff] hover:scale-110 cursor-pointer transition-all duration-300 border border-cyan-300/40"
      >
        {isOpen ? <FaTimes /> : <FaRobot className="animate-pulse" />}
      </button>

      {/* CHAT WINDOW (ChatGPT-like Panel) */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 md:right-8 w-[92vw] max-w-[420px] h-[75vh] md:h-[620px] bg-[#071120]/80 border border-cyan-500/30 rounded-[30px] shadow-[0_0_50px_rgba(0,255,255,0.2)] overflow-hidden z-[99999] flex flex-col backdrop-blur-2xl transition-all duration-500 text-left">

          {/* HEADER */}
          <div className="bg-[#0b1b31]/90 border-b border-cyan-500/20 p-4 flex justify-between items-center text-cyan-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xl shadow-[0_0_15px_rgba(0,255,255,0.1)]">
                <FaRobot />
              </div>
              <div>
                <h2 className="font-bold text-sm text-gray-100 tracking-wider">Shifas's AI Assistant</h2>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping" />
                  <span className="text-[10px] text-gray-400 font-mono">SYS_ONLINE // SECURE_PORT</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Voice toggle */}
              <button
                onClick={() => setVoiceEnabled(!voiceEnabled)}
                className={`p-2 rounded-lg text-sm border cursor-pointer transition-colors ${voiceEnabled
                  ? "bg-cyan-500/25 border-cyan-400 text-cyan-300"
                  : "bg-transparent border-cyan-500/10 text-gray-500 hover:text-cyan-400"
                  }`}
                title={voiceEnabled ? "Voice output enabled" : "Voice output disabled"}
              >
                {voiceEnabled ? <FaVolumeUp /> : <FaVolumeMute />}
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-cyan-400 text-xl p-1 transition-colors cursor-pointer"
              >
                <FaTimes />
              </button>
            </div>
          </div>

          {/* CHAT LOGS */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 custom-scrollbar">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-xs md:text-sm leading-relaxed whitespace-pre-line ${msg.sender === "user"
                    ? "bg-cyan-400 text-black font-semibold rounded-tr-sm shadow-[0_0_15px_rgba(0,255,255,0.15)]"
                    : "bg-[#020612]/70 text-gray-200 border border-cyan-500/10 rounded-tl-sm"
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-[#020612]/70 text-cyan-400/80 px-4 py-3 rounded-2xl rounded-tl-sm border border-cyan-500/10 font-mono text-xs flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  Generating answer...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* QUICK SUGGESTION ACTIONS */}
          <div className="px-4 pb-3 pt-1 border-t border-cyan-500/10 bg-[#071120]/30 shrink-0">
            <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest mb-2">Recruiter Prompts</p>
            <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto scrollbar-none">
              {suggestions.map((pill) => (
                <button
                  key={pill.label}
                  onClick={() => sendMessage(pill.query)}
                  className="bg-[#020612]/70 hover:bg-cyan-500/15 border border-cyan-500/20 hover:border-cyan-400 text-gray-300 hover:text-cyan-300 text-[11px] px-2.5 py-1.5 rounded-xl cursor-pointer transition-all flex items-center gap-1 font-semibold"
                >
                  {pill.label} <FaArrowRight className="text-[8px] opacity-40" />
                </button>
              ))}
            </div>
          </div>

          {/* INPUT FORM */}
          <div className="p-3 border-t border-cyan-500/20 flex gap-2 items-center bg-[#0b1b31]/95 shrink-0">
            <input
              type="text"
              placeholder="Ask me about Shifas's projects or skills..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage()
              }}
              className="w-full bg-[#020612]/70 text-gray-200 border border-cyan-500/25 focus:border-cyan-400 px-4 py-3 rounded-xl outline-none text-xs md:text-sm min-w-0"
            />

            <button
              onClick={() => sendMessage()}
              className="bg-cyan-400 text-black w-11 h-11 rounded-xl flex items-center justify-center hover:bg-cyan-300 cursor-pointer transition-transform hover:scale-105 shrink-0"
            >
              <FaPaperPlane />
            </button>
          </div>

        </div>
      )}
    </>
  )
}

export default ChatBot