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
  { name: 'home', path: '#home', icon: <HiHome /> }, // Assuming you'll add an id="home" to the top of your index page
  { name: 'about', path: '#about', icon: <HiUser /> },
  { name: 'services', path: '#services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '#work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '#testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '#contact', // Assuming you'll add an id="contact" to the contact section
    icon: <HiEnvelope />,
  },
];
const Nav = () => {

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      {/* inner */}
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, index) => {
 return (
            <a className={`relative flex items-center group hover:text-accent`} 
            href={link.path}
            onClick={(event) => {
              console.log('Link clicked!');
              event.preventDefault();
              const targetId = link.path.substring(1); // Remove the '#'
              console.log('Target ID:', targetId);
              const targetElement = document.querySelector('#' + targetId);
              if (targetElement) {
                console.log('Target element found:', targetElement);
                console.log('Attempting to scroll to:', targetElement);
                window.scrollTo({
                  top: targetElement.getBoundingClientRect().top + window.pageYOffset,
                  behavior: 'smooth',
                });
              } else {
                console.log('Target element not found for ID:', targetId);
              }
            }}
            key={index}
            >
              {/* tooltip */}
              <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
                <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
                  <div className='text-[12px] leading-none font-semibold capitalize'>
                    {link.name}
                  </div>
                  {/* triangle */}
                  <div className='border-solid border-l-white border-l-8
                  border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></div>
                </div>
              </div>
              {/* icon */}
              <div>{link.icon}</div>
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
