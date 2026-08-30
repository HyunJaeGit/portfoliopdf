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

type MZProps = { portfolioPrint?: boolean }

function MZ({ portfolioPrint = false }: MZProps) {
  if (portfolioPrint) return <MZPrintLayout />

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
              <p className="chapter-lead">전국 음식점 데이터를 중심으로 Oracle 관계형 모델과 MyBatis 데이터 접근 계층을 설계했습니다. 해외 관광객이 지역·카테고리로 검색한 결과를 목록과 Kakao 지도에서 이어서 탐색하도록 회원 기능, 검색, 페이징, 배포까지 하나의 서비스 흐름으로 구성했습니다.</p>
              <ul className="chapter-points">
                <li>전국 단위 음식점·지역·카테고리 데이터 구조화</li>
                <li>검색 결과와 지도 위치를 같은 탐색 흐름으로 연결</li>
                <li>Java 8·Spring MVC·JSP 기반 서버 렌더링 구조 활용</li>
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
            <p className="chapter-lead">Oracle 관계형 데이터 모델과 MyBatis 데이터 접근 계층을 기반으로 CRUD부터 지역·카테고리 복합 검색, OFFSET/FETCH 페이징까지 구현</p>
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
              <figure className="evidence-figure mz-signup-evidence">
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
              <li><strong>팀 리딩</strong><span>일정·역할 조율과 브랜치 병합을 통해 기능별 결과물을 하나의 서비스로 통합</span></li>
            </ul>
          </div>
        </section>
      </div>
    </article>
  )
}

