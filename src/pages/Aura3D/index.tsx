import { Link } from 'react-router-dom'
import ChapterNav from '../../components/ChapterNav'
import PrintButton from '../../components/PrintButton'
import { projects } from '../../content/projects'
import '../project-detail.css'

const project = projects[0]
const mzProject = projects[1]
const chapters = [
  { id: 'aura-problem', label: '문제 정의' },
  { id: 'aura-architecture', label: '설계 구조' },
  { id: 'aura-implementation', label: '핵심 구현' },
  { id: 'aura-result', label: '구현 결과' },
] as const

type Aura3DProps = { portfolioPrint?: boolean }

function Aura3D({ portfolioPrint = false }: Aura3DProps) {
  if (portfolioPrint) return <Aura3DPrintLayout />

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
            <p className="chapter-lead">여러 URL의 상태를 동시에 관리하기 위한 도구로 시작했습니다. 대상이 늘어나면서 스캔 작업을 개별 제어하고 상태 이력을 한곳에서 확인하는 구조가 필요해졌고, 이후 3D 상태 표현과 조건부 AI 대응 가이드까지 확장했습니다.</p>
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
              <div><p>04</p><h3>상태 전이 기반 Gemini</h3><span>상태가 변할 때만 분석을 요청하고 동일 상태에서는 저장된 기존 가이드를 재사용하도록 호출 조건 구성</span></div>
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

function Aura3DPrintLayout() {
  const pipeline = [
    ['01', '사용자 요청', '대상별 스캔 시작·중지'],
    ['02', '동적 스케줄', 'Virtual Thread 주기 작업'],
    ['03', 'HTTP 상태 수집', '등록 URL 응답 확인'],
    ['04', 'JPA 이력 비교', '최신 상태와 현재 응답 비교'],
    ['05', '상태 전이 감지', '동일 상태와 변경 상태 분기'],
    ['06', '조건부 Gemini', '변경 시 분석·동일 시 가이드 재사용'],
    ['07', '3D 상태 표현', 'HTTP 상태와 AI 가이드 연결'],
  ] as const

  return (
    <div className="aura-print-layout">
      <article className="aura-print-sheet aura-print-cover-sheet">
        <section className="aura-print-index" aria-label="프로젝트 인덱스">
          <header><p>SELECTED WORK · 02</p><h1>프로젝트 인덱스</h1></header>
          <div>
            {[project, mzProject].map((item, index) => (
              <article key={item.id}>
                <span>CASE {String(index + 1).padStart(2, '0')}</span>
                <h2>{item.title}</h2>
                <dl><div><dt>기간</dt><dd>{item.period}</dd></div><div><dt>형태</dt><dd>{item.type}</dd></div><div><dt>역할</dt><dd>{item.role}</dd></div><div><dt>기술</dt><dd>{item.technologies.slice(0, 4).join(' · ')}</dd></div></dl>
              </article>
            ))}
          </div>
        </section>
        <section className="aura-print-project-cover">
          <div className="aura-print-bar"><span>CASE 01</span><span>ON-DEMAND AI MONITORING</span></div>
          <h1>Aura3D</h1>
          <figure><img src={`${import.meta.env.BASE_URL}${project.image.src}`} alt={project.image.alt} /><figcaption>{project.image.caption}</figcaption></figure>
          <dl>{[['구분', project.type], ['기간', project.period], ['역할', project.role], ['기술', project.technologies.join(' · ')]].map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}</dl>
        </section>
        <AuraPrintFooter page="04" />
      </article>

      <article className="aura-print-sheet aura-print-flow-sheet">
        <header className="aura-print-page-title"><p>PROBLEM &amp; MONITORING FLOW</p><h1>반복 관제와 AI 호출을 분리한 흐름</h1></header>
        <section className="aura-print-metrics" aria-label="Aura3D 핵심 근거">
          <article><span>01</span><strong>약 90%</strong><p>반복 상태 테스트 기준 Gemini 호출량 감소</p></article>
          <article><span>02</span><strong>Java 21 · JPA</strong><p>Virtual Thread 스케줄러와 관제 이력 영속화</p></article>
          <article><span>03</span><strong>상태 · AI · 3D</strong><p>HTTP 상태와 AI 가이드, 3D 표현 연결</p></article>
        </section>
        <div className="aura-print-problem-grid">
          <section><AuraPrintSectionTitle label="CONTEXT &amp; CONSTRAINTS" title="시작 배경과 제약" />
            <p>여러 URL의 상태를 한 화면에서 관리하는 도구로 시작했습니다. 대상이 늘어나면서 스캔 작업의 개별 생명주기와 상태 이력, 토큰을 사용하는 AI 분석 요청을 분리할 필요가 생겼습니다.</p>
            <ol><li><span>01</span><div><strong>중복 실행</strong><p>동일 프로젝트의 스캔이 중복 등록되지 않도록 활성 작업 추적 필요</p></div></li><li><span>02</span><div><strong>개별 제어</strong><p>사용자 요청에 따라 대상별 스캔을 시작하고 중지하는 구조 필요</p></div></li><li><span>03</span><div><strong>호출 분리</strong><p>상태 수집과 Gemini 분석 요청을 같은 주기로 반복하지 않도록 조건 분리</p></div></li><li><span>04</span><div><strong>갱신 기준</strong><p>상태 이력·AI 가이드·3D 화면이 동일한 상태 전이를 기준으로 갱신</p></div></li></ol>
          </section>
          <section><AuraPrintSectionTitle label="MONITORING PIPELINE" title="관제 파이프라인" />
            <ol className="aura-print-pipeline">{pipeline.map(([number, title, detail]) => <li key={number}><span>{number}</span><div><strong>{title}</strong><small>{detail}</small></div></li>)}</ol>
          </section>
        </div>
        <AuraPrintFooter page="05" />
      </article>

      <article className="aura-print-sheet aura-print-architecture-sheet">
        <header className="aura-print-page-title"><p>ARCHITECTURE &amp; IMPLEMENTATION</p><h1>아키텍처와 핵심 구현</h1></header>
        <figure className="aura-print-architecture"><img src={`${import.meta.env.BASE_URL}images/projects/aura3d-architecture.png`} alt="Aura3D 시스템 아키텍처" /><figcaption>React·R3F 관제 화면, Java 21 Virtual Thread 스케줄러, JPA 이력과 상태 전이 기반 Gemini 요청의 연결 구조</figcaption></figure>
        <section className="aura-print-implementations" aria-label="핵심 구현">
          <article><span>01</span><h2>관제 대상 REST API</h2><p>등록·조회·삭제와 대상별 스캔 시작·중지 API 구현</p></article>
          <article><span>02</span><h2>Virtual Thread 스케줄러</h2><p><code>TaskScheduler</code>와 <code>ScheduledFuture</code>로 주기 작업 실행·취소 제어</p></article>
          <article><span>03</span><h2>중복 실행 방지</h2><p><code>ConcurrentHashMap</code>으로 활성 작업을 추적해 중복 스캔 등록 차단</p></article>
          <article><span>04</span><h2>상태 전이 기반 Gemini</h2><p>상태 변경 시 분석하고 동일 상태에서는 저장된 가이드 재사용</p></article>
          <article><span>05</span><h2>JPA 모니터링 이력</h2><p>상태 코드·확인 시점·AI 가이드를 이력으로 저장해 비교 기준 통일</p></article>
          <article><span>06</span><h2>React·Three.js 시각화</h2><p>HTTP 상태와 대응 정보를 연결해 관제 데이터를 3D 비서 상태로 표현</p></article>
        </section>
        <figure className="aura-print-erd"><img src={`${import.meta.env.BASE_URL}images/projects/aura3d-erd.png`} alt="Aura3D 데이터베이스 ERD" /><figcaption>관제 대상과 상태 코드·확인 시점·AI 가이드를 1:N 모니터링 이력으로 관리</figcaption></figure>
        <AuraPrintFooter page="06" />
      </article>

      <article className="aura-print-sheet aura-print-validation-sheet">
        <header className="aura-print-page-title"><p>VALIDATION, RESULT &amp; LIMITS</p><h1>검증 결과와 남은 한계</h1></header>
        <figure className="aura-print-usage"><img src={`${import.meta.env.BASE_URL}images/projects/aura3d-api-usage.png`} alt="Gemini API 사용량 테스트 화면" /><figcaption>상태 전이 기반 호출 제어 적용 후 Gemini API 요청 수를 사용량 대시보드에서 확인</figcaption></figure>
        <section className="aura-print-comparison"><AuraPrintSectionTitle label="BEFORE / AFTER" title="호출 제어 전후 비교" />
          <div role="table"><div role="row"><strong role="columnheader">비교 항목</strong><strong role="columnheader">적용 전</strong><strong role="columnheader">적용 후</strong></div><div role="row"><span role="cell">분석 조건</span><p role="cell">반복 상태 확인 시 분석 요청</p><p role="cell">상태 전이 시 호출·동일 상태 가이드 재사용</p></div><div role="row"><span role="cell">시간당 호출량</span><p role="cell">약 1,000회</p><p role="cell"><strong>약 100회</strong><small>반복 상태 테스트 기준 약 90% 감소</small></p></div><div role="row"><span role="cell">요청 비용</span><p role="cell">반복 요청·응답 토큰 사용</p><p role="cell">불필요한 요청·응답 토큰 사용 억제</p></div></div>
        </section>
        <div className="aura-print-validation-grid">
          <section><AuraPrintSectionTitle label="VERIFIED" title="검증한 핵심 동작" /><ul><li>관제 대상 등록·조회·삭제</li><li>대상별 스캔 시작·중지</li><li>동일 프로젝트 중복 작업 방지</li><li>상태 변화에 따른 Gemini 호출 분기</li><li>HTTP 상태와 AI 가이드의 3D 표현 연결</li></ul></section>
          <section><AuraPrintSectionTitle label="LIMITS &amp; NEXT" title="한계와 개선 예정" /><ul><li>약 90% 감소는 반복 상태 테스트 결과로, 운영 트래픽에서 추가 검증 필요</li><li><code>ConcurrentHashMap</code> 기반 활성 작업 추적은 단일 애플리케이션 범위</li><li>장기 부하와 실패·재시작 상황의 작업 복구 시나리오는 추가 검증 필요</li></ul></section>
        </div>
        <AuraPrintFooter page="07" />
      </article>
    </div>
  )
}

function AuraPrintSectionTitle({ label, title }: { label: string; title: string }) {
  return <header className="aura-print-section-title"><p>{label}</p><h2>{title}</h2></header>
}

function AuraPrintFooter({ page }: { page: string }) {
  return <footer className="print-sheet-footer"><span>KWON HYUNJAE · AURA3D</span><span>{page} / 10</span></footer>
}

type ChapterHeadingProps = { number: string; title: string; id: string }

function ChapterHeading({ number, title, id }: ChapterHeadingProps) {
  return <header className="chapter-heading"><p>{number}</p><h2 id={id} tabIndex={-1}>{title}</h2></header>
}

export default Aura3D
