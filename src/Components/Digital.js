import React from 'react';
import logo from "../Assets/LOGO.png";
import dm from "../Assets/dm.png";
const Digital = () => {
  return (
    <div>
      <div className="flex justify-center items-center pt-4 pb-4 shadow-md bg-white flex-wrap px-4">
              <img className="h-8 w-auto" src={logo} alt="Your Company" />
              <h4 className="text-purple-500 text-3xl font-bold ml-2">SkillShoot</h4>
            </div>
            <div className="bg-gradient-to-t from-white to-purple-200 py-10 px-6">
              <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
                <div className="w-full lg:w-1/2 text-left pl-8">
                  <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-black">Digital Marketer</h1>
                  <p className="pt-6  text-black text-base sm:text-lg">
                    Your career in digital marketing starts here.<br />
                    Fast-track learning and interview prep. Grow skills at your own pace.<br />
                    Unlock your earnings potential.
                  </p>
                  <div className="flex flex-wrap gap-6 pt-6">
                    <div className="flex flex-col text-black">
                      <p className="font-bold text-lg">★ 4.5</p>
                      <p className="text-sm">average course rating</p>
                    </div>
                    <div className="flex flex-col text-black">
                      <p className="font-bold text-lg">16</p>
                      <p className="text-sm">practice exercises </p>
                    </div>
                    <div className="flex flex-col text-black">
                      <p className="font-bold text-lg">28.6</p>
                      <p className="text-sm">hours of content</p>
                    </div>
                  </div>
                  <div className="  border mt-6 justify-center p-4 w-[150px] bg-purple-500 text-white flex  rounded-2xl ">
                     <button>Get started <i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center ">
                  <img src={dm} alt="Full Stack" className="w-full max-w-[450px] h-auto rounded-lg" />
                </div>
              </div>
            </div>
    </div>
  );
}

export default Digital;

