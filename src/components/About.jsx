import React from 'react';
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper';

const ServiceCard = ({icon, title, index}) => {
  return (
    <Tilt className='w-full xs:w-[250px] '>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75 )}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card '
      >

        <div options = {{max: 45, scale:1, speed:450}} className='bg-tertiary rounded-2xl py-5 px-9 min-h-[280px] flex flex-col justify-evenly items-center '>
          <img src={icon} alt={title}className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
 
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn()}
        className="mt-4 text-secondary text-[17px] leading-[30px] max-w-3xl"
      >
        I am a Web Developer with 2+ years of experience designing and developing responsive websites and web applications. Proficient in HTML, CSS, JavaScript, and various web development libraries and frameworks such as ReactJS, TailwindCSS, Express, MongoDB and Node.js. Strong understanding of web design principles, user experience, and search engine optimization. Experience in integrating web applications with some back-end technologies such as Node.js. Strong problem-solving skills and ability to work in a fast-paced, deadline-driven environment. Proven track record of delivering high-quality web solutions to clients across various industries.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper (About, "about")