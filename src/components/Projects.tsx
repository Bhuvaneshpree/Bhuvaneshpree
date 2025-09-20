'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Brain, Globe, Zap } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "Agrimetaverse-Intelligence",
      description: "A next-generation AI platform using SARIMAX to forecast prices of 22 agricultural commodities, enabling smarter decision-making for farmers and traders.",
      icon: <Brain className="w-8 h-8" />,
      technologies: ["Python", "SARIMAX", "Machine Learning", "AI", "Data Science", "Time Series Analysis"],
      githubUrl: "https://github.com/Bhuvaneshpree/Agrimetaverse-Intelligence",
      liveUrl: null,
      gradient: "from-green-500 to-emerald-500",
      features: [
        "Price forecasting for 22 agricultural commodities",
        "SARIMAX statistical modeling",
        "Data-driven insights for farmers",
        "Smart decision-making tools"
      ]
    },
    {
      title: "RD-INFRO-TECHNOLOGY",
      description: "A modern web development project showcasing responsive design and contemporary UI/UX principles with advanced CSS techniques.",
      icon: <Globe className="w-8 h-8" />,
      technologies: ["CSS3", "HTML5", "Responsive Design", "UI/UX", "Web Development"],
      githubUrl: "https://github.com/Bhuvaneshpree/RD-INFRO-TECHNOLOGY",
      liveUrl: null,
      gradient: "from-blue-500 to-purple-500",
      features: [
        "Modern responsive design",
        "Advanced CSS techniques",
        "Clean user interface",
        "Cross-browser compatibility"
      ]
    },
    {
      title: "Real-time-insti-detect",
      description: "An upcoming real-time detection system project focusing on instant recognition and classification using computer vision and machine learning techniques.",
      icon: <Zap className="w-8 h-8" />,
      technologies: ["Python", "Computer Vision", "Real-time Processing", "Machine Learning", "OpenCV"],
      githubUrl: null,
      liveUrl: null,
      gradient: "from-orange-500 to-red-500",
      status: "Coming Soon",
      features: [
        "Real-time object detection",
        "Computer vision algorithms",
        "Instant classification",
        "High-performance processing"
      ]
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing innovative solutions that demonstrate technical expertise and creative problem-solving
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 shadow-lg card-hover border border-gray-100 dark:border-gray-700 overflow-hidden relative">
                {/* Status Badge for Coming Soon */}
                {project.status && (
                  <div className="absolute top-6 right-6 z-10">
                    <span className="px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-full">
                      {project.status}
                    </span>
                  </div>
                )}

                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Left Column - Project Info */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${project.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                        {project.icon}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-600 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
                        >
                          <Github className="w-5 h-5" />
                          <span>View Code</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {!project.githubUrl && project.status && (
                        <div className="flex items-center space-x-2 px-6 py-3 bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg font-semibold cursor-not-allowed">
                          <Github className="w-5 h-5" />
                          <span>Coming Soon</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Column - Features */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-600">
                    <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Key Features</h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} mt-2 flex-shrink-0`}></div>
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 p-8 rounded-2xl border border-primary-100 dark:border-primary-800">
            <h3 className="text-2xl font-bold mb-4">More Projects Coming Soon!</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I&apos;m constantly working on new and exciting projects. Follow my GitHub profile to stay updated 
              with the latest developments and innovations.
            </p>
            <a
              href="https://github.com/Bhuvaneshpree"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105"
            >
              <Github className="w-5 h-5" />
              <span>Follow on GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}