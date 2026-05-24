import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa"

function FloatingSocials() {

  return (

    <div
      className="
        fixed
        left-3
        bottom-28
        md:left-6
        md:top-1/2
        md:-translate-y-1/2
        flex
        flex-col
        gap-4
        z-40
      "
    >

      {/* GITHUB */}

      <a

        href="https://github.com/shifaz935"

        target="_blank"

        rel="noreferrer"

        className="
          bg-black/80
          backdrop-blur-lg
          p-3
          md:p-4
          rounded-full
          text-cyan-400
          text-xl
          md:text-2xl
          shadow-[0_0_15px_cyan]
          hover:scale-110
          transition
        "
      >

        <FaGithub />

      </a>

      {/* LINKEDIN */}

      <a

        href="https://www.linkedin.com/in/shifas-p-s-965895397/"

        target="_blank"

        rel="noreferrer"

        className="
          bg-black/80
          backdrop-blur-lg
          p-3
          md:p-4
          rounded-full
          text-cyan-400
          text-xl
          md:text-2xl
          shadow-[0_0_15px_cyan]
          hover:scale-110
          transition
        "
      >

        <FaLinkedin />

      </a>

      {/* EMAIL */}

      <a

        href="mailto:shifasshamsu2003@gmail.com"

        className="
          bg-black/80
          backdrop-blur-lg
          p-3
          md:p-4
          rounded-full
          text-cyan-400
          text-xl
          md:text-2xl
          shadow-[0_0_15px_cyan]
          hover:scale-110
          transition
        "
      >

        <FaEnvelope />

      </a>

    </div>

  )
}

export default FloatingSocials