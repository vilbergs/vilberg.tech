/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { typography } from '../components/layout'
import Background from '../components/Background'
import Heading from '../components/Heading'
import SplitScreen from '../components/SplitScreen'
import Card from '../components/Card'
import SubHeading from '../components/SubHeading'
import { Facebook, Instagram, Twitter } from '../components/Social'

const container = css`
  display: grid;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto 100px 350px auto 1fr 50px 50px 100px;

  @media (max-width: 43.75em) {
    grid-template-rows: auto 100px 100px 150px auto 1fr auto auto auto auto 50px;
  }
`
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
  }

  h2 {
    padding-right: 2em;
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

  @media (max-width: 43.75em) {
    grid-column: 1 / -1;
    grid-row: 6;
    padding: 0 30px;
  }
`
const social = css`
  grid-column: 6 / 12;
  z-index: 15;
  padding: 30px;

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
const footer = css`
  grid-column: 1 / -1;
  grid-row: 8;
  padding: 50px 0;
  margin-top: -15px;
  background-color: #575757;

  @media (max-width: 43.75em) {
    grid-row: 12;
  }
`
const navigation = css`
  grid-column: 3 / 11;
  grid-row: 1;
  z-index: 16;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  height: 100px;
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;

    li {
      display: inline;
      padding: 0 15px;
      font-family: Scope One;
      color: rgb(0, 0, 0, 0.87);
      font-size: 1.6em;
      font-weight: 500;
      text-align: center;

      @media (min-width: 43.75em) {
      }

      &:first-of-type {
        border-left: none;
      }

      a {
        color: inherit;
      }
    }
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

  console.log(thirdPost.node.frontmatter)
  return (
    <div css={[container, typography]}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <Background css={hero} fluid={data.clouds.childImageSharp.fluid} />
      <div css={navigation}>
        <SubHeading
          css={css`
            margin: 0;
          `}
        >
          V
        </SubHeading>
        <ul>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            {' '}
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
        <SubHeading
          css={css`
            margin: 0;
          `}
        >
          S
        </SubHeading>
      </div>
      <SplitScreen css={splitscreen} fluid={data.bg.childImageSharp.fluid}>
        <Heading>Vilberg</Heading>
        <SubHeading>Developer / Photographer</SubHeading>
      </SplitScreen>
      <SplitScreen css={headshot} fluid={data.headshot.childImageSharp.fluid} />
      <div css={bio}>
        <p>
          Non esse labore laboris reprehenderit fugiat nulla officia magna
          dolore esse nulla do. Labore aliqua consequat duis velit cillum minim
          ullamco sunt id. Labore non pariatur esse anim quis nulla laboris
          consequat eu esse nulla. Esse irure duis ea nostrud. Esse labore nulla
          excepteur adipisicing ad irure nostrud ad proident laboris nisi.
          Aliqua officia consectetur laboris ipsum exercitation aliqua proident
          anim nulla.
        </p>
      </div>

      <div css={social}>
        <Facebook />
        <Instagram />
        <Twitter />
      </div>

      <Heading css={recentPostsHeading}>Recent posts</Heading>
      <Card
        to={firstPost.node.frontmatter.path}
        css={newestPost}
        image={firstPost.node.frontmatter.featuredImage.childImageSharp.fluid}
      >
        {firstPost.node.frontmatter.title}
      </Card>
      <Card
        to={secondPost.node.frontmatter.path}
        css={firstRecentPost}
        image={secondPost.node.frontmatter.featuredImage.childImageSharp.fluid}
      >
        {secondPost.node.frontmatter.title}
      </Card>
      <Card
        to={thirdPost.node.frontmatter.path}
        css={secondRecentPost}
        image={thirdPost.node.frontmatter.featuredImage.childImageSharp.fluid}
      >
        {thirdPost.node.frontmatter.title}
      </Card>
      <div
        css={css`
          grid-column: 1 / -1;
          grid-row: 7;
          z-index: 10;
          background-color: #ffffff;
          box-shadow: 0 49px 28px rgba(0, 0, 0, 0.3),
            0 35px 22px rgba(0, 0, 0, 0.22);

          @media (max-width: 43.75em) {
            grid-row: 11;
          }
        `}
      ></div>
      <footer css={footer}></footer>
    </div>
  )
}

export default IndexPage
