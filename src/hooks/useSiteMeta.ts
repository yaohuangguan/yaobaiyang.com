import { graphql, useStaticQuery } from 'gatsby'

type SiteMetaType = {
  title: string
  description: string
  introduction: string
  author: string
  siteUrl: string
}
export const useSiteMeta = (): SiteMetaType => {
  const data = useStaticQuery(
    graphql`
      query SiteMetaDataQuery {
        site {
          siteMetadata {
            title
            description
            introduction
            author
            siteUrl
          }
        }
      }
    `
  )

  return data.site.siteMetadata
}
