import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

function Layout() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        본문으로 건너뛰기
      </a>
      <Header />
      <main className="main-content" id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
