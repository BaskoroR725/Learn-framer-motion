import { motion } from "motion/react";

export default function AnimateCard() {
  return (
    <motion.div
      initial={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.05, rotate: 3 }}
      whileTap={{ scale: 0.95 }}
      drag
      dragConstraints={{
        left: -50,
        right: 50,
        top: -50,
        bottom: 50,
      }}
      dragElastic={0.2}
      transition={{ type: 'spring', stiffness: 300 }}
      className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
    >
      <img
        className="w-full h-48 object-cover"
        src="/images/Jingliu.jpg"
        alt="card image"
      />

      {/* description */}
      <div className="p-8 space-y-4">
        <h2 className="text-xl text-black font-semibold mb-2">Card Title</h2>
        <p className="text-gray-700 mb-4">
          This is a simple card with framer motion and tailwind css for styling
        </p>
        <button className="px-6 py-3 rounded transition bg-teal-500 hover:bg-teal-300">
          Learn More
        </button>
      </div>
    </motion.div>
  );
}
