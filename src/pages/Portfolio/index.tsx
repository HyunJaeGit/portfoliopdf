import { Link } from 'react-router-dom'
import { projects } from '../../content/projects'
import './Portfolio.css'

function Portfolio() {
  return (
    <section className="portfolio-page" aria-labelledby="portfolio-title">
      <header className="portfolio-intro">
        <div className="portfolio-document-bar">
          <span>BACKEND TECHNICAL CASEBOOK</span>
          <span>SELECTED WORK · 02</span>
        </div>
        <h1 id="portfolio-title">포트폴리오</h1>
      </header>

      <div className="portfolio-index" aria-label="프로젝트 목차">
        {projects.map((project, index) => (
          <Link className="portfolio-entry" to={project.path} key={project.id} aria-label={`${project.title} 상세 포트폴리오 보기`}>
            <figure className={`${project.id}-entry-visual`}>
              <img src={`${import.meta.env.BASE_URL}${project.image.src}`} alt={project.image.alt} />
              <figcaption>개발·테스트 환경 화면</figcaption>
            </figure>
            <div className="portfolio-entry-copy">
              <div className="portfolio-entry-heading">
                <p>CASE {String(index + 1).padStart(2, '0')}</p>
                <p>{project.period}</p>
              </div>
              <h2>{project.title}</h2>
              <p className="portfolio-entry-type">{project.type}</p>
              <dl>
                <div><dt>역할</dt><dd>{project.role}</dd></div>
                <div><dt>핵심 구현</dt><dd>{project.highlights.slice(0, 2).join(' · ')}</dd></div>
                <div><dt>기술</dt><dd>{project.technologies.join(' · ')}</dd></div>
              </dl>
              <p className="portfolio-entry-problem"><strong>프로젝트 배경</strong>{project.problem}</p>
              <strong className="portfolio-entry-cta">상세 포트폴리오 보기 <span aria-hidden="true">→</span></strong>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
