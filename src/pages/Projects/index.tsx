import { Link } from 'react-router-dom'
import { projects } from '../../content/projects'
import './Projects.css'

function Projects() {
  return (
    <div className="projects-page">
      <header className="projects-intro">
        <p className="eyebrow">Selected Work</p>
        <h1>프로젝트</h1>
        <p>문제와 제약을 살피고 선택한 구현 방식을 검증 가능한 범위에서 정리했습니다.</p>
      </header>
      <div className="project-index">
        {projects.map((project, index) => (
          <article className="project-index-item" key={project.id}>
            <p className="project-index-number">{String(index + 1).padStart(2, '0')}</p>
            <div>
              <h2>{project.title}</h2>
              <p className="project-index-subtitle">{project.subtitle}</p>
              <p className="project-index-role">{project.role}</p>
              <p className="project-index-tech">{project.technologies.join(' · ')}</p>
            </div>
            <Link to={project.path} aria-label={`${project.title} 상세 보기`}>
              상세 보기 <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Projects
