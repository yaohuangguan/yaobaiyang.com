import { Tag } from '@arco-design/web-react'
import React from 'react'

const COLORS_CUSTOM = [
  '#f53f3f',
  '#7816ff',
  '#00b42a',
  '#165dff',
  '#ff7d00',
  '#eb0aa4',
  '#7bc616',
  '#86909c',
  '#b71de8',
  '#0fc6c2',
  '#ffb400',
  '#168cff',
  '#ff5722',
]

export const RandomColorizedTag: React.FC = ({ children }) => {
  const color = COLORS_CUSTOM[Math.floor(Math.random() * COLORS_CUSTOM.length)]

  return <Tag color={color}>{children}</Tag>
}
