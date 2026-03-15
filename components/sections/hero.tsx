"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowDown, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroScene } from "@/components/hero-3d"
import { FadeIn, FloatingIcon, GlowingOrb } from "@/components/motion"

const techIcons = [
  { name: "React", icon: "⚛️", position: "top-20 left-[10%]" },
  { name: "Next.js", icon: "▲", position: "top-32 right-[15%]" },
  { name: "TypeScript", icon: "TS", position: "bottom-32 left-[8%]" },
  { name: "Node", icon: "⬢", position: "bottom-40 right-[12%]" },
  { name: "Python", icon: "🐍", position: "top-40 left-[25%]" },
]

const socialLinks = [
  { 
    name: "GitHub", 
    icon: Github, 
    href: "https://github.com/aayush-dev01" 
  },
  { 
    name: "LinkedIn", 
    icon: Linkedin, 
    href: "https://www.linkedin.com/in/aayush-patil-13a304365/" 
  },
  { 
    name: "Email", 
    icon: Mail, 
    href: "mailto:aayushpatil.dev@gmail.com" 
  },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <GlowingOrb className="w-[600px] h-[600px] bg-primary/20 -top-40 -left-40" />
      <GlowingOrb className="w-[500px] h-[500px] bg-accent/20 -bottom-20 -right-20" />
      
      {/* Animated Background */}
      <HeroScene />

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {techIcons.map((tech, index) => (
          <FloatingIcon
            key={tech.name}
            delay={0.5 + index * 0.1}
            className={`absolute ${tech.position}`}
          >
            <div className="glass rounded-xl p-3 text-2xl">
              <span className="font-mono text-primary">{tech.icon}</span>
            </div>
          </FloatingIcon>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <FadeIn delay={0.2}>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass border border-primary/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </motion.div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
            <span className="text-foreground">Aayush</span>{" "}
            <span className="text-primary glow-text">Rajesh</span>{" "}
            <span className="text-foreground">Patil</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-xl md:text-2xl text-primary font-medium mb-4">
            Creative Developer
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            I build modern web experiences that blend creativity and engineering.
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="text-base text-muted-foreground/80 max-w-xl mx-auto mb-10 leading-relaxed">
            Creative developer passionate about building meaningful digital products. 
            I enjoy transforming ideas into functional experiences using modern web 
            technologies and experimenting through hackathons and personal projects.
          </p>
        </FadeIn>

        <FadeIn delay={0.7}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 glow"
              asChild
            >
              <a href="#projects">
                View Projects
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-border hover:border-primary hover:text-primary"
              asChild
            >
              <a href="https://github.com/aayush-dev01" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                GitHub Profile
              </a>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="gap-2 text-muted-foreground hover:text-primary"
              asChild
            >
              <a href="#contact">
                Contact Me
                <Mail className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.8}>
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((link) => {
              const isEmail = link.href.startsWith("mailto")
              const Icon = link.icon
              return (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={link.href}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noopener noreferrer"}
                    className="p-3 rounded-full glass border border-border hover:border-primary transition-colors group flex items-center justify-center"
                    aria-label={link.name}
                    onClick={isEmail ? (e) => {
                      e.preventDefault()
                      window.location.href = link.href
                    } : undefined}
                  >
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </motion.div>
              )
            })}
          </div>
        </FadeIn>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
