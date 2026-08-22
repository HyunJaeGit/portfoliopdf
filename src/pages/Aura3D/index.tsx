import { Link } from 'react-router-dom'
import ChapterNav from '../../components/ChapterNav'
import PrintButton from '../../components/PrintButton'
import { projects } from '../../content/projects'
import '../project-detail.css'

const project = projects[0]
const chapters = [
  { id: 'aura-problem', label: '문제 정의' },
  { id: 'aura-architecture', label: '설계 구조' },
  { id: 'aura-implementation', label: '핵심 구현' },
  { id: 'aura-result', label: '구현 결과' },
] as const

function Aura3D() {
  return (
    <article className="project-detail">
      <header className="detail-hero">
        <Link className="back-link" to="/portfolio">← 포트폴리오</Link>
        <div className="detail-document-bar"><span>CASE 01</span><span>ON-DEMAND AI MONITORING</span></div>
        <div className="detail-title-row">
          <div><h1>{project.title}</h1></div>
          <p className="detail-lead">{project.subtitle}</p>
        </div>
        <div className="detail-summary-grid">
          <figure className="detail-visual aura3d-dashboard-visual">
            <img src={`${import.meta.env.BASE_URL}${project.image.src}`} alt={project.image.alt} />
            <figcaption>{project.image.caption}</figcaption>
          </figure>
          <div className="detail-summary">
            <dl className="detail-overview">
              <div><dt>구분</dt><dd>{project.type}</dd></div>
              <div><dt>기간</dt><dd>{project.period}</dd></div>
              <div><dt>역할</dt><dd>{project.role}</dd></div>
              <div><dt>기술</dt><dd>{project.technologies.join(' · ')}</dd></div>
            </dl>
            <div className="detail-actions"><PrintButton /></div>
          </div>
        </div>
        <dl className="detail-metrics" aria-label="Aura3D 핵심 수치">
          <div><dt>약 90%</dt><dd>AI 호출량 감소·토큰 사용 절감</dd></div>
          <div><dt>Java 21·DB</dt><dd>Virtual Thread 스케줄러·JPA 관제 이력 영속화</dd></div>
          <div><dt>3D·AI</dt><dd>3D 모델 기반 상태 시각화·AI 대응 가이드 통합</dd></div>
        </dl>
        <ChapterNav items={chapters} />
      </header>

      <div className="detail-body">
        <section className="case-chapter" aria-labelledby="aura-problem">
          <ChapterHeading number="01" title="반복 관제와 AI 호출의 분리" id="aura-problem" />
          <div className="chapter-content chapter-copy-grid">
            <p className="chapter-lead">텍스트 로그 중심의 관제에서는 운영자가 원시 HTTP 상태를 직접 해석해야 하고, 상태가 달라지지 않아도 AI를 반복 호출하면 외부 API 사용량이 계속 누적됩니다.</p>
            <ul className="chapter-points">
              <li>사용자가 확인할 때만 대상별 스캔을 시작·중지</li>
              <li>동일 프로젝트의 중복 스캔 등록 방지</li>
              <li>상태 수집과 토큰을 사용하는 AI 분석 요청 분리</li>
              <li>상태 이력·AI 가이드·3D 화면의 갱신 기준 통일</li>
            </ul>
          </div>
        </section>

        <section className="case-chapter" aria-labelledby="aura-architecture">
          <ChapterHeading number="02" title="상태 전이로 연결한 실행·분석 제어" id="aura-architecture" />
          <div className="chapter-content">
            <p className="chapter-lead">사용자 요청과 스캔 작업의 생명주기를 연결하고, 최신 JPA 이력과 현재 응답을 비교해 Gemini 호출 조건을 분리한 구조</p>
            <ol className="architecture-flow" aria-label="Aura3D 처리 흐름">
              <li><span>01</span><strong>사용자 요청</strong><small>스캔 시작·중지</small></li>
              <li><span>02</span><strong>동적 스케줄</strong><small>주기적 HTTP 확인</small></li>
              <li><span>03</span><strong>상태 비교</strong><small>JPA 최신 이력 기준</small></li>
              <li><span>04</span><strong>조건부 AI</strong><small>상태 전이 시 Gemini</small></li>
              <li><span>05</span><strong>3D 표현</strong><small>상태·가이드 연결</small></li>
            </ol>
            <figure className="chapter-wide-evidence architecture-evidence">
              <img src={`${import.meta.env.BASE_URL}images/projects/aura3d-architecture.png`} alt="React 프론트엔드, Java 21 Spring Boot 백엔드, Gemini API, MySQL 모니터링 이력과 등록 URL의 연결을 보여주는 Aura3D 시스템 아키텍처" loading="lazy" />
              <figcaption>시스템 아키텍처 — React·R3F 관제 화면, Java 21 Virtual Thread 기반 스케줄러, JPA 모니터링 이력과 상태 전이 기반 Gemini 분석 요청의 연결 구조</figcaption>
            </figure>
          </div>
        </section>

        <section className="case-chapter" aria-labelledby="aura-implementation">
          <ChapterHeading number="03" title="코드로 관리한 스케줄 생명주기와 AI 호출 조건" id="aura-implementation" />
          <div className="chapter-content">
            <div className="implementation-list">
              <div><p>01</p><h3>관제 대상 REST API</h3><span>등록·조회·삭제와 대상별 스캔 제어 API 구현을 통해 자원 중심의 엔드포인트 설계 경험 확보</span></div>
              <div><p>02</p><h3>Virtual Thread 스케줄러</h3><span>Java 21 Virtual Thread 기반 <code>TaskScheduler</code>와 <code>ScheduledFuture</code> 보관 구조로 주기 작업 실행·취소 제어</span></div>
              <div><p>03</p><h3>중복 실행 방지</h3><span><code>ConcurrentHashMap</code>으로 활성 작업을 추적해 동일 프로젝트의 중복 스캔 등록 차단</span></div>
              <div><p>04</p><h3>상태 전이 기반 Gemini</h3><span>상태가 변할 때만 분석을 요청하고 동일 상태에서는 기존 가이드를 재사용해 호출량 약 90% 감소·불필요한 토큰 사용 억제</span></div>
              <div><p>05</p><h3>JPA 모니터링 이력</h3><span>상태 전이와 AI 가이드를 함께 저장해 비교 로직과 화면 조회가 같은 기준을 사용하는 구조 확보</span></div>
              <div><p>06</p><h3>React·Three.js</h3><span>HTTP 상태와 대응 정보를 연결해 백엔드 관제 데이터를 3D 비서 상태로 시각화</span></div>
            </div>
            <figure className="data-model-evidence">
              <img
                src={`${import.meta.env.BASE_URL}images/projects/aura3d-erd.png`}
                alt="Aura3D의 target_project와 monitoring_history가 일대다 관계로 연결된 데이터베이스 ERD"
                loading="lazy"
              />
              <figcaption>개발 단계 ERD — 관제 대상별 상태 코드·확인 시점·AI 가이드를 1:N 모니터링 이력으로 관리</figcaption>
            </figure>
            <div className="evidence-grid">
              <figure className="evidence-figure">
                <img src={`${import.meta.env.BASE_URL}images/projects/aura3d-api-usage.png`} alt="Aura3D Gemini API 호출 제어 테스트 중 요청 수를 확인한 Google AI Studio 사용량 화면" loading="lazy" />
                <figcaption>호출 제어 테스트 화면 — 상태 전이 기반 분석 요청 적용 후 Gemini API 요청 수를 사용량 대시보드에서 확인</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="case-chapter" aria-labelledby="aura-result">
          <ChapterHeading number="04" title="상태 변화에만 반응하는 AI 관제 흐름" id="aura-result" />
          <div className="chapter-content result-layout">
            <p className="chapter-lead">사용자 요청 기반 스캔부터 상태 수집, 전이 감지, AI 가이드와 3D 표현까지 연결한 관제 파이프라인 구축</p>
            <ul className="result-list">
              <li><strong>호출 제어</strong><span>반복 상태 테스트 기준 Gemini 호출량 약 90% 감소, 불필요한 요청·응답 토큰 사용 절감</span></li>
              <li><strong>동작 검증</strong><span>CRUD·스캔 제어·중복 작업 방지·상태별 AI 분기 검증을 통한 핵심 동작의 일관성 확인</span></li>
              <li><strong>시각적 대응</strong><span>HTTP 상태와 AI 가이드를 3D 비서 상태로 연결해 원시 응답 해석 단계 축소</span></li>
            </ul>
          </div>
        </section>
      </div>
    </article>
  )
}

type ChapterHeadingProps = { number: string; title: string; id: string }

function ChapterHeading({ number, title, id }: ChapterHeadingProps) {
  return <header className="chapter-heading"><p>{number}</p><h2 id={id} tabIndex={-1}>{title}</h2></header>
}

export default Aura3D
