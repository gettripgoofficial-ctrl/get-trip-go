export interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  author: string
  publishedAt: string
  createdAt?: string
  updatedAt?: string
  tags?: string[]
  category?: string
  coverImage?: string
  published: boolean
}
