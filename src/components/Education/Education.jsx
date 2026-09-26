import React from 'react'
import { education } from '../../data/portfolioData'
import useIntersection from '../../hooks/useIntersection'
import './Education.css'

function Education() {
  const [ref, visible] = useIntersection()

  return (
    <section id="education" className="section education" ref={ref}>
      <div className="container">
        <h2 className={`section-title fade-in${visible ? ' visible' : ''}`}>
          <span>Education</span>
        </h2>
        <div className={`section-divider fade-in${visible ? ' visible' : ''}`} />
        <p className={`section-subtitle fade-in${visible ? ' visible' : ''}`}>
          My academic background
        </p>

        <div className="edu__timeline">
          {education.map((item, i) => (
            <div
              key={item.id}
              className={`edu__item fade-in${visible ? ' visible' : ''}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Timeline dot */}
              <div className="edu__track" aria-hidden="true">
                <div className={`edu__dot${item.current ? ' edu__dot--current' : ''}`} />
                {i < education.length - 1 && <div className="edu__line" />}
              </div>

              {/* Card */}
              <div className={`edu__card${item.current ? ' edu__card--current' : ''}`}>
                {item.current && (
                  <span className="edu__badge">Current</span>
                )}
                <h3 className="edu__degree">{item.degree}</h3>
                <p className="edu__institution">
                  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  {item.institution}
                  {item.location !== item.institution && `, ${item.location}`}
                </p>
                <div className="edu__meta">
                  <span className="edu__duration">
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {item.duration}
                  </span>
                  <span className="edu__score">
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    {item.score}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
