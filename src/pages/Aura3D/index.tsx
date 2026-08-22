import { Link } from 'react-router-dom'
import { projects } from '../../content/projects'
import '../project-detail.css'

const project = projects[0]

function Aura3D() {
  return (
    <article className="project-detail">
      <header className="detail-hero">
        <Link className="back-link" to="/projects">← 프로젝트 목록</Link>
        <p className="eyebrow">Monitoring Project</p>
        <h1>{project.title}</h1>
        <p className="detail-lead">{project.subtitle}</p>
        <dl className="detail-overview">
          <div><dt>역할</dt><dd>{project.role}</dd></div>
          <div><dt>기술</dt><dd>{project.technologies.join(' · ')}</dd></div>
        </dl>
      </header>

      <div className="detail-body">
        <section aria-labelledby="aura-problem">
          <DetailHeading number="01" title="문제" id="aura-problem" />
          <p>등록한 대상의 HTTP 상태를 주기적으로 확인하고, 상태 변화와 대응 정보를 한 흐름에서 파악할 수 있어야 했습니다.</p>
        </section>

        <section aria-labelledby="aura-constraint">
          <DetailHeading number="02" title="제약" id="aura-constraint" />
          <p>각 프로젝트가 서로 다른 주기로 실행되는 동안 동일 작업의 중복 실행을 막아야 했습니다. AI 안내는 상태가 바뀔 때 의미가 있으므로, 같은 상태에서 매번 외부 API를 호출하지 않는 기준도 필요했습니다.</p>
        </section>

        <section aria-labelledby="aura-choice">
          <DetailHeading number="03" title="선택" id="aura-choice" />
          <p>Spring의 <code>TaskScheduler</code>와 <code>ScheduledFuture</code>로 프로젝트별 작업 수명 주기를 관리하고, 실행 작업은 <code>ConcurrentHashMap</code>에서 추적하도록 구성했습니다. 모니터링 결과는 JPA로 이력을 남기고 HTTP 상태가 변할 때만 Gemini를 호출하는 방식을 선택했습니다.</p>
        </section>

        <section aria-labelledby="aura-implementation">
          <DetailHeading number="04" title="구현" id="aura-implementation" />
          <div className="implementation-list">
            <div><h3>프로젝트 API</h3><p>모니터링 프로젝트를 등록하고 목록을 조회하며 삭제할 수 있는 REST API를 구성했습니다.</p></div>
            <div><h3>스케줄 생명주기</h3><p><code>ScheduledFuture</code>를 보관해 작업을 취소할 수 있게 하고, <code>ConcurrentHashMap</code>으로 같은 프로젝트의 중복 스케줄 등록을 방지했습니다.</p></div>
            <div><h3>상태 기반 AI 호출</h3><p>HTTP 상태가 이전 기록과 달라진 경우 Gemini 가이드를 요청하고, 동일 상태에서는 이전 AI 가이드를 재사용하도록 분기했습니다.</p></div>
            <div><h3>이력과 시각화</h3><p>JPA로 모니터링 이력을 저장하고 React·Three.js 화면에서 상태를 구분해 표현했습니다.</p></div>
          </div>
        </section>

        <section aria-labelledby="aura-verification">
          <DetailHeading number="05" title="검증" id="aura-verification" />
          <p>등록·목록·삭제 API 흐름, 프로젝트별 스케줄 생성과 취소, 같은 프로젝트의 중복 실행 방지, HTTP 상태 변화 여부에 따른 Gemini 호출 분기를 핵심 확인 대상으로 두었습니다. 부하 환경에 대한 검증은 완료되지 않았습니다.</p>
        </section>

        <section aria-labelledby="aura-result">
          <DetailHeading number="06" title="결과" id="aura-result" />
          <p>프로젝트 관리, 주기적 상태 확인, 상태 이력 저장, 변화 시 안내 생성, 화면 상태 표현을 하나의 모니터링 흐름으로 연결했습니다. 같은 상태에서는 저장된 가이드를 재사용하도록 외부 호출 조건을 제한했습니다.</p>
        </section>

        <section className="limitations" aria-labelledby="aura-limit">
          <DetailHeading number="07" title="한계" id="aura-limit" />
          <p>인증과 사용자별 권한 격리는 완성되지 않았습니다. 고동시성·대규모 부하 테스트도 완료하지 않아 처리 규모나 안정성을 수치로 주장하지 않습니다.</p>
        </section>
      </div>
    </article>
  )
}

type DetailHeadingProps = { number: string; title: string; id: string }

function DetailHeading({ number, title, id }: DetailHeadingProps) {
  return <header className="detail-section-heading"><p>{number}</p><h2 id={id}>{title}</h2></header>
}

export default Aura3D
