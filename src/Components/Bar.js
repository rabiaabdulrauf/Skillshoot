
import React, { useState } from 'react';
import logo from "../Assets/LOGO.png";
import bg from "../Assets/bg.png"; 
import { Link } from 'react-router-dom';

const Bar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div style={{ backgroundImage: `url(${bg})` }} className='h-auto w-100 bg-no-repeat bg-cover pt-4 pb-10' >
    <nav
      className="bg-white  lg:mx-20 rounded-2xl " 
    >
      
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-purple-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img className="h-8 w-auto" src={logo} alt="Your Company" />
              <h4 className="text-purple-500 text-lg font-bold ml-2">SkillShoot</h4>
            </div>
             <div className="hidden sm:flex flex-wrap items-center gap-3 md:pl-24 lg:pl-6">
              <div className="flex  space-x-3 lg:gap-4 items-center ">
                <a href="/" className="rounded-md  lg:px-3 md:px-1 py-2 text-sm font-medium hover:text-purple-500">Home</a>
                <a href="#about" className="rounded-md lg:px-3 md:px-1 py-2 text-sm font-medium hover:text-purple-500 whitespace-nowrap">About us</a>

                <a href="#course" className="rounded-md lg:px-3 md:px-1 py-2 text-sm font-medium hover:text-purple-500">Courses</a>
                <a href="#price" className="rounded-md lg:px-3 md:px-1 py-2 text-sm font-medium hover:text-purple-500">Pricing</a>
                <a href="#contact" className="rounded-md lg:px-3 md:px-1 py-2 text-sm font-medium hover:text-purple-500 whitespace-nowrap">Contact us</a>
                <Link to="/login">
                    <button className="ml-4 px-4 h-10 py-1 border border-purple-500 rounded-2xl text-purple-500 hover:bg-purple-500 hover:text-white text-sm whitespace-nowrap">Login</button>
                    </Link>
                    <Link to="/signup">
    <button className="px-4 py-1 h-10 bg-purple-500 text-white rounded-xl text-sm hover:bg-purple-600 whitespace-nowrap">Sign Up</button>
    </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden" id="mobile-menu ">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <a href="/" className="block rounded-md bg-purple-500 px-3 py-2 text-base font-medium text-white">Home</a>
            <a href="#about" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-purple-500 hover:text-white">About us</a>
            <a href="#course" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-purple-500hover:text-white">Courses</a>
            <a href="#price" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-purple-500 hover:text-white">Pricing</a>
            <a href="#contact" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-purple-500 hover:text-white">Contact us</a>
             <Link to="/login">
                    <button className="ml-1 px-4 h-10 py-1 border border-purple-500 rounded-2xl text-purple-500 hover:bg-purple-500 hover:text-white text-sm whitespace-nowrap">Login</button>
                    </Link>
                    <Link to="/signup">
    <button className="px-4 py-1 h-10 bg-purple-500 text-white rounded-xl text-sm hover:bg-purple-600 whitespace-nowrap">Sign Up</button>
    </Link>
          </div>
        </div>
      )}
    </nav>
    <div className='text-center items-center font-bold text-7xl max-sm:text-5xl  px-20 py-10' id='tt'>
      <h1 className='lg:pt-20 '>There's Always More to <br/>  Discover and Learn</h1>
    </div>
    <div className="text-center " >
      <p>Ideal for creatives. Learn design, photography, writing, and more from industry pros.</p>
    </div>
    <div className="button flex justify-center mt-4 ">
      <button className='border px-12 py-4 bg-purple-500 rounded-3xl'>ENROLL NOW </button>
    </div>
    
    </div>
  );
};

export default Bar;


