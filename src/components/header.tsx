import * as React from 'react'
import { Link } from './Link'
import s from 'styled-components'

type Props = {
  siteTitle: string
}

const Header: React.FC<Props> = ({ siteTitle }) => (
  <Container>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <BrandTitle>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </BrandTitle>
    </div>
  </Container>
)

const Container = s.header`
    background: rebeccapurple;
    margin-bottom: 1.45rem;
`

const BrandTitle = s.h3`
    margin: 0;
`

const StyledLink = s(Link)`
    color: white;
    text-decoration: none;
`

export default Header
