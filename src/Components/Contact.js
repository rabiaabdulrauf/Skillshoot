import React from 'react';
import mbl from "../Assets/mbl.png"
const Contact = () => {
  return (
    <div>
      <div className="h-auto bg-[#f4e8ff] w-100 flex flex-col justify-center pt-10 pb-10" id='contact'>
       <div className="button flex justify-center  mt-4 ">
        <div className="flex-row flex border border-purple-500 px-6 gap-3 py-4  rounded-3xl">
            <div className="">
             <img src={mbl} alt="" />
             </div>
      <button className=''>
        Contact </button>
        </div>
    </div>
       <div className="text-center pt-6 font-bold text-5xl">
        <h1>We Are Here to Support You</h1>
       </div>
       <div className="text-center pt-6">
        <p>Customer support is our highest priority. We’re here to answer all your questions via our 24/7 Live Chat.</p>
       </div>
       <div className="px-10  max-sm:px-5 py-10 shadow-lg bg-white mx-auto mt-10  rounded-2xl ">
        <div className="flex flex-row justify-center  flex-wrap   ">
            <div className="flex-col flex  f">
                <div className="flex flex-wrap flex-row gap-10">
        <div className="flex flex-col ">
        <label htmlFor="name" className='font-bold pl-2'>NAME</label>
        <input className='h-14 rounded-2xl px-6 border  ' type="text" name="" id="" placeholder='Enter your name' />
        </div>
        <div className="flex flex-col ">
        <label htmlFor="name " className='font-bold pl-2' >EMIAL</label>
        <input className='h-14 rounded-2xl px-6 border' type="text" name="" id="" placeholder='Enter your email' />
        </div>
        </div>
        <div className="flex flex-col pt-6  ">
        <label htmlFor="name " className='font-bold pl-2' >MESSAGE</label>
        <textarea className='px-4 py-6 rounded-2xl border' name="" id="" placeholder='Enter your message'></textarea>
        </div>
        <div className="mt-10 bg-purple-400  mx-auto rounded-lg px-4 py-3 flex justify-center items-center  ">
          <button>Sent your message</button>
        </div>
        </div>
        </div>
        
       </div>
      </div>
    </div>
  );
}

export default Contact;
