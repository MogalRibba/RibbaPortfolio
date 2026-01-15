"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Home, User, Code, Briefcase, Award, Mail, Github, Linkedin, Download, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

interface RetroSideNavbarProps {
  activeSection?: string
  onSectionClick?: (section: string) => void
}

export default function RetroSideNavbar({ activeSection = "home", onSectionClick }: RetroSideNavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024)
      if (window.innerWidth >= 1024) {
        setIsOpen(false) // Close mobile menu when switching to desktop
      }
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const navItems = [
    {
      id: "home",
      label: "HOME",
      icon: Home,
      activeColor: "text-cyan-400",
      borderColor: "border-cyan-400",
      bgColor: "bg-cyan-400/10",
    },
    {
      id: "about",
      label: "ABOUT",
      icon: User,
      activeColor: "text-pink-400",
      borderColor: "border-pink-400",
      bgColor: "bg-pink-400/10",
    },
    {
      id: "skills",
      label: "SKILLS",
      icon: Code,
      activeColor: "text-green-400",
      borderColor: "border-green-400",
      bgColor: "bg-green-400/10",
    },
    {
      id: "projects",
      label: "PROJECTS",
      icon: Code,
      activeColor: "text-purple-400",
      borderColor: "border-purple-400",
      bgColor: "bg-purple-400/10",
    },
    {
      id: "experience",
      label: "EXPERIENCE",
      icon: Briefcase,
      activeColor: "text-blue-400",
      borderColor: "border-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      id: "achievements",
      label: "ACHIEVEMENTS",
      icon: Award,
      activeColor: "text-orange-400",
      borderColor: "border-orange-400",
      bgColor: "bg-orange-400/10",
    },
    {
      id: "contact",
      label: "CONTACT",
      icon: Mail,
      activeColor: "text-red-400",
      borderColor: "border-red-400",
      bgColor: "bg-red-400/10",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    onSectionClick?.(sectionId)
    if (isMobile) {
      setIsOpen(false) // Close mobile menu after navigation
    }
  }

  // Mobile Menu Button
  if (isMobile) {
    return (
      <>
        {/* Mobile Menu Button */}
        <motion.button
          className="fixed top-4 left-4 z-[60] p-3 bg-black/90 backdrop-blur-md border border-cyan-400 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6 text-cyan-400" />}
        </motion.button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />

              {/* Mobile Menu */}
              <motion.div
                className="fixed left-0 top-0 h-full w-[280px] bg-black/95 backdrop-blur-md border-r border-gray-800 z-50 flex flex-col"
                initial={{ x: -280 }}
                animate={{ x: 0 }}
                exit={{ x: -280 }}
                transition={{ duration: 0.3 }}
              >
                {/* Header */}
                <div className="p-6 border-b border-gray-800 mt-16">
                  <div className="text-center">
                    <span className="text-cyan-400 text-xl font-bold pixel-font">&lt;RIBBA/&gt;</span>
                  </div>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 p-4 space-y-2 overflow-y-auto">
                  {navItems.map((item, index) => {
                    const Icon = item.icon
                    const isActive = activeSection === item.id

                    return (
                      <motion.button
                        key={item.id}
                        className={`w-full p-4 rounded-lg border transition-all duration-300 flex items-center space-x-3 ${
                          isActive
                            ? `${item.bgColor} ${item.borderColor} ${item.activeColor}`
                            : `bg-black/30 border-gray-700 text-slate-300 hover:${item.borderColor}/50 hover:${item.activeColor}`
                        }`}
                        onClick={() => scrollToSection(item.id)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="pixel-font text-sm font-medium">{item.label}</span>
                      </motion.button>
                    )
                  })}
                </div>

                {/* Social Links & Resume */}
                <div className="p-4 border-t border-gray-800 space-y-4">
                  {/* Social Icons */}
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-gray-700 bg-black/30 text-slate-400 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                      onClick={() => {
                        window.open("https://github.com/MogalRibba", "_blank")
                        setIsOpen(false)
                      }}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-gray-700 bg-black/30 text-slate-400 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                      onClick={() => {
                        window.open("https://www.linkedin.com/in/ribba-mogal-27ba4523b", "_blank")
                        setIsOpen(false)
                      }}
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Resume Button */}
                  <Button
                    className="w-full border-2 border-purple-400 bg-transparent text-purple-400 hover:bg-purple-400 hover:text-black transition-all duration-300 rounded-lg pixel-font"
                    onClick={() => {
                      window.open(
                        "https://drive.google.com/file/d/1nog4S9XTFLwvRr7bHMXxz5K8Y2zMQN-8/view?usp=sharing",
                        "_blank",
                      )
                      setIsOpen(false)
                    }}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    RESUME
                  </Button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </>
    )
  }

  // Desktop Sidebar
  return (
    <motion.div
      className="fixed left-0 top-0 h-full w-[280px] bg-black/95 backdrop-blur-md border-r border-gray-800 z-30 flex flex-col"
      initial={{ x: -280 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="p-6 border-b border-gray-800">
        <div className="text-center">
          <span className="text-cyan-400 text-xl font-bold pixel-font">&lt;RIBBA/&gt;</span>
        </div>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navItems.map((item, index) => {
          const Icon = item.icon
          const isActive = activeSection === item.id

          return (
            <motion.button
              key={item.id}
              className={`w-full p-4 rounded-lg border transition-all duration-300 flex items-center space-x-3 ${
                isActive
                  ? `${item.bgColor} ${item.borderColor} ${item.activeColor}`
                  : `bg-black/30 border-gray-700 text-slate-300 hover:${item.borderColor}/50 hover:${item.activeColor}`
              }`}
              onClick={() => scrollToSection(item.id)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Icon className="w-5 h-5" />
              <span className="pixel-font text-sm font-medium">{item.label}</span>
            </motion.button>
          )
        })}
      </div>

      {/* Social Links & Resume */}
      <div className="p-4 border-t border-gray-800 space-y-4">
        {/* Social Icons */}
        <div className="flex space-x-2">
          <Button
            size="sm"
            variant="outline"
            className="flex-1 border-gray-700 bg-black/30 text-slate-400 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
            onClick={() => window.open("https://github.com/MogalRibba", "_blank")}
          >
            <Github className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="flex-1 border-gray-700 bg-black/30 text-slate-400 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
            onClick={() => window.open("https://www.linkedin.com/in/ribba-mogal-27ba4523b", "_blank")}
          >
            <Linkedin className="w-4 h-4" />
          </Button>
        </div>

        {/* Resume Button */}
        <Button
          className="w-full border-2 border-purple-400 bg-transparent text-purple-400 hover:bg-purple-400 hover:text-black transition-all duration-300 rounded-lg pixel-font"
          onClick={() =>
            window.open("https://drive.google.com/file/d/1nog4S9XTFLwvRr7bHMXxz5K8Y2zMQN-8/view?usp=sharing", "_blank")
          }
        >
          <Download className="w-4 h-4 mr-2" />
          RESUME
        </Button>
      </div>
    </motion.div>
  )
}
