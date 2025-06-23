import React from 'react';
import log from "../Assets/log.webp";
import logo from "../Assets/LOGO.png";
const Signup = () => {
  return (
    <div>
        <div className="flex  justify-center pt-2 pb-2 items-center shadow-md">
                <img className="h-8 w-auto" src={logo} alt="Your Company" />
                <h4 className="text-purple-500 text-3xl font-bold ml-2">SkillShoot</h4>
              </div>
              <div className="flex flex-row flex-wrap justify-evenly  mt-10">
                <div className="w-80">
                  <img src={log} alt="" />
                </div>
                <div className="flex flex-col   ">
                  <div className="  text-center font-bold text-3xl pt-8">
                    <h1>
                      Sign up with email
                    </h1>
                  </div>
                  <div className="flex  mt-8 px-2 ">
                    <input
                      type="text"
                      placeholder="Your name"
                      className="h-[50px] border rounded-md border-black w-full font-bold placeholder:text-black pl-4"
                    />
                  </div>
                  <div className="flex  mt-8 px-2 ">
                    <input
                      type="text"
                      placeholder="Email"
                      className="h-[50px] border rounded-md border-black w-full font-bold placeholder:text-black pl-4"
                    />
                  </div>
                  <div className="flex justify-center pt-6 items-start gap-8 ">
                    <div className="mt-2">
                        <input type="checkbox" />
                    </div>
                    <div className="">
                        <p>Send me special offers,personalized<br/> recommendation , and learning tips. </p>
                    </div>
                  </div>
                  <div className="flex border  h-[50px] bg-purple-500 flex-row items-center justify-center mt-8 w-[95%] mx-auto rounded-md gap-2">
                    <div className="text-white">
                      <i class="fa-regular fa-envelope"></i>
                    </div>
                    <div className=" font-bold text-white">Continue with email</div>
                  </div>
                  <div className="flex flex-row items-center mt-4">
                    <hr className="w-20 bg-black" />
                    <div className="px-4 whitespace-nowrap">other log in options</div>
                    <hr className="w-20 bg-black" />
                  </div>
                  <div className="flex flex-row justify-center gap-10 mt-4 mb-4">
                    <div className=" border border-black py-1 px-2">
                      <a href="/path"><i class="fa-brands fa-google"></i></a>
                    </div>
                    <div className="border border-black py-1 px-2">
                      <a href="/path"><i class="fa-brands fa-facebook"></i></a>
                    </div>
                    <div className="border border-black py-1 px-2">
                      <a href="/path"><i class="fa-brands fa-twitter"></i></a>
                    </div>
                  </div>
                  <div className=" mb-4 mt-4 border w-[95%] mx-auto text-center h-10 items-center flex justify-center bg-gray-200">
                    <p>Don't have an account? <a href="/path" className="underline  text-purple-600">Login</a></p>
                  </div>
                </div>
              </div>
    </div>
  );
}

export default Signup;
