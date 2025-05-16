//component for contact page
import Circles from '../../components/Circles';

//Image
import Image from "next/image";

//icons
import {BsArrowRight} from 'react-icons/bs';

//framer motion 
import {motion} from 'framer-motion';

//variants
import {fadeIn} from '../../variants';
import Moon from '../../components/Moon';


import Bulb from '../../components/Bulb';

const Contact = () => {
  return (
  <div className='h-full bg-primary/30'>
    <Circles />
    <div className='container mx-auto py-32 text-left xl:text-left flex items-left justify-left h-full '>
      {/*text & form*/}
      <div className='flex flex-col w-full max-w-[700px]'>
        {/*text*/}
        <motion.h2 
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='h2 text-center mb-12'> 
          Let&apos;s <span className='text-accent'>connect.</span>
        </motion.h2>
        {/*form*/}
        <motion.form 
        variants={fadeIn('up', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='flex-1 flex flex-col gap-4 max-w-[900px] mx-auto'> 
          {/*group*/}
          <div className='flex gap-x-6 w-full'>
            <input type="text" placeholder='Name' className='input'/>
            <input type="text" placeholder='Email' className='input'/>
          </div>
          <input type="text" placeholder='subject' className='input'/>
          <textarea placeholder='message' className='input h-[170px]'></textarea>
          <button className='btn rounded-full border border-white/50 max-w-[150px]
          px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
            <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
              Let&apos;s talk
            </span>
            <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0
            group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
          </button>
        </motion.form>
      </div>
    </div>
    <Moon />
    <Bulb />
  </div>
  );
};

export default Contact;
