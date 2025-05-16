import { useEffect, useState } from 'react';

const Transition = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  // Update scroll percentage based on vertical scroll position
  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const percentage = (currentScroll / maxScroll) * 100;
      setScrollPercentage(percentage); // Update scroll percentage state
    };

    // Add scroll event listener to track scroll position
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className='fixed top-0 bottom-0 right-0 w-screen h-screen z-30 bg-[#2e2257]'
        style={{ height: `${scrollPercentage}%` }}
      ></div>
      <div
        className='fixed top-0 bottom-0 right-0 w-screen h-screen z-20 bg-[#3b2d71]'
        style={{ height: `${scrollPercentage}%` }}
      ></div>
      <div
        className='fixed top-0 bottom-0 right-0 w-screen h-screen z-10 bg-[#4b3792]'
        style={{ height: `${scrollPercentage}%` }}
      ></div>
    </>
  );
};

export default Transition;
