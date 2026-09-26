import React from 'react'
import { experience } from '../../data/portfolioData'
import useIntersection from '../../hooks/useIntersection'
import './Experience.css'

function Experience() {
  const [ref, visible] = useIntersection()

  return (
    <section id="experience" className="section experience" ref={ref}>
      <div className="container">
        <h2 className={`section-title fade-in${visible ? ' visible' : ''}`}>
          Work <span>Experience</span>
        </h2>
        <div className={`section-divider fade-in${visible ? ' visible' : ''}`} />
        <p className={`section-subtitle fade-in${visible ? ' visible' : ''}`}>
          Professional experience gained so far
        </p>

        <div className="exp__timeline">
          {experience.map((item, i) => (
            <div
              key={item.id}
              className={`exp__item fade-in${visible ? ' visible' : ''}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Timeline dot & line */}
              <div className="exp__timeline-track" aria-hidden="true">
                <div className="exp__dot" />
                <div className="exp__line" />
              </div>

              {/* Card */}
              <div className="exp__card">
                <div className="exp__card-top">
                  <div>
                    <h3 className="exp__role">{item.role}</h3>
                    <p className="exp__company">{item.company}</p>
                  </div>
                  <span className="exp__duration">{item.duration}</span>
                </div>

                <p className="exp__desc">{item.description}</p>

                <div className="exp__tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
