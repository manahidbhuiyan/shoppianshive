import React, { useState, useEffect, useRef } from 'react';

const Counter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState([
    { id: 1, value: 0, target: 14, title: "Years of experience" },
    { id: 2, value: 0, target: 500, title: "Happy Customer" },
    { id: 3, value: 0, target: 4530, title: "Project Delivered" },
    { id: 4, value: 0, target: 450, title: "Employees" }
  ]);

  const sectionRef = useRef(null);

  // Intersection Observer for detecting visibility
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Only trigger once
      }
    }, { threshold: 0.5 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counter animation using requestAnimationFrame
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // Animation duration in ms
    const startTime = performance.now();

    const animateCounters = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Progress between 0-1

      setCounters(prevCounters => 
        prevCounters.map(counter => ({
          ...counter,
          value: Math.floor(counter.target * progress)
        }))
      );

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      }
    };

    requestAnimationFrame(animateCounters);
  }, [isVisible]);

  return (
    <div className="bg-[#EEE4FF] w-full" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="w-full flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap lg:gap-5">
          {counters.map((counter, index) => (
            <div 
              key={counter.id} 
              className={`w-full sm:w-[calc(50%-10px)] lg:w-1/4 ${
                index % 2 === 0 
                  ? "bg-gradient-to-b from-[#DECFF6] to-[#EEE4FF]" 
                  : "bg-[#EEE4FF]"
              } text-center py-[60px] px-[30px]`}
            >
              <h2 className="text-[#161616] text-[50px] font-bold">
                <span className="pr-1">{counter.value}</span>+
              </h2>
              <p className="text-[#3F444B] text-[20px] mt-2.5 transition-all duration-300">
                {counter.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counter;
