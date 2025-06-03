import { motion } from "motion/react";
import { useState } from "react";

export default function FlippingCardFront() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      onClick={() => setIsFlipped(!isFlipped)}
      className="perspective-1000 w-64 h-40 m-4" // Tambahkan ukuran ke container utama
    >
      <motion.div
        variants={{
          front: { rotateY: 0 },
          back: { rotateY: 180 }
        }}
        initial='front'
        animate={isFlipped ? 'back' : 'front'}
        transition={{ duration: 0.6 }}
        // Terapkan transform-style-preserve-3d di sini
        className="relative w-full h-full transform-style-preserve-3d"
      >
        {/* Sisi Depan */}
        <motion.div
          className="absolute inset-0 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center text-xl font-bold backface-hidden"
        >
          Front Side
        </motion.div>

        {/* Sisi Belakang */}
        <motion.div
          className="absolute inset-0 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center text-xl font-bold rotate-y-180 backface-hidden"
        >
          Back Side
        </motion.div>
      </motion.div>
    </motion.div>
  );
}