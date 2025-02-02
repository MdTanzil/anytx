"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const floatingVariants1 = {
  animate: {
    y: [0, -10, 0], // Moves up and down
    transition: {
      duration: 4.2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

const floatingVariants2 = {
  animate: {
    y: [-5, 10, -5], // Moves down then up
    transition: {
      duration: 3.8, // Slightly different timing
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

const floatingVariants3 = {
  animate: {
    y: [0, -12, 5], // Moves up, then slightly down
    transition: {
      duration: 6.9, // Different speed
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

const Finance = () => {
  return (
    <div className="max-w-7xl mx-auto mt-28 relative">
      <div className="card sm:card-side max-w-sm sm:max-w-full shadow-none">
        <div className="card-body gap-x-4">
          <h3 className="montserrat-font text-primary text-lg font-semibold">
            POWERING THE FUTURE OF FINANCE
          </h3>
          <h1 className="text-4xl text-[#0b305b] mt-6 font-montserrat montserrat-font font-medium lg:text-7xl">
            Uncovering new <br /> ways to delight <br /> customers
          </h1>
          <p className="mt-8 text-lg font-semibold text-[#164377] sm:text-xl">
            AnyTech is revolutionising financial technology by introducing
            innovative and real-time transaction account processing
            capabilities, specifically designed for retail financial services.
          </p>
          <p className="mt-8 text-md font-light text-[#164377] sm:text-xl">
            Our modern approach surpasses traditional banking and card
            processing systems, empowering you with the most advanced technology
            for lasting success.
          </p>
        </div>
        <figure className="relative">
          {/* Background Image */}
          <Image
            src="/Assets/cardImage.png"
            alt="Illustration 1"
            width={1200}
            height={100}
            className="w-full"
          />

          {/* Floating SVGs with Different Animations */}
          <motion.img
            src="/Assets/card.svg"
            alt="Icon 1"
            className="absolute top-10 -left-2 w-24"
            variants={floatingVariants1}
            animate="animate"
          />
          <motion.img
            src="/Assets/analitic.svg"
            alt="Icon 2"
            className="absolute top-1/2 left-32 w-24"
            variants={floatingVariants2}
            animate="animate"
          />
          <motion.img
            src="/Assets/property.svg"
            alt="Icon 3"
            className="absolute top-16 -right-4 w-24"
            variants={floatingVariants3}
            animate="animate"
          />
        </figure>
      </div>
    </div>
  );
};

export default Finance;
