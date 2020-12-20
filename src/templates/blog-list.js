import React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PostItem from '../components/PostItem'

const BlogList = props => { 
  const postList = props.data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title='Home' />
      {postList.map(({
        node: {
          frontmatter: {
            background,
            category,
            date,
            description,
            title },
          timeToRead,
          fields: {
            slug
          }
        }
      }) => (
        <PostItem
          key={slug}
          background={background}
          slug={slug}
          category={category}
          date={date}
          timeToRead={timeToRead}
          title={title}
          description={description}
        />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC}
      limit: $limit
      skip: $skip
      ) {
      edges {
        node {
          frontmatter {
            background
            category
            description
            title
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
          }
          timeToRead
            fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogList