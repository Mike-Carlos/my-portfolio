import React from 'react'
import Section from './Section'

interface ExperienceProps {
  experiences: {
    title: string
    company: string
    period: string
    responsibilities: string[]
  }[]
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => (
  <Section id="experience" title="Work Experience">
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
          <p className="text-blue-600 mb-2">{exp.company} | {exp.period}</p>
          <ul className="list-disc list-inside">
            {exp.responsibilities.map((resp, respIndex) => (
              <li key={respIndex} className="mb-1">{resp}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
)

export default Experience
