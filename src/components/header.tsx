import * as React from 'react'
import { Link } from './Link'
import s from 'styled-components'
import { Grid, Space, Menu } from '@arco-design/web-react'
import { LanguageSelector } from './LanguageSelector'
import { DarkmodeToggler } from './DarkmodeToggler'

const { Row, Col } = Grid

type Props = {
  siteTitle: string
}

const Header: React.FC<Props> = ({ siteTitle }) => {
  const isRootPath = window.location.pathname === '/'

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
        <Col flex="100px">
          <Space>
            <LanguageSelector />
            <Menu mode="horizontal" defaultSelectedKeys={['0']}>
              <Menu.Item
                key="0"
                style={{ padding: 0, marginRight: 38 }}
                disabled
              >
                <StyledLink to="/">Blogs</StyledLink>
              </Menu.Item>
              <Menu.Item
                key="1"
                style={{ padding: 0, marginRight: 38 }}
                disabled
              >
                <StyledLink to="/about">About</StyledLink>
              </Menu.Item>
            </Menu>

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

const BrandTitle = s.h3`
    margin: 0;
`

const StyledLink = s(Link)`
    text-decoration: none;
`

export default Header
