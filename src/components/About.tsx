import { Mail, Phone, Linkedin, Github } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center md:items-start gap-8">
      <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
        <img src="/placeholder.svg?height=192&width=192" alt="John Doe" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="mb-4">
          I am a passionate Full Stack Developer with over 8 years of experience in building robust and scalable web applications.
          My expertise spans across frontend and backend technologies, with a strong foundation in software development principles
          and best practices. I thrive in collaborative environments and am always eager to take on new challenges and learn emerging technologies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <Mail className="mr-2 text-blue-600" />
            <a href="mailto:john.doe@example.com" className="hover:text-blue-600">mikeedaya@gmail.com</a>
          </div>
          <div className="flex items-center">
            <Phone className="mr-2 text-blue-600" />
            <a href="tel:+1234567890" className="hover:text-blue-600">+1 (234) 567-890</a>
          </div>
          <div className="flex items-center">
            <Linkedin className="mr-2 text-blue-600" />
            <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">LinkedIn Profile</a>
          </div>
          <div className="flex items-center">
            <Github className="mr-2 text-blue-600" />
            <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">GitHub Profile</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
