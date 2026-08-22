import './PrintButton.css'

type PrintButtonProps = {
  label?: string
}

function PrintButton({ label = '프로젝트 PDF 저장' }: PrintButtonProps) {
  return (
    <button className="print-button" type="button" onClick={() => window.print()}>
      {label}
    </button>
  )
}

export default PrintButton
