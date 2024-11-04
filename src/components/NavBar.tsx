import { useState, useEffect } from 'react'

interface NavBarProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

const NavBar = ({ activeSection, scrollToSection }: NavBarProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <div className="text-xl font-bold">My Portfolio</div>
        <button className="md:hidden text-xl" onClick={toggleNav}>
          ☰
        </button>
        <ul className={`md:flex md:items-center space-y-4 md:space-y-0 md:space-x-8 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li>
            <button
              onClick={() => scrollToSection('about')}
              className={`text-gray-600 hover:text-blue-600 ${activeSection === 'about' ? 'font-bold text-blue-600' : ''}`}>
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('experience')}
              className={`text-gray-600 hover:text-blue-600 ${activeSection === 'experience' ? 'font-bold text-blue-600' : ''}`}>
              Experience
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('expertise')}
              className={`text-gray-600 hover:text-blue-600 ${activeSection === 'expertise' ? 'font-bold text-blue-600' : ''}`}>
              Expertise
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('projects')}
              className={`text-gray-600 hover:text-blue-600 ${activeSection === 'projects' ? 'font-bold text-blue-600' : ''}`}>
              Projects
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
