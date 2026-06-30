import { motion } from "framer-motion"
import {
  FaCertificate,
  FaEye,
  FaAward,
  FaDownload,
  FaFileAlt,
  FaFilePdf,
  FaUserTie,
  FaCode,
  FaDatabase,
  FaShieldAlt,
  FaBolt,
  FaBriefcase,
  FaExternalLinkAlt
} from "react-icons/fa"

function Certificates({ darkMode }) {
  // ─── CERTIFICATES DATA ───────────────────────────────────────────────────────
  const certificates = [
    {
      title: "IoT Assistant Certificate",
      issuer: "PM-VIKAS · Ministry of Education",
      file: "/certificates/pmvikas.pdf",
      gradient: "from-cyan-500/20 to-teal-500/20",
      border: "border-cyan-400/30",
      badgeColor: "bg-cyan-400",
      icon: <FaBolt className="text-black text-xl" />,
      featured: true,
      credentialId: "PMV-IOT-2025-0941A",
      year: "2025"
    },
    {
      title: "AI Skills Passport",
      issuer: "EY & Microsoft",
      file: "/certificates/ey.pdf",
      gradient: "from-blue-500/20 to-indigo-500/20",
      border: "border-blue-400/30",
      badgeColor: "bg-blue-400",
      icon: <FaShieldAlt className="text-black text-lg" />,
      year: "2024"
    },
    {
      title: "Full Stack Web Development with AI Tools",
      issuer: "AICTE Edunet Foundation",
      file: "/certificates/fullstack.pdf",
      gradient: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-400/30",
      badgeColor: "bg-purple-400",
      icon: <FaCode className="text-black text-lg" />,
      year: "2024"
    },
    {
      title: "Introduction to Python Programming",
      issuer: "Online Certification",
      file: "/certificates/python.pdf",
      gradient: "from-yellow-500/20 to-orange-500/20",
      border: "border-yellow-400/30",
      badgeColor: "bg-yellow-400",
      icon: <FaDatabase className="text-black text-lg" />,
      year: "2023"
    },
    {
      title: "Preparing Data for Analysis with Microsoft Excel",
      issuer: "Microsoft Certification",
      file: "/certificates/excel.pdf",
      gradient: "from-green-500/20 to-emerald-500/20",
      border: "border-green-400/30",
      badgeColor: "bg-green-400",
      icon: <FaFileAlt className="text-black text-lg" />,
      year: "2023"
    }
  ]

  // ─── DOCUMENTS DATA ───────────────────────────────────────────────────────────
  const documents = [
    {
      label: "ATS Optimized Resume",
      description: "AI & Data Science Graduate · PM-VIKAS IoT Assistant · Full Stack Developer",
      file: "/resume.pdf",
      icon: <FaUserTie className="text-xl" />,
      color: "text-cyan-400",
      bgGlow: "shadow-[0_0_20px_rgba(0,255,255,0.15)]",
      border: "border-cyan-500/30",
      bgCard: "from-cyan-500/10 to-transparent",
      buttonClass:
        "bg-cyan-400 hover:bg-cyan-300 text-black shadow-[0_0_15px_rgba(0,255,255,0.25)] hover:shadow-[0_0_25px_rgba(0,255,255,0.4)]",
      tag: "PRIORITY DOCUMENT"
    },
    {
      label: "IoT Assistant Certificate",
      description: "PM-VIKAS · Ministry of Education — Credential: PMV-IOT-2025-0941A",
      file: "/certificates/pmvikas.pdf",
      icon: <FaBolt className="text-xl" />,
      color: "text-teal-400",
      bgGlow: "shadow-[0_0_20px_rgba(20,184,166,0.12)]",
      border: "border-teal-500/25",
      bgCard: "from-teal-500/10 to-transparent",
      buttonClass: "bg-teal-400 hover:bg-teal-300 text-black"
    },
    {
      label: "EY AI Skills Passport",
      description: "EY & Microsoft — AI Readiness & Digital Skills Certification",
      file: "/certificates/ey.pdf",
      icon: <FaShieldAlt className="text-xl" />,
      color: "text-blue-400",
      bgGlow: "shadow-[0_0_20px_rgba(59,130,246,0.12)]",
      border: "border-blue-500/25",
      bgCard: "from-blue-500/10 to-transparent",
      buttonClass: "bg-blue-400 hover:bg-blue-300 text-black"
    },
    {
      label: "Full Stack Certificate",
      description: "AICTE Edunet Foundation — React, Node.js, AI-integrated Web Development",
      file: "/certificates/fullstack.pdf",
      icon: <FaCode className="text-xl" />,
      color: "text-purple-400",
      bgGlow: "shadow-[0_0_20px_rgba(168,85,247,0.12)]",
      border: "border-purple-500/25",
      bgCard: "from-purple-500/10 to-transparent",
      buttonClass: "bg-purple-400 hover:bg-purple-300 text-black"
    },
    {
      label: "Python Certificate",
      description: "Python Programming Fundamentals — Data Structures & Algorithms",
      file: "/certificates/python.pdf",
      icon: <FaFilePdf className="text-xl" />,
      color: "text-yellow-400",
      bgGlow: "shadow-[0_0_20px_rgba(234,179,8,0.12)]",
      border: "border-yellow-500/25",
      bgCard: "from-yellow-500/10 to-transparent",
      buttonClass: "bg-yellow-400 hover:bg-yellow-300 text-black"
    },
    {
      label: "Microsoft Excel Certificate",
      description: "Data Preparation & Analysis — Microsoft Certification Program",
      file: "/certificates/excel.pdf",
      icon: <FaBriefcase className="text-xl" />,
      color: "text-green-400",
      bgGlow: "shadow-[0_0_20px_rgba(34,197,94,0.12)]",
      border: "border-green-500/25",
      bgCard: "from-green-500/10 to-transparent",
      buttonClass: "bg-green-400 hover:bg-green-300 text-black"
    }
  ]

  const cardBase = `rounded-3xl border backdrop-blur-md transition-all duration-300 ${
    darkMode
      ? "bg-[#071120]/50 border-cyan-500/15 text-gray-100"
      : "bg-white border-gray-200 text-gray-800 shadow-md"
  }`

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen pt-28 pb-24 px-6 md:px-12 ${
        darkMode ? "bg-[#020612]" : "bg-gray-50"
      }`}
    >
      <div className="max-w-6xl mx-auto space-y-16">

        {/* ── PAGE HEADER ─────────────────────────────────────── */}
        <div className="text-center space-y-3">
          <h1
            className={`text-4xl md:text-5xl font-extrabold tracking-tight ${
              darkMode ? "text-cyan-400" : "text-cyan-600"
            }`}
          >
            Credentials & Documents
          </h1>
          <p
            className={`font-mono text-sm tracking-widest uppercase ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            SYS_CREDENTIALS_REGISTRY · ALL FILES VERIFIED
          </p>
          <p
            className={`text-sm max-w-xl mx-auto leading-relaxed ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Industry-recognized certifications and downloadable documents. Everything a recruiter needs — in one place.
          </p>
        </div>

        {/* ── RECRUITER DOCUMENTS CENTER ──────────────────────── */}
        <section className="space-y-6">
          {/* Section Label */}
          <div className="flex items-center gap-4">
            <div
              className={`h-px flex-1 ${
                darkMode ? "bg-cyan-500/20" : "bg-gray-200"
              }`}
            />
            <h2
              className={`text-xs font-mono font-bold uppercase tracking-[0.25em] px-3 ${
                darkMode ? "text-cyan-400" : "text-cyan-600"
              }`}
            >
              📁 Recruiter Documents Center
            </h2>
            <div
              className={`h-px flex-1 ${
                darkMode ? "bg-cyan-500/20" : "bg-gray-200"
              }`}
            />
          </div>

          {/* Documents Grid */}
          <div className="space-y-3">
            {documents.map((doc, i) => (
              <motion.div
                key={doc.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`relative rounded-2xl border backdrop-blur-md overflow-hidden transition-all duration-300 group ${
                  darkMode
                    ? `bg-gradient-to-r ${doc.bgCard} ${doc.border} ${doc.bgGlow} hover:brightness-110`
                    : `bg-white ${doc.border} shadow-sm hover:shadow-md`
                }`}
              >
                {/* Priority tag */}
                {doc.tag && (
                  <div
                    className={`absolute top-0 right-0 text-[9px] font-mono font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl ${
                      darkMode
                        ? "bg-cyan-400/90 text-black"
                        : "bg-cyan-500 text-white"
                    }`}
                  >
                    {doc.tag}
                  </div>
                )}

                <div className="flex items-center justify-between gap-4 px-6 py-5">
                  {/* Icon + Text */}
                  <div className="flex items-center gap-4 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${doc.color} ${
                        darkMode ? "bg-white/5 border border-white/10" : "bg-gray-100"
                      }`}
                    >
                      {doc.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-sm leading-tight truncate">
                        {doc.label}
                      </h3>
                      <p
                        className={`text-xs leading-snug mt-0.5 truncate ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {doc.description}
                      </p>
                    </div>
                  </div>

                  {/* Download Button */}
                  <a
                    href={doc.file}
                    download
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs tracking-wide whitespace-nowrap transition-all hover:scale-105 shrink-0 ${doc.buttonClass}`}
                  >
                    <FaDownload className="text-[10px]" />
                    Download
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tip Banner */}
          <div
            className={`rounded-2xl border p-4 flex items-start gap-3 text-xs font-mono ${
              darkMode
                ? "bg-cyan-500/5 border-cyan-500/20 text-cyan-300/70"
                : "bg-cyan-50 border-cyan-200 text-cyan-700"
            }`}
          >
            <span className="text-base shrink-0">💡</span>
            <span>
              All documents are instantly downloadable. The resume is ATS-optimized for AI & Data Science roles.
              Certificates are issued by recognized institutions and programs.
            </span>
          </div>
        </section>

        {/* ── CERTIFICATES SECTION ────────────────────────────── */}
        <section className="space-y-6">
          <div className="flex items-center gap-4">
            <div
              className={`h-px flex-1 ${
                darkMode ? "bg-cyan-500/20" : "bg-gray-200"
              }`}
            />
            <h2
              className={`text-xs font-mono font-bold uppercase tracking-[0.25em] px-3 ${
                darkMode ? "text-cyan-400" : "text-cyan-600"
              }`}
            >
              🏅 Certificates Gallery
            </h2>
            <div
              className={`h-px flex-1 ${
                darkMode ? "bg-cyan-500/20" : "bg-gray-200"
              }`}
            />
          </div>

          {/* FEATURED CERTIFICATE */}
          {certificates
            .filter((c) => c.featured)
            .map((cert) => (
              <motion.div
                key={cert.title}
                whileHover={{ scale: 1.01 }}
                className={`relative rounded-3xl border overflow-hidden ${
                  darkMode
                    ? `bg-gradient-to-r ${cert.gradient} ${cert.border} backdrop-blur-md shadow-[0_0_40px_rgba(0,255,255,0.08)]`
                    : `bg-gradient-to-r ${cert.gradient} ${cert.border} shadow-lg bg-white/70`
                }`}
              >
                {/* Glow blob */}
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-cyan-400/5 rounded-full blur-[80px] pointer-events-none" />

                <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="flex items-start gap-5">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(0,255,255,0.3)] ${cert.badgeColor}`}
                    >
                      {cert.icon}
                    </div>
                    <div className="space-y-1.5">
                      <span
                        className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border inline-block ${
                          darkMode
                            ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
                            : "bg-cyan-100 text-cyan-700 border-cyan-200"
                        }`}
                      >
                        ★ Featured Credential · {cert.year}
                      </span>
                      <h3 className="text-2xl font-extrabold">{cert.title}</h3>
                      <p
                        className={`text-sm font-mono ${
                          darkMode ? "text-cyan-300/80" : "text-cyan-600"
                        }`}
                      >
                        {cert.issuer}
                      </p>
                      {cert.credentialId && (
                        <p
                          className={`text-xs font-mono ${
                            darkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          Credential ID: {cert.credentialId}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-3 shrink-0">
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-3 rounded-2xl font-bold text-sm transition-all hover:scale-105"
                    >
                      <FaExternalLinkAlt className="text-xs" /> View
                    </a>
                    <a
                      href={cert.file}
                      download
                      className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm transition-all hover:scale-105 ${cert.badgeColor} text-black`}
                    >
                      <FaDownload className="text-xs" /> Download
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}

          {/* REGULAR CERTIFICATES GRID */}
          <div className="grid md:grid-cols-2 gap-5">
            {certificates
              .filter((c) => !c.featured)
              .map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.02 }}
                  className={`relative rounded-3xl border overflow-hidden ${
                    darkMode
                      ? `bg-gradient-to-br ${cert.gradient} ${cert.border} backdrop-blur-md`
                      : `bg-gradient-to-br ${cert.gradient} ${cert.border} shadow-md bg-white/70`
                  }`}
                >
                  <div className="p-7 space-y-5">
                    {/* Header */}
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${cert.badgeColor}`}
                      >
                        {cert.icon}
                      </div>
                      <div className="space-y-0.5 min-w-0">
                        <h3 className="font-bold text-base leading-tight">
                          {cert.title}
                        </h3>
                        <p
                          className={`text-xs font-mono truncate ${
                            darkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          {cert.issuer} · {cert.year}
                        </p>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3">
                      <a
                        href={cert.file}
                        target="_blank"
                        rel="noreferrer"
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs border transition-all hover:scale-[1.02] ${
                          darkMode
                            ? "bg-white/5 hover:bg-white/10 text-gray-300 border-white/10"
                            : "bg-white hover:bg-gray-50 text-gray-700 border-gray-200"
                        }`}
                      >
                        <FaEye /> View
                      </a>
                      <a
                        href={cert.file}
                        download
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs transition-all hover:scale-[1.02] ${cert.badgeColor} text-black`}
                      >
                        <FaDownload /> Download
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </section>

      </div>
    </motion.div>
  )
}

export default Certificates