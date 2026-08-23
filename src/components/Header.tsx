import { Link } from 'react-router-dom'
import Navigation from './Navigation'

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="site-mark" to="/" aria-label="권현재 포트폴리오 홈">
          <strong>KHJ</strong>
          <span aria-hidden="true">26</span>
        </Link>
        <div className="header-actions">
          <Navigation />
          <Link className="header-print-link" to="/print">PDF <span aria-hidden="true">↓</span></Link>
        </div>
      </div>
    </header>
  )
}

export default Header
