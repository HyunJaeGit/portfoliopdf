import { Link } from 'react-router-dom'
import PrintButton from '../../components/PrintButton'
import './Resume.css'

const skillGroups = [
  { title: 'Backend', detail: 'Java 21·8 · Spring Boot 3.x · Spring Framework 4.3 · Spring MVC · JPA · MyBatis · REST API' },
  { title: 'Data', detail: 'MySQL · Oracle · 관계형 데이터 모델링 · 동적 SQL · CRUD · 페이징' },
  { title: 'AI Integration', detail: 'Gemini API · On-Demand 호출 · 상태 전이 기반 호출 제어 · 결과 재사용 · 자연어 검색 품질검증' },
  { title: 'Infrastructure', detail: 'AWS EC2·RDS · Linux · Apache Tomcat' },
  { title: 'Frontend', detail: 'React · JavaScript · JSP·JSTL · HTML·CSS · Three.js' },
  { title: 'Collaboration', detail: 'Git · GitHub · 브랜치 통합 · 일정·이슈·운영 절차 문서화' },
] as const

type ResumeProps = { portfolioPrint?: boolean }

function Resume({ portfolioPrint = false }: ResumeProps) {
  if (portfolioPrint) return <PortfolioPrintResume />

  return (
    <article className="resume-page">
      <header className="resume-cover">
        <div className="resume-document-bar"><span>BACKEND DEVELOPER · RESUME 2026</span></div>
        <div className="resume-identity">
          <div><h1>권현재</h1><p className="resume-role">Java/Spring 백엔드 개발자</p></div>
          <p className="resume-lead">Java/Spring으로 REST API와 관계형 데이터 흐름을 구현하고, 운영 환경의 반복 문제를 데이터와 자동화로 개선하는 백엔드 개발자입니다. On-Demand·상태 전이 기반 Gemini 호출 제어로 시간당 호출량을 약 1,000회에서 100회로 줄였으며, Oracle·MyBatis 데이터 계층, AWS 배포, 공공 교육 플랫폼 운영·유지보수 경험을 갖추고 있습니다.</p>
        </div>
        <div className="resume-cover-footer">
          <address className="resume-contact"><a href="mailto:guswo1118@gmail.com">guswo1118@gmail.com</a><a href="https://github.com/HyunJaeGit" target="_blank" rel="noreferrer">github.com/HyunJaeGit</a></address>
          <div className="resume-actions"><PrintButton label="이력서 PDF 저장" /></div>
        </div>
      </header>

      <section className="resume-focus" aria-labelledby="resume-focus-title">
        <h2 id="resume-focus-title" className="visually-hidden">핵심 역량</h2>
        <article><p>01 · Backend Engineering</p><h3>API와 데이터 설계</h3><span>Java/Spring 기반 REST API, 관계형 데이터 모델과 복합 검색·페이징 구현</span></article>
        <article><p>02 · Performance &amp; Integration</p><h3>외부 API 호출 최적화</h3><span>On-Demand·상태 전이 기반 제어로 시간당 Gemini 호출량 약 1,000회→100회 감소</span></article>
        <article><p>03 · Delivery &amp; Operations</p><h3>배포·운영·팀 리딩</h3><span>AWS 배포, 4인 개발팀 결과물 통합과 공공 교육 플랫폼 운영·유지보수 경험</span></article>
      </section>

      <div className="resume-columns">
        <div className="resume-primary">
          <section className="resume-block" aria-labelledby="resume-experience">
            <ResumeHeading number="01" title="경력" id="resume-experience" />
            <div className="resume-timeline">
              <article>
                <header><div><h3>케이원정보통신</h3><p>한국교육과정평가원 교육 플랫폼 운영·유지보수 · 특허검색 AX 품질검증</p></div><time>2026.06–재직 중</time></header>
                <ul>
                  <li>전국 약 500개교 대상 국가수준 CBT 운영 프로젝트에서 담당 약 40개교·80개 학급의 사전점검과 진행 현황 관리</li>
                  <li>국가기초학력지원포털·학업성취도지원포털 운영·유지보수와 사용자 기술 이슈 대응</li>
                  <li>설치·접속·네트워크·권한 이슈를 발생 환경과 증상별로 구조화하고 개발사 이관부터 정상화 검증까지 수행</li>
                  <li>반복 장애와 문의를 FAQ·체크리스트·매뉴얼로 표준화해 운영·유지보수 대응 기준으로 재사용</li>
                  <li>특허검색 AX 프로젝트에서 자연어 검색 적합성·필터 정확도·이상 사례 품질검증</li>
                </ul>
              </article>
              <article><header><div><h3>한국지질자원연구원</h3><p>연구·행정 지원</p></div><time>2021.06–2021.08</time></header><ul><li>연구 자료·행정 문서와 현장 조사 정보를 정리하고 기관 절차와 일정에 맞춰 업무 수행</li></ul></article>
            </div>
          </section>

          <section className="resume-block" aria-labelledby="resume-education">
            <ResumeHeading number="02" title="교육 및 자격증" id="resume-education" />
            <div className="resume-education">
              <p><strong>KG ITBANK</strong><span>AWS 클라우드 활용 웹 융합 SW 개발자 양성과정 · 720시간</span><time>2023.07–2024.01</time></p>
              <p><strong>KG ITBANK</strong><span>IT 통합 개발 기초 과정 · 360시간</span><time>2023.03–2023.06</time></p>
              <p><strong>동아대학교</strong><span>에너지자원공학과 학사</span><time>2013.03–2021.02</time></p>
              <p><strong>자격증</strong><span>컴퓨터활용능력 2급 · 워드프로세서 · ITQ</span></p>
            </div>
          </section>
        </div>

        <aside className="resume-secondary" aria-label="개발 역량과 프로젝트">
          <section className="resume-block" aria-labelledby="resume-skills">
            <ResumeHeading number="03" title="기술" id="resume-skills" />
            <dl className="resume-skills">{skillGroups.map((skill) => <div key={skill.title}><dt>{skill.title}</dt><dd>{skill.detail}</dd></div>)}</dl>
          </section>

          <section className="resume-block" aria-labelledby="resume-projects">
            <ResumeHeading number="04" title="프로젝트" id="resume-projects" />
            <div className="resume-projects">
              <article>
                <header><div><h3>Aura3D</h3><p>개인 프로젝트</p></div><time>2025.12–2026.01</time></header>
                <ul>
                  <li>On-Demand 스캔과 상태 전이 기반 제어로 시간당 Gemini API 호출량 약 1,000회→100회 감소 및 불필요한 요청·응답 토큰 사용 절감</li>
                  <li>관제 대상 등록·조회·삭제, 프로젝트별 스캔 시작·중지, 상태 조회 REST API와 JPA 모니터링 이력 구현</li>
                  <li>Java 21 Virtual Threads·TaskScheduler·ConcurrentHashMap 기반 다중 URL 스캔 작업 생명주기와 중복 실행 제어</li>
                  <li>HTTP 상태와 AI 대응 가이드를 React·Three.js 기반 3D 비서 상태로 시각화</li>
                </ul>
              </article>
              <article>
                <header><div><h3>MZ 전국 맛집 정보 플랫폼</h3><p>4인 팀 프로젝트 · 팀장</p></div><time>2023.09–2024.01</time></header>
                <ul>
                  <li>개발 일정·역할·Git 브랜치를 조율하고 기능별 결과물을 하나의 서비스로 통합</li>
                  <li>Oracle 관계형 데이터 모델 설계와 MyBatis SQL Mapper·전체 SQL 작업 전담</li>
                  <li>CRUD, 회원가입 서버 처리, 지역·카테고리 복합 검색과 OFFSET/FETCH 기반 목록 페이징 구현</li>
                  <li>DB 조회 좌표를 Kakao Map 마커·동적 인포윈도우로 연결하고 AWS EC2·Tomcat·RDS 환경에 배포</li>
                </ul>
              </article>
            </div>
            <Link className="resume-portfolio-link" to="/portfolio">상세 포트폴리오 보기 →</Link>
          </section>

          <section className="resume-block" aria-labelledby="resume-leadership">
            <ResumeHeading number="05" title="리더십 및 대외활동" id="resume-leadership" />
            <div className="resume-projects">
              <article>
                <header><div><h3>부산 농구가 좋아</h3><p>지역 커뮤니티 기획·운영</p></div><time>2014.09–2018.09</time></header>
                <ul>
                  <li>약 1,200명 규모 부산 지역 농구 커뮤니티를 4년간 기획·운영</li>
                  <li>콘텐츠 일정 관리와 일러스트레이터·WKBL 광고 협업 진행</li>
                </ul>
              </article>
              <article>
                <header><div><h3>동아대학교 총학생회</h3><p>51대 총감사위원장 · 선출직</p></div><time>2018.04–2018.12</time></header>
                <ul>
                  <li>학생회 예산·운영 감사와 감사위원회 운영</li>
                  <li>감사 결과 보고서 작성과 관련 내용 공유</li>
                </ul>
              </article>
              <article>
                <header><div><h3>1365 자원봉사단</h3><p>봉사캠프 운영 총괄</p></div><time>2018.06</time></header>
                <ul><li>약 100명 규모 봉사캠프의 일정·인원·현장 운영 조율</li></ul>
              </article>
            </div>
          </section>
        </aside>
      </div>
    </article>
  )
}

