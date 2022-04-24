import React from 'react'
import { Layout } from '@components/Layout'
import Seo from '@components/Seo'
import { graphql } from 'gatsby'
import { rhythm } from '@utils/typography'
import { BackTop } from '@arco-design/web-react'

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      fields {
        slug
      }
      frontmatter {
        cover {
          childImageSharp {
            gatsbyImageData
            id
          }
        }
        coverAuthor
        coverOriginalUrl
        date(formatString: "MMMM DD, YYYY", fromNow: true)
        description
        keywords
        kind
        published
        title
        categories
      }
      html
      timeToRead
      wordCount {
        words
        paragraphs
        sentences
      }
    }
  }
`

const BlogPost = ({ data, pageContext }) => {
  const { markdownRemark: post } = data

  const title = post.frontmatter.title
  const desc = post.frontmatter.description || post.excerpt
  const keywords = post.frontmatter.keywords
  return (
    <Layout>
      <Seo title={title} description={desc} keywords={keywords} />

      <div
        style={{ marginTop: rhythm(1) }}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: post.html }}
      />

      <BackTop visibleHeight={30} style={{ position: 'fixed' }} />
    </Layout>
  )
}

export default BlogPost
