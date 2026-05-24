import Particles from "react-tsparticles"

function ParticlesBackground() {

  return (

    <Particles

      id="tsparticles"

      options={{

        background: {
          color: {
            value: "#030712",
          },
        },

        fpsLimit: 120,

        particles: {

          color: {
            value: "#00ffff",
          },

          links: {
            color: "#00ffff",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },

          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },

          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 60,
          },

          opacity: {
            value: 0.3,
          },

          shape: {
            type: "circle",
          },

          size: {
            value: { min: 1, max: 5 },
          },
        },

        detectRetina: true,
      }}

    />

  )
}

export default ParticlesBackground