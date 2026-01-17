declare module '*.mdx' {
  import { ComponentType } from 'react'

  export const frontmatter: {
    title: string
    date: string
    excerpt: string
    tags: string[]
    slug: string
  }

  const MDXComponent: ComponentType
  export default MDXComponent
}
