import { skills } from '@/data/skills'
import React from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'

const SkillsSection = () => {
  return (
    <motion.section
      id="skills"
      className="py-20 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <motion.div className=' hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out'
              key={index}
              initial={{
                opacity: 0,
                y: 50,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
            >
              <Card className="bg-black/60 border-blue-700 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 text-center h-full">
                <CardContent className=" flex flex-col items-center justify-center h-full">
                  <motion.div
                    className={`w-12 h-12 rounded-full ${skill.bgColor} flex items-center justify-center mb-4 p-2`}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={skill.logo || "/placeholder.svg"}
                      alt={skill.name}
                      className="w-10 h-10 object-contain"
                      style={{ filter: skill.name === "Next.js" ? "invert(1)" : "none" }}
                    />
                  </motion.div>

                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-base md:text-lg font-bold mb-2 text-white"
                  >
                    {skill.name}
                  </motion.h3>

                  {/* <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Badge variant="secondary" className={`${skill.bgColor} ${skill.color} border-0 text-xs`}>
                      {skill.level}
                    </Badge>
                  </motion.div> */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default SkillsSection