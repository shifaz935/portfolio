import { motion } from "framer-motion"
import { 
  FaGraduationCap, 
  FaAward, 
  FaLanguage, 
  FaCode,
  FaCheckCircle,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight
} from "react-icons/fa"
import { Link } from "react-router-dom"
import myphoto from "../assets/myphoto.jpg"

function About({ darkMode }) {
  const cardBase = `rounded-3xl border backdrop-blur-md p-8 transition-all duration-300 ${
    darkMode
      ? "bg-[#071120]/50 border-cyan-500/15 text-gray-100"
      : "bg-white border-gray-200 text-gray-800 shadow-md"
  }`

  const educationData = [
    {
      degree: "B.Tech — Artificial Intelligence & Data Science",
      institution: "Royal College of Engineering and Technology",
      university: "APJ Abdul Kalam Technological University",
      year: "2022 – 2026",
      grade: "CGPA: 6.34 / 10.0"
    },
    {
      degree: "Higher Secondary Education (HSE)",
      institution: "GHSS Kochanoor, Thrissur, Kerala",
      university: "Kerala State Board",
      year: "2020 – 2022",
      grade: "82%"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Bethany St. John's English Higher Secondary School, Kunnamkulam",
      university: "Kerala State Board",
      year: "Completed 2020",
      grade: "88%"
    }
  ]

  const certifications = [
    "AI Skills Passport – EY & Microsoft",
    "Full Stack Web Development with AI Tools – AICTE Edunet",
    "Introduction to Python Programming",
    "Preparing Data for Analysis with Microsoft Excel",
    "Shadow Login – Cyber Security Event (State Level)",
    "IoT Assistant Certificate – PM-VIKAS (Ministry of Education)"
  ]

  const achievements = [
    "Successfully selected for PM-VIKAS IoT Assistant internship at IIIT Kottayam under Ministry of Education",
    "Completed the AI Skills Passport Program by EY & Microsoft",
    'Participated in the state-level cyber security event "Shadow Login"',
    "Built and demonstrated Smart Plant Monitoring System at PM-VIKAS Capstone Day"
  ]

  const strengths = [
    "Problem Solving", "Fast Learner", "Team Player", "Leadership",
    "Adaptability", "Communication", "Technical Research", "Creativity"
  ]

  const languages = [
    { lang: "Malayalam", level: "Native" },
    { lang: "English", level: "Professional" },
    { lang: "Tamil", level: "Conversational" },
    { lang: "Arabic", level: "Basic" }
  ]

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
      <div className="max-w-6xl mx-auto space-y-12">

        {/* PAGE HEADER */}
        <div className="text-center space-y-3">
          <h1 className={`text-4xl md:text-5xl font-extrabold tracking-tight ${
            darkMode ? "text-cyan-400 glow-text-cyan" : "text-cyan-600"
          }`}>
            About Me
          </h1>
          <p className={`font-mono text-sm tracking-widest uppercase ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}>
            SYS_PROFILE_EXTENDED_DATA
          </p>
        </div>

        {/* INTRO CARD (split layout) */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Photo Column */}
          <div className={`${cardBase} !p-0 overflow-hidden group`}>
            <div className="h-72 relative overflow-hidden">
              <img
                src={myphoto}
                alt="Shifas PS"
                className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${
                darkMode ? "from-[#071120] via-transparent to-transparent" : "from-white/70 via-transparent to-transparent"
              }`} />
            </div>
            <div className="p-6 space-y-3">
              <div>
                <h2 className="text-xl font-extrabold">Shifas P S</h2>
                <p className={`text-sm font-mono ${darkMode ? "text-cyan-400" : "text-cyan-600"}`}>AI & Data Science</p>
              </div>
              <div className={`space-y-1.5 text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-cyan-400 text-xs shrink-0" />
                  <span>Age: 22 years</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-cyan-400 text-xs shrink-0" />
                  <span>Thrissur, Kerala, India</span>
                </div>
              </div>
              <Link
                to="/contact"
                className="flex items-center gap-1.5 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Contact me <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>

          {/* Bio Column */}
          <div className={`${cardBase} md:col-span-2 space-y-5`}>
            <h3 className="text-xl font-bold">Executive Profile</h3>
            <p className={`text-base leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              I'm Shifas P S, a motivated Artificial Intelligence and Data Science graduate from 
              Royal College of Engineering and Technology, under APJ Abdul Kalam Technological University, Kerala.
            </p>
            <p className={`text-base leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              My engineering journey focuses on bridging data analytics pipelines with machine learning algorithms 
              and IoT controllers. I am passionate about creating autonomous robotic architectures and software 
              dashboards that simplify operational overhead.
            </p>
            <p className={`text-base leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Career aspirations include working as an AI Engineer at forward-thinking organizations like 
              <span className={`font-bold ${darkMode ? "text-cyan-300" : "text-cyan-600"}`}> Google</span>, 
              <span className={`font-bold ${darkMode ? "text-cyan-300" : "text-cyan-600"}`}> Microsoft</span>, or 
              <span className={`font-bold ${darkMode ? "text-cyan-300" : "text-cyan-600"}`}> Tesla</span>.
            </p>

            {/* Key Strengths */}
            <div className="pt-4 border-t border-cyan-500/10 space-y-3">
              <h4 className={`text-sm font-mono uppercase tracking-wider ${darkMode ? "text-cyan-400" : "text-cyan-600"}`}>Key Strengths</h4>
              <div className="flex flex-wrap gap-2">
                {strengths.map((s) => (
                  <span
                    key={s}
                    className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-semibold border ${
                      darkMode
                        ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-300"
                        : "bg-cyan-50 border-cyan-200 text-cyan-700"
                    }`}
                  >
                    <FaCheckCircle className="text-[10px]" /> {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* EDUCATION */}
        <div className="space-y-5">
          <h2 className={`text-2xl font-bold flex items-center gap-2 ${darkMode ? "text-gray-100" : "text-gray-800"}`}>
            <FaGraduationCap className="text-cyan-400" /> Education
          </h2>
          <div className="space-y-4">
            {educationData.map((edu, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.01 }}
                className={`${cardBase} !p-6 flex flex-col md:flex-row md:items-center justify-between gap-4`}
              >
                <div className="space-y-1">
                  <h3 className="font-bold text-base">{edu.degree}</h3>
                  <p className={`text-sm ${darkMode ? "text-cyan-300/80" : "text-cyan-600"} font-mono`}>{edu.institution}</p>
                  <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{edu.university}</p>
                </div>
                <div className="text-right shrink-0 space-y-1">
                  <span className={`text-xs font-mono px-3 py-1 rounded-full ${
                    darkMode ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" : "bg-cyan-50 text-cyan-700 border border-cyan-200"
                  }`}>{edu.year}</span>
                  <p className={`text-sm font-bold ${darkMode ? "text-green-400" : "text-green-600"}`}>{edu.grade}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div className="space-y-5">
          <h2 className={`text-2xl font-bold flex items-center gap-2 ${darkMode ? "text-gray-100" : "text-gray-800"}`}>
            <FaAward className="text-cyan-400" /> Certifications
          </h2>
          <div className={`${cardBase}`}>
            <ul className="space-y-3">
              {certifications.map((cert, i) => (
                <li key={i} className={`flex items-start gap-3 text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  <FaCheckCircle className="text-cyan-400 text-xs mt-1 shrink-0" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ACHIEVEMENTS */}
        <div className="space-y-5">
          <h2 className={`text-2xl font-bold flex items-center gap-2 ${darkMode ? "text-gray-100" : "text-gray-800"}`}>
            <FaCode className="text-cyan-400" /> Achievements
          </h2>
          <div className={`${cardBase}`}>
            <ul className="space-y-3">
              {achievements.map((ach, i) => (
                <li key={i} className={`flex items-start gap-3 text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  <span className="text-cyan-400 mt-0.5 shrink-0">▸</span>
                  {ach}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* LANGUAGES */}
        <div className="space-y-5">
          <h2 className={`text-2xl font-bold flex items-center gap-2 ${darkMode ? "text-gray-100" : "text-gray-800"}`}>
            <FaLanguage className="text-cyan-400" /> Languages
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {languages.map((l, i) => (
              <div key={i} className={`${cardBase} !p-5 text-center space-y-1`}>
                <h4 className="font-bold">{l.lang}</h4>
                <p className={`text-xs font-mono ${
                  l.level === "Native" ? "text-cyan-400" :
                  l.level === "Professional" ? "text-green-400" :
                  l.level === "Conversational" ? "text-yellow-400" : "text-gray-400"
                }`}>{l.level}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  )
}

export default About