import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => node)

  console.log(posts)

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Hi from the blog</h1>
      <p>Welcome to my blog!</p>

      <ul>
        {posts.map(({ frontmatter, id }) => (
          <li key={id}>
            <Link to={frontmatter.path}>
              {frontmatter.title} - {frontmatter.date}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Blog

export const recentPostsQuery = graphql`
  query RecentBlogPosts {
    allMarkdownRemark(
      limit: 5
      sort: { order: ASC, fields: frontmatter___date }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`
