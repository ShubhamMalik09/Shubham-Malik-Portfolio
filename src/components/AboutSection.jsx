import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { Button } from './ui/button'
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MapPin,
  Calendar,
  GraduationCap,
  Briefcase,
  Code,
  Phone,
  Star,
} from "lucide-react"

const AboutSection = ({ mouseX, mouseY }) => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
  }, [])

  const rotateX = useTransform(mouseY, [0, windowSize.height], [5, -5])
  const rotateY = useTransform(mouseX, [0, windowSize.width], [-5, 5])

  return (
    <motion.section
      id="about"
      className="py-20 px-6 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="glass-effect max-w-6xl mx-auto bg-gradient-to-br from-black/50 to-blue-900/30 backdrop-blur-sm rounded-3xl p-8 border border-blue-700/50"
      >
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-1 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-300 mb-6 leading-relaxed"
            >
              I'm a passionate full-stack developer with over 3 years of experience building modern web applications. I
              specialize in the MERN stack and have extensive experience with Python Django for backend development.
            </motion.p>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-300 mb-6 leading-relaxed"
            >
              My journey in web development started with a curiosity about how websites work, and it has evolved into a
              deep passion for creating user-friendly, scalable, and efficient applications that solve real-world
              problems.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-4 justify-center"
            >
              <Button
                variant="outline"
                size="sm"
                className="border-blue-600 text-white hover:bg-cyan-800 bg-transparent transition-all duration-300"
              >
                <MapPin className="w-4 h-4 mr-2" />
                New Delhi, India
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default AboutSection