function PortfolioPrintResume() {
  return (
    <div className="resume-print-layout">
      <article className="resume-print-sheet resume-profile-sheet">
        <header className="resume-print-profile-header">
          <div><p>PROFILE &amp; EXPERIENCE</p><h1>권현재</h1><strong>Java/Spring 백엔드 개발자</strong></div>
          <div>
            <address><a href="mailto:guswo1118@gmail.com">guswo1118@gmail.com</a><a href="https://github.com/HyunJaeGit">github.com/HyunJaeGit</a></address>
            <p>Java/Spring으로 REST API와 관계형 데이터 흐름을 구현하고, 운영 환경의 반복 문제를 데이터와 자동화로 개선합니다. 외부 API 호출 최적화, Oracle·MyBatis 데이터 계층, AWS 배포와 공공 교육 플랫폼 운영·유지보수 경험을 갖추고 있습니다.</p>
          </div>
        </header>

        <section className="resume-print-capabilities" aria-label="핵심 역량">
          <article><span>01</span><h2>REST API·데이터 설계</h2><p>Java/Spring 기반 REST API, 관계형 데이터 모델과 복합 검색·페이징 구현</p></article>
          <article><span>02</span><h2>외부 API 호출 최적화</h2><p>On-Demand·상태 전이 기반 제어로 Gemini 호출량 약 90% 감소</p></article>
          <article><span>03</span><h2>배포·운영·팀 리딩</h2><p>AWS 배포, 4인 개발팀 결과물 통합과 공공 교육 플랫폼 운영 경험</p></article>
        </section>

        <div className="resume-print-experience-grid">
          <section><PrintSectionTitle label="EXPERIENCE" title="경력" />
            <div className="resume-print-career">
              <article><header><div><h3>케이원정보통신</h3><p>한국교육과정평가원 교육 플랫폼 운영·유지보수 · 특허검색 AX 품질검증</p></div><time>2026.06–재직 중</time></header><ul><li>담당 약 40개교·80개 학급의 CBT 사전점검과 진행 현황 관리</li><li>교육 플랫폼 운영·유지보수와 사용자 기술 이슈 대응</li><li>설치·접속·네트워크·권한 이슈 구조화와 정상화 검증</li><li>반복 장애와 문의의 FAQ·체크리스트·매뉴얼 표준화</li><li>특허검색 AX 자연어 검색 적합성·필터 정확도 품질검증</li></ul></article>
              <article><header><div><h3>한국지질자원연구원</h3><p>연구·행정 지원</p></div><time>2021.06–2021.08</time></header><ul><li>연구 자료·행정 문서와 현장 조사 정보를 정리하고 기관 절차와 일정에 맞춰 업무 수행</li></ul></article>
            </div>
          </section>
          <section><PrintSectionTitle label="TECHNICAL STACK" title="기술" />
            <dl className="resume-print-skills">{skillGroups.slice(0, 4).map((skill) => <div key={skill.title}><dt>{skill.title}</dt><dd>{skill.detail}</dd></div>)}</dl>
          </section>
        </div>
        <PrintSheetFooter page="02" />
      </article>

      <article className="resume-print-sheet resume-background-sheet">
        <header className="resume-print-page-header"><p>EDUCATION, PROJECTS &amp; LEADERSHIP</p><h1>경험을 구현으로 연결한 기록</h1></header>
        <div className="resume-print-background-grid">
          <section><PrintSectionTitle label="EDUCATION" title="교육·학력·자격증" />
            <div className="resume-print-education">
              <article><time>2023.07–2024.01</time><h3>KG ITBANK</h3><p>AWS 클라우드 활용 웹 융합 SW 개발자 양성과정 · 720시간</p></article>
              <article><time>2023.03–2023.06</time><h3>KG ITBANK</h3><p>IT 통합 개발 기초 과정 · 360시간</p></article>
              <article><time>2013.03–2021.02</time><h3>동아대학교</h3><p>에너지자원공학과 학사</p></article>
              <article><h3>자격증</h3><p>컴퓨터활용능력 2급 · 워드프로세서 · ITQ</p></article>
            </div>
          </section>
          <section><PrintSectionTitle label="SELECTED PROJECTS" title="프로젝트" />
            <div className="resume-print-projects">
              <article><header><div><h3>Aura3D</h3><p>개인 프로젝트</p></div><time>2025.12–2026.01</time></header><ul><li>상태 전이 기반 제어로 Gemini 호출량 약 90% 감소</li><li>Java 21 Virtual Thread 기반 다중 URL 스캔 제어</li><li>JPA 상태 이력과 React·Three.js 관제 데이터 시각화</li></ul></article>
              <article><header><div><h3>MZ 전국 맛집 정보 플랫폼</h3><p>4인 팀 프로젝트 · 팀장</p></div><time>2023.09–2024.01</time></header><ul><li>Oracle 데이터 모델과 MyBatis SQL Mapper·전체 SQL 전담</li><li>CRUD·복합 검색·OFFSET/FETCH 페이징 구현</li><li>Kakao Map API 연동과 AWS EC2·RDS 배포</li></ul></article>
            </div>
          </section>
        </div>
        <section className="resume-print-leadership"><PrintSectionTitle label="LEADERSHIP &amp; ACTIVITIES" title="리더십 및 대외활동" />
          <div>
            <article><time>2014.09–2018.09</time><h3>부산 농구가 좋아</h3><p>약 1,200명 규모 지역 커뮤니티 기획·운영, 콘텐츠 일정 관리와 광고 협업</p></article>
            <article><time>2018.04–2018.12</time><h3>동아대학교 총학생회</h3><p>51대 총감사위원장으로 학생회 예산·운영 감사와 감사위원회 운영</p></article>
            <article><time>2018.06</time><h3>1365 자원봉사단</h3><p>약 100명 규모 봉사캠프의 일정·인원·현장 운영 조율</p></article>
          </div>
        </section>
        <PrintSheetFooter page="03" />
      </article>
    </div>
  )
}

function PrintSectionTitle({ label, title }: { label: string; title: string }) {
  return <header className="resume-print-section-title"><p>{label}</p><h2>{title}</h2></header>
}

function PrintSheetFooter({ page }: { page: string }) {
  return <footer className="print-sheet-footer"><span>KWON HYUNJAE · PORTFOLIO</span><span>{page} / 10</span></footer>
}

type ResumeHeadingProps = { number: string; title: string; id: string }

function ResumeHeading({ number, title, id }: ResumeHeadingProps) {
  return <header className="resume-heading"><p>{number}</p><h2 id={id}>{title}</h2></header>
}

export default Resume
