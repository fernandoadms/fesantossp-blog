import * as React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PostItem from '../components/PostItem'

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark {
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
  `)

  const postList = allMarkdownRemark.edges
  
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

export default IndexPage
