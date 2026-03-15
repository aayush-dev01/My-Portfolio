"use client"

import { useEffect, useState } from "react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import {
  User,
  Code,
  Briefcase,
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  FileDown,
  ExternalLink,
  Home,
} from "lucide-react"

interface CommandMenuProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const navigationItems = [
  { name: "Home", icon: Home, href: "#" },
  { name: "About", icon: User, href: "#about" },
  { name: "Skills", icon: Code, href: "#skills" },
  { name: "Projects", icon: Briefcase, href: "#projects" },
  { name: "Education", icon: GraduationCap, href: "#education" },
  { name: "Contact", icon: Mail, href: "#contact" },
]

const socialItems = [
  { 
    name: "GitHub", 
    icon: Github, 
    href: "https://github.com/aayush-dev01",
    external: true 
  },
  { 
    name: "LinkedIn", 
    icon: Linkedin, 
    href: "https://www.linkedin.com/in/aayush-patil-13a304365/",
    external: true 
  },
  { 
    name: "Email", 
    icon: Mail, 
    href: "mailto:aayushpatil.dev@gmail.com",
    external: true 
  },
]

const actionItems = [
  { 
    name: "Download Resume", 
    icon: FileDown, 
    action: () => {
      // Placeholder for resume download
      window.open("#", "_blank")
    }
  },
  { 
    name: "View MindBridge", 
    icon: ExternalLink, 
    action: () => {
      window.open("https://github.com/aayush-dev01/MindBridge-hackathon", "_blank")
    }
  },
  { 
    name: "View Clario", 
    icon: ExternalLink, 
    action: () => {
      window.open("https://clario-edtech.vercel.app/", "_blank")
    }
  },
]

export function CommandMenu({ open, onOpenChange }: CommandMenuProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        onOpenChange(!open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [open, onOpenChange])

  if (!mounted) return null

  const handleNavigation = (href: string, external?: boolean) => {
    if (external) {
      window.open(href, "_blank")
    } else {
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: "smooth" })
    }
    onOpenChange(false)
  }

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        
        <CommandGroup heading="Navigation">
          {navigationItems.map((item) => (
            <CommandItem
              key={item.name}
              onSelect={() => handleNavigation(item.href)}
              className="gap-3 cursor-pointer"
            >
              <item.icon className="w-4 h-4 text-muted-foreground" />
              <span>{item.name}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        
        <CommandSeparator />
        
        <CommandGroup heading="Social">
          {socialItems.map((item) => (
            <CommandItem
              key={item.name}
              onSelect={() => handleNavigation(item.href, item.external)}
              className="gap-3 cursor-pointer"
            >
              <item.icon className="w-4 h-4 text-muted-foreground" />
              <span>{item.name}</span>
              <ExternalLink className="w-3 h-3 ml-auto text-muted-foreground" />
            </CommandItem>
          ))}
        </CommandGroup>
        
        <CommandSeparator />
        
        <CommandGroup heading="Actions">
          {actionItems.map((item) => (
            <CommandItem
              key={item.name}
              onSelect={() => {
                item.action()
                onOpenChange(false)
              }}
              className="gap-3 cursor-pointer"
            >
              <item.icon className="w-4 h-4 text-muted-foreground" />
              <span>{item.name}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
