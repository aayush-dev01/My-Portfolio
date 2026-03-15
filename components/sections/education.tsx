"use client"

import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react"

const education = [
  {
    degree: "B.Tech in Computer Engineering",
    institution: "Smt. Indira Gandhi College of Engineering",
    location: "Navi Mumbai, India",
    period: "2025 - 2029",
    description: "Currently pursuing studies specializing in computer engineering, software development, and modern computing technologies.",
    achievements: ["Computer Engineering", "Software Development", "Current Student"],
  },
  {
    degree: "Higher Secondary Education (11th - 12th)",
    institution: "Bhavan's College, Chowpatty",
    location: "Mumbai, India",
    period: "2023 - 2024",
    description: "Specialized in vocational computer science, passing out as the top performer in Computer Science.",
    achievements: ["Top Performer", "Vocational CS"],
  },
]

const achievements = [
  {
    name: "Top Performer - Computer Science",
    issuer: "Bhavan's College",
    year: "2024",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500" />
            <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase">Education</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Academic
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Background</span>
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <StaggerContainer className="space-y-8">
            <FadeIn>
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                Education
              </h3>
            </FadeIn>
            
            {education.map((item, index) => (
              <StaggerItem key={item.degree}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="group relative pl-8 border-l-2 border-border/50 hover:border-cyan-500/50 transition-colors"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-border group-hover:border-cyan-500 transition-colors" />
                  
                  <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 group-hover:border-cyan-500/30 transition-all">
                    <div className="flex flex-wrap items-center gap-3 mb-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-foreground mb-1 group-hover:text-cyan-400 transition-colors">
                      {item.degree}
                    </h4>
                    <p className="text-cyan-400 text-sm mb-3">{item.institution}</p>
                    <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.achievements.map((achievement) => (
                        <span
                          key={achievement}
                          className="px-2 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Certifications */}
          <div>
            <FadeIn>
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <Award className="w-5 h-5 text-cyan-400" />
                Achievements
              </h3>
            </FadeIn>

            <StaggerContainer className="grid gap-4">
              {achievements.map((cert) => (
                <StaggerItem key={cert.name}>
                  <motion.div
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-cyan-500/30 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-cyan-500/10 transition-shadow">
                      <Award className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground group-hover:text-cyan-400 transition-colors truncate">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">{cert.year}</span>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
