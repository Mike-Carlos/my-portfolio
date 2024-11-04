interface Project {
    name: string
    role: string
    description: string
    techStack: string[]
  }
  
  interface ProjectCardProps {
    project: Project
  }
  
  const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
        <h3 className="text-xl font-semibold">{project.name}</h3>
        <p className="text-blue-600 font-medium">{project.role}</p>
        <p className="mt-2">{project.description}</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          {project.techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    )
  }
  
  export default ProjectCard
  