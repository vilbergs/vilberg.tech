/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'
import Layout, {
  phone,
  tabletPortrait,
  tabletLandscape,
  desktop,
} from '../components/Layout'
import Background from '../components/Background'
import Heading from '../components/Heading'
import SplitScreen from '../components/SplitScreen'
import Card from '../components/Card'
import SubHeading from '../components/SubHeading'

import { LinkedIn, Instagram, GitHub } from '../components/Social'

const hero = css`
  grid-column: 1 / -1;
  grid-row: 1;
  height: calc(100vw * (9 / 16));
`

const splitscreen = css`
  grid-row: 1 / 3;
  z-index: 10;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${phone} {
    grid-column: 1 / -1;
    h1 {
      font-size: 5em;
      color: rgba(0, 0, 0, 0.8);
    }

    h2 {
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

  ${tabletPortrait} {
    grid-column: 1 / -1;
    h1 {
      font-size: 5em;
      color: rgba(0, 0, 0, 0.8);
    }

    h2 {
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

  ${tabletLandscape} {
    grid-column: 2 / 12;

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
  }
`
const headshot = css`
  z-index: 15;

  ${phone} {
    grid-column: 1 / 10;
    grid-row: 2 / 4;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  ${tabletPortrait} {
    grid-column: 1 / 6;
    grid-row: 2 / 4;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    margin-top: -40px;
  }

  ${tabletLandscape} {
    grid-column: 3 / 7;

    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  ${desktop} {
    grid-column: 3 / 6;
    grid-row: 2 / 4;
  }
`

const navSocialMedia = css`
  display: none;

  ${phone} {
    display: block;
    grid-column: 10 / -1;
    grid-row: 3 / 4;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    svg {
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
    }

    a {
      position: relative;
      height: 0;
      width: 50%;
      padding: 0;
      padding-bottom: 100%;
    }
  }
`

const bio = css`
  z-index: 15;
  padding: 30px;
  margin-top: 50px;

  h2 {
    line-height: 1.5;
    color: hsla(0, 0%, 0%, 0.7);
    font-weight: 900;
  }

  ${phone} {
    grid-column: 1 / -1;
    grid-row: 4;
  }

  ${tabletPortrait} {
    grid-column: 6 / 12;
    grid-row: 3;
    padding: 0;
    padding-left: 30px;
  }

  ${tabletLandscape} {
    grid-column: 7 / 12;
  }

  ${desktop} {
    grid-column: 6 / 12;
  }
`

const recentPostsHeading = css`
  ${phone} {
    padding: 0;
    grid-column: 2 / 12;
    grid-row: auto;
  }

  ${tabletPortrait} {
    margin-top: 60px;
    grid-column: 2 / 12;
    grid-row: 4;
  }

  ${desktop} {
    grid-column: 3 / 12;
    padding: 30px 0;
  }
`
const newestPost = css`
  ${phone} {
    grid-column: 2 / 12;
    grid-row: auto;
  }

  ${tabletPortrait} {
    grid-column: 2 / 12;
    grid-row: 5;
  }

  ${desktop} {
    grid-column: 3 / 6;
  }
`
const firstRecentPost = css`
  grid-row: 6;

  ${phone} {
    grid-column: 2 / 12;
  }

  ${tabletPortrait} {
    grid-column: 2 / 7;
  }

  ${desktop} {
    grid-column: 6 / 9;
    grid-row: 5;
  }
`
const secondRecentPost = css`
  grid-row: auto;

  ${phone} {
    grid-column: 2 / 12;
  }

  ${tabletPortrait} {
    grid-column: 7 / 12;
  }

  ${desktop} {
    grid-column: 9 / 12;
    grid-row: 5;
  }
`

const nopostsfallback = css`
  display: flex;
  justify-content: center;
  align-items: center;

  ${phone} {
    display: none;
  }

  ${tabletPortrait} {
    grid-column: 2 / 12;
    grid-row: 5;
  }

  ${desktop} {
    grid-column: 6 / 12;
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
      title="Home"
      containerOptions={{
        gridTemplateRows: 'auto 100px 350px auto 1fr auto 100px',
        mobileGridTemplateRows: 'auto 100px 350px auto auto auto auto auto',
      }}
    >
      <Background css={hero} fluid={data.clouds.childImageSharp.fluid} />
      <SplitScreen
        css={splitscreen}
        fluid={data.bg.childImageSharp.fluid}
        border={false}
      >
        <Heading>Vilberg</Heading>
        <SubHeading>Developer / Photographer</SubHeading>
      </SplitScreen>
      <SplitScreen css={headshot} fluid={data.headshot.childImageSharp.fluid} />

      <div css={navSocialMedia}>
        <LinkedIn color="#7a614c" />
        <Instagram color="#7a614c" />
        <GitHub color="#7a614c" />
      </div>
      <div css={bio}>
        <SubHeading>Hi!</SubHeading>
        <SubHeading>
          I built this site to showcase my stuff and brag about it!
        </SubHeading>
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
