import { motion } from "framer-motion"
import pmvikas from "../assets/pmvikas.jpg"

function PmVikas() {

  const technologies = [
    "Arduino Programming",
    "Electronics for IoT",
    "Networking Basics",
    "Cloud Basics",
    "ESP32",
    "Sensors",
    "Embedded Systems",
    "IoT Communication",
    "Automation",
    "Product Development"
  ]

  const highlights = [
    "Hands-on IoT training",
    "Arduino practical sessions",
    "Real-time electronics projects",
    "Industry-oriented skill development",
    "Team collaboration activities",
    "Leadership and entrepreneurship sessions"
  ]

  const skills = [
    "Problem Solving",
    "IoT Development",
    "Teamwork",
    "Communication",
    "Technical Learning",
    "Hardware Interfacing",
    "Basic Embedded Programming"
  ]

  return (

    <div className="min-h-screen bg-gray-950 text-white">

      {/* HERO SECTION */}

      <div className="relative">

        <img
          src={pmvikas}
          alt=""
          className="w-full h-[500px] object-cover opacity-40"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold text-cyan-400"
          >
            PM-VIKAS
          </motion.h1>

          <p className="text-2xl mt-6">
            IoT Assistant Program
          </p>

          <p className="mt-4 text-gray-300 max-w-3xl text-lg">
            Skill India • IIIT Kottayam
          </p>

        </div>

      </div>

      {/* ABOUT PROGRAM */}

      <section className="px-8 md:px-20 py-20">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl"
        >

          <h2 className="text-4xl font-bold text-cyan-400 mb-8">
            About The Program
          </h2>

          <p className="text-lg text-gray-300 leading-9">
            PM-VIKAS is a Government of India skill development
            program focused on empowering students through
            practical technical training, leadership development,
            entrepreneurship support, and real-world industry learning.
          </p>

        </motion.div>

      </section>

      {/* MY ROLE */}

      <section className="px-8 md:px-20 pb-20">

        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl">

          <h2 className="text-4xl font-bold text-cyan-400 mb-8">
            My Role
          </h2>

          <h3 className="text-2xl font-semibold mb-6">
            IoT Assistant Trainee
          </h3>

          <p className="text-gray-300 text-lg leading-9">
            During the PM-VIKAS IoT Assistant program,
            I learned the fundamentals of IoT systems,
            electronics, networking, cloud basics,
            Arduino programming, and automation technologies.

            I also worked on practical activities involving
            hardware interfacing, sensors, and project-based learning.
          </p>

        </div>

      </section>

      {/* TECHNOLOGIES */}

      <section className="px-8 md:px-20 pb-20">

        <h2 className="text-4xl font-bold text-cyan-400 mb-10">
          Technologies Learned
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {technologies.map((tech) => (

            <motion.div
              whileHover={{ scale: 1.05 }}
              key={tech}
              className="bg-white/10 backdrop-blur-lg p-5 rounded-2xl text-center"
            >
              {tech}
            </motion.div>

          ))}

        </div>

      </section>

      {/* TRAINING HIGHLIGHTS */}

      <section className="px-8 md:px-20 pb-20">

        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl">

          <h2 className="text-4xl font-bold text-cyan-400 mb-8">
            Training Highlights
          </h2>

          <div className="space-y-5">

            {highlights.map((item) => (

              <div
                key={item}
                className="bg-gray-900 p-5 rounded-xl"
              >
                ✔ {item}
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* SKILLS */}

      <section className="px-8 md:px-20 pb-20">

        <h2 className="text-4xl font-bold text-cyan-400 mb-10">
          Skills Gained
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {skills.map((skill) => (

            <motion.div
              whileHover={{ scale: 1.05 }}
              key={skill}
              className="bg-white/10 backdrop-blur-lg p-5 rounded-2xl text-center"
            >
              {skill}
            </motion.div>

          ))}

        </div>

      </section>

      {/* CERTIFICATE */}

      <section className="px-8 md:px-20 pb-20">

        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl">

          <h2 className="text-4xl font-bold text-cyan-400 mb-8">
            Certificate Status
          </h2>

          <p className="text-2xl text-gray-300">
            Certificate: In Progress
          </p>

        </div>

      </section>

      {/* WHY I JOINED */}

      <section className="px-8 md:px-20 pb-20">

        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl">

          <h2 className="text-4xl font-bold text-cyan-400 mb-8">
            Why I Joined PM-VIKAS
          </h2>

          <p className="text-lg text-gray-300 leading-9">
            I joined the PM-VIKAS IoT Assistant program
            to gain practical experience in IoT technologies,
            improve my technical skills, and build real-world
            industry knowledge for my AI and software
            development career.
          </p>

        </div>

      </section>

      {/* FUTURE GOALS */}

      <section className="px-8 md:px-20 pb-20">

        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl">

          <h2 className="text-4xl font-bold text-cyan-400 mb-8">
            Future Goals
          </h2>

          <p className="text-lg text-gray-300 leading-9">
            My goal is to combine AI and IoT technologies
            to build smart automation systems and innovative
            real-world solutions.
          </p>

        </div>

      </section>

    </div>

  )
}

export default PmVikas