function MZPrintLayout() {
  return (
    <div className="mz-print-layout">
      <article className="mz-print-sheet mz-print-overview-sheet">
        <header className="mz-print-bar"><span>CASE 02</span><span>RESTAURANT INFORMATION PLATFORM</span></header>
        <section className="mz-print-overview">
          <h1>MZ 전국 맛집 정보 플랫폼</h1>
          <figure><img src={`${import.meta.env.BASE_URL}${project.image.src}`} alt={project.image.alt} /><figcaption>{project.image.caption}</figcaption></figure>
          <dl>{[['구분', project.type], ['기간', project.period], ['역할', project.role], ['기술', project.technologies.join(' · ')]].map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}</dl>
        </section>
        <section className="mz-print-metrics" aria-label="MZ 프로젝트 핵심 정보">
          <article><span>01</span><strong>4인</strong><p>팀 프로젝트 · 팀장</p></article>
          <article><span>02</span><strong>2개 검색축</strong><p>지역·카테고리 동적 복합 검색</p></article>
          <article><span>03</span><strong>2계층 배포</strong><p>EC2 애플리케이션 · RDS DB 분리</p></article>
        </section>
        <div className="mz-print-overview-grid">
          <section><MZPrintSectionTitle label="PROBLEM &amp; SERVICE FLOW" title="프로젝트 문제와 서비스 흐름" /><p>지역 정보에 익숙하지 않은 해외 관광객이 전국 음식점을 지역·카테고리로 검색하고, 결과 목록과 지도 위치를 같은 흐름에서 비교하도록 데이터 조회부터 화면 탐색까지 연결했습니다.</p><ol><li>지역·카테고리 조건 선택</li><li>MyBatis 동적 SQL 조회</li><li>OFFSET/FETCH 페이지 반환</li><li>목록과 Kakao 지도 마커 연결</li></ol></section>
          <section><MZPrintSectionTitle label="MY ROLE" title="팀장 및 데이터 계층 담당" /><ul><li>개발 일정·역할·Git 브랜치 조율</li><li>Oracle DB 설계와 데이터 수집</li><li>MyBatis SQL Mapper와 전체 SQL 전담</li><li>CRUD·복합 검색·페이징 구현</li><li>Kakao Map API 연동과 AWS 배포</li></ul></section>
        </div>
        <MZPrintFooter page="08" />
      </article>

      <article className="mz-print-sheet mz-print-data-sheet">
        <header className="aura-print-page-title"><p>DATA MODEL &amp; SEARCH</p><h1>관계형 데이터와 동적 검색 구현</h1></header>
        <section className="mz-print-implementations" aria-label="MZ 핵심 구현">
          <article><span>01</span><h2>Oracle 관계형 데이터 모델</h2><p>음식점·지역·카테고리와 회원·리뷰·북마크 도메인의 관계를 설계해 검색과 서비스 기능의 기준을 구성</p></article>
          <article><span>02</span><h2>MyBatis SQL Mapper</h2><p>Mapper와 CRUD·검색 SQL 전체를 작성하고 선택 조건을 동적 SQL로 통합</p></article>
          <article><span>03</span><h2>지역·카테고리 복합 검색</h2><p>단일 또는 복수 조건을 같은 조회 흐름에서 처리하고 검색 결과를 목록과 지도에 전달</p></article>
          <article><span>04</span><h2>OFFSET/FETCH 페이징</h2><p>Oracle 조회 범위를 제어해 검색 결과를 페이지 단위로 안정적으로 반환</p></article>
        </section>
        <section className="mz-print-ownership"><MZPrintSectionTitle label="OWNERSHIP" title="팀 데이터 모델과 본인 기여 구분" />
          <div><article><h3>팀 전체 데이터 모델</h3><p>Account, Restaurant, Area, Category, Review, Bookmark, Img, Notice 도메인이 회원·음식점·리뷰 기능을 함께 지원하는 관계형 구조</p></article><article><h3>본인 담당 범위</h3><p>Oracle DB 설계·데이터 수집, MyBatis Mapper와 전체 SQL 작업, CRUD·복합 검색·OFFSET/FETCH 페이징 전담</p></article></div>
        </section>
        <figure className="mz-print-erd"><img src={`${import.meta.env.BASE_URL}images/projects/mz-erd.jpg`} alt="MZ 데이터베이스 ERD" /><figcaption>개발 단계 ERD — 음식점·지역·카테고리와 회원·리뷰·북마크 도메인을 연결한 관계형 데이터 구조</figcaption></figure>
        <MZPrintFooter page="09" />
      </article>

      <article className="mz-print-sheet mz-print-delivery-sheet">
        <header className="aura-print-page-title"><p>MAP, CONTRIBUTION &amp; DELIVERY</p><h1>지도 연동과 팀 결과물 통합</h1></header>
        <section className="mz-print-map"><figure><img src={`${import.meta.env.BASE_URL}images/projects/mz-map-list.png`} alt="Kakao 지도와 음식점 목록 연동 화면" /><figcaption>선택 지역의 지도 마커와 음식점 목록·상세 정보를 함께 제공하는 탐색 화면</figcaption></figure><div><MZPrintSectionTitle label="KAKAO MAP INTEGRATION" title="검색 결과와 지도의 연결" /><ul><li><strong>좌표 변환</strong><span>DB 조회 좌표를 Kakao Map 위치로 변환</span></li><li><strong>지도 마커</strong><span>검색 결과별 음식점을 지도 마커에 매핑</span></li><li><strong>동적 인포윈도우</strong><span>마커 선택 시 음식점 상세 정보를 동적으로 표시</span></li><li><strong>검색 조건 연결</strong><span>지역·카테고리와 페이지 이동 결과를 지도에 반영</span></li></ul></div></section>
        <section className="mz-print-contribution"><article><MZPrintSectionTitle label="MY CONTRIBUTION" title="본인 기여" /><ul><li>기획·QC, 개발 일정과 Git 브랜치 조율</li><li>Oracle DB 설계·데이터 수집</li><li>MyBatis Mapper와 전체 SQL 전담</li><li>CRUD·복합 검색·페이징</li><li>회원가입 서버 처리와 Kakao Map API 연동</li><li>AWS EC2·Tomcat·RDS 배포</li></ul></article><article><MZPrintSectionTitle label="TEAM SCOPE" title="팀 전체 구현 범위" /><p>다국어 UI, 마이페이지, 리뷰·이미지, 랭킹과 추천 기능은 4인 팀의 역할별 분담 범위입니다. 팀장으로서 기능 브랜치와 결과물을 조율·병합해 하나의 서비스로 통합했습니다.</p></article></section>
        <section className="mz-print-deployment"><MZPrintSectionTitle label="DEPLOYMENT &amp; RESULT" title="배포와 통합 결과" /><div className="mz-print-deployment-flow"><span>사용자</span><i>→</i><span>EC2 · Tomcat<br />애플리케이션</span><i>→</i><span>RDS · Oracle<br />데이터베이스</span></div><dl><div><dt>서비스 통합</dt><dd>관계형 데이터·복합 검색·페이지 조회·지도 탐색을 하나의 사용자 흐름으로 연결</dd></div><div><dt>팀 리딩</dt><dd>일정·역할 조율과 브랜치 병합으로 기능별 결과물을 하나의 서비스로 통합</dd></div></dl></section>
        <div className="mz-print-closing"><section><MZPrintSectionTitle label="LIMITS &amp; NEXT" title="한계와 개선 방향" /><ul><li>Java 8·Spring Framework 4·JSP 기반 구조의 현대화 필요</li><li>더 큰 데이터셋에서 복합 검색 쿼리와 인덱스 성능 추가 검증 필요</li><li>Kakao Map API 오류·지연 상황의 사용자 대응 흐름 보강 필요</li></ul></section><section><MZPrintSectionTitle label="CODE &amp; CONTACT" title="코드 확인과 연락처" /><address><a href="https://github.com/HyunJaeGit">github.com/HyunJaeGit</a><a href="mailto:guswo1118@gmail.com">guswo1118@gmail.com</a></address><p>데이터 모델, SQL Mapper, 검색·페이징과 지도 연동 구현 기록을 GitHub에서 확인할 수 있습니다.</p></section></div>
        <MZPrintFooter page="10" />
      </article>
    </div>
  )
}

function MZPrintSectionTitle({ label, title }: { label: string; title: string }) {
  return <header className="aura-print-section-title"><p>{label}</p><h2>{title}</h2></header>
}

function MZPrintFooter({ page }: { page: string }) {
  return <footer className="print-sheet-footer"><span>KWON HYUNJAE · MZ PROJECT</span><span>{page} / 10</span></footer>
}

type ChapterHeadingProps = { number: string; title: string; id: string }

function ChapterHeading({ number, title, id }: ChapterHeadingProps) {
  return <header className="chapter-heading"><p>{number}</p><h2 id={id} tabIndex={-1}>{title}</h2></header>
}

export default MZ
