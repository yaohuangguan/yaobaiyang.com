import { getPrivatePostQuery } from '@queries/getPrivatePosts'
import { getPublicPostQuery } from '@queries/getPublicPosts'
import { useStaticQuery } from 'gatsby'

export type BlogItemNode = {
  excerpt: string
  fields: { slug: string }
  frontmatter: {
    categories: string[]
    cover: {
      childImageSharp: {
        fluid: {
          srcWebp: string
        }
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

type BlogListItem = {
  node: BlogItemNode
}

type Props = {
  isPrivate?: boolean
}

export const useBlogs = ({ isPrivate = false }: Props): BlogListItem[] => {
  const blogs = useStaticQuery(
    !isPrivate ? getPublicPostQuery : getPrivatePostQuery
  )

  return blogs.allMarkdownRemark.edges
}
