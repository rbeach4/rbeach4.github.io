import { useParams, Link, Navigate } from 'react-router-dom'
import { useState, useEffect, lazy, Suspense } from 'react'
import { MDXProvider } from '@mdx-js/react'
import Layout from '../components/layout/Layout'
import { formatDate } from '../utils/blog'
import '../components/blog/BlogPost.css'

// MDX components for custom styling
const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="mdx-h1" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mdx-h2" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mdx-h3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mdx-p" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="mdx-link" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="mdx-inline-code" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="mdx-pre" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mdx-ul" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="mdx-ol" {...props} />
  ),
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="mdx-blockquote" {...props} />
  ),
}

function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const [PostContent, setPostContent] = useState<React.LazyExoticComponent<React.ComponentType> | null>(null)
  const [frontmatter, setFrontmatter] = useState<any>(null)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    if (!slug) {
      setNotFound(true)
      return
    }

    async function loadPost() {
      try {
        // Dynamically import the MDX file
        const module = await import(`../posts/${slug}.mdx`)
        setFrontmatter(module.frontmatter)
        setPostContent(() => lazy(() => import(`../posts/${slug}.mdx`)))
      } catch (error) {
        console.error('Failed to load post:', error)
        setNotFound(true)
      }
    }

    loadPost()
  }, [slug])

  if (notFound || !slug) {
    return <Navigate to="/404" replace />
  }

  if (!PostContent || !frontmatter) {
    return (
      <Layout>
        <div className="blog-post">
          <div className="blog-post-container">
            <p>Loading...</p>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <article className="blog-post">
        <div className="blog-post-container">
          <Link to="/blog" className="back-link">
            ← Back to Blog
          </Link>

          <header className="blog-post-header">
            <h1>{frontmatter.title}</h1>
            <div className="blog-post-meta">
              <time dateTime={frontmatter.date}>
                {formatDate(frontmatter.date)}
              </time>
              <div className="blog-post-tags">
                {frontmatter.tags.map((tag: string) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </header>

          <div className="blog-post-content">
            <MDXProvider components={components}>
              <Suspense fallback={<div>Loading content...</div>}>
                <PostContent />
              </Suspense>
            </MDXProvider>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export default BlogPostPage
