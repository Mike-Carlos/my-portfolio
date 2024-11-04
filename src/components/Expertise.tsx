import React from 'react'
import { Code, Server, Database } from 'lucide-react'
import Section from './Section'

interface SkillsSectionProps {
  skills: {
    category: string
    items: string[]
  }[]
}

const Expertise: React.FC<SkillsSectionProps> = ({ skills }) => (
  <Section id="expertise" title="Expertise & Skills">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((skill, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            {skill.category === 'Frontend' && <Code className="mr-2" />}
            {skill.category === 'Backend' && <Server className="mr-2" />}
            {skill.category === 'Database' && <Database className="mr-2" />}
            {skill.category}
          </h3>
          <ul className="list-disc list-inside">
            {skill.items.map((item, itemIndex) => (
              <li key={itemIndex} className="mb-2">{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
)

export default Expertise
