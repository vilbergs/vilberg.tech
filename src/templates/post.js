/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Heading from '../components/Heading'
import { withSize } from 'react-sizeme'

const postContainer = css`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    '.'
    'i'
    'p';

  @media (min-width: 70em) {
    grid-column-gap: 10px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      '. .'
      'i p';
  }
`

const image = css`
  grid-area: i;
`

const content = css`
  grid-area: p;
  padding: 10px;
`

const Template = ({ data, size }) => {
  console.log(data)
  const { markdownRemark: post } = data
  const featuredImage = post.frontmatter.featuredImage.childImageSharp.fluid
  const mobileImage = post.frontmatter.mobileImage.childImageSharp.fluid

  return (
    <Layout>
      <div css={postContainer}>
        <Heading>{post.frontmatter.title}</Heading>
        <Img
          css={image}
          fluid={size.width < 1100 ? mobileImage : featuredImage}
        />
        <content
          css={content}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
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
`
