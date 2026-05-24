function Certificates() {

  const certificates = [

    {
      title: "AI Skills Passport – EY & Microsoft",
      file: "/certificates/ey.pdf"
    },

    {
      title: "Python Certification",
      file: "/certificates/python.pdf"
    },

    {
      title: "Full Stack Web Development",
      file: "/certificates/fullstack.pdf"
    },
    {
      title: "Microsoft Excel Certification",
      file: "/certificates/excel.pdf"
    },
    
  ]

  return (

    <div className="
      min-h-screen
      bg-gray-950
      text-white
      px-8
      md:px-20
      py-32
    ">

      <h1 className="
        text-5xl
        font-bold
        text-cyan-400
        mb-16
        text-center
      ">

        Certificates

      </h1>

      <div className="
        grid
        md:grid-cols-3
        gap-10
      ">

        {certificates.map((cert) => (

          <div

            key={cert.title}

            className="
              bg-white/10
              backdrop-blur-lg
              p-8
              rounded-3xl
              border
              border-cyan-500/20
            "
          >

            <h2 className="
              text-2xl
              font-bold
              mb-6
            ">

              {cert.title}

            </h2>

            <a

              href={cert.file}

              target="_blank"

              className="
                bg-cyan-500
                px-6
                py-3
                rounded-xl
                inline-block
                hover:bg-cyan-400
              "
            >

              View Certificate

            </a>

          </div>

        ))}

      </div>

    </div>

  )
}

export default Certificates