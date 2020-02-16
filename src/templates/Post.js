/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Heading from '../components/Heading'
import SplitScreen from '../components/SplitScreen'

const splitscreen = css`
  grid-column: 3 / 11;
  grid-row: 1 / 3;
  z-index: 10;
  padding-top: 66.66%;
  @media (max-width: 43.75em) {
    grid-column: 2 / 12;
  }
`

const body = css`
  margin-top: 50px;
  grid-column: 3 / 11;
  max-width: 800px;

  p {
    color: rgb(34, 36, 38);
  }

  h2,
  h3 {
    color: hsla(0, 0%, 0%, 0.775);
    margin-top: 3.1rem;
    margin-bottom: 1.55rem;
  }

  @media (max-width: 43.75em) {
    grid-column: 2 / 12;
  }
`

const postContainer = css`
  margin-top: 5rem;
`

const Template = ({ data }) => {
  const { markdownRemark: post } = data
  const featuredImage = post.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout
      css={css`
        grid-template-rows: auto;
      `}
    >
      <div css={body}>
        <SplitScreen css={splitscreen} fluid={featuredImage} />
        <div css={postContainer}>
          <Heading>{post.frontmatter.title}</Heading>
          <content dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </Layout>
  )
}

export default Template
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
