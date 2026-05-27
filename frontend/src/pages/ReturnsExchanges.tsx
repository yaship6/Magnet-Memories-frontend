import { motion } from "framer-motion";
import { AlertTriangle, Camera, Mail } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function ReturnsExchanges() {
  return (
    <div className="min-h-screen bg-[#f8efe6] text-[#1a1a1a]">
      <Navbar />

      <main className="min-h-[95vh] px-5 py-16 sm:px-8 lg:px-16 lg:py-28">
        <section className="mx-auto max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-black leading-tight text-[#ce272a] sm:text-6xl"
          >
            Returns & Exchanges
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 max-w-3xl text-xl leading-relaxed text-gray-700"
          >
            Since our products are made with personal photos and custom details,
            returns and exchanges are not accepted unless the item arrives broken
            or damaged.
          </motion.p>

          <div className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-8">
            <motion.div
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="rounded-[28px] border border-[#2f9f9a]/30 bg-[#fffaf7] p-8 shadow-xl"
            >
              <AlertTriangle className="mb-5 text-[#2f9f9a]" size={36} />
              <h2 className="text-2xl font-black text-[#ce272a]">
                No General Returns
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                We do not accept returns or exchanges for change of mind,
                incorrect photo selection, or custom order preferences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="rounded-[28px] border border-[#2f9f9a]/30 bg-[#fffaf7] p-8 shadow-xl"
            >
              <Camera className="mb-5 text-[#2f9f9a]" size={36} />
              <h2 className="text-2xl font-black text-[#ce272a]">
                Proof Required
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                If your order arrives broken, please share clear photos or a
                video showing the damage, along with your order details.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="rounded-[28px] border border-[#2f9f9a]/30 bg-[#fffaf7] p-8 shadow-xl"
            >
              <Mail className="mb-5 text-[#2f9f9a]" size={36} />
              <h2 className="text-2xl font-black text-[#ce272a]">
                Contact Us
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Once proof is reviewed, we will help with the next step for a
                replacement or exchange where applicable.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ReturnsExchanges;
