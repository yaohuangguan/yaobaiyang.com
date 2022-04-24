import * as React from 'react'
import { Link } from './link'
import s from 'styled-components'
import { Grid, Space } from '@arco-design/web-react'
import { LanguageSelector } from './language-selector'
import { DarkmodeToggler } from './darkmode-toggler'
import { useTranslation } from 'react-i18next'

const { Row, Col } = Grid

type Props = {
  siteTitle: string
}

const Header: React.FC<Props> = ({ siteTitle }) => {
  const { t } = useTranslation('global')
  const isRootPath =
    typeof window !== 'undefined' && window.location.pathname === '/'

  return (
    <StyledHeader>
      <Col flex="auto">
        <BrandTitle>
          <StyledLink className="title" to="/">
            {siteTitle}
          </StyledLink>
        </BrandTitle>
      </Col>
      {isRootPath && (
        <Col flex="230px">
          <Space>
            <StyledLink to="/">{t('label.blogs')}</StyledLink>
            <StyledLink to="/about">{t('label.about')}</StyledLink>
            <LanguageSelector />
            <DarkmodeToggler />
          </Space>
        </Col>
      )}
    </StyledHeader>
  )
}

const StyledHeader = s(Row)`
    padding: 50px;
`

const BrandTitle = s.h2`
    margin: 0;
`

const StyledLink = s(Link)`
    text-decoration: none;
    font-size: 19px;
`

export default Header
