"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, Heart } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/aayush-dev01", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/aayush-patil-13a304365", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/aayushpatil36/", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
            whileHover={{ scale: 1.05 }}
          >
            {"<Dev />"}
          </motion.a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <span className="text-white">🤍</span> by Aayush
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="w-10 h-10 rounded-full bg-muted/30 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
