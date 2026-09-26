import React from 'react'
import { projects } from '../../data/portfolioData'
import useIntersection from '../../hooks/useIntersection'
import './Projects.css'

function ProjectCard({ project, delay, visible }) {
  return (
    <div
      className={`project-card fade-in${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay * 0.15}s` }}
    >
      {/* Card header */}
      <div className="project-card__header">
        <div className="project-card__icon" aria-hidden="true">
          {project.id === 1 ? '🎓' : '🚀'}
        </div>
        <h3 className="project-card__title">{project.title}</h3>
      </div>

      {/* Description */}
      <p className="project-card__desc">{project.description}</p>

      {/* Highlights */}
      <ul className="project-card__highlights" aria-label="Project highlights">
        {project.highlights.map((h) => (
          <li key={h} className="project-card__highlight">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {h}
          </li>
        ))}
      </ul>

      {/* Tech stack badges */}
      <div className="project-card__tech" aria-label="Technologies used">
        {project.technologies.map((tech) => (
          <span key={tech} className="tag">{tech}</span>
        ))}
      </div>

      {/* Actions */}
      <div className="project-card__actions">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline project-card__btn"
          aria-label={`View ${project.title} on GitHub`}
        >
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
          GitHub
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary project-card__btn"
          aria-label={`View live demo of ${project.title}`}
        >
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Live Demo
        </a>
      </div>
    </div>
  )
}

function Projects() {
  const [ref, visible] = useIntersection()

  return (
    <section id="projects" className="section projects" ref={ref}>
      <div className="container">
        <h2 className={`section-title fade-in${visible ? ' visible' : ''}`}>
          Featured <span>Projects</span>
        </h2>
        <div className={`section-divider fade-in${visible ? ' visible' : ''}`} />
        <p className={`section-subtitle fade-in${visible ? ' visible' : ''}`}>
          Things I've built and worked on
        </p>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={i}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
