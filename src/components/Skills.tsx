'use client'

import { motion } from 'framer-motion'
import { 
  Code, 
  Brain, 
  Cloud, 
  Zap, 
  Palette, 
  Database,
  Globe,
  Cpu
} from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Development",
      skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "Node.js", "HTML5", "CSS3", "TailwindCSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning & AI",
      skills: ["Deep Learning", "Image Classification", "Python", "TensorFlow", "Computer Vision", "Data Science"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & DevOps",
      skills: ["Cloud Computing", "CI/CD", "Git", "GitHub", "Docker", "AWS", "Azure"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Systems",
      skills: ["WebSockets", "Real-time Data", "Performance Optimization", "System Architecture", "Microservices"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      skills: ["Responsive Design", "User Experience", "Design Systems", "Figma", "Adobe Creative Suite", "Prototyping"],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend & Databases",
      skills: ["Java", ".NET", "SQL", "MongoDB", "PostgreSQL", "API Development", "REST APIs"],
      color: "from-indigo-500 to-purple-500"
    }
  ]

  const tools = [
    "Visual Studio Code",
    "NetBeans",
    "Gradle",
    "Anaconda",
    "Git",
    "GitHub",
    "Docker",
    "Postman"
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A diverse set of technical skills spanning modern web development, AI/ML, and cloud technologies
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg card-hover border border-gray-100 dark:border-gray-700">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${category.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center mb-6">
            <Cpu className="w-8 h-8 text-primary-600 mr-4" />
            <h3 className="text-2xl font-bold">Tools & Technologies</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">{tool}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Journey */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 p-8 rounded-2xl border border-primary-100 dark:border-primary-800">
            <Globe className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. I&apos;m constantly exploring new frameworks, 
              languages, and methodologies to stay at the forefront of innovation and deliver 
              cutting-edge solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}