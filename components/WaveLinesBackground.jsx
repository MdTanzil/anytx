"use client";
import { useState } from "react";

const WaveLinesBackground = () => {
  const svgSources = [
    "./Assets/backgrounds/WaveLinesDesktop1.svg",
    "./Assets/backgrounds/WaveLinesDesktop2.svg",
    "./Assets/backgrounds/WaveLinesDesktop3.svg",
    "./Assets/backgrounds/WaveLinesDesktop4.svg",
  ];

  const AnimatedSVG = ({ src, alt }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className={`transition-all duration-300 ease-in-out ${
          isHovered ? "scale-110 rotate-6" : "scale-100 rotate-0"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </div>
    );
  };

  return (
    <div className="absolute inset-0 z-0">
      {svgSources.map((src, index) => (
        <AnimatedSVG key={index} src={src} alt={`Wave Lines ${index + 1}`} />
      ))}
    </div>
  );
};

export default WaveLinesBackground;
