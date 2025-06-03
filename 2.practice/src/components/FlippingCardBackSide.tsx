import { motion } from "motion/react";
import { useState } from "react";

export default function FlippingCarBack() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      onClick={() => setIsFlipped(!isFlipped)}
      className="perspective-1000 w-64 h-40 " // Tambahkan ukuran ke container utama
    >
      <motion.div
        variants={{
          front: { rotateY: 0 },
          back: { rotateY: 180 },
        }}
        initial="front"
        animate={isFlipped ? "back" : "front"}
        transition={{ duration: 0.6 }}
        className="w-64 h-40 relative transform-style-preserve-3d "
      >
        {/* Front Side */}
        <div className="absolute w-full h-full bg-white flex rounded-lg items-center justify-center text-xl font-bold backface-hidden">
          Front Side
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-green-500 flex rounded-lg items-center justify-center text-xl font-bold rotateY-180 backface-hidden">
          Back Side
        </div>
      </motion.div>
    </motion.div>
  );
}
