import React from 'react'
import { certifications } from '../../data/portfolioData'
import useIntersection from '../../hooks/useIntersection'
import './Certificates.css'

function Certificates() {
  const [ref, visible] = useIntersection()

  return (
    <section id="certificates" className="section certificates" ref={ref}>
      <div className="container">
        <h2 className={`section-title fade-in${visible ? ' visible' : ''}`}>
          <span>Certifications</span>
        </h2>
        <div className={`section-divider fade-in${visible ? ' visible' : ''}`} />
        <p className={`section-subtitle fade-in${visible ? ' visible' : ''}`}>
          Courses and certifications I've completed
        </p>

        <div className="cert__grid">
          {certifications.map((cert, i) => (
            <div
              key={cert.id}
              className={`cert__card fade-in${visible ? ' visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="cert__icon" aria-hidden="true">{cert.icon}</div>
              <div className="cert__body">
                <h3 className="cert__title">{cert.title}</h3>
                <div className="cert__ribbon" aria-hidden="true">
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Completed
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates
