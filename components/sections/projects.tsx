"use client"

import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Clario EdTech",
    description: "A comprehensive educational technology platform designed to enhance learning experiences with interactive courses, progress tracking, and personalized learning paths for students and educators.",
    image: "/projects/clario.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Education"],
    github: "https://github.com/aayush-dev01/Clario-Edtech",
    live: "https://clario-edtech.vercel.app/",
    featured: true,
  },
  {
    title: "MindBridge",
    description: "A mental health support platform providing accessible resources, self-assessment tools, and connection to mental wellness services. Designed with empathy and user privacy in mind.",
    image: "/projects/mindbridge.jpg",
    tags: ["React", "Node.js", "Healthcare", "Wellness"],
    github: "https://github.com/aayush-dev01/MindBridge-hackathon",
    live: "https://mind-bridge-health.vercel.app/",
    featured: true,
  },
]

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured)

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500" />
            <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase">Projects</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in building modern web applications
          </p>
        </FadeIn>

        {/* Featured Projects */}
        <StaggerContainer className="space-y-8 mb-16">
          {featuredProjects.map((project, index) => (
            <StaggerItem key={project.title}>
              <motion.div
                whileHover={{ y: -4 }}
                className={`group relative grid md:grid-cols-2 gap-8 items-center p-6 md:p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-cyan-500/30 transition-all duration-300 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Image */}
                <div className={`relative aspect-video rounded-2xl overflow-hidden bg-muted/20 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-bold text-foreground/10">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                </div>

                {/* Content */}
                <div className={`relative z-10 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-5 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        
      </div>
    </section>
  )
}
