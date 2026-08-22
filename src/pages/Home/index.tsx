import { Link } from 'react-router-dom'
import { projects } from '../../content/projects'
import './Home.css'

const skills = [
  { category: 'Backend', items: ['Java', 'Spring', 'REST API', 'JPA', 'MyBatis'] },
  { category: 'Database', items: ['관계형 데이터 모델', 'Oracle', 'SQL'] },
  { category: 'Infrastructure', items: ['Git', 'GitHub', '브랜치 병합'] },
  { category: 'Frontend', items: ['React', 'TypeScript', 'JSP', 'Three.js'] },
]

function Home() {
  return (
    <div className="home-page">
      <section className="home-hero" aria-labelledby="hero-title">
        <p className="eyebrow">Java · Spring Backend Developer</p>
        <h1 id="hero-title">권현재</h1>
        <p className="hero-role">Java/Spring 백엔드 개발자</p>
        <p className="hero-summary">
          REST API와 관계형 데이터를 바탕으로 기능의 흐름을 설계하고, 운영에서 발견한 문제를
          시스템과 문서로 개선해 온 개발자입니다.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/projects">프로젝트 보기</Link>
        </div>
      </section>

      <section className="home-section" aria-labelledby="about-title">
        <SectionHeading number="01" title="개발자 소개" id="about-title" />
        <div className="section-copy">
          <p>Java와 Spring으로 REST API를 구현하고 관계형 데이터를 다룬 경험이 있습니다.</p>
          <p>공공 CBT 운영 현장에서 반복되는 문제를 발견하고 시스템과 문서로 개선했습니다.</p>
          <p>기능 구현에 그치지 않고 제약과 선택, 검증 결과와 한계를 함께 기록합니다.</p>
          <p>확인 가능한 구현과 기여를 기준으로 꾸준히 성장하는 백엔드 개발자를 지향합니다.</p>
        </div>
      </section>

      <section className="home-section" aria-labelledby="featured-title">
        <SectionHeading number="02" title="대표 프로젝트" id="featured-title" />
        <div className="featured-projects">
          {projects.map((project) => (
            <article className="featured-project" key={project.id}>
              <div className="project-heading-row">
                <div>
                  <p className="project-type">{project.id === 'mz' ? 'Team Project' : 'Project'}</p>
                  <h3>{project.title}</h3>
                </div>
                <Link className="project-link" to={project.path} aria-label={`${project.title} 상세 보기`}>
                  상세 보기 <span aria-hidden="true">→</span>
                </Link>
              </div>
              <p className="project-subtitle">{project.subtitle}</p>
              <dl className="project-meta">
                <div><dt>역할</dt><dd>{project.role}</dd></div>
                <div><dt>기술</dt><dd>{project.technologies.join(' · ')}</dd></div>
              </dl>
              <ul className="project-highlights">
                {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section" aria-labelledby="experience-title">
        <SectionHeading number="03" title="주요 경험" id="experience-title" />
        <div className="experience-list">
          <article><h3>공공 CBT 운영</h3><p>운영 현장에서 발생하는 문제를 파악하고 시스템과 문서 개선으로 연결한 경험</p></article>
          <article><h3>특허 AI 검색 품질검증</h3><p>AI 검색 결과의 품질을 확인하고 결과를 검토한 실무 경험</p></article>
          <article><h3>개발 교육 1,080시간</h3><p>Java와 Spring을 중심으로 웹 개발 기반을 다진 교육 과정</p></article>
        </div>
      </section>

      <section className="home-section" aria-labelledby="skills-title">
        <SectionHeading number="04" title="기술" id="skills-title" />
        <div className="skill-groups">
          {skills.map((skill) => (
            <div className="skill-group" key={skill.category}>
              <h3>{skill.category}</h3><p>{skill.items.join(' · ')}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section contact-section" aria-labelledby="contact-title">
        <SectionHeading number="05" title="연락처" id="contact-title" />
        <p>이메일과 GitHub 주소는 공개 가능한 정보가 확인된 뒤 연결합니다.</p>
      </section>
    </div>
  )
}

type SectionHeadingProps = { number: string; title: string; id: string }

function SectionHeading({ number, title, id }: SectionHeadingProps) {
  return <div className="section-heading"><p className="section-number">{number}</p><h2 id={id}>{title}</h2></div>
}

export default Home
