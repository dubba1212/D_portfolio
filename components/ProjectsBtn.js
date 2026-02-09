//next image
import Image from "next/image";

//next link
import Link from "next/link";

//icons
import { HiArrowRight } from 'react-icons/hi2';
const ProjectsBtn = () => {
  return (
    <div className='mx-auto xl:mx-0'>
      <Link href={'#work'} className='relative w-[185px] h-[185px] flex
      justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group
      hover:drop-shadow-[0_0_20px_rgba(255,69,0,0.4)] transition-all duration-300'>
        <Image
        src={'/rounded-text.png'}
        width={141}
        height={148}
        alt=''
        className='animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]
        group-hover:drop-shadow-[0_0_15px_rgba(255,69,0,0.5)] transition-all duration-300'
        />
        <HiArrowRight className='absolute text-4xl group-hover:translate-x-2
        group-hover:drop-shadow-[0_0_10px_rgba(255,69,0,0.6)] transition-all duration-300'/>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
