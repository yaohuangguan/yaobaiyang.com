import React from 'react'

import { Layout } from '@components/layout'
import Seo from '@components/seo'

import { BlogItem } from '@components/BlogItem'
import { graphql } from 'gatsby'
import { BlogItemNode } from '@typings/blogItem'
import { BackTop } from '@arco-design/web-react'

type Props = {
  data: { allMarkdownRemark: { edges: { node: BlogItemNode }[] } }
}

export const pageQuery = graphql`
  query {
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
                gatsbyImageData(width: 900, height: 300)
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
            language
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

const IndexPage: React.FC<Props> = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges
  console.log(data)
  return (
    <Layout>
      <Seo title="Home" />
      {posts.map(({ node }) => (
        <BlogItem key={node.id} {...node} />
      ))}
      <BackTop visibleHeight={30} style={{ position: 'fixed' }} />
    </Layout>
  )
}

export default IndexPage
