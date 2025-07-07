import React, { useState } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { experiences } from '@/data/experience'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { Badge } from './ui/badge'

const ExperienceSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <motion.section
      id="experience"
      className="py-20 px-6 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Work Experience
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 h-[600px]">
          {/* Left Side - Static Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Career Timeline</h3>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`p-4 rounded-lg border-l-4 transition-all duration-500 cursor-pointer ${
                  index === currentIndex
                    ? "border-cyan-400 bg-cyan-900/20 shadow-lg shadow-indigo-400/20"
                    : "border-blue-600 bg-black/30"
                }`}
                whileHover={{ scale: 1.02 }}
                onClick={() => setCurrentIndex(index)}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-white">{exp.title}</h4>
                  <span className="text-sm text-gray-400">{exp.period}</span>
                </div>
                <p className="text-sm text-gray-300">{exp.company}</p>
                <div className="flex items-center text-xs text-gray-400 mt-1">
                  <MapPin className="w-3 h-3 mr-1" />
                  {exp.location}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Changing Content */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            exit={{ opacity: 0, x: -50, rotateY: 15 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="glass-effect bg-gradient-to-br from-black/70 to-blue-900/50 border-blue-700 backdrop-blur-sm rounded-2xl p-8 h-full"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center mb-6"
            >
              <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                <Briefcase className="w-8 h-8 text-indigo-400 mr-4" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-white">{experiences[currentIndex].title}</h3>
                <h4 className="text-lg text-indigo-300">{experiences[currentIndex].company}</h4>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center mb-6 text-gray-400"
            >
              <Calendar className="w-4 h-4 mr-2" />
              <span className="mr-6">{experiences[currentIndex].period}</span>
              <MapPin className="w-4 h-4 mr-2" />
              <span>{experiences[currentIndex].location}</span>
            </motion.div>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 mb-6 leading-relaxed text-lg"
            >
              {experiences[currentIndex].description}
            </motion.p>

            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
              <h5 className="text-white font-semibold mb-3">Technologies Used:</h5>
              <div className="flex flex-wrap gap-2">
                {experiences[currentIndex].technologies.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.0 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Badge
                      variant="secondary"
                      className="bg-blue-600/20 text-blue-300 hover:bg-cyan-600/50 transition-colors cursor-pointer"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default ExperienceSection