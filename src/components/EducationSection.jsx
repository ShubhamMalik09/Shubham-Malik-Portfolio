import React from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { Card, CardContent } from './ui/card'
import { Calendar, GraduationCap } from 'lucide-react'
import { education } from '@/data/education'
import { Badge } from './ui/badge'

const EducationSection = () => {
  const { scrollYProgress } = useScroll()
  const progressHeight = useTransform(scrollYProgress, [0.25, 0.45], ["0%", "100%"])

  return (
    <motion.section
      id="education"
      className="py-20 px-6 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Enhanced Scrollbar Light Effect */}

      <div className="max-w-6xl pb-10 mx-auto relative">
        <div className="absolute -left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-blue-700/50 to-transparent">
            <motion.div
            style={{ height: progressHeight }}
            className="w-full bg-gradient-to-b from-blue-400 via-teal-500 to-cyan-500 shadow-lg shadow-purple-500/50 rounded-full"
            />
        </div>
        <motion.h2
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Education
        </motion.h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Enhanced Connection line to scrollbar */}
              <div className="absolute -left-16 top-[50%] translate-y-[-50%] w-12 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-transparent"></div>

              {/* Connection dot */}
              <div className="absolute -left-16 top-[50%] translate-y-[-50%] w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>

              <Card className="glass-effect bg-black/60 border-blue-700 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 transform-gpu">
                <CardContent className="p-4 px-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col md:flex-row md:items-center md:justify-between mb-4"
                  >
                    <div className="flex items-center mb-2 md:mb-0">
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                        <GraduationCap className="w-6 h-6 text-blue-400 mr-3" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{edu.year}</span>
                    </div>
                  </motion.div>

                  <motion.h4
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg font-semibold text-blue-300 mb-2"
                  >
                    {edu.school}
                  </motion.h4>


                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 text-base">
                      {edu.gpa}
                    </Badge>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default EducationSection