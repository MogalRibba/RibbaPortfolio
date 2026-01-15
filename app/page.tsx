"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Award,
  Briefcase,
  GraduationCap,
  Smartphone,
  Globe,
  Download,
  Gamepad2,
  Zap,
  Eye,
  Star,
  Heart,
  MapPin,
  Calendar,
  FileText,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import RetroSideNavbar from "@/components/retro-side-navbar"
import TypingText from "@/components/typing-text"

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("home")
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Update active section based on scroll position
      const sections = document.querySelectorAll<HTMLElement>("section[id]")
      let currentSection = "home"

      sections.forEach((section) => {
  if (!(section instanceof HTMLElement)) return

  const sectionTop = section.offsetTop - 150
  const sectionHeight = section.offsetHeight
  const sectionId = section.getAttribute("id") || ""


        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = sectionId
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial state
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const skillsData = [
    {
      category: "Programming Languages",
      skills: ["C++", "Python", "JavaScript", "C#", "Dart", "HTML", "CSS", "Verilog/VHDL"],
      icon: <Code className="w-5 h-5 text-cyan-400" />,
      color: "border-cyan-400",
      bgColor: "bg-cyan-400/10",
    },
    {
      category: "Frameworks & Tools",
      skills: ["Flutter", "Unity", "VS Code", "Android Studios", "Proteus", "MS Office"],
      icon: <Zap className="w-5 h-5 text-purple-400" />,
      color: "border-purple-400",
      bgColor: "bg-purple-400/10",
    },
    {
      category: "Technologies & Systems",
      skills: ["Web Development", "Windows Server Administration", "Embedded System", "Software Testing", "MS SQL"],
      icon: <Globe className="w-5 h-5 text-pink-400" />,
      color: "border-pink-400",
      bgColor: "bg-pink-400/10",
    },
  ]

  const skillCategories = [
    {
      title: "Mobile Dev",
      icon: <Smartphone className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />,
      description: "Flutter, Dart, Android Studio, Native Android",
      color: "border-cyan-400",
    },
    {
      title: "Web Dev",
      icon: <Globe className="w-6 h-6 md:w-8 md:h-8 text-green-400" />,
      description: "HTML, CSS, JavaScript, Responsive Design",
      color: "border-green-400",
    },
    {
      title: "Game Dev",
      icon: <Gamepad2 className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />,
      description: "Unity, C#, Game Design, 2D/3D Development",
      color: "border-purple-400",
    },
    {
      title: "Hardware",
      icon: <Zap className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />,
      description: "Electronics, Proteus, PCB Design, Arduino",
      color: "border-yellow-400",
    },
  ]

  const aboutSpecializations = [
    {
      title: "Creative Problem Solver",
      icon: <Code className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />,
      description: "Turning complex challenges into elegant solutions",
      color: "border-cyan-400",
    },
    {
      title: "Leader",
      icon: <Star className="w-6 h-6 md:w-8 md:h-8 text-pink-400" />,
      description: "Navigating challenges with clarity, uniting teams toward shared success",
      color: "border-pink-400",
    },
    {
      title: "Innovation Enthusiast",
      icon: <Zap className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />,
      description: "Always exploring cutting-edge technologies",
      color: "border-yellow-400",
    },
    {
      title: "Passionate Learner",
      icon: <Heart className="w-6 h-6 md:w-8 md:h-8 text-red-400" />,
      description: "Continuously growing and adapting",
      color: "border-red-400",
    },
  ]

  const experiences = [
    {
      title: "Robotics and AI Trainer",
      company: "A1 Reboot Times LLP",
      period: "June 2025 - Present",
      description:
        "Training students and professionals in robotics fundamentals, AI concepts, and hands-on project development. Designing curriculum and conducting workshops on emerging technologies in automation and artificial intelligence.",
      icon: <Code className="w-6 h-6" />,
      color: "from-cyan-400 to-green-500",
      borderColor: "border-cyan-400",
    },
    {
      title: "Software Developer Engineer (Android/Native)",
      company: "Compozent",
      period: "Dec 2024 - Jan 2025",
      description:
        "Developing Android applications using Flutter and Dart, with emphasis on responsive UI design, scalable architecture, and API integration.",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-green-400 to-blue-500",
      borderColor: "border-green-400",
    },
    {
      title: "Windows Server Administration",
      company: "Shree L.R Tiwari College of Engineering (Internship)",
      period: "June 2024 - July 2024",
      description:
        "Managed server installation, configuration, maintenance, Active Directory, Group Policies, DNS, DHCP servers, ensured data security through backups and updates.",
      icon: <Briefcase className="w-6 h-6" />,
      color: "from-blue-400 to-purple-500",
      borderColor: "border-blue-400",
    },
    {
      title: "Cyber Security and Ethical Hacking",
      company: "Wilmark International (Internship)",
      period: "May 2023 - June 2023",
      description:
        "Collaborated with professionals in security assessments and simulated cyber attack scenarios. Gained practical experience in incident response.",
      icon: <Code className="w-6 h-6" />,
      color: "from-red-400 to-pink-500",
      borderColor: "border-red-400",
    },
  ]

  const projects = [
    {
      title: "Cryptocurrency Wallet with Live Market Price",
      description:
        "Developed a cryptocurrency wallet website with real-time market price updates using HTML, CSS, and JavaScript. Integrated live tracking, wallet management, and secure user authentication.",
      image: "/RibbaPortfolio/images/cryptoza.png",
      tech: ["HTML", "CSS", "JavaScript", "API Integration"],
      github:
        "https://github.com/MogalRibba/Cryptocurrency-Wallet-with-live-market-price?tab=readme-ov-file#-folder-structure",
      details: "https://drive.google.com/drive/folders/1TWRnKI2nChMdmpDKVUIPAlLWenFYs6gs?usp=drive_link",
      website: "https://mogalribba.github.io/Cryptocurrency-Wallet-with-live-market-price/",
      semester: "SEM-6",
      showGithub: true,
    },
    {
      title: "Smart Vehicle Parking System",
      description:
        "Developed a Smart Vehicle Parking System using Proteus for circuit simulation, then built the actual model integrating IR sensors, servomotors, Arduino Uno and an LCD for efficient parking management.",
      image: "/RibbaPortfolio/images/smartvehicle.png",
      tech: ["Arduino", "C++", "Proteus", "Hardware"],
      details: "https://drive.google.com/drive/folders/1NJDrC2zb3GUXd9SbQtR1CYPp-3W0ASBQ?usp=drive_link",
      semester: "SEM-5",
      showGithub: false,
    },
    {
      title: "Anti Sleep Alarm Glasses",
      description:
        "Designed and developed Anti-Sleep Alarm Glasses to prevent driver fatigue and enhance road safety. Assembled and tested multiple prototypes to ensure accurate detection and timely alerts.",
      image: "/RibbaPortfolio/images/asag.jpeg",
      tech: ["Arduino", "Sensors", "Hardware"],
      details: "https://drive.google.com/drive/folders/1ZLF1lTwmji48mHK50HNwhneLNA0A8eoV?usp=drive_link",
      semester: "SEM-4",
      showGithub: false,
    },
    {
      title: "Mini Audio Amplifier",
      description:
        "Designed and developed a compact audio amplifier for small-scale applications. Utilized Proteus software for schematic & PCB layout design. Assembled and tested multiple prototypes for high-fidelity and efficient performance.",
      image: "/RibbaPortfolio/images/miniaudio.jpeg",
      tech: ["Electronics", "PCB Design", "Proteus"],
      details: "https://drive.google.com/drive/folders/1QB8aaIXKKq_uMDQtB1y1zw3KSViezPMM?usp=drive_link",
      semester: "SEM-3",
      showGithub: false,
    },
  ]

  const personalProjects = [
    {
      title: "Tetra Mania",
      description:
        "A classic Tetris game built with Unity. Features smooth gameplay and a comprehensive scoring system.",
      image: "/RibbaPortfolio/images/TetraMania.jpeg",
      tech: ["Unity", "C#", "Game Development", "Android"],
      apkUrl: "https://github.com/MogalRibba/Tetra-Mania-APK-download/releases/download/v1.0.0/TetraMania.apk",
      detailedDescription:
        "Tetra Mania is a modern take on the classic Tetris game, developed using Unity and C#. The game features smooth block movement, line clearing mechanics, and a comprehensive scoring system. Built for Android devices, it includes touch controls optimized for mobile gameplay and background music to enhance the gaming experience.",
      keyFeatures: [
        "Classic Tetris gameplay with modern graphics",
        "Touch-optimized controls for mobile devices",
        "Score tracking and high score system",
        "Background music and sound effects",
      ],
    },
    {
      title: "TypeRush",
      description:
        "A web-based typing platform with speed tests and accuracy tracking. Includes an engaging word catcher game.",
      image: "/RibbaPortfolio/images/TypeRush.png",
      tech: ["HTML", "CSS", "JavaScript", "Web Development"],
      website: "https://lnkd.in/dHxzqc4k",
      github: "https://lnkd.in/du8NQvv5",
      detailedDescription:
        "TypeRush is a feature-rich typing practice platform designed to help users improve their typing speed and accuracy. The platform includes multiple typing modes, real-time WPM calculation, accuracy tracking, and progress visualization. It also features a unique word catcher game that makes typing practice more engaging and fun.",
      keyFeatures: [
        "Real-time WPM (Words Per Minute) tracking",
        "Accuracy monitoring with detailed statistics",
        "Progress tracking and performance analytics",
        "Interactive word catcher game",
        "Multiple typing test modes and difficulties",
        "Clean, responsive user interface",
      ],
    },
    {
      title: "Quad Connect",
      description: "A Connect Four game developed with Flutter and Dart. Features clean UI and smooth animations.",
      image: "/RibbaPortfolio/images/QuadConnect.png",
      tech: ["Flutter", "Dart", "Android Development", "Mobile"],
      github: "https://github.com/MogalRibba/Quad_Connect",
      detailedDescription:
        "Quad Connect is a digital implementation of the classic Connect Four board game, developed using Flutter and Dart. This project served as a practical learning experience for Android development, featuring a clean and intuitive user interface with smooth animations and responsive gameplay.",
      keyFeatures: [
        "Classic Connect Four gameplay mechanics",
        "Two-player local multiplayer",
        "Clean and intuitive user interface",
        "Smooth animations and transitions",
        "Win detection and game state management",
      ],
    },
  ]

  const achievements = [
    {
      title: "Best Technical Paper Award",
      event: "ICAMCET 23-24",
      description: "Received the Best Technical Paper Award for report on the Mini Audio Amplifier project.",
      date: "8th & 9th February",
      icon: <Award className="w-6 h-6" />,
      certificateUrl: "https://drive.google.com/file/d/1ALl2w-o3J5zBpg2hcTFHbC0YXe4QcJul/view?usp=drive_link",
      borderColor: "border-purple-400",
    },
    {
      title: "General Secretary",
      event: "Students Council 24-25",
      description:
        "Currently serving as General Secretary managing finances, operations, organizing events, and addressing student concerns.",
      date: "August 2024 - Present",
      icon: <GraduationCap className="w-6 h-6" />,
      borderColor: "border-cyan-400",
    },
    {
      title: "Second Position",
      event: "Idea Innovation Pitching Competition",
      description:
        "Secured second place for the Anti-Sleep Alarm Glasses project, highlighting problem-solving skills and creativity.",
      date: "6th March 2024",
      icon: <Award className="w-6 h-6" />,
      borderColor: "border-pink-400",
    },
    {
      title: "Technical Committee Core Member",
      event: "College Leadership",
      description:
        "Organized, hosted and executed technical events, coordinated team efforts, and managed event logistics.",
      date: "July 23 - May 24",
      icon: <Briefcase className="w-6 h-6" />,
      borderColor: "border-green-400",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    setActiveSection(sectionId)
  }

  return (
    <div className="min-h-screen text-slate-100 overflow-x-hidden relative pixel-font synthwave-bg">
      {/* Subtle scanlines overlay */}
      <div className="fixed inset-0 scanlines pointer-events-none z-10" />

      {/* Side Navigation */}
      <RetroSideNavbar activeSection={activeSection} onSectionClick={setActiveSection} />

      {/* Main Content */}
      <div className="lg:ml-[280px] relative z-20">
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-16 lg:pt-0">
          <div className="text-center space-y-6 md:space-y-8 max-w-4xl mx-auto">
            <motion.div
  initial={false}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.5 }}
  className="space-y-4 md:space-y-6"
>
              <div className="text-left">
                <div className="text-pink-400 mb-2 md:mb-4 text-xs md:text-sm pixel-font">
                  <span className="text-cyan-400">&lt;</span>CODE<span className="text-cyan-400">&gt;</span>
                </div>

                <div className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-left pixel-font mb-4 md:mb-6">
                  <span className="block text-cyan-400 neon-cyan">Hi,</span>
                  <span className="block text-pink-400 neon-pink">I'm Ribba Mogal</span>
                </div>

                <div className="text-pink-400 mb-4 md:mb-6 text-xs md:text-sm pixel-font">
                  <span className="text-cyan-400">&lt;/</span>CODE<span className="text-cyan-400">&gt;</span>
                </div>
              </div>

<motion.div
  className="text-sm sm:text-base md:text-xl text-slate-300 font-medium pixel-font text-center"
  initial={false}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.5 }}
