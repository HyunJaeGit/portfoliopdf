import { Link } from 'react-router-dom'
import { projects } from '../../content/projects'
import './Home.css'

const capabilities = [
  {
    number: '01',
    label: 'Backend Development',
    title: '상태와 데이터 흐름을 제어하는 백엔드 로직',
    description: 'Spring MVC·MyBatis와 Spring Boot·JPA 기반 REST API, 관계형 데이터 모델, 검색·스케줄링 로직 구현',
    stack: 'Java · Spring · JPA · MyBatis · MySQL · Oracle',
  },
  {
    number: '02',
    label: 'AI Integration',
    title: '상태 전이를 기준으로 제어한 AI API 호출',
    description: 'Aura3D의 조건부 Gemini 호출과 반복 업무 자동화를 통한 외부 AI API·서비스 로직 연동',
    stack: 'Gemini API · State Transition · Automation',
  },
  {
    number: '03',
    label: 'Service Operations & AI QA',
    title: '운영 이슈를 개발 가능한 기술 정보로 구조화',
    description: '공공 교육 플랫폼 운영·유지보수의 장애 분류·개발사 이관과 특허검색 AX의 자연어 검색 품질검증',
    stack: 'Service Operations · Issue Triage · Maintenance · AI Search QA',
  },
] as const

function Home() {
  return (
    <div className="home-page">
      <section className="case-cover" aria-labelledby="hero-title">
        <div className="cover-index" aria-hidden="true">
          <span>BACKEND PORTFOLIO</span>
          <strong>2026</strong>
        </div>
        <div className="cover-main">
          <p className="cover-kicker">Java · Spring Backend Developer</p>
          <h1 id="hero-title">권현재</h1>
          <p className="cover-statement">
            상태와 데이터 흐름을 설계하고,<br />
            필요한 순간에 AI가 동작하는 서비스를 만듭니다.
          </p>
        </div>
        <div className="cover-summary">
          <p>Java·Spring 기반 REST API, 관계형 데이터 모델과 AWS 배포 경험. 개발·운영·AI 품질검증에서 발견한 문제를 재현 가능한 기술 정보와 동작하는 백엔드 로직으로 전환합니다.</p>
          <div className="cover-actions">
            <Link className="cover-button cover-button-light" to="/resume">이력서 보기</Link>
            <Link className="cover-button" to="/portfolio">포트폴리오 보기</Link>
          </div>
          <address className="cover-contact">
            <a href="mailto:guswo1118@gmail.com">guswo1118@gmail.com</a>
            <a href="https://github.com/HyunJaeGit" target="_blank" rel="noreferrer">github.com/HyunJaeGit</a>
          </address>
        </div>
      </section>

      <section className="case-section" aria-labelledby="capabilities-title">
        <CaseHeading number="01" title="백엔드 개발을 중심으로 연결한 세 가지 역량" id="capabilities-title" />
        <div className="capability-list">
          {capabilities.map((capability) => (
            <article key={capability.number}>
              <p className="capability-number">{capability.number}</p>
              <div className="capability-copy">
                <p className="capability-label">{capability.label}</p>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </div>
              <p className="capability-stack">{capability.stack}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-section" aria-labelledby="selected-work-title">
        <CaseHeading number="02" title="두 프로젝트로 확인하는 구현 범위" id="selected-work-title" />
        <div className="work-preview-list">
          {projects.map((project, index) => (
            <Link className="work-preview-link" to="/portfolio" key={project.id} aria-label={`${project.title} 포트폴리오 목차로 이동`}>
              <article className="work-preview">
                <figure>
                  <img src={`${import.meta.env.BASE_URL}${project.image.src}`} alt={project.image.alt} loading="lazy" />
                  <figcaption>개발·테스트 환경 화면</figcaption>
                </figure>
                <div className="work-preview-copy">
                  <p className="work-index">PROJECT {String(index + 1).padStart(2, '0')}</p>
                  <h3>{project.title}</h3>
                  <p>{project.subtitle}</p>
                  <dl>
                    <div><dt>역할</dt><dd>{project.role}</dd></div>
                    <div><dt>핵심</dt><dd>{project.highlights.slice(0, 2).join(' · ')}</dd></div>
                  </dl>
                  <strong className="work-preview-cta">포트폴리오에서 보기 →</strong>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="case-record" aria-labelledby="record-title">
        <div>
          <p className="case-record-label">Career Record</p>
          <h2 id="record-title">현장 경험에서 확장한<br />기술 문제 해결 역량</h2>
        </div>
        <dl>
          <div><dt>1,080h</dt><dd>Java·Spring과 AWS 기반 개발 교육</dd></div>
          <div><dt>40개교·80학급</dt><dd>국가수준 학업성취도평가 CBT 운영·사전점검</dd></div>
          <div><dt>AX Quality</dt><dd>특허 AI 검색 기능의 자연어 품질평가</dd></div>
        </dl>
      </section>
    </div>
  )
}

type CaseHeadingProps = { number: string; title: string; id: string }

function CaseHeading({ number, title, id }: CaseHeadingProps) {
  return (
    <header className="case-heading">
      <p className="case-heading-number">{number}</p>
      <h2 id={id}>{title}</h2>
    </header>
  )
}

export default Home
