import { motion } from "motion/react"
import type { CSSProperties, ReactNode } from "react"

interface DraggableCardsProp {
  children: ReactNode;
  style?: CSSProperties;
}

export default function DraggableCards({ children, style }: DraggableCardsProp ) {
  return (
    <motion.div
      drag
      dragConstraints={{ left: -200, right: 200, top:-200, bottom: 200 }}
      whileHover={{scale: 1.1}}
      whileTap={{scale:0.9}}
      className="rounded-2xl shadow-lg p-5 m-2 w-52 h-72 flex justify-center items-center text-white text-xl"
      style={style}
    >
      {children}
    </motion.div>
  )
}
