import { Link as GLink } from 'gatsby'
import React from 'react'

type Props = {
  to: string
}

export const Link: React.FC<Props> = ({ ...props }) => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <GLink {...props} />
)
