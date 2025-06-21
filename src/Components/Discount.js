

import React, { useEffect, useRef, useState } from 'react';
import pic from "../Assets/new.png";

const Discount = () => {
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
    <div ref={sectionRef} className="overflow-x-hidden overflow-y-hidden" id='price'>
      <div className="h-auto w-100 bg-purple-100">
        <div
          className={`flex flex-col w-[70%] border rounded-3xl gap-6 mx-auto pb-5 justify-center mt-5 items-center transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="border border-purple-400 rounded-full px-4 py-4 mt-16">
            <img src={pic} alt="" className="h-20" />
          </div>
          <div className="text-4xl text-center font-bold">
            <h1>Happy New Year, 20% Discount <br /> For You Today</h1>
          </div>
          <div className="text-center">
            <p>Excepteur sint occaecat cupidatat non proident, sunt in <br /> culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="button flex justify-center mt-4">
            <button className="border px-12 py-4 bg-purple-500 rounded-3xl">ENROLL NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
