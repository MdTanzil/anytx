"use client";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Button, Drawer, IconButton, Toolbar } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  return (
    <div className="overflow-hidden">
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled ? "white" : "#005bc4",
          boxShadow: scrolled ? "0 4px 6px rgba(0,0,0,0.1)" : "none",
          paddingY: 2,
          zIndex: 50,
        }}
        className=""
      >
        <Toolbar
          className="flex justify-between items-center max-w-7xl mx-auto w-full"
          sx={{ maxWidth: "1280px" }}
        >
          {/* Logo */}
          <a href="#" className="text-xl font-semibold no-underline">
            <Image
              src={`${
                scrolled ? "./Assets/logo.svg" : "./Assets/white_logo.svg"
              }`}
              height={150}
              width={180}
              alt="logo"
              className="transition-all duration-300"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Button
              color={scrolled ? "inherit" : "white"}
              sx={{
                textTransform: "none",
                color: scrolled ? "black" : "white",
                fontSize: "16px",
              }}
              className="text-lg"
            >
              Solutions
            </Button>
            <Button
              color={scrolled ? "inherit" : "white"}
              sx={{
                textTransform: "none",
                color: scrolled ? "black" : "white",
                fontSize: "16px",
              }}
              className="text-lg"
            >
              Services
            </Button>
            <Button
              color={scrolled ? "inherit" : "white"}
              sx={{
                textTransform: "none",
                color: scrolled ? "black" : "white",
                fontSize: "16px",
              }}
            >
              About Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className=" md:hidden">
            <IconButton
              sx={{ color: scrolled ? "black" : "white" }}
              onClick={handleMenuToggle}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </div>

          {/* Contact Button */}
          <Button
            href="#"
            variant={scrolled ? "contained" : "outlined"}
            color={scrolled ? "error" : "white"}
            size="large"
            sx={{
              textTransform: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              display: { xs: "none", md: "inline-flex" },
              backgroundColor: scrolled && "#fe8b53",
            }}
          >
            Contact Us
          </Button>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="left"
        open={menuOpen}
        onClose={handleMenuToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: 250,
            paddingTop: 20,
            backgroundColor: "#005bc4",
            color: "white",
            zIndex: 100,
          },
        }}
      >
        <Button
          color="white"
          sx={{ textTransform: "none", width: "100%", marginBottom: 2 }}
          onClick={handleMenuToggle}
        >
          Solutions
        </Button>
        <Button
          color="white"
          sx={{ textTransform: "none", width: "100%", marginBottom: 2 }}
          onClick={handleMenuToggle}
        >
          Services
        </Button>
        <Button
          color="white"
          sx={{ textTransform: "none", width: "100%", marginBottom: 2 }}
          onClick={handleMenuToggle}
        >
          About Us
        </Button>
        <Button
          href="#"
          variant="contained"
          sx={{
            textTransform: "none",
            // width: "100%",
            backgroundColor: "#fe8b53",
          }}
        >
          Contact Us
        </Button>
      </Drawer>
    </div>
  );
};

export default Navbar;
