import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Layout as ArcoLayout } from '@arco-design/web-react'
import Header from './header'

export const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ArcoLayout>
      <Header siteTitle={data.site.siteMetadata?.title || 'Title'} />

      <ArcoLayout.Content
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0 1.0875rem 1.45rem',
        }}
      >
        {children}
        <ArcoLayout.Footer
          style={{
            marginTop: '2rem',
          }}
        >
          © {new Date().getFullYear()}, Built by Sam Yao
        </ArcoLayout.Footer>
      </ArcoLayout.Content>
    </ArcoLayout>
  )
}
