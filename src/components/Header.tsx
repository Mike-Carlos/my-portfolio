import { FC } from 'react'

interface HeaderProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

const Header: FC<HeaderProps> = ({ activeSection, scrollToSection }) => {
  const sections = ['about', 'experience', 'expertise', 'projects', 'education']

  return (
    <header className="fixed top-0 left-0 right-0 bg-blue-600 text-white py-4 z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mike Carlos Daya</h1>
        <nav>
          <ul className="flex space-x-4">
            {sections.map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`py-2 px-3 rounded transition-colors ${
                    activeSection === section ? 'bg-blue-700' : 'hover:bg-blue-500'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
