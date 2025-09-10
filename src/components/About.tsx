'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Code, Heart, Sparkles } from 'lucide-react'

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about transforming ideas into reality through innovative coding solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Info */}
          <motion.div
            {...fadeInUp}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-8 h-8 text-primary-600 mr-4" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-primary-600">
                    B.E. in Computer Science and Engineering
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    VISTAS (Vels Institute of Science, Technology & Advanced Studies)
                  </p>
                  <p className="text-sm text-gray-500">Currently Pursuing</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Heart className="w-8 h-8 text-red-500 mr-4" />
                <h3 className="text-2xl font-bold">Passion</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Driven by an unwavering passion for innovative coding solutions, I believe in the power 
                of technology to solve real-world problems. My journey is fueled by curiosity, 
                creativity, and the desire to make a meaningful impact through code.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Philosophy & Skills */}
          <motion.div
            {...fadeInUp}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 p-8 rounded-2xl border border-primary-100 dark:border-primary-800">
              <div className="flex items-center mb-6">
                <Sparkles className="w-8 h-8 text-primary-600 mr-4" />
                <h3 className="text-2xl font-bold">The &quot;Vibe Coding&quot; Philosophy</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-primary-700 dark:text-primary-300">Creative</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Approaching problems with fresh perspectives and innovative solutions
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-primary-700 dark:text-primary-300">Innovative</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Embracing cutting-edge technologies and modern development practices
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-primary-700 dark:text-primary-300">Passionate</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Coding with enthusiasm and dedication to create meaningful impact
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Code className="w-8 h-8 text-green-500 mr-4" />
                <h3 className="text-2xl font-bold">Current Focus</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">React.js & Full Stack Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">.NET Framework</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Image Classification with Deep Learning</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Software Development & Innovation</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}