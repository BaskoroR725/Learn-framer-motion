import { motion, useScroll, useTransform } from 'motion/react'

const ScrollIndicator = () =>{
  const { scrollYProgress } = useScroll();

  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return(
    <div className='h-[200vh] p-[20px]'>
      <motion.div 
        className='bg-red-500 fixed top-0 left-0 h-[5px] '
        style={{
          width: lineWidth,
          transition: 'width 0.1s ease',
        }}
      />

      <motion.div className='mt-[50px]' >
        {[...Array(100)].map((_,index) =>(
          <p key={index} className='mt-[20px]' >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum vitae voluptate numquam libero modi expedita! Consequatur, odio tempore neque voluptatem modi, nisi eaque maxime aut dignissimos, saepe laborum soluta maiores.
          </p>
        ))}
      </motion.div>
    </div>
  )

} 

export default ScrollIndicator;