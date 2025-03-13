import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { FaSquareXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div  id='contact' className='md:px-24 sm:px-12 px-8 pt-10'>
      <h1 className='font-playfair sm:text-xl text-sm md:text-3xl py-4 font-bold text-center'>Contact</h1>
      <div className='flex gap-20'>
      <div className='hidden md:block'>
        <img className='w-full hover:scale-110 transition  ease-in-out h-3/4' src="https://images.pexels.com/photos/19238353/pexels-photo-19238353/free-photo-of-a-person-using-a-mouse-on-a-desk.jpeg?auto=compress&cs=tinysrgb&w=400" alt="contact" />
      </div>
      
      <div className='md:flex hidden py-20 gap-5'>
      <div>
        <NavLink to="https://x.com/kositeli">
          <FaSquareXTwitter size={30} />
        </NavLink>
      </div>
      <div>
        <NavLink to="https://www.linkedin.com/in/vivianojiteli/">
          <FaLinkedin size={30} />
        </NavLink>
      </div>
      <div>
        <a target='_blank' href="mailto:obuekwekosi@gmail.com">
          <MdOutlineEmail size={30} />
        </a>
        
      </div>
      </div>
      </div>
      {/* for small screens */}
      <div className='block md:hidden'>
      <div className='py-6'>
        <img className='w-full hover:scale-110 transition  ease-in-out' src="https://images.pexels.com/photos/19238353/pexels-photo-19238353/free-photo-of-a-person-using-a-mouse-on-a-desk.jpeg?auto=compress&cs=tinysrgb&w=400" alt="contact" />
      </div>
      <div className='flex justify-center py-10 gap-5'>
      <div>
        <NavLink to="https://x.com/kositeli">
          <FaSquareXTwitter size={30} />
        </NavLink>
      </div>
      <div>
        <NavLink to="https://www.linkedin.com/in/vivianojiteli/">
          <FaLinkedin size={30} />
        </NavLink>
      </div>
      <div>
        <a target='_blank' href="mailto:obuekwekosi@gmail.com">
          <MdOutlineEmail size={30} />
        </a>
        
      </div>
      </div>
      </div>


    </div>
  )
}

export default Contact
