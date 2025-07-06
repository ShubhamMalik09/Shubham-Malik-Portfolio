"use client";

import React from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { Button } from './ui/button'

const Header = () => {
  return (
    <div className='flex justify-center items-center w-full'>
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 w-full z-40 bg-black/20 backdrop-blur-xl border-b border-purple-800/50"
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                {/* Logo/Brand */}
                <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300 ease-in-out">
                    {/* <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">SM</span>
                    </div> */}
                    <div>
                    <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                        Shubham Malik
                    </h1>
                    <p className="text-xs text-gray-400">Full Stack Developer</p>
                    </div>
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    {["About", "Skills", "Education", "Experience", "Projects", "Contact"].map((item, index) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="hover:scale-105 transition-all duration-300 ease-in-out hover:text-cyan-600 text-gray-300 hover:text-shadow-lg font-medium">
                            {item}
                        </a>
                    ))}
                </div>

                <div className="hidden lg:flex items-center space-x-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                        size="sm"
                        variant="outline"
                        className="border-blue-600 text-white hover:bg-cyan-800 bg-transparent transition-all duration-300"
                    >
                        Resume
                    </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-700 hover:to-teal-700 transition-all duration-300"
                    >
                        Hire Me
                    </Button>
                    </motion.div>
                </div>

                {/* Mobile Menu Button */}
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="md:hidden text-white p-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </motion.button>
                </div>
            </div>

            {/* Animated border bottom */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 1.5 }}
            />
        </motion.nav>
    </div>
    
  )
}

export default Header