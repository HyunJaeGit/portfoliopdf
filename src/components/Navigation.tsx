import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const navigationItems = [
  { to: '/', label: '홈', end: true },
  { to: '/projects', label: '프로젝트', end: false },
  { to: '/resume', label: '이력서', end: true },
  { to: '/portfolio', label: '포트폴리오', end: true },
]

function Navigation() {
  const location = useLocation()
  const [openPath, setOpenPath] = useState<string | null>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const isOpen = openPath === location.pathname

  useEffect(() => {
    if (!isOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenPath(null)
        menuButtonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isOpen])

  return (
    <nav className="navigation" aria-label="주요 메뉴">
      <button
        ref={menuButtonRef}
        className="menu-button"
        type="button"
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        onClick={() =>
          setOpenPath((current) => (current === location.pathname ? null : location.pathname))
        }
      >
        <span className="menu-button-label">메뉴</span>
        <span aria-hidden="true">{isOpen ? '닫기' : '열기'}</span>
      </button>
      <ul className={isOpen ? 'nav-list is-open' : 'nav-list'} id="primary-navigation">
        {navigationItems.map(({ to, label, end }) => (
          <li key={to}>
            <NavLink to={to} end={end}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
