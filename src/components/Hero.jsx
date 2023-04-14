import { motion } from 'framer-motion';
import {styles} from '../styles';
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='bg-[#915eff] w-5 h-5 rounded-full'/>
          <div className='violet-gradient w-1 sm:h-80 h-60 '/>
        </div> 
        
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I am <span className='text-[#915eff]'>Elijah</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}> A front-end web developer</p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute w-full flex justify-center items-center xs:bottom-6 bottom-'>
        <a href="#about">
          <div className='border-4 w-[35px] h-[64px] rounded-3xl border-secondary flex justify-center items-start p-2'>
            <motion.div 
              animate ={{y: [0, 24, 0]}}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="bg-secondary w-3 h-3 rounded-full mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero