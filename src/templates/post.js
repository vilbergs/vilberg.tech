import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Heading from '../components/heading'

const PostContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    '.'
    'i'
    'p';
  grid-column-gap: 10px;

  @media (min-width: 70em) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 'i p';
  }
`

const Image = styled.div`
  grid-area: i;
`

const Post = styled.div`
  grid-area: p;
`

export default function Template({ data }) {
  const { markdownRemark: post } = data
  const featuredImage = post.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout>
      <PostContainer>
        <Heading>{post.frontmatter.title}</Heading>
        <Image>
          <Img fluid={featuredImage} />
        </Image>
        <Post>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Post>
      </PostContainer>
    </Layout>
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
