//links
import Link from "next/link";

//icons
import {RiGithubLine, RiInstagramLine, RiLinkedinLine, RiFacebookLine} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://github.com/dubba1212'} className='hover:text-accent transition-all duration-300'>
        <RiGithubLine/>
      </Link>
      <Link href={'https://www.instagram.com/dsr_r12/'} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine/>
      </Link>
      <Link href={'https://www.linkedin.com/in/srikanth-reddy-dubba/'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine/>
      </Link>
      <Link href={'https://www.facebook.com/profile.php?id=100005106810170 '} className='hover:text-accent transition-all duration-300'>
        <RiFacebookLine/>
      </Link>
    </div>
  );
};

export default Socials;
