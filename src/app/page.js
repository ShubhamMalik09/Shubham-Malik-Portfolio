"use client"

import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const { scrollYProgress } = useScroll()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [isOverGlass, setIsOverGlass] = useState(false)

  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 400 })
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 400 })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)

      // Check if cursor is over glass elements
      const target = e.target 
      const isGlass = target.closest(".glass-effect") !== null
      setIsOverGlass(isGlass)
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mouseX, mouseY])

  


  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black to-black text-white overflow-x-hidden">
      <motion.div
        className="fixed w-12 h-12 bg-blue-500/40 rounded-full pointer-events-none z-50 mix-blend-screen blur-sm"
        style={{
          x: smoothMouseX,
          y: smoothMouseY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isOverGlass ? 1 : 0,
        }}
        transition={{ opacity: { duration: 0.2 } }}
      />

      <div className="fixed inset-0 z-0">
        <div className="stars-container">
          <div className="stars absolute"></div>
        </div>
      </div>
      <Header/>
      <div className="relative z-10 pt-20">
        <HeroSection />
        <AboutSection mouseX={mouseX} mouseY={mouseY} />
        <SkillsSection />
        <EducationSection />
        <ExperienceSection />
        {/*<ProjectsSection mouseX={mouseX} mouseY={mouseY} />
        <TestimonialsSection />*/}
        {/* <ContactSection mouseX={mouseX} mouseY={mouseY} />  */}
      </div>
    </div>
  );
}
