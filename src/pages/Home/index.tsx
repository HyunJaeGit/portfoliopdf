import { Link } from 'react-router-dom'
import { projects } from '../../content/projects'
import './Home.css'

const capabilities = [
  {
    number: '01',
    label: 'Backend Development',
    title: '백엔드 개발',
    description: 'Spring MVC·MyBatis와 Spring Boot·JPA 기반 REST API, 관계형 데이터 모델, 검색·스케줄링 로직 구현',
    stack: 'Java · Spring · JPA · MyBatis · MySQL · Oracle',
  },
  {
    number: '02',
    label: 'AI Integration',
    title: 'AI API 연동',
    description: 'Aura3D의 상태 전이 기반 Gemini 호출 제어로 API 호출량 약 90% 감소·불필요한 토큰 사용 억제',
    stack: 'Gemini API · State Transition · Automation',
  },
  {
    number: '03',
    label: 'Service Operations & AI QA',
    title: '운영 및 품질검증',
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
            Java·Spring 프로젝트와 공공기관 서비스 운영 경험을 보유한 신입 백엔드 개발자
          </p>
          <dl className="cover-metrics">
            <div><dt>2개</dt><dd>대표 프로젝트</dd></div>
            <div><dt>1,080h</dt><dd>개발 교육</dd></div>
            <div><dt>2곳</dt><dd>공공기관 업무 경험</dd></div>
          </dl>
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
        <CaseHeading number="01" title="개발 역량 및 스킬" id="capabilities-title" />
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
        <CaseHeading number="02" title="프로젝트" id="selected-work-title" to="/portfolio" />
        <div className="work-preview-list">
          {projects.map((project, index) => (
            <Link className="work-preview-link" to={project.path} key={project.id} aria-label={`${project.title} 상세 페이지로 이동`}>
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
                  <strong className="work-preview-cta">상세 보기 →</strong>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="case-record" aria-labelledby="record-title">
        <div>
          <h2 id="record-title">주요 실무 경험</h2>
        </div>
        <dl>
          <div><dt>한국교육과정평가원</dt><dd>고객사 프로젝트 · 공공 교육 포털 운영·유지보수 및 CBT 기술지원</dd></div>
          <div><dt>한국지질자원연구원</dt><dd>직접 근무 · 연구 자료·현장 조사 정보 및 행정 업무 지원</dd></div>
          <div><dt>특허검색 AX</dt><dd>케이원 프로젝트 · AI 자연어 검색 적합성·이상 사례 품질검증</dd></div>
        </dl>
      </section>
    </div>
  )
}

type CaseHeadingProps = { number: string; title: string; id: string; to?: string }

function CaseHeading({ number, title, id, to }: CaseHeadingProps) {
  return (
    <header className="case-heading">
      <p className="case-heading-number">{number}</p>
      <h2 id={id}>{to ? <Link className="case-heading-link" to={to}>{title}<span aria-hidden="true"> →</span></Link> : title}</h2>
    </header>
  )
}

export default Home
