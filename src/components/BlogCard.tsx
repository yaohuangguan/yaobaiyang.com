import type { BlogItemNode } from '@hooks/useBlogs'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import s from 'styled-components'
import { Link } from './Link'

type Props = BlogItemNode

export const BlogCard: React.FC<Props> = ({
  frontmatter,
  fields,
  children,
}) => {
  const title = frontmatter.title || fields.slug
  const imageAuthor = frontmatter.coverAuthor
  const { fluid } = frontmatter.cover.childImageSharp

  return (
    <StyledCardWrapper>
      <StaticImage src={fluid.srcWebp} alt="cover" />
      {title}
      {imageAuthor}
      <StyleH2>
        <StyledLink to={fields.slug}>{title}</StyledLink>
      </StyleH2>
      {children}
    </StyledCardWrapper>
  )
}

const StyledCardWrapper = s.div`
    width: 350px;
    display: flex;
`

const StyleH2 = s.h2`
    margin-bottom: 0,
`

const StyledLink = s(Link)`
    box-shadow: none
`
