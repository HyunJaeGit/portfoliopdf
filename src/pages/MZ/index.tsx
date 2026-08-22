import { Link } from 'react-router-dom'
import { projects } from '../../content/projects'
import '../project-detail.css'

const project = projects[1]

function MZ() {
  return (
    <article className="project-detail">
      <header className="detail-hero">
        <Link className="back-link" to="/projects">← 프로젝트 목록</Link>
        <p className="eyebrow">4-person Team Project</p>
        <h1>{project.title}</h1>
        <p className="detail-lead">{project.subtitle}</p>
        <dl className="detail-overview">
          <div><dt>역할</dt><dd>{project.role}</dd></div>
          <div><dt>기술</dt><dd>{project.technologies.join(' · ')}</dd></div>
        </dl>
      </header>

      <div className="detail-body">
        <section aria-labelledby="mz-problem">
          <DetailHeading number="01" title="문제" id="mz-problem" />
          <p>사용자가 지역과 음식 카테고리를 함께 선택해 결과를 좁히고, 목록의 위치를 지도에서 바로 확인할 수 있는 맛집 탐색 흐름이 필요했습니다.</p>
        </section>

        <section aria-labelledby="mz-constraint">
          <DetailHeading number="02" title="제약" id="mz-constraint" />
          <p>Spring MVC·JSP·MyBatis 기반의 레거시 웹 구조에서 복합 검색과 Oracle 페이징을 구현해야 했습니다. 4명이 나눈 기능을 일정에 맞춰 병합하고 하나의 결과물로 통합하는 작업도 필요했습니다.</p>
        </section>

        <section aria-labelledby="mz-choice">
          <DetailHeading number="03" title="선택" id="mz-choice" />
          <p>선택된 검색 조건만 SQL에 반영할 수 있도록 MyBatis 동적 SQL을 사용하고, 목록은 Oracle의 <code>OFFSET/FETCH</code>로 페이지 단위 조회를 구성했습니다. 검색 결과의 위치 정보는 Kakao Map 마커와 동적 인포윈도우로 연결했습니다.</p>
        </section>

        <section aria-labelledby="mz-implementation">
          <DetailHeading number="04" title="구현" id="mz-implementation" />
          <div className="contribution-columns">
            <div>
              <p className="contribution-label">본인 기여</p>
              <ul>
                <li>지역·카테고리 조건을 조합하는 MyBatis 동적 SQL 검색</li>
                <li>Oracle <code>OFFSET/FETCH</code> 기반 페이지 조회</li>
                <li>Kakao Map 마커와 결과별 동적 인포윈도우 연결</li>
                <li>팀장으로서 일정 조율, 브랜치 병합, 결과물 통합</li>
              </ul>
            </div>
            <div>
              <p className="contribution-label">팀 프로젝트 범위</p>
              <p>맛집 데이터와 검색, 지도 화면을 포함한 서비스 결과물은 4인 팀이 역할을 나누어 완성했습니다. 전체 DB 설계와 팀원의 개별 기능을 본인 단독 구현으로 표현하지 않습니다.</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="mz-verification">
          <DetailHeading number="05" title="검증" id="mz-verification" />
          <p>지역·카테고리의 단일 및 복합 조건, 페이지 이동 시 조회 범위, 검색 결과와 지도 마커의 연결, 여러 마커에서 인포윈도우가 바뀌는 흐름을 주요 확인 대상으로 두었습니다. 별도의 JUnit 테스트 체계를 본인 성과로 주장하지 않습니다.</p>
        </section>

        <section aria-labelledby="mz-result">
          <DetailHeading number="06" title="결과" id="mz-result" />
          <p>복합 조건 검색과 페이지 단위 목록, 지도 기반 위치 확인을 하나의 탐색 흐름으로 구성했습니다. 팀장으로서 분리된 브랜치와 일정을 조율하고 최종 결과물을 통합했습니다.</p>
        </section>

        <section className="limitations" aria-labelledby="mz-limit">
          <DetailHeading number="07" title="한계" id="mz-limit" />
          <p>전체 DB 설계, S3 이미지 업로드, JUnit 테스트 체계, 검색 인덱스 최적화는 본인 단독 구현으로 확인되지 않아 기여 항목에서 제외했습니다. 저장소의 민감정보 정리 여부도 확인할 수 없어 GitHub 링크를 공개하지 않습니다.</p>
        </section>
      </div>
    </article>
  )
}

type DetailHeadingProps = { number: string; title: string; id: string }

function DetailHeading({ number, title, id }: DetailHeadingProps) {
  return <header className="detail-section-heading"><p>{number}</p><h2 id={id}>{title}</h2></header>
}

export default MZ
