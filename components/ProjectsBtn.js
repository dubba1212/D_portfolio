//next image
import Image from "next/image";

//next link
import Link from "next/link";

//icons
import { HiArrowRight } from 'react-icons/hi2';
const ProjectsBtn = () => {
  return (
    <div className='mx-auto xl:mx-0'>
      <Link href={'#work'} className='relative inline-flex items-center justify-center
      px-8 py-4 md:px-10 md:py-5 rounded-lg
      bg-accent hover:bg-[#ff4500] text-white font-bold text-lg md:text-xl
      transition-all duration-300 ease-out
      hover:shadow-[0_0_25px_rgba(255,69,0,0.6)]
      group gap-2'>
        My Projects
        <HiArrowRight className='text-2xl group-hover:translate-x-1 transition-transform duration-300'/>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
