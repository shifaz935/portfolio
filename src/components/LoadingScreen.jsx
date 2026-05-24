import { motion } from "framer-motion"

function LoadingScreen() {

  return (

    <div className="
      fixed
      inset-0
      bg-black
      flex
      items-center
      justify-center
      z-[99999]
    ">

      <motion.h1

        initial={{ opacity: 0 }}

        animate={{
          opacity: 1,
          scale: [1, 1.2, 1]
        }}

        transition={{
          duration: 1.5,
          repeat: Infinity
        }}

        className="
          text-6xl
          font-bold
          text-cyan-400
        "
      >

        SHIFAS 

      </motion.h1>

    </div>

  )
}

export default LoadingScreen