import PrintButton from '../../components/PrintButton'
import Aura3D from '../Aura3D'
import Home from '../Home'
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
        <section className="print-document-section" aria-label="홈"><Home /></section>
        <section className="print-document-section" aria-label="이력서"><Resume /></section>
        <section className="print-document-section" aria-label="포트폴리오 목차"><Portfolio /></section>
        <section className="print-document-section" aria-label="Aura3D 상세"><Aura3D /></section>
        <section className="print-document-section" aria-label="MZ 상세"><MZ /></section>
      </div>
    </div>
  )
}

export default Print
