export interface BlogPostFrontmatter {
  title: string
  date: string
  excerpt: string
  tags: string[]
  slug: string
}

export interface BlogPostMeta extends BlogPostFrontmatter {
  path: string
}
