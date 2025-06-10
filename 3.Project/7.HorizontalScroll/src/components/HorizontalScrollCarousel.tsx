import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import Card from './Card'
import { cards } from '../utils/data'

export default function HorizontalScrollCarousel() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef
  });

  const x = useTransform(scrollYProgress,[0,1],["1%", "-95%"]);

  return (
    <section ref={targetRef} className='relative h-[300vh] bg-neutral-900'>
      <div className='sticky top-0 flex h-screen items-center overflow-hidden' >
        <motion.div className='flex gap-4' style={{x}}>
          {cards.map((card)=>(
            <Card card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
