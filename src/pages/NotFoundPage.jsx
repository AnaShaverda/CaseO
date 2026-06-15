import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="container empty-page">
      <span>404</span><h1>Page not found</h1><p>We could not find the page you requested.</p>
      <Link className="button button--primary" to="/">Back to home</Link>
    </section>
  )
}

export default NotFoundPage