>
  Frontend Developer / Android Developer / Unity Game Developer
</motion.div>
</motion.div>

<motion.div
  className="flex justify-center"
  initial={false}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 2.5 }}
>
  <Button
    size="lg"
    className="border-2 border-yellow-400 bg-transparent text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 backdrop-blur-md rounded-lg pixel-font text-sm md:text-base"
    onClick={() => scrollToSection("contact")}
  >
    <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2" />
    Get In Touch
  </Button>
</motion.div>
</div>

<motion.div
  className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
  animate={{ y: [0, 10, 0] }}
  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
>
  <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
</motion.div>
</section>

        {/* About Me Section */}
<section id="about" className="py-12 md:py-20 px-4">
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-8 md:mb-12"
    >
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-cyan-400 neon-cyan pixel-font mb-4">
        ABOUT ME
      </h2>
      <p className="text-pink-400 text-base md:text-lg pixel-font">
        DISCOVER MY JOURNEY AND PASSION
      </p>
    </motion.div>

    <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
      {/* Left Column - Profile Card */}
      <div className="lg:col-span-1">
        <motion.div
          className="bg-black/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-cyan-400 text-center"
          initial={false}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Image */}
          <div className="relative mb-6">
            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full border-4 border-cyan-400 overflow-hidden relative">

              <img src="/RibbaPortfolio/images/profile.jpeg" 
                alt="Ribba Mogal"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-2 right-1/2 transform translate-x-8 md:translate-x-12 w-3 h-3 md:w-4 md:h-4 bg-green-400 rounded-full border-2 border-black"></div>
          </div>

          {/* Name and Title */}
          <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-2 pixel-font">
            RIBBA MOGAL
          </h2>
          <p className="text-pink-400 mb-4 pixel-font text-sm md:text-base">
            B.E ELECTRONICS AND COMPUTER SCIENCE
          </p>

          {/* Location and Status */}
          <div className="space-y-2 mb-6">
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="w-3 h-3 md:w-4 md:h-4 text-pink-400" />
              <span className="text-slate-300 pixel-font text-sm">
                MUMBAI, INDIA
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Calendar className="w-3 h-3 md:w-4 md:h-4 text-cyan-400" />
              <span className="text-slate-300 pixel-font text-sm">
                AVAILABLE FOR WORK
              </span>
            </div>
          </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-cyan-400 pixel-font">3+</div>
                      <div className="text-xs text-slate-400 pixel-font">YEARS</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-pink-400 pixel-font">10+</div>
                      <div className="text-xs text-slate-400 pixel-font">PROJECTS</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-purple-400 pixel-font">5+</div>
                      <div className="text-xs text-slate-400 pixel-font">SKILLS</div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4 mb-4">
                    <Button
                      size="sm"
                      className="border border-slate-600 bg-transparent text-slate-400 hover:bg-slate-600 hover:text-white transition-all duration-300 rounded-lg"
                      onClick={() => window.open("https://github.com/MogalRibba", "_blank")}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      className="border border-slate-600 bg-transparent text-slate-400 hover:bg-slate-600 hover:text-white transition-all duration-300 rounded-lg"
                      onClick={() => window.open("https://www.linkedin.com/in/ribba-mogal-27ba4523b", "_blank")}
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      className="border border-slate-600 bg-transparent text-slate-400 hover:bg-slate-600 hover:text-white transition-all duration-300 rounded-lg"
                      onClick={() => window.open("mailto:ribbamogal@gmail.com", "_blank")}
                    >
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Download Resume Button */}
                  <div className="flex justify-center">
                    <Button
                      className="border-2 border-yellow-400 bg-transparent text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 rounded-lg pixel-font text-sm"
                      onClick={() =>
                        window.open(
                          "https://drive.google.com/file/d/1nog4S9XTFLwvRr7bHMXxz5K8Y2zMQN-8/view?usp=sharing",
                          "_blank",
                        )
                      }
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      DOWNLOAD RESUME
                    </Button>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - About Content */}
              <div className="lg:col-span-2">
                <motion.div
    initial={false}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    className="space-y-6 md:space-y-8"
  >
                  {/* Main Content */}
                  <div className="space-y-4 md:space-y-6">
                    <div className="mb-4 md:mb-6">
                      <TypingText
                        texts={["Code. Create. Repeat.", "Future-focused", "Exploring cutting-edge technologies"]}
                        className="text-2xl md:text-3xl font-bold pixel-font"
                      />
                    </div>

                    <div className="space-y-4 text-slate-300 pixel-font leading-relaxed text-sm md:text-base">
                      <p>
                        A passionate developer with expertise in frontend development, mobile applications, and game
                        development. I love creating innovative solutions and bringing ideas to life through code.
                      </p>
                      <p>
                        Currently pursuing my degree while working on exciting projects and continuously learning new
                        technologies to stay at the forefront of hardware and software development.
                      </p>
                    </div>
                  </div>

                  {/* Specialization Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {aboutSpecializations.map((specialization, index) => (
                      <motion.div
  key={specialization.title}
  className={`bg-black/50 backdrop-blur-sm p-4 md:p-6 rounded-xl border ${specialization.color}`}
  initial={false}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.1 }}
  whileHover={{ scale: 1.05 }}
>

                        <div className="flex items-center space-x-3 md:space-x-4 mb-3">
                          {specialization.icon}
                          <h3 className="text-slate-200 font-bold pixel-font text-sm md:text-base">
                            {specialization.title}
                          </h3>
                        </div>
                        <p className="text-slate-400 pixel-font text-xs md:text-sm leading-relaxed">
                          {specialization.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
<section id="skills" className="py-12 md:py-20 px-4">
  <div className="max-w-6xl mx-auto">
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-8 md:mb-12"
    >

              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-cyan-400 neon-cyan pixel-font mb-4">
                SKILLS & TECHNOLOGIES
              </h2>
              <p className="text-slate-400 text-base md:text-lg pixel-font">
                Technologies and tools I use to bring creative ideas to life
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
              {/* Skills Categories Section */}
              <div className="bg-black/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-gray-800">
                <div className="space-y-4">
                  {skillsData.map((category, categoryIndex) => (
                    <motion.div
  key={category.category}
  className={`p-4 rounded-lg border ${category.color} ${category.bgColor}`}
  initial={false}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ delay: categoryIndex * 0.2 }}
  whileHover={{ scale: 1.02 }}
>

                      <div className="flex items-center space-x-3 mb-3">
                        {category.icon}
                        <h3 className="text-slate-200 font-bold pixel-font text-sm md:text-base">
                          {category.category.toUpperCase()}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, index) => (
                          <motion.span
  key={skill}
  className="px-2 py-1 bg-black/40 backdrop-blur-sm rounded-full text-slate-300 pixel-font text-xs border border-gray-600 hover:border-gray-400 transition-all duration-300"
  initial={false}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ delay: categoryIndex * 0.2 + index * 0.1 }}
  whileHover={{ scale: 1.05, y: -2 }}
