import React from 'react'
import { personalInfo, education } from '../../data/portfolioData'
import useIntersection from '../../hooks/useIntersection'
import './About.css'

function About() {
  const [ref, visible] = useIntersection()

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="container">
        <h2 className={`section-title fade-in${visible ? ' visible' : ''}`}>
          About <span>Me</span>
        </h2>
        <div className={`section-divider fade-in${visible ? ' visible' : ''}`} />

        <div className="about__grid">
          {/* Left – Bio */}
          <div className={`about__bio fade-in${visible ? ' visible' : ''}`}>
            <div className="about__avatar" aria-hidden="true">
              <span>GG</span>
            </div>

            <p className="about__intro">
              Hi, I'm <strong>Gunaseelan G</strong> – an engineering student currently pursuing a
              Bachelor of Technology in <strong>Artificial Intelligence and Data Science</strong> at{' '}
              <strong>Rathinam Technical Campus, Coimbatore</strong> (2023 – Present).
            </p>

            <p className="about__text">
              I'm passionate about software development and enjoy working across the full stack —
              from building user interfaces with React to developing backend services with Node.js
              and Express. I also have a growing interest in cloud technologies and DevOps practices,
              with hands-on exposure to AWS, Docker, and CI/CD pipelines.
            </p>

            <p className="about__text">
              {personalInfo.objective}
            </p>

            <div className="about__meta">
              <div className="about__meta-item">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {personalInfo.location}
              </div>
              <div className="about__meta-item">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                B.Tech AI & Data Science
              </div>
              <div className="about__meta-item">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                CGPA: {education[0].score.split(': ')[1]}
              </div>
            </div>
          </div>

          {/* Right – Quick stats */}
          <div className={`about__cards fade-in fade-in-delay-2${visible ? ' visible' : ''}`}>
            <div className="about__stat-card">
              <div className="about__stat-icon">🎓</div>
              <div>
                <h3 className="about__stat-title">Education</h3>
                <p className="about__stat-desc">B.Tech – AI & Data Science</p>
                <p className="about__stat-sub">Rathinam Technical Campus · 2023 – Present</p>
              </div>
            </div>

            <div className="about__stat-card">
              <div className="about__stat-icon">💼</div>
              <div>
                <h3 className="about__stat-title">Internship</h3>
                <p className="about__stat-desc">Software Intern @ Xortican Technologies</p>
                <p className="about__stat-sub">Jan 2025 – Feb 2025</p>
              </div>
            </div>

            <div className="about__stat-card">
              <div className="about__stat-icon">🚀</div>
              <div>
                <h3 className="about__stat-title">Projects</h3>
                <p className="about__stat-desc">Full-Stack Web &amp; DevOps</p>
                <p className="about__stat-sub">Scholarship System · Blue-Green Deployment</p>
              </div>
            </div>

            <div className="about__stat-card">
              <div className="about__stat-icon">🌐</div>
              <div>
                <h3 className="about__stat-title">Interests</h3>
                <p className="about__stat-desc">Software Dev · Cloud · DevOps</p>
                <p className="about__stat-sub">Always learning, always building</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
