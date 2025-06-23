

import React, { useEffect, useRef, useState } from 'react';
import web from "../Assets/fs (2).png";
import pm from "../Assets/pm.png";
import dm from "../Assets/dm.png";
import { Link } from 'react-router-dom';

const Learning = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} id='course'>
      <div className="h-auto pb-4 pt-6 w-full bg-gradient-to-t from-white to-purple-200">
        <h1 className={`text-center font-bold text-5xl transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Interactive Learning Experience
        </h1>

        <div className="flex flex-col h-auto mt-4 gap-6 justify-center px-4">
          {/* First Row */}
          <div className="flex flex-row flex-wrap justify-center gap-10">
            <div
              className={`border-2 border-white h-100 w-[22%] min-w-[250px] flex flex-col items-start justify-center  p-2 gap-2 bg-white transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '0ms' }}
            >
              <img src={web} alt="" className='h-full '  />
              <Link to='/stack'>
              <h2 className="font-bold">Full Stack web Developer</h2>
              </Link>
              <div className="flex gap-2 border-t-2 ">
                <div className="font-bold">★ 4.7</div>
                <div className="font-thin  ">447K rating</div>
              </div>
            </div>

            <div
              className={`border-2 border-white h-100 w-[22%] min-w-[250px] flex flex-col items-start justify-center p-2 gap-2 bg-white transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '200ms' }}
            ><img src={dm} alt="" className='' />
              <Link to='/digital'>
              <h2 className="font-bold">Digital Marketing</h2>
              </Link>
              <div className="flex gap-2 border-t-2 ">
                <div className=" font-bold">★ 4.7</div>
                <div className="font-thin">447K rating</div>
              </div>
            </div>

            <div
              className={`border-2 border-white h-100 w-[22%] min-w-[250px] flex flex-col items-start justify-center p-2 gap-2 bg-white transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '400ms' }}
            >
            <img src={pm} alt="" className='' />
              <Link to='/project'>
              <h2 className="font-bold">Project Management</h2>
              </Link>
              <div className="flex gap-2 border-t-2 ">
                <div className="font-bold">★ 4.7</div>
                <div className="font-thin">447K rating</div>
                
              </div>
            </div>
          </div>

          {/* Second Row */}
          {/* <div className="flex flex-row flex-wrap justify-center gap-10">
           <div
              className={`border-2 border-white h-100 w-[22%] min-w-[250px] flex flex-col items-start justify-center p-2 gap-2 bg-white transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '200ms' }}
            ><img src="" alt="" className='' />
              
              <h2 className="font-bold">Digital Marketing</h2>
              <div className="flex gap-2 border-t-2 ">
                <div className=" font-bold">★ 4.7</div>
                <div className="font-thin">447K rating</div>
                <div className="font-thin ">87.4 total hours</div>
              </div>
            </div>

            <div
              className={`border-2 border-white h-100 w-[22%] min-w-[250px] flex flex-col items-start justify-center p-2 gap-2 bg-white transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '200ms' }}
            ><img src={dm} alt="" className='' />
              
              <h2 className="font-bold">Digital Marketing</h2>
              <div className="flex gap-2 border-t-2 ">
                <div className=" font-bold">★ 4.7</div>
                <div className="font-thin">447K rating</div>
                <div className="font-thin ">87.4 total hours</div>
              </div>
            </div>

            <div
              className={`border-2 border-white h-100 w-[22%] min-w-[250px] flex flex-col items-start justify-center p-2 gap-2 bg-white transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '200ms' }}
            ><img src={dm} alt="" className='' />
              
              <h2 className="font-bold">Digital Marketing</h2>
              <div className="flex gap-2 border-t-2 ">
                <div className=" font-bold">★ 4.7</div>
                <div className="font-thin">447K rating</div>
                <div className="font-thin ">87.4 total hours</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Learning;
