/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import Heading from '../components/Heading'
import SEO from '../components/Seo'
import Card from '../components/Card'

const blogListItem = css`
  margin-bottom: 15px;
`

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => node)

  return (
    <Layout>
      <SEO title="Blog" />
      <Heading>Recent posts</Heading>
      {posts.map(({ frontmatter, id, html }, index) => (
        <Card key={id} css={blogListItem}>
          {index === 0 && (
            <Link to={frontmatter.path}>
              <Img fluid={frontmatter.mobileImage.childImageSharp.fluid} />
            </Link>
          )}
          <Link to={frontmatter.path}>
            <h2>{frontmatter.title}</h2>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: summarizeContent(html) }} />
          <Link to={frontmatter.path}>Read more...</Link>
        </Card>
      ))}
    </Layout>
  )
}

export default Blog

function summarizeContent(content) {
  const maxLength = 200
  const trimmedContent = content.substr(0, maxLength)

  if (content.length < maxLength) {
    return content
  }

  return (
    content.substr(
      0,
      Math.min(trimmedContent.length, trimmedContent.lastIndexOf(' '))
    ) + '...'
  )
}

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
            mobileImage {
              childImageSharp {
                fluid(maxWidth: 1080) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
