import { motion } from "framer-motion";

function CustomizeSection() {
  return (
    <section id="customize" className="min-h-screen bg-[#f8efe6] px-16 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-6xl font-black text-center text-[#1a1a1a]"
      >
        Customize Your Magnet
      </motion.h2>

      <p className="text-center text-gray-600 text-xl mt-5">
        Upload your favorite memory and turn it into a premium keepsake.
      </p>

      <div className="grid grid-cols-2 gap-14 mt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-[40px] p-10 shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-8">Create Your Magnet</h3>

          <input type="file" className="w-full p-5 border rounded-2xl" />

          <select className="w-full p-5 border rounded-2xl mt-5">
            <option>Square Magnet</option>
            <option>Strip Magnet</option>
            <option>Polaroid Magnet</option>
          </select>

          <input
            type="number"
            placeholder="Quantity"
            className="w-full p-5 border rounded-2xl mt-5"
          />

          <button className="w-full mt-8 bg-black text-white py-5 rounded-2xl text-xl hover:scale-105 transition">
            Add To Cart
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center"
        >
          <div className="w-[400px] h-[500px] rounded-[40px] overflow-hidden shadow-[0px_20px_80px_rgba(0,0,0,0.25)] bg-pink-100 flex items-center justify-center">
            <p className="text-3xl font-bold text-pink-500">Live Preview</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CustomizeSection;
