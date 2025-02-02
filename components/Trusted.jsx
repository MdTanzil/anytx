"use client";
import { motion, useInView } from "framer-motion";

import { useEffect, useRef, useState } from "react";

const Counter = ({ from, to, duration = 2, start, ext = "" }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!start) return; // Start counting only when in view
    let startValue = from;
    const totalFrames = duration * 60; // 60 FPS
    const increment = (to - from) / totalFrames;

    const interval = setInterval(() => {
      startValue += increment;
      if (startValue >= to) {
        startValue = to;
        clearInterval(interval);
      }
      setCount(Math.round(startValue));
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [from, to, duration, start]);

  return (
    <motion.h3
      className="text-[#126ed9] text-6xl font-bold text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: start ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      title="Counter" // Fixed title issue
    >
      {ext === ">"
        ? `${ext}${count.toLocaleString()}`
        : `${count.toLocaleString()}${ext}`}
    </motion.h3>
  );
};

const Trusted = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Detect when in view
  const duration = 0.8; // Set the same duration for all numbers

  return (
    <div ref={ref} className="mt-10 container mx-auto max-w-7xl">
      <h4 className="text-center text-lg text-primary font-extrabold montserrat-font">
        TRUSTED BY THE BEST
      </h4>
      <div className="mt-8 flex justify-evenly max-w-[600px] mx-auto">
        <div>
          <Counter
            from={0}
            to={20}
            duration={duration}
            start={isInView}
            ext=">"
          />
          <h5 className="text-[#1e2637] mt-2 text-center text-md">
            Years of Experience
          </h5>
        </div>
        <div>
          <Counter
            from={0}
            to={40}
            duration={duration}
            start={isInView}
            ext="+"
          />
          <h5 className="text-[#1e2637] mt-2 text-center text-md">
            Financial Institutions
          </h5>
        </div>
        <div>
          <Counter
            from={0}
            to={200}
            duration={duration}
            start={isInView}
            ext="m"
          />
          <h5 className="text-[#1e2637] mt-2 text-center text-md">
            Customers Each (in million)
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
