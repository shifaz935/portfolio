import { motion } from "framer-motion"



import {
  FaGithub,
  FaLinkedin,
  FaDownload
} from "react-icons/fa"

import myphoto from "../assets/myphoto.jpg"

import ParticlesBackground from "../components/ParticlesBackground"

function Home() {

  return (

  

<motion.div

  initial={{ opacity: 0 }}

  animate={{ opacity: 1 }}

  exit={{ opacity: 0 }}

  transition={{
  duration: 0.6,
  ease: "easeInOut"
}}

  className="relative min-h-screen bg-gray-950 text-white overflow-hidden"
>

      {/* PARTICLES */}

      <ParticlesBackground />

     

      {/* CONTENT */}

      <div className="relative z-10">

        {/* HERO */}

        <section className="flex flex-col items-center justify-center text-center min-h-screen px-6">

       <motion.div
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{
  duration: 0.6,
  ease: "easeInOut"
}}

  className="
    relative
    mt-28
    md:mt-32
    w-64
    h-64
    md:w-80
    md:h-80
    rounded-full
    border-[6px]
    border-cyan-400
    shadow-[0_0_60px_cyan]
    overflow-hidden
    mx-auto
    bg-black
  "
>

  <img
    src={myphoto}
    alt="Shifas"

    className="
      w-full
      h-full
      object-cover
      object-top
    "
  />

</motion.div>

          <section className="
  px-8
  md:px-20
  py-20
">

  <div className="
    grid
    grid-cols-2
    md:grid-cols-4
    gap-10
    text-center
  ">

    <div>

      <h2 className="
        text-5xl
        font-bold
        text-cyan-400
      ">
4+

      </h2>

      <p className="mt-4 text-gray-300">
        Projects
      </p>

    </div>

    <div>

      <h2 className="
        text-5xl
        font-bold
        text-cyan-400
      ">

        10
        +

      </h2>

      <p className="mt-4 text-gray-300">
        Skills
      </p>

    </div>

    <div>

      <h2 className="
        text-5xl
        font-bold
        text-cyan-400
      ">
        5

        +

      </h2>

      <p className="mt-4 text-gray-300">
        Certifications
      </p>

    </div>

    <div>

      <h2 className="
        text-5xl
        font-bold
        text-cyan-400
      ">

        1

        +

      </h2>

      <p className="mt-4 text-gray-300">
        Internship
      </p>

    </div>

  </div>

</section>


          <motion.h1

            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}

            transition={{
              duration: 0.6,
              ease: "easeInOut"
            }}

            className="
              text-6xl
              md:text-7xl
              font-bold
              mt-10
            "
          >
            SHIFAS PS
          </motion.h1>

          {/* TYPING EFFECT */}

          <div className="text-cyan-400 text-2xl mt-6 font-semibold">
AI & Data Science Graduate | Full Stack Developer | IoT Enthusiast

          </div>

          {/* DESCRIPTION */}

          <p className="
            max-w-3xl
            text-gray-300
            text-lg
            leading-8
            mt-8
          ">

            Passionate about Artificial Intelligence,
            IoT, Full Stack Development,
            and building real-world software solutions.

          </p>

          {/* BUTTONS */}

          <div className="flex flex-wrap gap-6 mt-10 justify-center">

            {/* RESUME */}

            <a
              href="/resume.pdf"
              download

              className="
                flex
                items-center
                gap-3
                bg-cyan-500
                hover:bg-cyan-400
                px-8
                py-4
                rounded-2xl
                text-lg
                font-semibold
                transition
                shadow-[0_0_20px_cyan]
              "
            >

              <FaDownload />

              Download Resume

            </a>

            {/* GITHUB */}

            <a

              href="https://github.com/shifaz935"

              target="_blank"

              className="
                flex
                items-center
                gap-3
                border
                border-cyan-400
                px-8
                py-4
                rounded-2xl
                text-lg
                hover:bg-cyan-500/20
                transition
              "
            >

              <FaGithub />

              GitHub

            </a>

            {/* LINKEDIN */}

            <a

              href="https://www.linkedin.com/in/shifas-p-s-965895397"

              target="_blank"

              className="
                flex
                items-center
                gap-3
                border
                border-cyan-400
                px-8
                py-4
                rounded-2xl
                text-lg
                hover:bg-cyan-500/20
                transition
              "
            >

              <FaLinkedin />

              LinkedIn

            </a>

          </div>


        </section>
        {/* PROJECTS SECTION */}

