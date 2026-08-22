type EvidencePlaceholderProps = {
  title: string
  description: string
}

function EvidencePlaceholder({ title, description }: EvidencePlaceholderProps) {
  return (
    <div className="evidence-placeholder" role="img" aria-label={`${title}: ${description}`}>
      <span>IMAGE GUIDE</span>
      <strong>{title}</strong>
      <p>{description}</p>
    </div>
  )
}

export default EvidencePlaceholder
