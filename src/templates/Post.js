/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Heading from '../components/Heading'
import { withSize } from 'react-sizeme'
import SplitScreen from '../components/SplitScreen'

const splitscreen = css`
  grid-column: 4 / 10;
  grid-row: 1 / 3;
  z-index: 10;
  padding-top: 66.66%;
  margin-top: 100px;

  @media (max-width: 43.75em) {
    grid-column: 2 / 12;
  }
`

const postContainer = css`
  margin-top: 50px;
  grid-column: 4 / 10;

  @media (max-width: 43.75em) {
    grid-column: 2 / 12;
  }
`

const Template = ({ data, size }) => {
  const { markdownRemark: post } = data
  const featuredImage = post.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout
      css={css`
        grid-template-rows: auto;
      `}
    >
      <SplitScreen css={splitscreen} fluid={featuredImage} />
      <div css={postContainer}>
        <Heading>{post.frontmatter.title}</Heading>
        <content dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export default withSize()(Template)
export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
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
`
