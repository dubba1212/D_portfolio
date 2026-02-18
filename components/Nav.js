// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// Update paths to use hash links
export const navData = [
  { name: 'home', path: 'home', icon: <HiHome /> },
  { name: 'about', path: 'about', icon: <HiUser /> },
  { name: 'skills', path: 'expertise', icon: <HiRectangleGroup /> },
  { name: 'projects', path: 'work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: 'testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: 'contact',
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const scrollToSection = (id) => {
    // Close any potential skill modal first by dispatching an event
    window.dispatchEvent(new CustomEvent('closeSkillModal'));
    
    // Short delay to allow modal state to update if needed
    requestAnimationFrame(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, "", `#${id}`);
      }
    });
  };

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-[100] top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      {/* inner */}
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, index) => {
          return (
            <button 
              className="relative flex items-center group hover:text-accent transition-all duration-300" 
              onClick={() => scrollToSection(link.path)}
              key={index}
            >
              {/* tooltip */}
              <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
                <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px] shadow-xl'>
                  <div className='text-[12px] leading-none font-semibold capitalize'>
                    {link.name}
                  </div>
                  {/* triangle */}
                  <div className='border-solid border-l-white border-l-8
                  border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></div>
                </div>
              </div>
              {/* icon */}
              <div className="text-2xl xl:text-xl">{link.icon}</div>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
