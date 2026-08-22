import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="page-intro">
      <p className="eyebrow">404</p>
      <h1>페이지를 찾을 수 없습니다</h1>
      <p>요청한 주소를 확인하거나 홈으로 돌아가 주세요.</p>
      <Link className="text-link" to="/">
        홈으로 이동
      </Link>
    </section>
  )
}

export default NotFound
