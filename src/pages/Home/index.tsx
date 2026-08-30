import { Link } from 'react-router-dom'
import { projects } from '../../content/projects'
import './Home.css'

const capabilities = [
  {
    title: '백엔드 개발',
    description: 'Spring MVC·MyBatis와 Spring Boot·JPA 기반 REST API, 관계형 데이터 모델, 검색·스케줄링 로직 구현',
    stack: '주요 기술: Java, Spring, JPA, MyBatis, MySQL, Oracle',
  },
  {
    title: 'AI API 연동',
    description: 'Aura3D에서 HTTP 상태가 변할 때만 Gemini를 호출하고 동일 상태에서는 저장된 가이드를 재사용',
    stack: '주요 구현: Gemini API, 상태 전이 감지, 호출 조건 제어',
  },
  {
    title: '운영 및 품질검증',
    description: '공공 교육 플랫폼 운영·유지보수의 장애 분류·개발사 이관과 특허검색 AX의 자연어 검색 품질검증',
    stack: '관련 경험: 공공 교육 플랫폼 운영·유지보수, 특허검색 AX 품질검증',
  },
] as const

const projectCaptions = {
  aura3d: '프로젝트별 스캔 제어와 상태별 대응 가이드를 제공하는 관제 화면',
  mz: '지역·카테고리 검색 결과와 음식점 위치를 함께 보여주는 지도 탐색 화면',
} as const

function Home() {
  return (
    <div className="home-page">
      <section className="case-cover" aria-labelledby="hero-title">
        <div className="cover-index" aria-hidden="true">
          <span>PORTFOLIO</span>
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
          <p>Java/Spring으로 REST API와 관계형 데이터 모델을 구현하고 AWS 환경에 배포,
            공공 교육 플랫폼 운영과 AI 검색 품질검증 1차 테스팅 참여 경험을 바탕으로 
            실제 사용 환경에서 발생하는 문제까지 고려해 개발</p>
          <div className="cover-actions">
            <Link className="cover-button cover-button-light" to="/resume">이력서 보기</Link>
            <Link className="cover-button" to="/portfolio">포트폴리오 보기</Link>
            <a className="cover-button" href="https://github.com/HyunJaeGit" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <address className="cover-contact">
            <a href="mailto:guswo1118@gmail.com">guswo1118@gmail.com</a>
          </address>
        </div>
      </section>

      <section className="case-section" aria-labelledby="capabilities-title">
        <CaseHeading number="01" title="개발 역량 및 스킬" id="capabilities-title" />
        <div className="capability-list">
          {capabilities.map((capability) => (
            <article key={capability.title}>
              <div className="capability-copy">
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
          {projects.map((project) => (
            <Link className="work-preview-link" to={project.path} key={project.id} aria-label={`${project.title} 상세 페이지로 이동`}>
              <article className="work-preview">
                <figure>
                  <img src={`${import.meta.env.BASE_URL}${project.image.src}`} alt={project.image.alt} loading="lazy" />
                  <figcaption>{projectCaptions[project.id]}</figcaption>
                </figure>
                <div className="work-preview-copy">
                  <p className="work-index">{project.type}</p>
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
          <div><dt>케이원</dt><dd>한국교육과정평가원 종합상황실 · 공공 교육 포털 운영·개발사 협업 및 전국단위 CBT 시험 운영지원</dd></div>
          <div><dt>한국지질자원연구원</dt><dd>연구실 연구 지원 및 기관 내 업무 지원 · 공공 연구기관 실무 경험</dd></div>
          <div><dt>특허검색 AX</dt><dd>케이원 프로젝트 · AI 자연어 검색 적합성·이상 사례 품질검증 1차 테스팅 참여</dd></div>
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
