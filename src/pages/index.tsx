import React from 'react'

import { Layout } from '../components/Layout'
import Seo from '../components/Seo'
import { useSiteMeta } from '@/hooks/useSiteMeta'

import { useBlogs } from '@hooks/useBlogs'
import { BlogCard } from '@components/BlogCard'

const IndexPage = () => {
  const data = useSiteMeta()
  const posts = useBlogs({ isPrivate: false })

  console.log(posts)
  return (
    <Layout>
      <Seo title="Home" />
      {posts.map(({ node }) => (
        <>
          <BlogCard {...node} />
        </>
      ))}
    </Layout>
  )
}

export default IndexPage
