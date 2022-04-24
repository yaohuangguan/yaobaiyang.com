import { PageHeader, Button, Tag } from '@arco-design/web-react'
import React from 'react'

type Props = {
  title: string
  description: string
}

export const BlogPostHeader: React.FC<Props> = ({
  title,
  description,
  children,
}) => {
  const onBack = () => {}

  return (
    <PageHeader
      title={title}
      subTitle={<>{description}</>}
      backIcon
      onBack={onBack}
    >
      {children}
    </PageHeader>
  )
}
