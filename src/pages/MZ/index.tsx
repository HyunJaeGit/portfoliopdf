import { Link } from 'react-router-dom'
import ChapterNav from '../../components/ChapterNav'
import PrintButton from '../../components/PrintButton'
import { projects } from '../../content/projects'
import '../project-detail.css'

const project = projects[1]
const chapters = [
  { id: 'mz-goal', label: '플랫폼 목표' },
  { id: 'mz-data', label: '데이터·검색' },
  { id: 'mz-map', label: '지도 연동' },
  { id: 'mz-deployment', label: '배포·팀 리딩' },
] as const

function MZ() {
  return (
    <article className="project-detail">
      <header className="detail-hero">
        <Link className="back-link" to="/portfolio">← 포트폴리오</Link>
        <div className="detail-document-bar"><span>CASE 02</span><span>RESTAURANT INFORMATION PLATFORM</span></div>
        <div className="detail-title-row">
          <div><h1>{project.title}</h1></div>
          <p className="detail-lead">{project.subtitle}</p>
        </div>
        <div className="detail-summary-grid">
          <figure className="detail-visual mz-search-visual">
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
        <dl className="detail-metrics" aria-label="MZ 프로젝트 핵심 수치">
          <div><dt>4인</dt><dd>팀 프로젝트</dd></div>
          <div><dt>2개</dt><dd>지역·카테고리 검색축</dd></div>
          <div><dt>2계층</dt><dd>EC2 애플리케이션·RDS DB</dd></div>
        </dl>
        <ChapterNav items={chapters} />
      </header>

      <div className="detail-body">
        <section className="case-chapter" aria-labelledby="mz-goal">
          <ChapterHeading number="01" title="전국 음식점 정보를 연결한 탐색 플랫폼" id="mz-goal" />
          <div className="chapter-content">
            <div className="chapter-copy-grid">
              <p className="chapter-lead">해외 관광객의 탐색 과정을 기준으로 다국어 UI, 지역·카테고리 검색, 지도와 회원 기능을 연결한 전국 단위 음식점 정보 플랫폼 설계</p>
              <ul className="chapter-points">
                <li>전국 단위 음식점·지역·카테고리 데이터 구조화</li>
                <li>검색 결과와 지도 위치를 같은 탐색 흐름으로 연결</li>
                <li>Java 8·Spring MVC·JSP 기반 서버 렌더링 구조 활용</li>
                <li>4인의 기능 브랜치와 결과물을 하나의 플랫폼으로 통합</li>
              </ul>
            </div>
            <figure className="chapter-wide-evidence">
              <img src={`${import.meta.env.BASE_URL}images/projects/mz-main-search.jpg`} alt="MZ 플랫폼의 지역·카테고리 검색과 다국어 탐색 메뉴가 있는 메인 화면" loading="lazy" />
              <figcaption>개발·테스트 환경 화면 — 지역·카테고리 검색과 다국어 탐색 진입점을 제공하는 MZ 메인 화면</figcaption>
            </figure>
          </div>
        </section>

        <section className="case-chapter" aria-labelledby="mz-data">
          <ChapterHeading number="02" title="관계형 데이터와 동적 SQL 기반 복합 검색" id="mz-data" />
          <div className="chapter-content">
            <p className="chapter-lead">Oracle 관계형 데이터 모델을 설계하고 MyBatis SQL Mapper와 전체 SQL 작업을 전담. CRUD부터 지역·카테고리 복합 검색, OFFSET/FETCH 페이징까지 데이터 접근 계층 구현</p>
            <div className="implementation-list compact-list">
              <div><p>01</p><h3>Oracle 데이터 모델</h3><span>음식점·지역·카테고리 관계를 중심으로 검색과 서비스 기능을 지탱하는 데이터 모델 설계</span></div>
              <div><p>02</p><h3>SQL Mapper 전담</h3><span>MyBatis Mapper와 CRUD·검색 SQL 전체를 작성하고 선택 조건 기반 동적 SQL로 단일·복합 검색 통합</span></div>
              <div><p>03</p><h3>OFFSET/FETCH</h3><span>Oracle 조회 범위 제어를 통해 검색 결과를 페이지 단위로 반환하는 페이징 기술 적용</span></div>
              <div><p>04</p><h3>회원가입</h3><span>회원 입력 정보 검증부터 Oracle 저장까지 가입 기능의 서버 처리 흐름 구현</span></div>
            </div>
            <div className="evidence-grid">
              <figure className="evidence-figure">
                <img src={`${import.meta.env.BASE_URL}images/projects/mz-erd.jpg`} alt="음식점·지역·카테고리와 회원·리뷰·북마크 도메인을 연결한 MZ 데이터베이스 ERD" loading="lazy" />
                <figcaption>개발 단계 ERD — 음식점·지역·카테고리와 회원·리뷰·북마크 도메인을 연결한 관계형 데이터 구조</figcaption>
              </figure>
              <figure className="evidence-figure">
                <img src={`${import.meta.env.BASE_URL}images/projects/mz-signup.png`} alt="아이디, 비밀번호, 닉네임, 이메일, 생년월일, 전화번호, 국적과 성별을 입력하는 MZ 회원가입 화면" loading="lazy" />
                <figcaption>개발·테스트 환경 화면 — 회원 입력 정보를 검증하고 Oracle 계정 데이터로 저장하는 회원가입 진입 화면</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="case-chapter" aria-labelledby="mz-map">
          <ChapterHeading number="03" title="검색 결과와 Kakao 지도의 연결" id="mz-map" />
          <div className="chapter-content evidence-story">
            <figure>
              <img src={`${import.meta.env.BASE_URL}images/projects/mz-map-list.png`} alt="강원 속초시 지도 마커와 주변 음식점 목록을 함께 보여주는 MZ 지도 탐색 화면" loading="lazy" />
              <figcaption>개발·테스트 환경 화면 — 선택 지역의 지도 마커와 음식점 목록·상세 정보를 함께 제공하는 탐색 화면</figcaption>
            </figure>
            <div>
              <p className="chapter-lead">DB 조회 좌표를 Kakao Map API 마커로 변환하고 음식점 정보를 동적 인포윈도우에 연결한 지도 탐색 흐름</p>
              <ul className="chapter-points">
                <li>검색 조건과 결과 목록을 지도 마커에 매핑</li>
                <li>결과별 음식점 정보를 동적 인포윈도우로 표시</li>
                <li>지역·카테고리 조건과 페이지 이동 결과를 함께 확인</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="case-chapter" aria-labelledby="mz-deployment">
          <ChapterHeading number="04" title="AWS 배포와 팀 결과물 통합" id="mz-deployment" />
          <div className="chapter-content">
            <div className="contribution-table" role="table" aria-label="MZ 프로젝트 기여 구분">
              <div className="contribution-row contribution-head" role="row"><p role="columnheader">본인 기여</p><p role="columnheader">팀 구현 범위</p></div>
              <div className="contribution-row" role="row">
                <div role="cell">
                  <ul>
                    <li>기획·QC, 개발 일정과 Git 브랜치 조율</li>
                    <li>Oracle DB 설계·데이터 수집</li>
                    <li>MyBatis SQL Mapper와 전체 SQL 작업 전담</li>
                    <li>CRUD·복합 검색·OFFSET/FETCH 페이징</li>
                    <li>회원가입 서버 처리</li>
                    <li>Kakao Map API 연동</li>
                    <li>AWS EC2·Tomcat·RDS 배포</li>
                  </ul>
                </div>
                <div role="cell"><p>다국어 UI, 마이페이지, 리뷰·이미지, 랭킹과 추천 기능은 4인 팀의 역할별 분담 범위. 팀장으로서 기능 브랜치와 결과물을 조율·병합해 하나의 서비스로 통합</p></div>
              </div>
            </div>
            <ul className="result-list">
              <li><strong>서비스 통합</strong><span>관계형 데이터·복합 검색·페이지 조회·지도 탐색을 하나의 플랫폼 사용자 흐름으로 연결</span></li>
              <li><strong>배포 확인</strong><span>EC2의 Tomcat 구동과 RDS Oracle 연결을 통한 애플리케이션·DB 분리 배포 경험 확보</span></li>
              <li><strong>팀 리딩</strong><span>일정·역할 조율과 브랜치 병합을 통해 4인의 결과물을 하나의 서비스로 통합</span></li>
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

export default MZ
