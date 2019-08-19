import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const PostWrapper = styled.div`
  grid-area: p;
`

export default function Template({ data }) {
  const { markdownRemark: post } = data
  const featuredImage = post.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <PostWrapper>
      <Img fluid={featuredImage} />
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </PostWrapper>
  )
}

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
