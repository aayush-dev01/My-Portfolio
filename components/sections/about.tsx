"use client"

import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { Code2, Cpu, Globe, Sparkles } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time",
  },
  {
    icon: Globe,
    title: "Full Stack",
    description: "End-to-end development from database to deployment",
  },
  {
    icon: Cpu,
    title: "Performance",
    description: "Optimizing for speed and efficiency at every layer",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "Exploring cutting-edge technologies and methodologies",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Gradient orb */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500" />
            <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Crafting Digital
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Experiences
            </span>
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-12">
          <FadeIn delay={0.2}>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm a passionate full-stack developer with a deep love for creating 
                elegant solutions to complex problems. With expertise spanning modern 
                web technologies, I transform ideas into polished, production-ready 
                applications.
              </p>
              <p>
                My journey in tech started with curiosity and evolved into a career 
                focused on building impactful digital products. I believe in writing 
                code that not only works but inspires.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with 
                the developer community.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-10">
              {[
                { value: "25+", label: "Projects" },
                { value: "3+", label: "Years Exp" },
                { value: "100%", label: "Commitment" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 gap-4">
            {highlights.map((item) => (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-shadow duration-300">
                      <item.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
