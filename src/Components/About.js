

import React, { useEffect, useRef, useState } from "react";
import about from "../Assets/about.png";
import ab from "../Assets/ab-logo.png";

const About = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="overflow-x-hidden" id="about"> 
      <div className="bg-gradient-to-t from-white to-purple-200 h-auto pb-10 flex flex-row flex-wrap justify-evenly">
        <div
          className={`lg:w-[40%] sm:w-[100%] justify-center items-center flex transition-all duration-1000 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-32"
          }`}
        >
          <img src={about} alt="" className="rounded-2xl" />
        </div>
        <div
          className={`lg:w-[40%] sm:w-[100%] flex flex-col justify-center items-start transition-all duration-1000 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-32"
          }`}
        >
          <div className="flex flex-row gap-3 py-3">
            <div className="flex border rounded-2xl gap-2 px-5 py-3 ml-4 bg-white">
              <img src={ab} alt="" className="h-6" />
              <button>About us</button>
            </div>
          </div>

          <div className="text-left text-4xl font-bold pt-8">
            <h1 className="pl-4">Discover Who We Are and Our Mission</h1>
          </div>

          <div className="pt-10">
            <p className="pl-4">
             ★ Learn at your pace, anytime – anywhere. 
            </p>
             <p className="pl-4">
            ★ Real-world projects & expert support.
            </p>
             <p className="pl-4">
            ★  Job-ready skills that make a difference. 
            </p>
          </div>

          <div className="button flex justify-start mt-8 ml-4">
            <button className="border px-12 py-4 bg-purple-500 rounded-3xl">BOOK CALL</button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
