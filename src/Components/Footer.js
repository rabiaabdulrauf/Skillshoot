import React from 'react';
import logo from "../Assets/LOGO.png";
import yt from "../Assets/yt.png";
import fb from "../Assets/fb.png";
import tw from "../Assets/twiit.png";
import li from "../Assets/linked.png";
const Footer = () => {
  return (
    <div>
      <div className="flex pb-8 bg-white flex-col justify-center items-center pt-10">
      <div className="flex flex-row items-center">
        <img src={logo} alt="" className='h-10' />
        <h4 className="text-purple-500 text-lg font-bold ml-2">SkillShoot</h4>
      </div>
      <div className="pt-5">
       <h1 className='text-center font-bold text-4xl'>Subscribe To Get Notified About Update</h1>
      </div>
      <div className="pt-4 text-2xl font-light text-center">
        <p>By subscribing with your mail, you will accept our privacy policy</p>
      </div>
      <div className="flex flex-wrap justify-center gap-2 space-x-6 mt-8 mb-8">
        <button className='border bg-white h-10 w-20 rounded-2xl '>Home</button>
        <button className='border bg-white h-10 w-40  rounded-2xl '>About us</button>
        <button className='border bg-white h-10 w-40 rounded-2xl '>CoursesFeature</button>
        <button className='border bg-white h-10 w-20 rounded-2xl '>Pricing</button>
        <button className='border bg-white h-10 w-20  rounded-2xl '>Contact us</button>
      </div>
     <div class="w-full h-px bg-gray-300 my-4"></div>
     <div className="flex flex-wrap justify-evenly  ">
    <div className='mr-8'>
         <img src={logo} alt="" className='h-8' />
    </div>
    <div className="flex list-none space-x-4 ">
        <li>Licenses</li>
        <li>Style Guide</li>
        <li>Change Log</li>
    </div>
    <div className="flex flex-wrap  space-x-3 ml-6">
        <div className="">
            <img src={li} alt=""  className='h-8 '  href="/path" />
        </div>
         <div className="">
            <img src={tw} alt="" className='h-8 '  href="/path" />
        </div>
         <div className="">
            <img src={fb} alt="" className='h-8 '  href="/path" />
        </div>
         <div className="">
            <img src={yt} alt="" className='h-8 '  href="/path" />
        </div>
    </div>
     </div>
      </div>
    </div>
  );
}

export default Footer;
