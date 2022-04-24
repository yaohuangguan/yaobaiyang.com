export type BlogItemNode = {
  excerpt: string
  fields: { slug: string }
  frontmatter: {
    categories: string[]
    cover: {
      childImageSharp: {
        gatsbyImageData: any
      }
    }
    coverAuthor: string
    coverOriginalUrl: string
    date: string
    description: string
    keywords: string[]
    kind: string
    published: boolean
    title: string
  }
  html: string
  id: string
  timeToRead: number
  wordCount: {
    paragraphs: number
    sentences: number
    words: number
  }
}

export type BlogListItem = {
  node: BlogItemNode
}
