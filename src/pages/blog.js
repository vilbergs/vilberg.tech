/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Heading from '../components/Heading'
import SEO from '../components/Seo'
import Card from '../components/Card'

const body = css`
  grid-column: 4 / 10;
  grid-row: 2;
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
  console.log(posts)
  return (
    <Layout>
      <SEO title="Blog" />
      <main css={body}>
        {posts.map(({ frontmatter, id, excerpt }, index) => (
          <div css={blogListItem}>
            <Card
              key={id}
              image={frontmatter.featuredImage.childImageSharp.fluid}
              to={frontmatter.path}
            ></Card>
            <section css={postExcerpt}>
              <Heading>{frontmatter.title}</Heading>

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
