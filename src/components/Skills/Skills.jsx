import React from 'react'
import { skills } from '../../data/portfolioData'
import useIntersection from '../../hooks/useIntersection'
import './Skills.css'

// Map skill name to a colour accent for the pill
const techColors = {
  Java: '#f89820',
  SQL: '#336791',
  MySQL: '#00758f',
  HTML: '#e34c26',
  CSS: '#264de4',
  JavaScript: '#f7df1e',
  React: '#61dafb',
  'Node.js': '#68a063',
  'Express.js': '#ffffff',
  AWS: '#ff9900',
  'CI/CD': '#a855f7',
  Docker: '#2496ed',
  Kubernetes: '#326ce5',
  Jenkins: '#d33833',
  Terraform: '#7b42bc',
  Git: '#f05032',
  GitHub: '#ffffff',
  Linux: '#fcc624',
  'VS Code': '#007acc',
  Vercel: '#ffffff',
  Render: '#46e3b7',
}

function SkillPill({ name }) {
  const color = techColors[name] || 'var(--primary-light)'
  return (
    <div
      className="skill-pill"
      style={{ '--pill-color': color }}
    >
      <span className="skill-pill__dot" />
      {name}
    </div>
  )
}

function SkillCard({ category, icon, items, delay, visible }) {
  return (
    <div
      className={`skill-card fade-in${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay * 0.08}s` }}
    >
      <div className="skill-card__header">
        <span className="skill-card__icon" aria-hidden="true">{icon}</span>
        <h3 className="skill-card__category">{category}</h3>
      </div>
      <div className="skill-card__pills">
        {items.map((item) => (
          <SkillPill key={item} name={item} />
        ))}
      </div>
    </div>
  )
}

function Skills() {
  const [ref, visible] = useIntersection()

  return (
    <section id="skills" className="section skills" ref={ref}>
      <div className="container">
        <h2 className={`section-title fade-in${visible ? ' visible' : ''}`}>
          Technical <span>Skills</span>
        </h2>
        <div className={`section-divider fade-in${visible ? ' visible' : ''}`} />
        <p className={`section-subtitle fade-in${visible ? ' visible' : ''}`}>
          Technologies and tools I work with
        </p>

        <div className="skills__grid">
          {skills.map((skill, i) => (
            <SkillCard
              key={skill.category}
              category={skill.category}
              icon={skill.icon}
              items={skill.items}
              delay={i}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
