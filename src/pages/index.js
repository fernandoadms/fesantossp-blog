import * as React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PostItem from '../components/PostItem'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Home' />
      
      <PostItem />
    </Layout>
  )
}

export default IndexPage
