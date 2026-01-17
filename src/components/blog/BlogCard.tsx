import { Link } from 'react-router-dom'
import { BlogPostMeta } from '../../utils/blog.types'
import { formatDate } from '../../utils/blog'
import './BlogCard.css'

interface BlogCardProps {
  post: BlogPostMeta
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="blog-card">
      <Link to={`/blog/${post.slug}`} className="blog-card-title-link">
        <h3 className="blog-card-title">{post.title}</h3>
      </Link>
      <time className="blog-card-date" dateTime={post.date}>
        {formatDate(post.date)}
      </time>
      <p className="blog-card-excerpt">{post.excerpt}</p>
      <div className="blog-card-footer">
        <div className="blog-card-tags">
          {post.tags && post.tags.length > 0 && post.tags.map(tag => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <Link to={`/blog/${post.slug}`} className="blog-card-link">
          Read more →
        </Link>
      </div>
    </article>
  )
}

export default BlogCard
