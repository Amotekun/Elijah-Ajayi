import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'

import { styles } from '../styles'
import {git, github} from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index*0.5, 0.75)}>
      <Tilt
        options={{max:45, scale:1, speed:450}}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px]  w-full'
      >
        <div 
            onClick={() => window.open (source_code_link, "_blank")} 
            className='relative w-full h-[230px] cursor-pointer'
        >
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`${tag.color}`}>#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="flex flex-col justify-center items-center">
          <h2 className={styles.sectionHeadText}>Projects</h2>
        </div>
      </motion.div>

      <div className="flex justify-center">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-SageGreen text-[17px] max-w-3xl leading-[30px] text-justify'>
          The following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with live demos. It reflects my ability to solve complex problems and work with different technologies 
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 text-justify '>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")