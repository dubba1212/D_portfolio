import React from 'react';
import { BsArrowRight, BsLinkedin, BsEnvelope, BsTelephone } from 'react-icons/bs'; // Assuming you have react-icons installed

const Contact = () => {
  return (
    <div className='bg-primary/30 py-6'> {/* Updated background color */}
      <div className='container mx-auto px-4'> {/* min-h-screen removed */}
        {/* Heading */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-white mb-2'>Get In Touch</h1> {/* Updated text color */}
          <p className='text-white/60'>Have a question or want to work together? Reach out to me!</p> {/* Updated text color */}
        </div>

        <div className='flex flex-col lg:flex-row gap-6'>
          {/* Contact Form */}
          <div className='lg:w-1/2 bg-white/10 p-4 rounded-lg shadow-md'> {/* Updated background color */}
            <form>
              <div className='mb-4'>
                <label htmlFor='name' className='block text-white/70 text-sm font-bold mb-2'> {/* Updated text color */}
                  Your Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  placeholder='John Doe'
                  className='shadow appearance-none border border-white/20 rounded w-full py-2 px-3 bg-white/10 text-white leading-tight focus:outline-none focus:shadow-outline' /* Updated styles */
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='email' className='block text-gray-700 text-sm font-bold mb-2'>
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='john@example.com'
                  className='shadow appearance-none border border-white/20 rounded w-full py-2 px-3 bg-white/10 text-white leading-tight focus:outline-none focus:shadow-outline' /* Updated styles */
                />
              </div>
              <div className='mb-6'>
                <label htmlFor='message' className='block text-gray-700 text-sm font-bold mb-2'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows='6'
                  placeholder='Your message here...'
                  className='shadow appearance-none border border-white/20 rounded w-full py-2 px-3 bg-white/10 text-white leading-tight focus:outline-none focus:shadow-outline' /* Updated styles */
                ></textarea>
              </div>
              <div className='flex items-center justify-between'>
                <button
                  type='submit'
                  className='btn rounded-full border border-white/50 px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group' /* Updated button style */
                >
                  <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Send Message</span> {/* Updated button text structure */}
                  <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' /> {/* Added icon */}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className='lg:w-1/2 bg-white/10 p-8 rounded-lg shadow-md text-white'> {/* Updated background and text color */}
            <h2 className='text-2xl font-bold mb-6'>Contact Information</h2> {/* Text color inherited from parent */}
            <div className='mb-4 flex items-center'>
              <BsTelephone className='text-accent mr-3 text-xl' /> {/* Updated icon color */}
              <span>(703) 438-5796</span> {/* Text color inherited from parent */}
            </div>
            <div className='mb-4 flex items-center'>
              <BsEnvelope className='text-accent mr-3 text-xl' /> {/* Updated icon color */}
              <span>dubbasrikanth12@gmail.com</span> {/* Text color inherited from parent */}
            </div>
            <div className='mb-6 flex items-center'>
              <BsLinkedin className='text-accent mr-3 text-xl' /> {/* Updated icon color */}
              <a href='https://linkedin.com/in/vamshik09' className='text-accent hover:underline'> {/* Updated link color */}
                linkedin.com/in/reddy-sri
              </a>
            </div>

            {/* Connect with me */} {/* Text color inherited from parent */}
            <h2 className='text-2xl font-bold mb-4'>Connect with me</h2> {/* Text color inherited from parent */}
            <div className='flex gap-4'>
              <a href='https://linkedin.com/in/vamshik09' className='text-accent hover:text-white text-3xl transition-all duration-300'> {/* Updated icon and hover color */}
                <BsLinkedin />
              </a>
              {/* Add other social media icons as needed */}
               <a href='#' className='text-accent hover:text-white text-3xl transition-all duration-300'> {/* Updated icon and hover color */}
                <BsEnvelope />
              </a>
               <a href='#' className='text-accent hover:text-white text-3xl transition-all duration-300'> {/* Updated icon and hover color */}
                <BsTelephone />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;