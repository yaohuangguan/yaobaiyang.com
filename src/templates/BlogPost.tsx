import { useSiteMeta } from '@hooks/useSiteMeta'
import * as React from 'react'
import { Layout } from '../components/Layout'
import Seo from '../components/Seo'
import { graphql } from 'gatsby'
import { rhythm } from '../utils/typography'

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
            fluid(maxWidth: 1440, webpQuality: 10) {
              srcWebp
            }
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
  const siteData = useSiteMeta()
  console.log(data)
  const { markdownRemark: post } = data
  const { title: siteTitle } = siteData
  const { previous, next } = pageContext
  const publicUrl = `https://www.yaobaiyang.com/${post.fields.slug}`

  return (
    <Layout>
      <Seo
        title={`${post.frontmatter.title}`}
        description={post.frontmatter.description || post.excerpt}
        keywords={post.frontmatter.keywords}
      />

      <div
        style={{ marginTop: rhythm(1) }}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Layout>
  )
}

export default BlogPost
