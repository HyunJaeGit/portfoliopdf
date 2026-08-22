export type ChapterNavItem = {
  id: string
  label: string
}

type ChapterNavProps = {
  items: readonly ChapterNavItem[]
}

function ChapterNav({ items }: ChapterNavProps) {
  const moveToChapter = (id: string) => {
    const target = document.getElementById(id)
    if (!target) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
    target.focus({ preventScroll: true })
  }

  return (
    <nav className="chapter-nav" aria-label="프로젝트 상세 바로가기">
      <p>바로가기</p>
      <div>
        {items.map((item, index) => (
          <button type="button" key={item.id} onClick={() => moveToChapter(item.id)}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default ChapterNav
