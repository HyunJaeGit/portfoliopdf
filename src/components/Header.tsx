import Navigation from './Navigation'

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="site-title" href="#/" aria-label="포트폴리오 홈">
          Backend Portfolio
        </a>
        <Navigation />
      </div>
    </header>
  )
}

export default Header
