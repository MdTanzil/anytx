"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-md  py-3 z-50" : "bg-[#005bc4] py-5"
      }`}
    >
      <div className="container mx-auto max-w-7xl">
        <nav className="navbar bg-transparent flex justify-between items-center">
          {/* Logo */}
          <a className="text-xl font-semibold no-underline" href="#">
            <Image
              src={`${
                scrolled ? "./Assets/logo.svg" : "./Assets/white_logo.svg"
              }`}
              height={150}
              width={180}
              alt="logo"
              className={scrolled ? " w-auto transition-all duration-300" : ""}
            />
          </a>

          {/* Menu */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="#" className={scrolled ? "text-black" : "text-white"}>
                Solutions
              </a>
            </li>
            <li>
              <a href="#" className={scrolled ? "text-black" : "text-white"}>
                Services
              </a>
            </li>
            <li>
              <a href="#" className={scrolled ? "text-black" : "text-white"}>
                About Us
              </a>
            </li>
          </ul>

          {/* Contact Button */}
          <a
            className={`btn ${
              scrolled
                ? "btn-primary text-white bg-black"
                : "btn-outline text-white border-white"
            }`}
            href="#"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
