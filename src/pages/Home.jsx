import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaPlay,
  FaTimes,
  FaCode,
  FaDatabase,
  FaBrain,
  FaRobot,
  FaNetworkWired,
  FaFileExcel,
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUser,
  FaArrowRight,
  FaExternalLinkAlt,
  FaLaptopCode,
  FaLightbulb,
  FaUsers,
  FaHandshake,
  FaCheckCircle
} from "react-icons/fa"
import { SiArduino, SiPython, SiJavascript, SiReact } from "react-icons/si"
import myphoto from "../assets/myphoto.jpg"
import ParticlesBackground from "../components/ParticlesBackground"

function Home() {
  // Video Modal State
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const videoRef = useRef(null)

  // Disable page scrolling while modal is open
  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isVideoOpen])

  // Escape key close listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleCloseModal()
      }
    }
    if (isVideoOpen) {
      window.addEventListener("keydown", handleKeyDown)
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isVideoOpen])

  // Autoplay handler when modal opens
  useEffect(() => {
    if (isVideoOpen && videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Autoplay failed:", err)
      })
    }
  }, [isVideoOpen])

  const handleCloseModal = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
    setIsVideoOpen(false)
  }

  const handleSkipIntro = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
    setIsVideoOpen(false)
    setTimeout(() => {
      const aboutSection = document.getElementById("about")
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
    setIsVideoOpen(false)
    setTimeout(() => {
      const aboutSection = document.getElementById("about")
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  // Project Modal State
  const [selectedProject, setSelectedProject] = useState(null)

  // Interactive 3D Card Tilt State (Right Side Hero)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Rotate amount based on cursor position relative to center
    const rotX = (centerY - y) / 15
    const rotY = (x - centerX) / 15

    setRotateX(rotX)
    setRotateY(rotY)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  const projects = [
    {
      id: 1,
      title: "AI Task Management System",
      description: "A state-of-the-art task management system integrated with artificial intelligence. Offers dynamic workflows, conversational task analysis, automated priority estimation, and interactive reports.",
      details: "This is a full-stack, enterprise-grade AI-powered task management platform. Developed using React for a fast responsive frontend and Django REST Framework for robust API endpoints. Integrates JWT secure authentication, real-time updates via WebSockets, an interactive analytical dashboard, and an AI chat assistant to help manage tasks, assign subtasks, and analyze team productivity patterns.",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Django REST Framework", "AI Assistant", "WebSockets", "JWT", "Tailwind CSS"],
      github: "https://github.com/shifaz935",
      live: "#"
    },
    {
      id: 2,
      title: "Smart AI Autonomous Robot",
      description: "An intelligent autonomous machine built on machine learning algorithms and sensor fusion. Performs decision-making tasks, path optimization, and real-time obstacle avoidance.",
      details: "This project showcases an intelligent autonomous robotic system. Harnessing Python, machine learning engines, Arduino sensors, and IoT frameworks, the robot perceives its environment, calculates path efficiency, and executes motion paths with high precision. Integrates ultrasonic sensors, camera vision inputs, and wireless remote dashboard controls.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      tech: ["Machine Learning", "Arduino", "Sensors", "Python", "Embedded Systems", "IoT"],
      github: "https://github.com/shifaz935",
      live: "#"
    },
    {
      id: 3,
      title: "Multi-Branch Inventory System",
      description: "A centralized cloud-ready system engineered for tracking inventory across multiple locations. Provides real-time stock notifications, batch controls, and transaction logs.",
      details: "A comprehensive database-driven inventory control system designed for multi-branch retail and warehouse management. Features real-time stock sync across branches, low stock alert systems, invoice generating systems, historical data reporting charts, and detailed privilege matrices for user permissions.",
      image: "https://images.unsplash.com/photo-1553413719-875871274765?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Node.js", "SQL", "Express", "Chart.js", "Database Design"],
      github: "https://github.com/shifaz935",
      live: "#"
    },
    {
      id: 4,
      title: "Pay On Purchase System",
      description: "A backend automation program streamlining purchasing cycles and billing pipelines using Python script and SQL connectivity.",
      details: "A transaction processing and ledger automation script. Written entirely in Python with secure SQL database integrations, this program automates purchase order processing, checks customer credit limits, issues digital invoices, records inventory deductions, and prints transactional logs for accounting audits.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      tech: ["Python", "SQL", "Database Auditing", "Automation Scripting", "CLI Terminal"],
      github: "https://github.com/shifaz935",
      live: "#"
    }
  ]

  const skills = [
    { name: "Python", icon: <SiPython className="text-yellow-400 text-3xl" />, percent: 90 },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-300 text-3xl" />, percent: 85 },
    { name: "React", icon: <SiReact className="text-cyan-400 text-3xl" />, percent: 80 },
    { name: "SQL", icon: <FaDatabase className="text-blue-500 text-3xl" />, percent: 80 },
    { name: "Git", icon: <FaCode className="text-orange-500 text-3xl" />, percent: 85 },
    { name: "Machine Learning", icon: <FaBrain className="text-pink-400 text-3xl" />, percent: 85 },
    { name: "Artificial Intelligence", icon: <FaRobot className="text-cyan-300 text-3xl" />, percent: 80 },
    { name: "IoT & Arduino", icon: <SiArduino className="text-teal-400 text-3xl" />, percent: 90 },
    { name: "Embedded Systems", icon: <FaNetworkWired className="text-purple-400 text-3xl" />, percent: 85 },
    { name: "Excel Data Tools", icon: <FaFileExcel className="text-green-500 text-3xl" />, percent: 75 }
  ]

  const timelineData = [
    {
      id: 1,
      title: "SSLC Secondary Education",
      institution: "Bethany St. John's English School, Kunnamkulam",
      duration: "Completed with 88% marks",
      details: "Built base mathematical, analytical, and computer literacy foundations."
    },
    {
      id: 2,
      title: "Higher Secondary Education",
      institution: "GHSS Kochanoor, Thrissur",
      duration: "Completed with 82% marks",
      details: "Specialized in Science, Mathematics, and Computer programming basics."
    },
    {
      id: 3,
      title: "B.Tech in Artificial Intelligence & Data Science",
      institution: "Royal College of Engineering and Technology",
      duration: "Graduating Class of 2026 (APJ Abdul Kalam Technological University)",
      details: "Studying Machine Learning, Neural Networks, Database Systems, Full-stack Web Development, and Advanced IoT systems."
    },
    {
      id: 4,
      title: "PM-VIKAS IoT Assistant Trainee",
      institution: "IIIT Kottayam under Ministry of Education",
      duration: "Hands-on Skill India Training",
      details: "Learned ESP32, Arduino programming, cloud configurations, sensor integrations, and hardware system architecture."
    },
    {
      id: 5,
      title: "Graduation Roadmap",
      institution: "B.Tech Graduation 2026",
      duration: "Targeting Q2 2026 Completion",
      details: "Working on final year autonomous robotics and AI-powered smart application integrations."
    },
    {
      id: 6,
      title: "AI Engineer Career Goal",
      institution: "Intelligent Systems Architect",
      duration: "Next Career Landmark",
      details: "Aims to work on bleeding-edge models, automated systems, and data-driven intelligence at top-tier companies."
    }
  ]

  const recruiterHighlights = [
    {
      title: "Fast Learner",
      desc: "Proven ability to rapidly pick up new frameworks, architectures, and hardware platforms, such as integrating AI with IoT systems.",
      icon: <FaLaptopCode className="text-cyan-400 text-3xl" />
    },
    {
      title: "Problem Solver",
      desc: "Strong core logical thinking skills, utilizing Python and SQL data layers to solve structural backend and robotic coordination problems.",
      icon: <FaLightbulb className="text-yellow-400 text-3xl" />
    },
    {
      title: "AI & ML Enthusiast",
      desc: "Keen interest in neural network optimizations, natural language interfaces, and building models that drive predictive logic.",
      icon: <FaBrain className="text-pink-400 text-3xl" />
    },
    {
      title: "IoT Systems Architect",
      desc: "Experience building physical electronic projects, sensor mapping, and Arduino controls during the PM-VIKAS IIIT Kottayam training.",
      icon: <FaNetworkWired className="text-teal-400 text-3xl" />
    },
    {
      title: "Team Player & Collaborator",
      desc: "Organized team coordinator in college projects, bridging the gap between hardware designs and software engineering stacks.",
      icon: <FaUsers className="text-purple-400 text-3xl" />
    },
    {
      title: "Leadership & Adaptability",
      desc: "Excel in high-pressure project deadlines, adapting algorithms to changing hardware requirements and driving projects forward.",
      icon: <FaHandshake className="text-green-400 text-3xl" />
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="relative min-h-screen bg-[#020612] text-gray-100 overflow-hidden"
    >
      {/* BACKGROUND PARTICLES */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      {/* BACKGROUND RADIANT GLOWS */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* HOME CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-20 space-y-36">

        {/* HERO SECTION */}
        <section className="min-h-[85vh] flex flex-col md:flex-row items-center justify-between gap-12 pt-8">

          {/* LEFT SIDE: DETAILS & BUTTONS */}
          <div className="w-full md:w-1/2 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 font-mono text-sm tracking-wider shadow-[0_0_15px_rgba(0,255,255,0.1)]">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              SYSTEM PORTFOLIO OPERATIONAL
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              Hi, I'm <br />
              <span className="text-cyan-400 glow-text-cyan">SHIFAS P S</span>
            </h1>

            {/* TYPEWRITER */}
            <div className="h-12 flex items-center">
              <TypeAnimation
                sequence={[
                  "AI Engineer",
                  2000,
                  "Machine Learning Engineer",
                  2000,
                  "Full Stack Developer",
                  2000,
                  "IoT Innovator",
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-cyan-300 text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide font-mono"
              />
            </div>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl">
              Artificial Intelligence & Data Science graduate dedicated to constructing intelligent real-world automated interfaces.
              Bridging the gap between software algorithms and hardware controls to engineer systems that scale.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-black px-6 py-3.5 rounded-2xl font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(0,255,255,0.35)] hover:scale-105"
              >
                <FaDownload />
                Resume
              </a>
              <a
                href="#projects"
                className="flex items-center gap-2 bg-[#071120] hover:bg-cyan-500/10 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 px-6 py-3.5 rounded-2xl font-bold transition-all hover:scale-105"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 bg-[#071120] hover:bg-cyan-500/10 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 px-6 py-3.5 rounded-2xl font-bold transition-all hover:scale-105"
              >
                Contact
              </a>
              <a
                href="/pmvikas"
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/50 hover:border-cyan-300 text-cyan-300 px-6 py-3.5 rounded-2xl font-bold transition-all hover:scale-105 font-mono shadow-[0_0_15px_rgba(0,255,255,0.1)]"
              >
                PM-VIKAS Journey <FaArrowRight className="text-xs" />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: SUIT PHOTO GLASS CARD */}
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                perspective: 1000,
                transformStyle: "preserve-3d"
              }}
              animate={{
                rotateX,
                rotateY
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-72 h-96 sm:w-80 sm:h-[450px] rounded-3xl overflow-hidden glass-panel p-4 flex flex-col items-center justify-center border border-cyan-500/30 shadow-[0_0_50px_rgba(0,255,255,0.15)] group"
            >
              {/* Outer pulsing ring border */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -inset-1 rounded-3xl bg-cyan-400/10 blur opacity-0 group-hover:opacity-100 transition-all duration-700" />

              {/* Photo Frame */}
              <div className="relative w-full h-[90%] rounded-2xl overflow-hidden border border-cyan-400/25 bg-[#020612]">
                <img
                  src={myphoto}
                  alt="Shifas PS Professional Suit"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />

                {/* HUD overlays */}
                <div className="absolute top-4 left-4 text-[10px] text-cyan-400/70 font-mono tracking-widest bg-black/60 px-2 py-1 rounded">
                  SYS_ID: S_935
                </div>
                <div className="absolute bottom-4 right-4 text-[10px] text-cyan-400/70 font-mono tracking-widest bg-black/60 px-2 py-1 rounded">
                  SCAN: OK
                </div>
                {/* Horizontal scanner bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400 shadow-[0_0_10px_#00ffff] opacity-0 group-hover:opacity-100 group-hover:top-[99%] transition-all duration-[4s] ease-in-out infinite pointer-events-none" />
              </div>

              {/* Card Footer Details */}
              <div className="w-full text-center mt-3 font-mono text-xs text-cyan-400/70 tracking-widest">
                SHIFAS P S // B.TECH AI-DS
              </div>
            </motion.div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="py-8 border-y border-cyan-500/10 bg-[#071120]/20 backdrop-blur-sm rounded-3xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-4xl lg:text-5xl font-extrabold text-cyan-400 glow-text-cyan">4+</h3>
              <p className="text-gray-400 font-mono text-sm tracking-wider uppercase">Engineered Projects</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl lg:text-5xl font-extrabold text-cyan-400 glow-text-cyan">10+</h3>
              <p className="text-gray-400 font-mono text-sm tracking-wider uppercase">Key Technologies</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl lg:text-5xl font-extrabold text-cyan-400 glow-text-cyan">5+</h3>
              <p className="text-gray-400 font-mono text-sm tracking-wider uppercase">Core Certifications</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl lg:text-5xl font-extrabold text-cyan-400 glow-text-cyan">1+</h3>
              <p className="text-gray-400 font-mono text-sm tracking-wider uppercase">PM-VIKAS Internship</p>
            </div>
          </div>
        </section>

        {/* PLAY INTRO VIDEO COMPONENT */}
        <section className="flex flex-col items-center justify-center py-10">
          <div className="w-full max-w-4xl glass-card rounded-3xl p-8 md:p-10 border border-cyan-500/20 text-center relative overflow-hidden group">

            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-[40px]" />

            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Explore Shifas's Professional Journey
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-8">
              Click play below to watch a video introduction summarizing my technical background, academic career, project motivations, and professional trajectory.
            </p>

            {/* Play Button Wrapper */}
            <motion.button
              onClick={() => setIsVideoOpen(true)}
              whileHover={{ scale: 1.08, boxShadow: "0 0 30px rgba(0, 255, 255, 0.4)" }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-3 bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold text-lg cursor-pointer shadow-[0_0_20px_rgba(0,255,255,0.25)] mx-auto hover:bg-cyan-300"
            >
              <FaPlay className="text-sm" /> Play My Introduction
            </motion.button>
          </div>
        </section>

        {/* ABOUT ME GRID */}
        <section id="about" className="space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-4xl font-bold text-cyan-400 glow-text-cyan">About Me</h2>
            <p className="text-gray-400 text-sm font-mono tracking-widest uppercase">SYS_PROFILE_REGISTRATION</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Core details glass box */}
            <div className="md:col-span-2 glass-card rounded-3xl p-8 border border-cyan-500/20 space-y-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
                  <FaUser className="text-lg text-cyan-400" /> Executive Profile
                </h3>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  I'm Shifas P S, a motivated Artificial Intelligence and Data Science graduate from Royal College of Engineering and Technology, under APJ Abdul Kalam Technological University.
                  My engineering journey focuses heavily on bridging data analytics pipelines with machine learning algorithms and IoT controllers.
                  I am passionate about creating autonomous robotic architectures and software dashboards that simplify operational overhead.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-cyan-500/10 text-sm font-mono text-gray-400">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-cyan-400"><FaCalendarAlt /> Age</div>
                  <div className="text-gray-200 text-base font-sans font-semibold">22 Years</div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-cyan-400"><FaMapMarkerAlt /> Location</div>
                  <div className="text-gray-200 text-base font-sans font-semibold">Kerala, India</div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-cyan-400"><FaGraduationCap /> Degree</div>
                  <div className="text-gray-200 text-base font-sans font-semibold">B.Tech AI & Data Science</div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-cyan-400"><FaLaptopCode /> Institution</div>
                  <div className="text-gray-200 text-base font-sans font-semibold">Royal College of Engg</div>
                </div>
              </div>
            </div>

            {/* Career & dreams box */}
            <div className="glass-card rounded-3xl p-8 border border-cyan-500/20 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-cyan-300 mb-2">Career Goal</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Become an expert Artificial Intelligence Engineer creating adaptive systems and cloud-integrated edge networks that solve tangible real-world problems.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-cyan-300 mb-3">Target Ecosystems</h3>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  <span className="bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 px-3 py-1.5 rounded-full font-bold">Google</span>
                  <span className="bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 px-3 py-1.5 rounded-full font-bold">Microsoft</span>
                  <span className="bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 px-3 py-1.5 rounded-full font-bold">Tesla</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-cyan-300 mb-3">Key Strengths</h3>
                <ul className="space-y-2 text-sm text-gray-300 font-sans">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 text-xs" /> Rigorous Problem Solving</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 text-xs" /> Dynamic Team Player</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 text-xs" /> Extremely Agile Learner</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400 text-xs" /> Adaptive Leadership Skills</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-4xl font-bold text-cyan-400 glow-text-cyan">Technical Stacks</h2>
            <p className="text-gray-400 text-sm font-mono tracking-widest uppercase">SYS_TECHNICAL_CAPABILITIES</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, borderColor: "rgba(0,255,255,0.4)" }}
                className="glass-card rounded-2xl p-6 border border-cyan-500/10 flex flex-col items-center justify-between text-center min-h-[160px] group cursor-default shadow-md"
              >
                <div className="p-3 bg-cyan-950/20 rounded-xl border border-cyan-500/15 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>

                <h3 className="font-bold text-gray-200 mt-3 text-sm sm:text-base">{skill.name}</h3>

                {/* Progress bar container */}
                <div className="w-full mt-4 space-y-1.5">
                  <div className="w-full h-1.5 bg-[#071120] rounded-full overflow-hidden p-[1px]">
                    <motion.div
                      initial={{ width: "0%" }}
                      whileInView={{ width: `${skill.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full bg-cyan-400 rounded-full shadow-[0_0_8px_#00ffff]"
                    />
                  </div>
                  <div className="text-[10px] font-mono text-cyan-400/80 text-right">{skill.percent}%</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TIMELINE SECTION */}
        <section className="space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-4xl font-bold text-cyan-400 glow-text-cyan">Milestones & Roadmap</h2>
            <p className="text-gray-400 text-sm font-mono tracking-widest uppercase">SYS_ACADEMIC_TIMELINE</p>
          </div>

          <div className="relative max-w-4xl mx-auto px-4 md:px-0">
            {/* Center spine */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent" />

            {/* Timeline cards */}
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <div key={item.id} className="relative flex flex-col md:flex-row items-start md:items-center">

                  {/* Spine marker */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-[9.5px] w-5 h-5 rounded-full bg-[#020612] border-2 border-cyan-400 flex items-center justify-center z-10 shadow-[0_0_12px_#00ffff]">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  </div>

                  {/* Left or Right alignment */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto md:text-left"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass-card rounded-2xl p-6 border border-cyan-500/15 relative hover:border-cyan-400/40 transition-colors shadow-lg"
                    >
                      <span className="text-cyan-400 font-mono text-xs font-semibold tracking-wider block mb-2">{item.duration}</span>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <p className="text-cyan-300/80 text-xs font-mono mt-1">{item.institution}</p>
                      <p className="text-gray-400 text-sm mt-3 leading-relaxed">{item.details}</p>
                    </motion.div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION (NETFLIX STYLE) */}
        <section id="projects" className="space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-4xl font-bold text-cyan-400 glow-text-cyan">Featured Works</h2>
            <p className="text-gray-400 text-sm font-mono tracking-widest uppercase">SYS_ACTIVE_DEPLOYMENTS</p>
          </div>

          {/* Grid of Netflix card expansions */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layoutId={`project-container-${project.id}`}
                onClick={() => setSelectedProject(project)}
                className="relative h-64 md:h-72 rounded-3xl overflow-hidden border border-cyan-500/15 cursor-pointer group shadow-[0_4px_25px_rgba(0,0,0,0.4)]"
              >
                {/* Background Image */}
                <div className="absolute inset-0 bg-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700 ease-out"
                  />
                </div>

                {/* Cyber Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020612] via-[#020612]/70 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Animated cyan glow corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 group-hover:bg-cyan-400/15 rounded-full blur-[35px] transition-colors" />

                {/* Content Box */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end space-y-3 z-10">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((badge, idx) => (
                      <span key={idx} className="bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-[10px] font-mono px-2 py-0.5 rounded-full font-bold">
                        {badge}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-[10px] font-mono px-2 py-0.5 rounded-full">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="pt-2 flex items-center gap-1.5 text-xs text-cyan-400 font-semibold group-hover:underline">
                    View Project Details <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Glowing border outline */}
                <div className="absolute inset-0 border border-transparent group-hover:border-cyan-400/30 rounded-3xl transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* RECRUITER HIGHLIGHTS ("WHY HIRE SHIFAS?") */}
        <section className="space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-4xl font-bold text-cyan-400 glow-text-cyan">Why Hire Shifas?</h2>
            <p className="text-gray-400 text-sm font-mono tracking-widest uppercase">SYS_BENEFITS_EVALUATION</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {recruiterHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="glass-card rounded-3xl p-6 border border-cyan-500/15 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-950/20 border border-cyan-400/30 flex items-center justify-center shadow-[0_0_15px_rgba(0,255,255,0.1)]">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-bold text-cyan-300">{highlight.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{highlight.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-4xl font-bold text-cyan-400 glow-text-cyan">Get In Touch</h2>
            <p className="text-gray-400 text-sm font-mono tracking-widest uppercase">SYS_CONNECTIVITY_PORTS</p>
          </div>

          <div className="max-w-4xl mx-auto glass-card rounded-[40px] p-8 md:p-12 border border-cyan-500/20 flex flex-col md:flex-row items-center gap-10">

            {/* Left Column details */}
            <div className="w-full md:w-1/2 space-y-6">
              <h3 className="text-2xl font-bold">Contact Coordinates</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Recruiters, engineering managers, and classmates can establish contact at any point via the direct channels listed below. Let's build something intelligent.
              </p>

              <div className="space-y-3.5 text-sm font-mono">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-cyan-950/40 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    ✉
                  </span>
                  <span>shifasshamsu2003@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-cyan-950/40 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    ✆
                  </span>
                  <span>WhatsApp: +91 965895397 (Ref)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-cyan-950/40 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    🧭
                  </span>
                  <span>Thrissur, Kerala, India</span>
                </div>
              </div>

              {/* Social shortcuts */}
              <div className="flex gap-4 pt-2">
                <a
                  href="https://github.com/shifaz935"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 hover:border-cyan-400 hover:text-cyan-300 flex items-center justify-center text-lg transition-all"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/shifas-p-s-965895397/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 hover:border-cyan-400 hover:text-cyan-300 flex items-center justify-center text-lg transition-all"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* Quick Action Button Panel */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <a
                href="mailto:shifasshamsu2003@gmail.com"
                className="w-full text-center bg-cyan-400 text-black py-4 rounded-2xl font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:bg-cyan-300 hover:scale-[1.02]"
              >
                Send Secure Email
              </a>
              <a
                href="https://wa.me/7012918968"
                target="_blank"
                rel="noreferrer"
                className="w-full text-center bg-[#071120] hover:bg-cyan-500/10 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 py-4 rounded-2xl font-bold transition-all hover:scale-[1.02]"
              >
                Connect on WhatsApp
              </a>
              <a
                href="/resume.pdf"
                download
                className="w-full text-center bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/50 hover:border-cyan-300 text-cyan-300 py-4 rounded-2xl font-bold transition-all hover:scale-[1.02]"
              >
                Download Credentials (PDF)
              </a>
            </div>

          </div>
        </section>

      </div>

      {/* CINEMATIC VIDEO INTRODUCTION MODAL */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 bg-[#020612]/95 backdrop-blur-xl z-[99999] flex flex-col items-center justify-center p-4 md:p-8"
          >
            {/* Top right stylish controls */}
            <div className="absolute top-6 right-6 md:top-8 md:right-8 z-50 flex items-center gap-4">
              {/* Skip Intro Button */}
              <button
                onClick={handleSkipIntro}
                className="px-5 py-2.5 rounded-full border border-cyan-400/40 text-cyan-300 font-mono text-sm font-semibold tracking-wider bg-black/60 backdrop-blur-md hover:border-cyan-400 hover:text-cyan-200 hover:shadow-[0_0_15px_rgba(0,255,255,0.25)] transition-all flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
              >
                Skip Intro
              </button>
              
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="w-11 h-11 rounded-full border border-cyan-400/40 text-cyan-300 bg-black/60 backdrop-blur-md hover:border-cyan-400 hover:text-cyan-200 hover:shadow-[0_0_15px_rgba(0,255,255,0.25)] transition-all flex items-center justify-center hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Close modal"
              >
                <FaTimes className="text-lg" />
              </button>
            </div>

            {/* Video Container with glowing neon cyan border */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden border-2 border-cyan-400/80 bg-black shadow-[0_0_30px_rgba(0,255,255,0.5),inset_0_0_15px_rgba(0,255,255,0.2)]"
            >
              <video
                ref={videoRef}
                src="/intro.mp4"
                controls
                autoPlay
                playsInline
                onEnded={handleVideoEnded}
                className="w-full h-full object-contain"
              >
                <track
                  kind="subtitles"
                  src="/subtitles.vtt"
                  srcLang="en"
                  label="English"
                  default
                />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NETFLIX CARD DETAILED MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          >
            <motion.div
              layoutId={`project-container-${selectedProject.id}`}
              className="relative w-full max-w-2xl bg-[#071120] border border-cyan-500/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,255,255,0.2)] max-h-[90vh] flex flex-col"
            >

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/60 hover:bg-cyan-500 hover:text-black border border-cyan-500/30 flex items-center justify-center text-white transition-all cursor-pointer"
              >
                <FaTimes />
              </button>

              {/* Cover Image */}
              <div className="h-64 relative shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071120] to-transparent" />
                <h3 className="absolute bottom-4 left-6 text-3xl font-extrabold text-white">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 space-y-6 overflow-y-auto custom-scrollbar flex-1 text-left">
                <div className="space-y-2">
                  <h4 className="text-cyan-400 font-mono text-xs uppercase tracking-wider">Project Summary</h4>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {selectedProject.details}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-cyan-400 font-mono text-xs uppercase tracking-wider">Technologies Deployed</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((badge, idx) => (
                      <span key={idx} className="bg-cyan-500/10 border border-cyan-400/25 text-cyan-300 text-xs font-mono px-3 py-1.5 rounded-full font-bold">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 pt-4 border-t border-cyan-500/10">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-[#020612] hover:bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 px-6 py-3.5 rounded-2xl font-bold tracking-wide transition-all shadow-[0_0_15px_rgba(0,255,255,0.05)] hover:scale-[1.02]"
                  >
                    <FaGithub /> View Repository
                  </a>
                  {selectedProject.live !== "#" && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-cyan-400 text-black px-6 py-3.5 rounded-2xl font-bold tracking-wide transition-all shadow-[0_0_15px_rgba(0,255,255,0.25)] hover:bg-cyan-300 hover:scale-[1.02]"
                    >
                      <FaExternalLinkAlt className="text-xs" /> Live Demonstration
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  )
}

export default Home