import { Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import './NotFoundPage.css'

function NotFoundPage() {
  return (
    <Layout>
      <div className="not-found">
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <div className="not-found-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
