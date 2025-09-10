'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Instagram, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "bhuvan1075@gmail.com",
      href: "mailto:bhuvan1075@gmail.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "Bhuvaneshpree",
      href: "https://github.com/Bhuvaneshpree",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Bhuvanesh V",
      href: "https://linkedin.com/in/bhuvanesh-v-4628282ab",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
      value: "@itz_bhuvan___",
      href: "https://instagram.com/itz_bhuvan___",
      color: "from-purple-500 to-pink-500"
    }
  ]

  const quickInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Chennai, Tamil Nadu, India"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Status",
      value: "Available for opportunities"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on exciting projects or discuss innovative ideas? 
            I&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Methods */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <motion.a
                      key={method.label}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${method.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                        {method.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {method.label}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {method.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
                  Quick Info
                </h4>
                <div className="space-y-3">
                  {quickInfo.map((info) => (
                    <div key={info.label} className="flex items-center space-x-3">
                      <div className="text-primary-600">
                        {info.icon}
                      </div>
                      <div>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          {info.label}:
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 ml-2">
                          {info.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Call to Action */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 p-8 rounded-2xl border border-primary-100 dark:border-primary-800">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Let&apos;s Build Something Amazing Together
                </h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-primary-700 dark:text-primary-300">
                        Open to Opportunities
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Looking for internships, freelance projects, and full-time positions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-primary-700 dark:text-primary-300">
                        Collaboration Ready
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Excited to work on innovative projects with like-minded developers
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-primary-700 dark:text-primary-300">
                        Learning Focused
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Always eager to learn new technologies and best practices
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <a
                    href="mailto:bhuvan1075@gmail.com"
                    className="w-full inline-flex items-center justify-center space-x-2 px-6 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Send an Email</span>
                  </a>
                  <a
                    href="https://github.com/Bhuvaneshpree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 px-6 py-4 border-2 border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                    <span>View GitHub Profile</span>
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-600 dark:text-green-400 font-semibold">
                    Usually responds within 24 hours
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  I check my emails regularly and strive to respond to all inquiries promptly. 
                  Feel free to reach out anytime!
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Social Links Footer */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Follow me on social media for updates and insights
          </p>
          <div className="flex justify-center space-x-6">
            {contactMethods.map((method) => (
              <motion.a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-full bg-gradient-to-r ${method.color} text-white hover:scale-110 transition-transform duration-300 shadow-lg`}
                whileHover={{ y: -5 }}
              >
                {method.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}