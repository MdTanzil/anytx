"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const FinanceCarousel = () => {
  const slides = [
    {
      title: "Customer focused",
      heading: "Purpose-built financial services",
      description:
        "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
      subDescription:
        "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behavior, and product marketing opportunities.",
      image: "/Assets/finence03.avif",
    },
    {
      title: "Agile and adaptable",
      heading: "Innovative Financial Solutions",
      description:
        "Our modern approach surpasses traditional banking and card processing systems, empowering you with the most advanced technology for lasting success.",
      subDescription:
        "Enjoy seamless integration with real-time financial data and secure transaction processing.",
      image: "/Assets/finence02.avif",
    },
    {
      title: "Compliance Ready",
      heading: "Secure and Transparent",
      description:
        "With real-time monitoring and compliance management, stay ahead of the evolving financial regulations with confidence.",
      subDescription: "",
      image: "/Assets/finence03.avif",
    },
    {
      title: "Secure & Safe",
      heading: "Robust Financial Security",
      description:
        "Our security-first infrastructure ensures the safety of transactions, data privacy, and customer trust.",
      subDescription: "",
      image: "/Assets/finence.avif",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef(null);

  // Auto change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, [isDragging]);

  // Handle button click to navigate to a specific slide
  const handleButtonClick = (index) => {
    setCurrentSlide(index);
  };

  // Handle mouse down to start dragging
  const handleMouseDown = (e) => {
    e.preventDefault(); // Prevent text selection
    setIsDragging(true);
    setStartX(e.clientX || e.touches[0].clientX); // Support both mouse and touch
  };

  // Handle mouse move to drag the carousel
  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const currentX = e.clientX || e.touches[0].clientX; // Support both mouse and touch
    const moveX = currentX - startX;
    setTranslateX(moveX);
  };

  // Handle mouse up to stop dragging and snap to the nearest slide
  const handleMouseUp = () => {
    if (!isDragging) return;

    setIsDragging(false);

    // Calculate the slide to snap to based on the drag distance
    const slideWidth = carouselRef.current.offsetWidth;
    const dragDistance = translateX;

    if (Math.abs(dragDistance) > slideWidth / 4) {
      // If drag distance is more than 25% of the slide width, change the slide
      setCurrentSlide((prev) =>
        dragDistance > 0
          ? (prev - 1 + slides.length) % slides.length
          : (prev + 1) % slides.length
      );
    }

    // Reset translateX
    setTranslateX(0);
  };

  return (
    <div className="relative w-full p-6">
      {/* Navigation Buttons */}
      <div className="flex justify-center space-x-4 ">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={`px-8 py-4 text-blue-700 font-semibold rounded-full transition duration-300 ${
              index === currentSlide ? "bg-blue-200" : "hover:bg-blue-200"
            }`}
            onClick={() => handleButtonClick(index)}
          >
            {slide.title}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="relative w-full overflow-hidden select-none" // Prevent text selection
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp} // Stop dragging if mouse leaves the carousel
        onTouchStart={handleMouseDown} // Touch support
        onTouchMove={handleMouseMove} // Touch support
        onTouchEnd={handleMouseUp} // Touch support
      >
        <div className="carousel mt-4 h-[400px] md:h-[550px]">
          {/* Carousel Body */}
          <div
            className="carousel-body relative h-full w-full flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(calc(-${
                currentSlide * 100
              }% + ${translateX}px))`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                className="card sm:card-side max-w-md sm:max-w-full shadow-xl p-12 "
                key={index}
              >
                <div className="card-body gap-x-4">
                  <h3 className="montserrat-font text-primary text-lg font-semibold">
                    {slide.title}
                  </h3>{" "}
                  <h1 className="text-4xl text-[#0b305b] mt-6 font-montserrat montserrat-font font-medium :text-6xl lg:text-7xl">
                    {slide.heading}
                  </h1>{" "}
                  <p className="mt-8 text-lg font-semibold text-[#164377] sm:text-xl">
                    {slide.description}
                  </p>{" "}
                  <p className="mt-8 text-md font-light text-[#164377] sm:text-xl">
                    {slide.subDescription}
                  </p>
                </div>
                <figure className="md:w-[500px] md:h-[500px] sm:w-[400px] sm:h-[400px] flex-shrink-0">
                  <Image
                    src={`${slide.image}`}
                    alt="Illustration 1"
                    width={1200}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceCarousel;
