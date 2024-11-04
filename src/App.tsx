import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import AboutSection from './components/About'
import ExperienceSection from './components/Experience'
import SkillsSection from './components/Expertise'
import ProjectsSection from './components/Projects'
import EducationSection from './components/EducationCertifications'
import Footer from './components/Footer'

const App = () => {
  const [activeSection, setActiveSection] = useState('about')

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(sectionId)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'expertise', 'projects', 'education']
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        return element && element.getBoundingClientRect().top <= 80
      })
      if (currentSection) setActiveSection(currentSection)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const experiences = [
    {
      title: 'Software Engineer I',
      company: 'Tsukiden Global Solutions',
      period: '2023 - Present',
      responsibilities: [
        'Developed full-stack applications...',
        'Led a team of developers...'
      ]
    }
  ]

  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'HTML', 'CSS', 'Javascript'] },
    { category: 'Backend', items: ['Node.js', 'SpringBoot', 'Java'] },
    { category: 'Database', items: ['MySQL'] }
  ]

  const projects = [
    {
      name: 'Project A',
      role: 'Lead Developer',
      description: 'Developed a web-based project management tool...',
      techStack: ['React', 'Node.js', 'MongoDB']
    }
  ]

  const educations = [
    { degree: 'Bachelor of Science in Information Technology', institution: 'San Pablo Colleges', year: '2019' }
  ]

  const certifications = [
    { name: 'Certified Java Developer', issuer: 'Oracle', year: '2016' }
  ]

  return (
    <div>
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <main className="container mx-auto px-4 py-16">
        <AboutSection />
        <ExperienceSection experiences={experiences} />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} />
        <EducationSection educations={educations} certifications={certifications} />
      </main>
      <Footer />
    </div>
  )
}

export default App
