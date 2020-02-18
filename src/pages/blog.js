/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Heading from '../components/Heading'
import Card from '../components/Card'
import Link from '../components/Link'

const body = css`
  grid-column: 4 / 10;

  @media (max-width: 43.75em) {
    grid-column: 2 / 12;
  }
`

const blogListItem = css`
  margin-bottom: 15px;
`

const postExcerpt = css`
  padding: 30px 0;

  a {
    font-weight: 700;
    color: #7a614c;
    font-size: 1.1em;
  }
`

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => node)

  return (
    <Layout title="Blog">
      <main css={body}>
        {posts.map(({ frontmatter, id, excerpt }) => (
          <div key={id} css={blogListItem}>
            <Card
              image={frontmatter.featuredImage.childImageSharp.fluid}
              to={frontmatter.path}
            ></Card>
            <section css={postExcerpt}>
              <Link
                style={{ color: 'inherit', textDecoration: 'none' }}
                to={frontmatter.path}
              >
                <Heading>{frontmatter.title}</Heading>
              </Link>

              <p>{excerpt}</p>

              <Link to={frontmatter.path}>Read more...</Link>
            </section>
          </div>
        ))}
      </main>
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
          excerpt
          frontmatter {
            title
            path
            date
            featuredImage {
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
