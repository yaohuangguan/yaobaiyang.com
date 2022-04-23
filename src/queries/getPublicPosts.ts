import { graphql } from 'gatsby'

export const getPublicPostQuery = graphql`
  query getAllMarkdownRemark {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          published: { eq: true }
          private: { eq: false }
          kind: { eq: "post" }
        }
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
`
