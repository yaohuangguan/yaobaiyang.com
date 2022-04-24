import { useSiteMeta } from '@hooks/useSiteMeta'
import * as React from 'react'
import { Layout } from '../components/Layout'
import Seo from '../components/SEO'
import { graphql } from 'gatsby'
import { rhythm } from '../utils/typography'
import s from 'styled-components'
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

      <StyledContent
        style={{ marginTop: rhythm(1) }}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: post.html }}
      />

      <BackTop visibleHeight={30} style={{ position: 'fixed' }} />
    </Layout>
  )
}

const StyledContent = s.div`
  font-famlily: FilsonSoftRegular, sans-serif;
`

export default BlogPost
