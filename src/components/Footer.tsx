'use client'

import { motion } from 'framer-motion'
import { Heart, Github, Mail, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/Bhuvaneshpree",
      label: "GitHub"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:bhuvan1075@gmail.com",
      label: "Email"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/bhuvanesh-v-4628282ab",
      label: "LinkedIn"
    }
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">Bhuvaneshpree</h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer & CSE Student passionate about creating innovative 
              solutions through the &quot;vibe coding&quot; philosophy.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <p className="text-gray-400">
                <span className="text-white">Email:</span><br />
                bhuvan1075@gmail.com
              </p>
              <p className="text-gray-400">
                <span className="text-white">Location:</span><br />
                Chennai, Tamil Nadu, India
              </p>
              <div className="flex space-x-4 mt-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors duration-300"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>© {currentYear} Bhuvaneshpree. Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and passion for coding</span>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <span>Built with Next.js & TailwindCSS</span>
          </div>
        </motion.div>

        {/* Inspirational Quote */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <blockquote className="text-gray-400 italic">
            &quot;Code is like humor. When you have to explain it, it&apos;s bad.&quot; - Cory House
          </blockquote>
        </motion.div>
      </div>
    </footer>
  )
}