import { Link } from 'react-router-dom'
import Navigation from './Navigation'

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="site-title" to="/" aria-label="권현재 포트폴리오 홈">
          <span className="site-title-mark" aria-hidden="true">KHJ</span>
          <span>
            <strong>권현재</strong>
            <small>Backend Technical Casebook</small>
          </span>
        </Link>
        <Navigation />
      </div>
    </header>
  )
}

export default Header
