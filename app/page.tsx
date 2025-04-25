"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Facebook, Github, Instagram } from "lucide-react";
import Cursor from "@/components/cursor";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeLink, setActiveLink] = useState("Home");

  // Refs for scroll animations
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const photoRef = useRef(null);
  const descriptionRef = useRef(null);
  const socialsRef = useRef(null);

  // Check if elements are in view
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const titleInView = useInView(titleRef, { once: true, amount: 0.5 });
  const photoInView = useInView(photoRef, { once: true, amount: 0.8 });
  const descriptionInView = useInView(descriptionRef, {
    once: true,
    amount: 0.5,
  });
  const socialsInView = useInView(socialsRef, { once: true, amount: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Navigation link component with hover effect
  const NavLink = ({ href, text }) => {
    const isActive = activeLink === text;

    return (
      <div className="relative">
        {!isActive && (
          // Hover effect for inactive links
          <motion.div
            className="absolute -z-10 rounded-full h-8 bg-[#FFE136]"
            style={{ width: "100%" }}
            initial={{ x: 0, y: 0, opacity: 0 }}
            whileHover={{ x: 2, y: 2, opacity: 1 }}
          />
        )}
        <Link
          href={href}
          className={`relative px-4 py-1 text-sm font-medium z-10 ${
            isActive ? "text-[#ebc507] font-bold" : "text-[#1E1E1E]"
          }`}
          onClick={(e) => {
            e.preventDefault(); // Prevent actual navigation for this demo
            setActiveLink(text);
          }}
        >
          {text}
        </Link>
      </div>
    );
  };

  return (
    <main
      className="min-h-screen bg-[#f8f8f8] relative overflow-hidden"
      style={{
        backgroundImage:
          'url("https://www.transparenttextures.com/patterns/subtle-white-feathers.png")',
        backgroundRepeat: "repeat",
      }}
    >
      <div className="container mx-auto px-4 py-8 relative">
        {/* Header with scroll animation */}
        <motion.header
          ref={headerRef}
          className="flex justify-between items-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Link href="/" className="font-pixelify text-xl">
            Abbiebabu
          </Link>

          {/* Navigation menu instead of signature */}
          <nav className="hidden md:flex items-center justify-center gap-6">
            <NavLink href="#home" text="Home" />
            <NavLink href="#about" text="About" />
            <NavLink href="#projects" text="Projects" />
            <NavLink href="#contact" text="Contact" />
          </nav>

          {/* Mobile navigation indicator (only shows active page on mobile) */}
          <div className="md:hidden flex-1 flex justify-center">
            <span className="text-sm font-medium text-[#FFE136]">
              {activeLink}
            </span>
          </div>

          {/* Contact button with new hover effect */}
          <div className="relative group">
            {/* Yellow layer (bottom) */}
            <div className="absolute bottom-0 right-0 rounded-full w-32 h-12 bg-[#FFE136] translate-x-2 translate-y-2 group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>

            {/* Orange layer (middle) */}
            <div className="absolute bottom-0 right-0 rounded-full w-32 h-12 bg-[#FFC136] translate-x-1 translate-y-1 group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>

            {/* Button (top) */}
            <button className="relative bg-[#1E1E1E] text-white rounded-full w-32 h-12 z-10">
              Contact
            </button>
          </div>
        </motion.header>

        {/* Main content */}
        <div className="flex flex-col items-center justify-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <p className="font-patrick text-[#1E1E1E] text-xl mb-2">
              A portfolio Website
            </p>
            <p className="font-patrick text-[#1E1E1E] text-xl mb-8">of</p>
          </motion.div>

          {/* Name with photo in the middle */}
          <div className="relative">
            {/* First name with scroll animation */}
            <motion.h1
              ref={titleRef}
              className="font-phudu text-[#FFE136] text-8xl md:text-9xl tracking-wide text-center"
              initial={{ opacity: 0, x: -100 }}
              animate={titleInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              ABHAY
            </motion.h1>

            <div className="relative flex justify-center my-4">
              {/* Photo with scroll animation */}
              <motion.div
                ref={photoRef}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={photoInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, ease: "easeOut" }}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 },
                }}
              >
                <Image
                  src="/profile.png"
                  alt="Profile"
                  width={180}
                  height={180}
                  className="rounded-full border-4 border-[#FFE136] z-10 relative"
                />
              </motion.div>

              {/* Decorative squiggly lines */}
              <motion.div
                className="absolute right-0 top-0 translate-x-full -translate-y-1/2"
                animate={{
                  y: [0, 5, 0, -5, 0],
                  transition: { repeat: Number.POSITIVE_INFINITY, duration: 5 },
                }}
              >
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                  <path
                    d="M10 25C15 15 20 35 30 25"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M15 35C20 25 25 45 35 35"
                    stroke="#"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M5 15C10 5 15 25 25 15"
                    stroke="#"
                    strokeWidth="1.5"
                  />
                </svg>
              </motion.div>
            </div>

            {/* Last name with scroll animation */}
            <motion.h1
              className="font-phudu text-[#FFE136] text-8xl md:text-9xl tracking-wide text-center"
              initial={{ opacity: 0, x: 100 }}
              animate={titleInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              MASKEY
            </motion.h1>
          </div>

          {/* Animated cursor */}
          <Cursor mousePosition={mousePosition} />

          {/* Description text with scroll animation */}
          <motion.p
            ref={descriptionRef}
            className="font-patrick text-[#1E1E1E] text-center max-w-2xl mt-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={descriptionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Hey, I’m Abhay ✦ a curious mind with a love for clean design, smooth
            interactions, and meaningful code. i blend creativity with logic to
            craft digital spaces that feel alive. currently exploring the magic
            of React, while shaping ideas through figma. Always building,
            always dreaming ;)

            
          </motion.p>

          {/* Social links with scroll animation */}
          <motion.div
            ref={socialsRef}
            className="flex gap-6 mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={socialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <motion.a
              href="https://www.facebook.com/De.king.dragneel"
              target="_blank"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-[#1E1E1E]"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={socialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Facebook size={28} />
            </motion.a>
            <motion.a
              href="https://github.com/abbiebabu"
              target="_blank"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-[#1E1E1E]"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={socialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Github size={28} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/only__abhay/"
              target="_blank"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-[#1E1E1E]"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={socialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Instagram size={28} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
