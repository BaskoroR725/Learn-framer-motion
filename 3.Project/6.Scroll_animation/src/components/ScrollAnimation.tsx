import { motion, useScroll, useTransform } from "motion/react";

export default function ScrollAnimation() {
  const { scrollYProgress } = useScroll();

 // Animation for the first section
  const y1 = useTransform(scrollYProgress, [0, 0.1], [100,0]);
  const opacity1 = useTransform(scrollYProgress,[0, 0.1],[0,1]);
  const scale1 = useTransform(scrollYProgress, [0, 0.1],[0.8,1]);

    // Animation for the second section
  const y2 = useTransform(scrollYProgress, [0.2, 0.3], [100, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const scale2 = useTransform(scrollYProgress, [0.2, 0.3], [0.8, 1]);

  // Animation for the third section
  const y3 = useTransform(scrollYProgress, [0.4, 0.5], [100, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const scale3 = useTransform(scrollYProgress, [0.4, 0.5], [0.8, 1]);


  return (
    <div>
      {/*first section */}
      <motion.div
        className="h-screen flex items-center justify-center bg-blue-300"
        style={{ y: y1, opacity: opacity1, scale: scale1 }}
      >
        <div className="text-center p-8 bg-white rounded-lg shadow-lg ">
          <h2 className="text-4xl font-bold text-blue-700">
            Welcome to the journey
          </h2>
          <p className="mt-4 text-gray-600">Scroll down to see more</p>
        </div>
      </motion.div>

      {/*Second section */}
      <motion.div
        className="h-screen flex items-center justify-center bg-green-300"
        style={{ y: y2, opacity: opacity2, scale: scale2 }}
      >
        <div className="text-center p-8 bg-white rounded-lg shadow-lg " >
          <h2 className="text-4xl font-bold text-green-700" >
            Amazing Scrolling effect
          </h2>
          <p className="mt-4 text-gray-600" >
            Feel the scroll-based animation come to life.
          </p>
        </div>
      </motion.div>

      {/*Third section */}
      <motion.div
        className="h-screen flex items-center justify-center bg-purple-300"
        style={{ y: y3, opacity: opacity3, scale: scale3 }}
      >
        <div className="text-center p-8 bg-white rounded-lg shadow-lg " >
          <h2 className="text-4xl font-bold text-purple-700" >
            Enjoy the scroll
          </h2>
          <p className="mt-4 text-gray-600" >
            More to discover as you continue scrolling.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
