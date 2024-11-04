import React from 'react'
import Section from './Section'
import ProjectCard from './ProjectCard'

interface ProjectsSectionProps {
  projects: {
    name: string
    role: string
    description: string
    techStack: string[]
  }[]
}

const Projects: React.FC<ProjectsSectionProps> = ({ projects }) => (
  <Section id="projects" title="Projects">
    <div className="space-y-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </Section>
)

export default Projects
