import PrintButton from '../../components/PrintButton'
import Aura3D from '../Aura3D'
import MZ from '../MZ'
import Portfolio from '../Portfolio'
import Resume from '../Resume'
import './Print.css'

function Print() {
  const printEntireSite = async () => {
    const images = Array.from(document.querySelectorAll<HTMLImageElement>('.print-document img'))

    await Promise.all(images.map((image) => {
      image.loading = 'eager'
      if (image.complete) return Promise.resolve()

      return new Promise<void>((resolve) => {
        image.addEventListener('load', () => resolve(), { once: true })
        image.addEventListener('error', () => resolve(), { once: true })
      })
    }))

    await document.fonts.ready
    window.print()
  }

  return (
    <div className="print-page">
      <header className="print-page-toolbar">
        <div>
          <h1>전체 포트폴리오 PDF</h1>
          <p>홈, 이력서, 포트폴리오 목차와 프로젝트 상세를 하나의 문서로 저장합니다.</p>
        </div>
        <PrintButton label="전체 PDF 저장" onPrint={printEntireSite} />
      </header>
      <div className="print-document">
        <section className="print-document-section" aria-label="포트폴리오 표지"><PrintCover /></section>
        <section className="print-document-section" aria-label="이력서"><Resume /></section>
        <section className="print-document-section" aria-label="포트폴리오 목차"><Portfolio /></section>
        <section className="print-document-section" aria-label="Aura3D 상세"><Aura3D /></section>
        <section className="print-document-section" aria-label="MZ 상세"><MZ /></section>
      </div>
    </div>
  )
}

function PrintCover() {
  return (
    <header className="print-cover">
      <div className="print-cover-meta" aria-hidden="true">
        <span>KWON HYUNJAE</span>
        <span>2026 PORTFOLIO</span>
        <span>JAVA · SPRING BACKEND</span>
      </div>
      <div className="print-cover-body">
        <div className="print-cover-summary">
          <section><h2>CAREER</h2><p><strong>케이원정보통신 · 2026.06–재직 중</strong><br />한국교육과정평가원 고객사 프로젝트<br />교육 플랫폼 운영·유지보수 · CBT 시험 운영 지원</p></section>
          <section><h2>EDUCATION</h2><p><strong>KG ITBANK · 약 9개월 · 총 1,080시간</strong><br />AWS 클라우드 활용 웹 융합 과정<br />IT 통합 개발 기초 과정</p></section>
          <section><h2>EXPERIENCE</h2><p><strong>한국지질자원연구원 · 2021.06–2021.08</strong><br />연구 자료·현장 조사 정보·행정 업무 지원</p></section>
          <section><h2>PROJECT</h2><p><strong>Aura3D</strong> · Java 21 Virtual Thread 기반 웹 모니터링<br /><strong>MZ</strong> · Java 8 Spring MVC·MyBatis 기반 웹 프로젝트</p></section>
          <section><h2>CONTACT</h2><p>guswo1118@gmail.com<br />github.com/HyunJaeGit</p></section>
        </div>
        <div className="print-cover-profile">
          <p className="print-cover-kicker">Java · Spring Backend Developer</p>
          <h1>백엔드 개발자<br /><strong>권현재입니다.</strong></h1>
          <div className="print-cover-strengths">
            <section><span>01</span><div><h2>공공기관 서비스와 시험 운영 경험</h2><p>한국교육과정평가원 교육 플랫폼 운영·유지보수와 약 40개교·80개 학급의 CBT 운영 지원</p></div></section>
            <section><span>02</span><div><h2>프로젝트를 처음부터 끝까지 수행한 경험</h2><p>요구사항 정리와 설계부터 구현, 외부 API 연동, 배포와 검증까지 직접 수행</p></div></section>
            <section><span>03</span><div><h2>팀 프로젝트를 조율하고 완성한 경험</h2><p>4인 팀의 일정과 브랜치를 관리하고 각자 개발한 기능을 하나의 서비스로 통합</p></div></section>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Print
