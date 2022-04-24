import { Layout } from '@arco-design/web-react'
import type { BlogItemNode } from '@typings/blogItem'
import aboutReadTime from '@utils/aboutReadTime'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { useTranslation } from 'react-i18next'
import s from 'styled-components'
import { Link } from './Link'
import { RandomColorizedTag } from './Tag'

type Props = BlogItemNode

export const BlogCard: React.FC<Props> = ({
  frontmatter,
  fields,
  excerpt,
  timeToRead,
}) => {
  const title = frontmatter.title || fields.slug
  const categories = frontmatter.categories || []
  const { gatsbyImageData } = frontmatter.cover.childImageSharp
  const { t } = useTranslation('global')
  return (
    <StyleContainer>
      <h2>
        <StyledLink to={fields.slug}>{title}</StyledLink>
      </h2>
      <small>
        {aboutReadTime(timeToRead)}
        {categories.map((tag: string) => (
          <RandomColorizedTag key={tag} />
        ))}
      </small>
      <StyledLink to={fields.slug}>
        <GatsbyImage image={gatsbyImageData} alt="cover" />
      </StyledLink>

      <h6>{excerpt}</h6>

      <StyledLink to={fields.slug} className="squiggly">
        {t('label.read_more')}
      </StyledLink>
    </StyleContainer>
  )
}

const StyleContainer = s(Layout)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.1s;
  margin: 10px 0px 25px 0px;
`

const StyledLink = s(Link)`
    box-shadow: none;
`