>

                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Skill Categories Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skillCategories.map((category, index) => (
                  <motion.div
  key={category.title}
  className={`bg-black/50 backdrop-blur-sm p-4 md:p-5 rounded-xl border ${category.color} text-center min-h-[140px] flex flex-col justify-center`}
  initial={false}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.1 }}
  whileHover={{ scale: 1.05 }}
>

                    <div className="mb-3 md:mb-4 flex justify-center">{category.icon}</div>
                    <h3 className="text-slate-200 font-bold pixel-font mb-2 text-sm md:text-base">{category.title}</h3>
                    <p className="text-slate-400 pixel-font text-xs leading-relaxed">{category.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-20 px-4">
          <div className="max-w-6xl mx-auto">
           <motion.div
  initial={false}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-center mb-8 md:mb-12"
>

              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-cyan-400 neon-cyan pixel-font mb-4">
                FEATURED PROJECTS
              </h2>
              <p className="text-pink-400 text-base md:text-lg pixel-font">ACADEMIC & PERSONAL CREATIONS</p>
            </motion.div>

            {/* Academic Projects */}
            <div className="mb-12 md:mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-purple-400 neon-purple mb-6 md:mb-8 text-center pixel-font">
                ACADEMIC PROJECTS
              </h3>
              <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                {projects.map((project, index) => (
                  <motion.div
  key={project.title}
  className="bg-black/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden hover:border-cyan-400 transition-all duration-300"
  initial={false}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.1 }}
  whileHover={{ y: -5 }}
>

                    <div className="relative h-40 md:h-48 overflow-hidden">
                      <img
                        src={project.image || "/RibbaPortfolio/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-pink-500 text-white pixel-font text-xs">{project.semester}</Badge>
                      </div>
                    </div>
                    <div className="p-4 md:p-6">
                      <h4 className="text-cyan-400 font-bold text-base md:text-lg mb-2 md:mb-3 pixel-font">
                        {project.title.toUpperCase()}
                      </h4>
                      <p className="text-slate-300 mb-3 md:mb-4 text-xs md:text-sm leading-relaxed pixel-font">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-purple-400 border-purple-400 pixel-font text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        <Button
                          size="sm"
                          className="border border-cyan-400 bg-transparent text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 rounded-lg pixel-font text-xs"
                          onClick={() => window.open(project.details, "_blank")}
                        >
                          <ExternalLink className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                          DETAILS
                        </Button>
                        {project.showGithub && (
                          <Button
                            size="sm"
                            className="border border-pink-400 bg-transparent text-pink-400 hover:bg-pink-400 hover:text-black transition-all duration-300 rounded-lg pixel-font text-xs"
                            onClick={() => window.open(project.github, "_blank")}
                          >
                            <Github className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                            CODE
                          </Button>
                        )}
                        {project.website && (
                          <Button
                            size="sm"
                            className="border border-green-400 bg-transparent text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 rounded-lg pixel-font text-xs"
                            onClick={() => window.open(project.website, "_blank")}
                          >
                            <Globe className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                            LIVE
                          </Button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Personal Projects */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-purple-400 neon-purple mb-6 md:mb-8 text-center pixel-font">
                PERSONAL PROJECTS
              </h3>
              <div className="relative">
                {/* Carousel Container */}
                <div className="overflow-hidden">
                  <motion.div
                    className="flex gap-6 md:gap-8"
                    animate={{ x: -currentSlide * (320 + 32) }} // 320px card width + 32px gap
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    onTouchStart={(e) => {
                      setTouchStart(e.touches[0].clientX)
                    }}
                    onTouchMove={(e) => {
                      setTouchEnd(e.touches[0].clientX)
                    }}
                    onTouchEnd={() => {
                      if (!touchStart || !touchEnd) return
                      const distance = touchStart - touchEnd
                      const isLeftSwipe = distance > 50
                      const isRightSwipe = distance < -50

                      if (isLeftSwipe && currentSlide < personalProjects.length - 1) {
                        setCurrentSlide(currentSlide + 1)
                      }
                      if (isRightSwipe && currentSlide > 0) {
                        setCurrentSlide(currentSlide - 1)
                      }
                    }}
                  >
                    {personalProjects.map((project, index) => (
                      <motion.div
  key={project.title}
  className="bg-black/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden hover:border-pink-400 transition-all duration-300 flex-shrink-0 w-80"
  initial={false}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.1 }}
  whileHover={{ y: -5 }}
>

                        <div className="relative h-40 md:h-48 overflow-hidden">
                          <img
                            src={project.image || "/RibbaPortfolio/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                          />
                        </div>
                        <div className="p-4 md:p-6">
                          <h4 className="text-cyan-400 font-bold text-base md:text-lg mb-2 md:mb-3 pixel-font">
                            {project.title.toUpperCase()}
                          </h4>
                          <p className="text-slate-300 mb-3 md:mb-4 text-xs md:text-sm leading-relaxed pixel-font">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                            {project.tech.map((tech: string) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className="text-purple-400 border-purple-400 pixel-font text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <Button
                              size="sm"
                              className="border border-cyan-400 bg-transparent text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 rounded-lg pixel-font text-xs"
                              onClick={() => setSelectedProject(project)}
                            >
                              <Eye className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                              DETAILS
                            </Button>
                            {project.github && (
                              <Button
                                size="sm"
                                className="border border-pink-400 bg-transparent text-pink-400 hover:bg-pink-400 hover:text-black transition-all duration-300 rounded-lg pixel-font text-xs"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  window.open(project.github, "_blank")
                                }}
                              >
                                <Github className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                                CODE
                              </Button>
                            )}
                            {project.website && (
                              <Button
                                size="sm"
                                className="border border-green-400 bg-transparent text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 rounded-lg pixel-font text-xs"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  window.open(project.website, "_blank")
                                }}
                              >
                                <Globe className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                                LIVE
                              </Button>
                            )}
                            {project.apkUrl && (
                              <Button
                                size="sm"
                                className="border border-yellow-400 bg-transparent text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 rounded-lg pixel-font text-xs"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  window.open(project.apkUrl, "_blank")
                                }}
                              >
                                <Download className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                                DOWNLOAD APK
                              </Button>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center mt-6 md:mt-8 space-x-2">
                  {personalProjects.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentSlide === index ? "bg-pink-400 scale-125" : "bg-gray-600 hover:bg-gray-500"
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 md:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
  initial={false}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-center mb-8 md:mb-12"
>

              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-cyan-400 neon-cyan pixel-font mb-4">
                Technical EXPERIENCE
              </h2>
              <p className="text-pink-400 text-base md:text-lg pixel-font mb-4 md:mb-6">MY PROFESSIONAL JOURNEY</p>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="border-2 border-purple-400 bg-transparent text-purple-400 hover:bg-purple-400 hover:text-black transition-all duration-300 rounded-lg pixel-font text-sm"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/drive/folders/1tL1EQJo14dU8kveEUBpY0u6n4u-Ce74V?usp=drive_link",
                      "_blank",
                    )
                  }
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  VIEW ALL CERTIFICATES
                </Button>
              </motion.div>
            </motion.div>

            <div className="space-y-6 md:space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
  key={exp.title}
  className={`bg-black/50 backdrop-blur-sm p-4 md:p-6 rounded-xl border ${exp.borderColor}`}
  initial={false}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ delay: index * 0.2 }}
  whileHover={{ scale: 1.02 }}
>

                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className={`p-2 md:p-3 rounded-lg bg-gradient-to-r ${exp.color}`}>{exp.icon}</div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-cyan-400 font-bold text-base md:text-lg pixel-font">{exp.title}</h3>
                        <span className="text-pink-400 pixel-font text-xs md:text-sm">{exp.period}</span>
                      </div>
                      <h4 className="text-purple-400 font-medium pixel-font mb-2 md:mb-3 text-sm md:text-base">
                        {exp.company}
                      </h4>
                      <p className="text-slate-300 leading-relaxed pixel-font text-xs md:text-sm">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-12 md:py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
  initial={false}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-center mb-8 md:mb-12"
>

              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-cyan-400 neon-cyan pixel-font mb-4">
                ACHIEVEMENTS
              </h2>
              <p className="text-pink-400 text-base md:text-lg pixel-font">RECOGNITION AND MILESTONES</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  className={`bg-black/50 backdrop-blur-sm p-4 md:p-6 rounded-xl border ${achievement.borderColor}`}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="p-2 md:p-3 rounded-lg bg-gradient-to-r from-purple-400 to-pink-500">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-cyan-400 font-bold text-base md:text-lg pixel-font">{achievement.title}</h3>
                        <span className="text-pink-400 pixel-font text-xs md:text-sm">{achievement.date}</span>
                      </div>
                      <h4 className="text-purple-400 font-medium pixel-font mb-2 md:mb-3 text-sm md:text-base">
                        {achievement.event}
                      </h4>
                      <p className="text-slate-300 leading-relaxed pixel-font text-xs md:text-sm mb-3 md:mb-4">
                        {achievement.description}
                      </p>
                      {achievement.certificateUrl && (
                        <Button
                          size="sm"
                          className="border border-yellow-400 bg-transparent text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 rounded-lg pixel-font text-xs"
                          onClick={() => window.open(achievement.certificateUrl, "_blank")}
                        >
                          <ExternalLink className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                          VIEW CERTIFICATE
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
             initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 md:mb-12"
            >
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-cyan-400 neon-cyan pixel-font mb-4">
                GET IN TOUCH
              </h2>
              <p className="text-pink-400 text-base md:text-lg pixel-font mb-6 md:mb-8">
                LET'S CREATE SOMETHING AMAZING TOGETHER
              </p>
            </motion.div>

            <motion.div
              className="max-w-2xl mx-auto bg-black/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-gray-800"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-6 md:mb-8">
                <h3 className="text-cyan-400 font-bold text-xl md:text-2xl mb-4 pixel-font">LET'S CONNECT</h3>
                <p className="text-slate-300 pixel-font text-sm md:text-base">
                  READY TO COLLABORATE OR HAVE A QUESTION? I'D LOVE TO HEAR FROM YOU!
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
                <div className="space-y-4">
                  <h4 className="text-pink-400 font-bold pixel-font mb-4 text-sm md:text-base">CONTACT INFO</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                      <div>
                        <p className="text-slate-400 text-xs md:text-sm pixel-font">EMAIL</p>
                        <p className="text-slate-200 pixel-font text-xs md:text-sm">RIBBAMOGAL@GMAIL.COM</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Github className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                      <div>
                        <p className="text-slate-400 text-xs md:text-sm pixel-font">GITHUB</p>
                        <p className="text-slate-200 pixel-font text-xs md:text-sm">MOGALRIBBA</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                      <div>
                        <p className="text-slate-400 text-xs md:text-sm pixel-font">LINKEDIN</p>
                        <p className="text-slate-200 pixel-font text-xs md:text-sm">RIBBA MOGAL</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-pink-400 font-bold pixel-font mb-4 text-sm md:text-base">QUICK ACTIONS</h4>
                  <div className="space-y-3">
                    <Button
                      className="w-full justify-start border border-cyan-400 bg-transparent text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 rounded-lg pixel-font text-xs md:text-sm"
                      onClick={() => window.open("mailto:ribbamogal@gmail.com", "_blank")}
                    >
                      <Mail className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                      SEND EMAIL
                    </Button>
                    <Button
                      className="w-full justify-start border border-pink-400 bg-transparent text-pink-400 hover:bg-pink-400 hover:text-black transition-all duration-300 rounded-lg pixel-font text-xs md:text-sm"
                      onClick={() => window.open("https://github.com/MogalRibba", "_blank")}
                    >
                      <Github className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                      VIEW GITHUB
                    </Button>
                    <Button
                      className="w-full justify-start border border-purple-400 bg-transparent text-purple-400 hover:bg-purple-400 hover:text-black transition-all duration-300 rounded-lg pixel-font text-xs md:text-sm"
                      onClick={() => window.open("https://www.linkedin.com/in/ribba-mogal-27ba4523b", "_blank")}
                    >
                      <Linkedin className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                      CONNECT ON LINKEDIN
                    </Button>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-slate-400 pixel-font text-xs md:text-sm">
                  AVAILABLE FOR FREELANCE PROJECTS AND FULL-TIME OPPORTUNITIES
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 md:py-8 px-4 border-t border-gray-800">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-slate-400 pixel-font text-xs md:text-sm">
              © 2025 RIBBA MOGAL. ALL RIGHTS RESERVED. CRAFTED WITH <span className="text-pink-400">♥</span> AND
              PASSION.
            </p>
          </div>
        </footer>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="bg-black/90 backdrop-blur-md rounded-xl border border-cyan-400 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={false}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 pixel-font">
                  {selectedProject.title.toUpperCase()}
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedProject(null)}
                  className="text-slate-400 hover:text-white"
                >
                  ✕
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <img
                    src={selectedProject.image || "/RibbaPortfolio/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-48 md:h-64 object-cover rounded-lg mb-4"
                  />
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.tech.map((tech: string) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-purple-400 border-purple-400 pixel-font text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-pink-400 mb-2 pixel-font">DESCRIPTION</h3>
                    <p className="text-slate-300 pixel-font text-xs md:text-sm leading-relaxed">
                      {selectedProject.detailedDescription}
                    </p>
                  </div>

                  {selectedProject.keyFeatures && (
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-pink-400 mb-2 pixel-font">KEY FEATURES</h3>
                      <ul className="space-y-2">
                        {selectedProject.keyFeatures.map((feature: string, index: number) => (
                          <li key={index} className="text-slate-300 pixel-font text-xs md:text-sm flex items-start">
                            <span className="text-cyan-400 mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 md:gap-3 pt-4">
                    {selectedProject.github && (
                      <Button
                        className="border border-pink-400 bg-transparent text-pink-400 hover:bg-pink-400 hover:text-black transition-all duration-300 rounded-lg pixel-font text-xs"
                        onClick={() => window.open(selectedProject.github, "_blank")}
                      >
                        <Github className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                        VIEW CODE
                      </Button>
                    )}
                    {selectedProject.website && (
                      <Button
                        className="border border-green-400 bg-transparent text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 rounded-lg pixel-font text-xs"
                        onClick={() => window.open(selectedProject.website, "_blank")}
                      >
                        <Globe className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                        LIVE DEMO
                      </Button>
                    )}
                    {selectedProject.apkUrl && (
                      <Button
                        className="border border-yellow-400 bg-transparent text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 rounded-lg pixel-font text-xs"
                        onClick={() => window.open(selectedProject.apkUrl, "_blank")}
                      >
                        <Download className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                        DOWNLOAD APK
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
