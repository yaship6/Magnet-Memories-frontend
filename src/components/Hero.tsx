import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ekuImage from "../../Eku.png";
import ganeshImage from "../../Ganesh.png";
import motivationImage from "../../Motivation.webp";

function Hero() {
  return (
    <section className="grid min-h-[calc(115vh-96px)] grid-cols-2 items-center px-16 py-28">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl font-black leading-tight text-[#1a1a1a]"
        >
          Turn Your <br />
          Memories Into <br />
          <span className="text-[#ca3a3c]">Magnets</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-xl text-[#470000] leading-relaxed"
        >
          Premium customized fridge magnets, polaroids, and memory keepsakes
          delivered to your doorstep.
        </motion.p>

        <div className="flex gap-5 mt-10">
          <Link
            to="/customize"
            className="px-8 py-4 rounded-full border border-[#790405] text-lg bg-[#ca3a3c] hover:text-white transition"
          >
            Customize Now
          </Link>

          <button className="px-8 py-4 rounded-full border border-[#790405] text-lg bg-[#ca3a3c] hover:text-white transition">
            Explore Collection
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center gap-6">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="h-72 w-48 overflow-hidden rounded-3xl shadow-2xl"
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
          className="h-72 w-48 overflow-hidden rounded-3xl shadow-2xl"
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
          className="h-72 w-48 overflow-hidden rounded-3xl shadow-2xl"
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
