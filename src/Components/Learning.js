

import React, { useEffect, useRef, useState } from 'react';

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

  // delay generator helper
  const getDelay = (index) => ({
    transitionDelay: `${index * 200}ms`,
  });

  return (
    <div ref={sectionRef} id='course'>
      <div className="h-auto pb-4 pt-6 w-full bg-gradient-to-t from-white to-purple-200">
        <h1 className={`text-center font-bold text-5xl transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Interactive Learning Experience
        </h1>

        <div className="flex flex-col h-auto mt-4 gap-6 justify-center px-4">
          {/* First Row */}
          <div className="flex flex-row flex-wrap justify-center gap-10">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`border-2 border-white h-40 w-[22%] min-w-[250px] flex flex-col items-start justify-center pl-3 gap-2 bg-white transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={getDelay(i)}
              >
                <h2 className="font-bold">{['Expert Team', 'Client Approach', 'Proven Experience'][i]}</h2>
                <p>Lorem ipsum dolor sit ame, consectetur adipiscing elit</p>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="flex flex-row flex-wrap justify-center gap-10">
            {[3, 4, 5].map((i) => (
              <div
                key={i}
                className={`border-2 border-white h-40 w-[22%] min-w-[250px] flex flex-col items-start justify-center pl-3 gap-2 bg-white transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={getDelay(i)}
              >
                <h2 className="font-bold">{['Expert Team', 'Client Approach', 'Proven Experience'][i - 3]}</h2>
                <p>Lorem ipsum dolor sit ame, consectetur adipiscing elit</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Learning;


