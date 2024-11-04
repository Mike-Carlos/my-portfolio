import React from 'react'

interface SectionProps {
  id: string
  title: string
  children: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => (
  <section id={id} className="py-12">
    <h2 className="text-3xl font-bold mb-6">{title}</h2>
    {children}
  </section>
)

export default Section
