import { BlogPostMeta, BlogPostFrontmatter } from './blog.types'

// Vite's glob import to load all MDX files
export async function getAllPosts(): Promise<BlogPostMeta[]> {
  const modules = import.meta.glob<{
    frontmatter: BlogPostFrontmatter
  }>('../posts/*.mdx', { eager: true })

  const posts = Object.entries(modules).map(([path, module]) => ({
    ...module.frontmatter,
    path: path.replace('../posts/', '').replace('.mdx', ''),
  }))

  // Sort by date, newest first
  return posts.sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getAllTags(posts: BlogPostMeta[]): string[] {
  if (!posts || posts.length === 0) return []

  const tagSet = new Set<string>()
  posts.forEach(post => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach(tag => tagSet.add(tag))
    }
  })
  return Array.from(tagSet).sort()
}

export function filterPostsByTag(
  posts: BlogPostMeta[],
  selectedTags: string[]
): BlogPostMeta[] {
  if (!posts || posts.length === 0) return []
  if (selectedTags.length === 0) return posts

  return posts.filter(post =>
    post.tags && selectedTags.some(tag => post.tags.includes(tag))
  )
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
