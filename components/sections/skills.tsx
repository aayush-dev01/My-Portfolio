"use client"

import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", level: 93 },
      { name: "C++", level: 95 },
      { name: "Python", level: 90 },
      { name: "Go", level: 70 },
      { name: "JavaScript", level: 87 },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 78 },
      { name: "Notion", level: 82 },
      { name: "Vercel", level: 92 },
      { name: "Figma", level: 88 },
    ],
  },
]

const technologies = [
  "React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Python",
  "PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST", "Tailwind",
  "Framer Motion", "Three.js", "Docker", "AWS", "Vercel", "Git",
  "Prisma", "Supabase", "Firebase", "Figma"
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500" />
            <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase">Skills</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Technical
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience with modern technologies
          </p>
        </FadeIn>

        {/* Skill bars */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 h-full">
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  {category.title}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-foreground">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Floating tech tags */}
        <FadeIn delay={0.4}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-cyan-500/50 transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