<section className="px-8 md:px-20 py-20">

  <motion.h2

    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}

    transition={{
      duration: 0.6,
      ease: "easeInOut"
    }}

    className="
      text-5xl
      font-bold
      text-center
      text-cyan-400
      mb-16
    "
  >

    Projects

  </motion.h2>

  <div className="grid md:grid-cols-2 gap-10">

    {/* PROJECT 1 */}

    <motion.div

      whileHover={{ scale: 1.03 }}

      className="
        bg-white/10
        backdrop-blur-lg
        p-8
        rounded-3xl
        border
        border-cyan-500/20
      "
    >

      <h3 className="text-3xl font-bold mb-6">
        AI Task Management System
      </h3>

      <p className="text-gray-300 leading-8">

        Full-stack AI-powered task management system
        using React, Django REST Framework,
        WebSockets, JWT authentication,
        analytics dashboard, and AI chatbot integration.

      </p>

      <div className="flex gap-4 mt-8">

        <a

          href="https://github.com/shifaz935"

          target="_blank"

          className="
            bg-cyan-500
            px-6
            py-3
            rounded-xl
            hover:bg-cyan-400
          "
        >

          GitHub

        </a>

      </div>

    </motion.div>

    {/* PROJECT 2 */}

    <motion.div

      whileHover={{ scale: 1.03 }}

      className="
        bg-white/10
        backdrop-blur-lg
        p-8
        rounded-3xl
        border
        border-cyan-500/20
      "
    >

      <h3 className="text-3xl font-bold mb-6">
        Smart AI Autonomous Robot
      </h3>

      <p className="text-gray-300 leading-8">

        AI-powered autonomous robotic system
        using machine learning,
        sensors,
        automation logic,
        and real-time intelligent responses.

      </p>

      <div className="flex gap-4 mt-8">

        <a

          href="https://github.com/shifaz935"

          target="_blank"

          className="
            bg-cyan-500
            px-6
            py-3
            rounded-xl
            hover:bg-cyan-400
          "
        >

          GitHub

        </a>

      </div>

    </motion.div>

    {/* PROJECT 3 */}

    <motion.div

      whileHover={{ scale: 1.03 }}

      className="
        bg-white/10
        backdrop-blur-lg
        p-8
        rounded-3xl
        border
        border-cyan-500/20
      "
    >

      <h3 className="text-3xl font-bold mb-6">
        Multi-Branch Inventory System
      </h3>

      <p className="text-gray-300 leading-8">

        Centralized inventory management system
        for stock tracking,
        reporting,
        and database-driven inventory control.

      </p>

      <div className="flex gap-4 mt-8">

        <a

          href="https://github.com/shifaz935"

          target="_blank"

          className="
            bg-cyan-500
            px-6
            py-3
            rounded-xl
            hover:bg-cyan-400
          "
        >

          GitHub

        </a>

      </div>

    </motion.div>

    {/* PROJECT 4 */}

    <motion.div

      whileHover={{ scale: 1.03 }}

      className="
        bg-white/10
        backdrop-blur-lg
        p-8
        rounded-3xl
        border
        border-cyan-500/20
      "
    >

      <h3 className="text-3xl font-bold mb-6">
        Pay On Purchase System
      </h3>

      <p className="text-gray-300 leading-8">

        Backend automation system for
        purchase and billing workflows
        using Python and SQL with
        database connectivity and transaction handling.

      </p>

      <div className="flex gap-4 mt-8">

        <a

          href="https://github.com/shifaz935"

          target="_blank"

          className="
            bg-cyan-500
            px-6
            py-3
            rounded-xl
            hover:bg-cyan-400
          "
        >

          GitHub

        </a>

      </div>

    </motion.div>

  </div>

</section>


      </div>

    </motion.div>



  )
}

export default Home