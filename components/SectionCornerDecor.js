import Image from "next/image";
import { motion } from "framer-motion";

const SectionCornerDecor = () => {
  return (
    <div className='absolute inset-0 pointer-events-none overflow-hidden select-none z-0'>
      {/* Bulb (Bottom Left) */}
      <div className='absolute -left-20 -bottom-10 rotate-12 mix-blend-color-dodge w-[150px] md:w-[200px] xl:w-[260px] opacity-50 md:opacity-100'>
        <motion.div
          animate={{
            filter: [
              'brightness(1) saturate(1) drop-shadow(0 0 0px rgba(255,0,0,0))',
              'brightness(1.5) saturate(1.5) drop-shadow(0 0 20px rgba(255,0,0,0.6))',
              'brightness(1) saturate(1) drop-shadow(0 0 0px rgba(255,0,0,0))',
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/bulb.png"
            width={500}
            height={500}
            className='w-full h-full'
            alt=''
            priority
          />
        </motion.div>
      </div>

      {/* Circles (Bottom Right) */}
      <div className='absolute -right-16 -bottom-10 mix-blend-color-dodge w-[180px] md:w-[240px] xl:w-[300px] opacity-40 md:opacity-80'>
        <motion.div
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/circles.png"
            width={260}
            height={200}
            className='w-full h-full'
            alt=''
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionCornerDecor;
