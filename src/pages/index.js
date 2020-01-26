/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import Background from '../components/Background'
import Heading from '../components/Heading'
import SplitScreen from '../components/SplitScreen'
import Card from '../components/Card'
import SubHeading from '../components/SubHeading'

const hero = css`
  grid-column: 1 / -1;
  grid-row: 1;
  height: 100vh;

  @media (max-width: 43.75em) {
    height: 30vh;
  }
`

const splitscreen = css`
  grid-column: 2 / 12;
  grid-row: 1 / 3;
  z-index: 10;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 10em;
    color: rgba(0, 0, 0, 0.8);
    user-select: none;

    &::first-letter {
      font-size: 1.2em;
    }
  }

  h2 {
    padding-right: 2em;
    margin-bottom: -10px;
    margin-bottom: 150px;
    user-select: none;
    &::after {
      content: '';
      display: block;
      padding-bottom: 30px;
      width: 50%;
      border-bottom: 10px solid #7a614c;
    }
  }

  @media (max-width: 43.75em) {
    h1 {
      font-size: 6em;
      color: rgba(0, 0, 0, 0.8);
    }

    h2 {
      padding-left: 0.5em;
      margin-bottom: -10px;
      margin-bottom: 150px;

      &::after {
        content: '';
        display: block;
        padding-bottom: 30px;
        width: 50%;
        border-bottom: 10px solid #7a614c;
      }
    }
  }
`
const headshot = css`
  grid-column: 3 / 6;
  grid-row: 2 / 4;
  z-index: 15;
  margin-top: -30px;

  @media (max-width: 43.75em) {
    grid-column: 1 / 10;
    grid-row: 2 / 5;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`
const bio = css`
  grid-column: 6 / 12;
  z-index: 15;
  padding: 30px;

  p {
    line-height: 1.7;
    font-size: 112, 5%;
  }

  @media (max-width: 43.75em) {
    grid-column: 1 / -1;
    grid-row: 6;
    padding: 0 30px;
  }
`

const recentPostsHeading = css`
  grid-column: 3 / 7;
  grid-row: 4;
  z-index: 15;
  margin-top: 50px;
  margin-bottom: 15px;

  @media (max-width: 43.75em) {
    grid-column: 2 / 12;
    grid-row: 7;
  }
`
const newestPost = css`
  grid-column: 3 / 6;
  grid-row: 5;

  @media (max-width: 43.75em) {
    grid-column: 2 / 12;
    grid-row: 8;
  }
`
const firstRecentPost = css`
  grid-column: 6 / 9;
  grid-row: 5;

  @media (max-width: 43.75em) {
    grid-column: 2 / 12;
    grid-row: 9;
  }
`
const secondRecentPost = css`
  grid-column: 9 / 12;
  grid-row: 5;

  @media (max-width: 43.75em) {
    grid-column: 2 / 12;
    grid-row: 10;
  }
`

const nopostsfallback = css`
  grid-column: 6 / 12;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 43.75em) {
    display: none;
  }
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      site {
        siteMetadata {
          title
        }
      }
      clouds: file(relativePath: { eq: "clouds.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bg: file(relativePath: { eq: "bg.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      headshot: file(relativePath: { eq: "headshot.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      recentPosts: allMarkdownRemark(
        limit: 3
        sort: { order: ASC, fields: frontmatter___date }
      ) {
        edges {
          node {
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
      }
    }
  `)

  const [firstPost, secondPost, thirdPost] = data.recentPosts.edges

  return (
    <Layout
      containerOptions={{
        gridTemplateRows: 'auto 100px 350px auto 1fr 100px',
        mobileGridTemplateRows: 'auto 100px 100px 150px auto 1fr auto auto ',
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <Background css={hero} fluid={data.clouds.childImageSharp.fluid} />
      <SplitScreen css={splitscreen} fluid={data.bg.childImageSharp.fluid}>
        <Heading>Vilberg</Heading>
        <SubHeading>Developer / Photographer</SubHeading>
      </SplitScreen>
      <SplitScreen css={headshot} fluid={data.headshot.childImageSharp.fluid} />
      <div css={bio}>
        <p>
          Welcome to my site, a platform where I showcase photos from my
          adventures and share my thoughts on the various subjects that cross my
          mind.
        </p>
        <p>
          I am born and raised in Iceland but currently live in Sweden where I
          work fulltime as a developer. I've always wanted a space where I can
          reflect on and solidify my half-baked ideas about everything from tech
          to philosophy.
        </p>
        <p>
          May you find joy in flicking through my pics, blog posts or whatever
          else that might end up here.
        </p>
      </div>

      <Heading css={recentPostsHeading}>Recent posts</Heading>
      <Card
        to={firstPost.node.frontmatter.path}
        css={newestPost}
        image={firstPost.node.frontmatter.featuredImage.childImageSharp.fluid}
      >
        {firstPost.node.frontmatter.title}
      </Card>
      {secondPost ? (
        <Card
          to={secondPost.node.frontmatter.path}
          css={firstRecentPost}
          image={
            secondPost.node.frontmatter.featuredImage.childImageSharp.fluid
          }
        >
          {secondPost.node.frontmatter.title}
        </Card>
      ) : (
        <p css={nopostsfallback}> More posts coming soon!</p>
      )}
      {thirdPost && (
        <Card
          to={thirdPost.node.frontmatter.path}
          css={secondRecentPost}
          image={thirdPost.node.frontmatter.featuredImage.childImageSharp.fluid}
        >
          {thirdPost.node.frontmatter.title}
        </Card>
      )}
    </Layout>
  )
}

export default IndexPage
