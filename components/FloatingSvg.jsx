"use client";
import { motion } from "framer-motion";

const FloatingSvg = () => {
  const svgSources = [
    "./Assets/backgrounds/WaveLinesDesktop1.svg",
    "./Assets/backgrounds/WaveLinesDesktop2.svg",
    "./Assets/backgrounds/WaveLinesDesktop3.svg",
  ];

  return (
    <motion.div
      className="absolute top-0 left-0 w-full flex z-10 justify-center gap-4"
      whileHover={{ translateX: 20, translateY: 20 }} // Adjust these values as needed
      transition={{ type: "spring", stiffness: 400, damping: 400 }}
    >
      {svgSources.map((src, index) => (
        <img
          key={index}
          className="w-1/3 object-contain"
          src={src}
          alt={`Floating SVG ${index + 1}`}
        />
      ))}
    </motion.div>
  );
};

export default FloatingSvg;
