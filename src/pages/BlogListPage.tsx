import { useState, useEffect } from 'react'
import Layout from '../components/layout/Layout'
import BlogCard from '../components/blog/BlogCard'
import TagFilter from '../components/blog/TagFilter'
import { getAllPosts, getAllTags, filterPostsByTag } from '../utils/blog'
import type { BlogPostMeta } from '../utils/blog.types'
import '../components/blog/BlogList.css'

function BlogListPage() {
  const [posts, setPosts] = useState<BlogPostMeta[]>([])
  const [filteredPosts, setFilteredPosts] = useState<BlogPostMeta[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [allTags, setAllTags] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadPosts() {
      try {
        const allPosts = await getAllPosts()
        setPosts(allPosts || [])
        setFilteredPosts(allPosts || [])
        setAllTags(getAllTags(allPosts || []))
      } catch (error) {
        console.error('Failed to load posts:', error)
        setPosts([])
        setFilteredPosts([])
        setAllTags([])
      } finally {
        setIsLoading(false)
      }
    }
    loadPosts()
  }, [])

  useEffect(() => {
    setFilteredPosts(filterPostsByTag(posts, selectedTags))
  }, [selectedTags, posts])

  return (
    <Layout>
      <section className="blog-list">
        <div className="container">
          <h1 className="section-title">Blog</h1>

          {!isLoading && (
            <TagFilter
              tags={allTags}
              selectedTags={selectedTags}
              onTagToggle={setSelectedTags}
            />
          )}

          {isLoading ? (
            <p className="no-posts">Loading posts...</p>
          ) : (
            <>
              <div className="blog-grid">
                {filteredPosts.map(post => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>

              {filteredPosts.length === 0 && posts.length > 0 && (
                <p className="no-posts">No posts found with selected tags.</p>
              )}

              {posts.length === 0 && (
                <p className="no-posts">No blog posts yet. Check back soon!</p>
              )}
            </>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default BlogListPage
