import { graphql, useStaticQuery } from 'gatsby'

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

export const useBlogs = (): BlogListItem[] => {
  const blogs = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {
          frontmatter: { published: { eq: true }, kind: { eq: "post" } }
        }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            excerpt
            frontmatter {
              categories
              cover {
                childImageSharp {
                  fluid(maxWidth: 1440, webpQuality: 10) {
                    srcWebp
                  }
                }
              }
              coverAuthor
              coverOriginalUrl
              date(fromNow: true)
              description
              keywords
              kind
              published
              title
            }
            html
            timeToRead
            wordCount {
              paragraphs
              sentences
              words
            }
          }
        }
      }
    }
  `)

  return blogs.allMarkdownRemark.edges
}
