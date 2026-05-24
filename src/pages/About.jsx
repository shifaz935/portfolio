
import emailjs from "@emailjs/browser"
function About() {
    const sendEmail = (e) => {

  e.preventDefault()

  emailjs.sendForm(

    "service_trxxev9",

    "template_pcg24vd",

    e.target,

    "O9wDwuMvey-q_VHP8"

  )

  .then(() => {

    alert("Message Sent Successfully!")

  })

  .catch(() => {

    alert("Failed To Send Message")

  })

}
  return (
    <div className="min-h-screen bg-gray-950 text-white px-8 py-20">

      {/* TITLE */}
      <h1 className="text-5xl font-bold text-cyan-400 mb-16">
        About Me
      </h1>

      {/* INTRO */}
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-lg mb-12">

        <h2 className="text-3xl font-semibold mb-4">
          SHIFAS PS
        </h2>

        <p className="text-gray-300 text-lg leading-8">
          Motivated Artificial Intelligence and Data Science graduate
          passionate about AI, Machine Learning, IoT, Backend Development,
          and Full Stack Web Development.

          I enjoy building real-world software solutions and AI-powered
          applications while continuously learning emerging technologies.
        </p>

      </div>

      {/* EDUCATION */}
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-lg mb-12">

        <h2 className="text-3xl font-semibold text-cyan-400 mb-6">
          Education
        </h2>

        <div className="space-y-4">

          <div>
            <h3 className="text-2xl font-semibold">
              BTech in AI & Data Science
            </h3>

            <p className="text-gray-300">
              Royal College of Engineering and Technology
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Higher Secondary Education
            </h3>

            <p className="text-gray-300">
              Kerala State Board — 82%
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Secondary Education
            </h3>

            <p className="text-gray-300">
              Kerala State Board — 88%
            </p>
          </div>

        </div>

      </div>

      {/* CERTIFICATIONS */}
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-lg mb-12">

        <h2 className="text-3xl font-semibold text-cyan-400 mb-6">
          Certifications
        </h2>

        <ul className="space-y-3 text-lg text-gray-300">

          <li>• AI Skills Passport – EY & Microsoft</li>

          <li>• Full Stack Web Development with AI</li>

          <li>• Microsoft Excel Certification</li>

          <li>• Python Certification</li>

          <li>• Shadow Login – Cyber Security Event</li>

          <li>• Electrical Safety Seminar</li>

        </ul>

      </div>

      {/* ACHIEVEMENTS */}
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-lg mb-12">

        <h2 className="text-3xl font-semibold text-cyan-400 mb-6">
          Achievements
        </h2>

        <ul className="space-y-3 text-lg text-gray-300">

          <li>
            • Participated in the state-level cyber security event
            “Shadow Login”
          </li>

          <li>
            • Successfully completed the AI Skills Passport Program
            by EY & Microsoft
          </li>

          <li>
            • Working on real-world AI and automation projects
          </li>

        </ul>

      </div>

      {/* LANGUAGES */}
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-lg mb-12">

        <h2 className="text-3xl font-semibold text-cyan-400 mb-6">
          Languages
        </h2>

        <p className="text-lg text-gray-300">
          English, Malayalam
        </p>

      </div>

      {/* CONTACT */}
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-lg">

        <h2 className="text-3xl font-semibold text-cyan-400 mb-6">
          Contact Me
        </h2>

        <form className="flex flex-col gap-5 max-w-2xl" onSubmit={sendEmail}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-4 rounded-xl bg-gray-800 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-4 rounded-xl bg-gray-800 outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            className="p-4 rounded-xl bg-gray-800 outline-none h-40"
          />

          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 p-4 rounded-xl text-lg font-semibold transition"
          >
            Send Message
          </button>

        </form>

        {/* SOCIAL LINKS */}
        <div className="mt-10 space-y-3">

          <a
            href="https://github.com/shifaz935"
            target="_blank"
            className="block text-cyan-400 text-lg"
          >
            GitHub →
          </a>

          <a
            href="https://www.linkedin.com/in/shifas-p-s-965895397/"
            target="_blank"
            className="block text-cyan-400 text-lg"
          >
            LinkedIn →
          </a>

          <p className="text-gray-300">
            Email: shifasshamsu2003@gmail.com
          </p>

        </div>

      </div>

    </div>
  )
}

export default About