import { motion } from "framer-motion";
import { MapPin, Phone, UserRound } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <div className="min-h-screen bg-[#f8efe6] text-[#1a1a1a]">
      <Navbar />

      <main className="min-h-[95vh] px-16 py-28">
        <section className="mx-auto max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-6xl font-black leading-tight text-[#ce272a]"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 max-w-2xl text-xl leading-relaxed text-gray-700"
          >
            Reach out to The Memory Magnets for custom orders, society stalls,
            bulk gifting, or any questions about your magnets.
          </motion.p>

          <div className="mt-14 grid grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="rounded-[28px] border border-[#2f9f9a]/30 bg-[#fffaf7] p-8 shadow-xl"
            >
              <MapPin className="mb-5 text-[#2f9f9a]" size={36} />
              <h2 className="text-2xl font-black text-[#ce272a]">Address</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Gardenia, Crossings Republik, Ghaziabad, 201016
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="rounded-[28px] border border-[#2f9f9a]/30 bg-[#fffaf7] p-8 shadow-xl"
            >
              <UserRound className="mb-5 text-[#2f9f9a]" size={36} />
              <h2 className="text-2xl font-black text-[#ce272a]">Founder</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Sanjana Trivedi & Gaurav Dubey
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="rounded-[28px] border border-[#2f9f9a]/30 bg-[#fffaf7] p-8 shadow-xl"
            >
              <Phone className="mb-5 text-[#2f9f9a]" size={36} />
              <h2 className="text-2xl font-black text-[#ce272a]">Phone</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                +91 70427 36597
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
