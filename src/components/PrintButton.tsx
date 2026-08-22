import './PrintButton.css'

type PrintButtonProps = {
  label?: string
  onPrint?: () => void
}

function PrintButton({ label = '프로젝트 PDF 저장', onPrint }: PrintButtonProps) {
  return (
    <button className="print-button" type="button" onClick={onPrint ?? (() => window.print())}>
      {label}
    </button>
  )
}

export default PrintButton
