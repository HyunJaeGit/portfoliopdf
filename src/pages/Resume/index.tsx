import { Link } from 'react-router-dom'
import PrintButton from '../../components/PrintButton'
import './Resume.css'

const skillGroups = [
  { title: 'Backend', detail: 'Java 21·8 · Spring Boot 3.x · Spring MVC 4.3 · JPA · MyBatis · REST API' },
  { title: 'Data', detail: 'MySQL · Oracle · 관계형 데이터 모델링 · SQL' },
  { title: 'AI', detail: 'Gemini API · 상태 전이 기반 호출 제어 · 기존 가이드 재사용 · 자연어 검색 품질검증' },
  { title: 'Infra', detail: 'AWS EC2·RDS · Linux · Apache Tomcat' },
  { title: 'Frontend', detail: 'React · JavaScript · JSP·JSTL · HTML·CSS · Three.js' },
  { title: 'Collaboration', detail: 'Git · GitHub · 일정·이슈·운영 절차 문서화' },
] as const

function Resume() {
  return (
    <article className="resume-page">
      <header className="resume-cover">
        <div className="resume-document-bar"><span>BACKEND DEVELOPER RESUME</span><span>2026</span></div>
        <div className="resume-identity">
          <div>
            <h1>권현재</h1>
            <p className="resume-role">백엔드 개발자</p>
          </div>
          <p className="resume-lead">Java/Spring 기반 API와 관계형 데이터 구현, 상태 기반 AI API 연동과 AWS 배포 경험. 공공 교육 플랫폼 운영·유지보수와 AI 검색 품질검증에서 발견한 문제를 재현 가능한 기술 정보로 구조화</p>
        </div>
        <div className="resume-cover-footer">
          <address className="resume-contact">
            <a href="mailto:guswo1118@gmail.com">guswo1118@gmail.com</a>
            <a href="https://github.com/HyunJaeGit" target="_blank" rel="noreferrer">github.com/HyunJaeGit</a>
          </address>
          <div className="resume-actions"><PrintButton label="이력서 PDF 저장" /></div>
        </div>
      </header>

      <section className="resume-focus" aria-labelledby="resume-focus-title">
        <h2 id="resume-focus-title" className="visually-hidden">핵심 역량</h2>
        <article><p>01 · Backend</p><h3>API와 데이터 흐름</h3><span>REST API, 관계형 모델, 검색·페이징과 상태 기반 처리 로직 구현</span></article>
        <article><p>02 · AI Integration</p><h3>조건부 AI 호출</h3><span>상태 전이 기반 Gemini 호출 제어로 호출량 약 90% 감소·토큰 사용 절감</span></article>
        <article><p>03 · Operations</p><h3>서비스 운영과 품질검증</h3><span>공공 교육 플랫폼 유지보수 참여, CBT 이슈 대응과 특허검색 AX 자연어 품질평가</span></article>
      </section>

      <div className="resume-columns">
        <div className="resume-primary">
          <section className="resume-block" aria-labelledby="resume-experience">
            <ResumeHeading number="01" title="경력" id="resume-experience" />
            <div className="resume-timeline">
              <article>
                <header><div><h3>케이원정보통신</h3><p>한국교육과정평가원 교육 플랫폼 운영·유지보수 · 특허검색 AX 품질검증</p></div><time>2026.06–재직 중</time></header>
                <ul>
                  <li>한국교육과정평가원의 국가기초학력지원포털·학업성취도지원포털 운영·유지보수와 사용자 이슈 이관 지원</li>
                  <li>국가수준 학업성취도평가 CBT 담당 약 40개교·80개 학급의 사전점검과 진행 현황 관리</li>
                  <li>설치·접속·네트워크·권한 이슈의 증상 분류, 개발사 이관과 정상화 검증</li>
                  <li>반복 이슈를 FAQ·체크리스트·매뉴얼로 구조화해 운영·유지보수 대응 기준으로 재사용</li>
                  <li>케이원 특허검색 AX 프로젝트에서 자연어 적합성·필터 정확도·이상 사례 품질검증</li>
                </ul>
              </article>
              <article>
                <header><div><h3>한국지질자원연구원</h3><p>연구·행정 지원</p></div><time>2021.06–2021.08</time></header>
                <ul><li>연구 자료·문서와 현장 조사 정보 정리, 기관 절차와 담당 일정에 맞춘 업무 지원</li></ul>
              </article>
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
            <dl className="resume-skills">
              {skillGroups.map((skill) => <div key={skill.title}><dt>{skill.title}</dt><dd>{skill.detail}</dd></div>)}
            </dl>
          </section>

          <section className="resume-block" aria-labelledby="resume-projects">
            <ResumeHeading number="04" title="프로젝트" id="resume-projects" />
            <div className="resume-projects">
              <article>
                <header><div><h3>Aura3D</h3><p>개인 프로젝트</p></div><time>2025.12–2026.01</time></header>
                <ul>
                  <li>상태 전이 감지와 기존 가이드 재사용을 통한 Gemini 호출 제어</li>
                  <li>여러 URL을 동시에 관리하기 위한 도구에서 3D 관제·AI 대응 가이드까지 확장</li>
                  <li>관리·스캔 제어·상태 조회 REST API</li>
                  <li>Java 21 Virtual Thread·TaskScheduler·ConcurrentHashMap 기반 작업 생명주기</li>
                </ul>
              </article>
              <article>
                <header><div><h3>MZ 전국 맛집 정보 플랫폼</h3><p>4인 팀장</p></div><time>2023.09–2024.01</time></header>
                <ul>
                  <li>일정·브랜치 조율과 기능별 결과물 통합</li>
                  <li>Oracle DB 설계와 MyBatis SQL Mapper·전체 SQL 작업 전담</li>
                  <li>CRUD·지역/카테고리 복합 검색·OFFSET/FETCH 페이징 쿼리</li>
                  <li>회원가입, Kakao Map API와 AWS EC2·RDS 배포</li>
                </ul>
              </article>
            </div>
            <Link className="resume-portfolio-link" to="/portfolio">상세 포트폴리오 보기 →</Link>
          </section>

          <section className="resume-block" aria-labelledby="resume-ai">
            <ResumeHeading number="05" title="AI 연동 및 품질검증" id="resume-ai" />
            <dl className="resume-ai-list">
              <div><dt>호출 조건 설계</dt><dd>HTTP 상태가 변할 때만 Gemini 대응 가이드를 생성하도록 외부 AI API 호출 조건 구현</dd></div>
              <div><dt>결과 재사용</dt><dd>동일 상태에서는 저장된 기존 가이드를 사용해 반복 호출과 불필요한 토큰 사용 억제</dd></div>
              <div><dt>품질검증</dt><dd>특허검색 AX 품질검증 테스터로 참여해 평가 기준에 따른 자연어 검색 적합성·이상 사례 검증</dd></div>
            </dl>
          </section>
        </aside>
      </div>
    </article>
  )
}

type ResumeHeadingProps = { number: string; title: string; id: string }

function ResumeHeading({ number, title, id }: ResumeHeadingProps) {
  return <header className="resume-heading"><p>{number}</p><h2 id={id}>{title}</h2></header>
}

export default Resume
