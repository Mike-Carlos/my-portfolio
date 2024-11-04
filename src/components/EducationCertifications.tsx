import React from 'react'
import { GraduationCap, Award } from 'lucide-react'
import Section from './Section'

interface EducationSectionProps {
  educations: {
    degree: string
    institution: string
    year: string
  }[]
  certifications: {
    name: string
    issuer: string
    year: string
  }[]
}

const Education: React.FC<EducationSectionProps> = ({ educations, certifications }) => (
  <Section id="education" title="Education & Certifications">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-2xl font-semibold mb-4 flex items-center">
          <GraduationCap className="mr-2" />
          Education
        </h3>
        {educations.map((edu, index) => (
          <div key={index} className="mb-4">
            <h4 className="text-lg font-semibold">{edu.degree}</h4>
            <p>{edu.institution}, {edu.year}</p>
          </div>
        ))}
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4 flex items-center">
          <Award className="mr-2" />
          Certifications
        </h3>
        {certifications.map((cert, index) => (
          <div key={index} className="mb-4">
            <h4 className="text-lg font-semibold">{cert.name}</h4>
            <p>{cert.issuer}, {cert.year}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
)

export default Education
