import { useState, useRef } from "react";
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


const Contact = () => {

  const formRef = useRef();
  const [form, setForm] = useState ({name: '', email: '', message: '',});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;

    setForm({...form, [name]: value})
   }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);


    emailjs.send(
      'service_z0bc5yo',
      'template_iwcq1b9',
      {
        from_name: form.name,
        to_name:'Elijah Ajayi',
        from_email: form.email,
        to_email: 'elijahajayi444@gmail.com',
        message: form.message,
      },
      'EACsIreW4oBEXMMgC'
    )
    .then(() => {
      setLoading(false);
      alert('Thank you, i will get back to you shortly');

      setForm({name:'', email:'', message: '',})
    }, (error)=>  {
      setLoading(false)

      console.log(error)

      alert('Something Went wrong')
    })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden">
 
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>To get in touch</p>
        <h3 className={styles.sectionHeadText}>Fill in your contact below</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Type your name here"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input 
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Type your email here"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea 
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Type your message here"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary w-fit text-white font-bold shadow-md px-3 py-4 shadow-primary rounded-xl"
          >
            {loading ? 'sending...' : 'send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")