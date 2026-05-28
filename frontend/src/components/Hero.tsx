import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ekuImage from "../../Eku.png";
import ganeshImage from "../../Ganesh.png";
import motivationImage from "../../Motivation.webp";

function Hero() {
  return (
    <section className="grid min-h-[calc(112vh-96px)] grid-cols-1 items-center gap-12 px-5 py-20 sm:px-8 lg:min-h-[calc(118vh-96px)] lg:grid-cols-2 lg:px-16 lg:py-32">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-black leading-tight text-[#1a1a1a] sm:text-6xl lg:text-7xl"
        >
          Turn Your <br />
          Memories Into <br />
          <span className="text-[#ca3a3c]">Magnets</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-lg leading-relaxed text-[#470000] sm:text-xl"
        >
          Premium customized Square Photo Magnets, Big Acryclic Magent Frames,
          and memory keepsakes delivered to your doorstep.
        </motion.p>

        <div className="mt-10 flex flex-wrap gap-5">
          <Link
            to="/customize"
            className="px-8 py-4 rounded-full border-2 border-[#790405] text-lg text-white bg-[#ca3a3c] hover:bg-[#5a0205] hover:border-[#ff9999] transition-all duration-300"
          >
            Customize Now
          </Link>

          <Link
            to="/shop"
            className="px-8 py-4 rounded-full border-2 border-[#790405] text-lg text-white bg-[#ca3a3c] hover:bg-[#5a0205] hover:border-[#ff9999] transition-all duration-300"
          >
            Explore Collection
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="h-60 w-40 overflow-hidden rounded-3xl shadow-2xl sm:h-72 sm:w-48"
        >
          <img
            src={motivationImage}
            alt="Motivation memory magnet"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{
            repeat: Infinity,
            duration: 5,
          }}
          className="h-60 w-40 overflow-hidden rounded-3xl shadow-2xl sm:h-72 sm:w-48"
        >
          <img
            src={ekuImage}
            alt="Eku memory magnet"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          animate={{ y: [0, -16, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4.6,
          }}
          whileHover={{ scale: 1.05 }}
          className="h-60 w-40 overflow-hidden rounded-3xl shadow-2xl sm:h-72 sm:w-48"
        >
          <img
            src={ganeshImage}
            alt="Ganesh memory magnet"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
