import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import withBgLogo from "../../withbg.png";

function OurStory() {
  return (
    <div className="min-h-screen bg-[#f8efe6] text-[#1a1a1a]">
      <Navbar />

      <main className="min-h-[115vh] px-5 py-16 sm:px-8 lg:px-16 lg:py-32">
        <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.img
            src={withBgLogo}
            alt="The Memory Magnets"
            initial={{ opacity: 0, x: -50, rotate: -3 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto h-56 rounded-[32px] object-contain sm:h-80"
          />

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-5xl font-black leading-tight text-[#ce272a] sm:text-6xl"
            >
              Our Story
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-8 text-xl leading-relaxed text-gray-700"
            >
              Memory Magnets started with a simple idea: the best moments should
              not stay hidden inside a phone gallery. We wanted to turn favorite
              photos, little celebrations, trips, friendships, and family
              memories into something people could see every day.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-6 text-xl leading-relaxed text-gray-700"
            >
              What began as a love for personalized keepsakes became a small
              brand built around custom magnets, Big Acrylic Magnet Frames,
              and meaningful gifts. Every magnet is made to feel personal,
              warm, and easy to keep close.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-6 text-xl leading-relaxed text-gray-700"
            >
              Our goal is to help people decorate their spaces with memories
              that make them smile, one magnet at a time.
            </motion.p>
          </motion.div>
                  </section>
      </main>

      <Footer />
    </div>
  );
}

export default OurStory;
