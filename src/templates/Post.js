/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { graphql } from 'gatsby'
import Markdown from 'react-markdown'
import Layout from '../components/Layout'
import Heading from '../components/Heading'
import SplitScreen from '../components/SplitScreen'
import { format } from 'date-fns'

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

  margin: 0 auto;

  a {
    color: #3f51b5;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
  p,
  ul,
  ol {
    color: rgb(34, 36, 38);
  }

  p {
    line-height: 1.7;
  }

  li {
    padding-bottom: 5px;
    line-height: 1.4;
  }

  h2,
  h3,
  h4 {
    color: hsla(0, 0%, 0%, 0.775);
    margin-top: 3.1rem;
    margin-bottom: 15px;
  }

  @media (max-width: 43.75em) {
    grid-column: 1 / -1;
    padding: 0 20px;
  }
`

const postContainer = css`
  margin-top: 3rem;
`

const Template = ({ data }) => {
  const { markdownRemark: post } = data
  const featuredImage = post.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout
      title={post.frontmatter.title}
      css={css`
        grid-template-rows: auto;
      `}
    >
      <div css={body}>
        <SplitScreen css={splitscreen} fluid={featuredImage} />
        {post.frontmatter.featuredImageCredit ? (
          <Markdown>{post.frontmatter.featuredImageCredit}</Markdown>
        ) : null}
        <div css={postContainer}>
          <Heading>{post.frontmatter.title}</Heading>
          <p
            css={css`
              font-style: italic;
            `}
          >
            {format(new Date(post.frontmatter.date), 'MMMM do y')}
          </p>
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
        date
        featuredImageCredit
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
