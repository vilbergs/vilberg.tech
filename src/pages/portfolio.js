/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'
import gcd from 'gcd'
import Layout from '../components/layout'
import BackgroundImage from 'gatsby-background-image'

const body = css`
  grid-column: 2 / 12;
  grid-row: 2;

  p {
    text-align: center;
  }
`

const background = css`
  background-position: top center;
  background-repeat: repeat-y;
  background-size: cover;
`

const gallery = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-auto-flow: dense;
  grid-gap: 5px;
`

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query PortfolioQuery {
      portfolio: allFile(filter: { relativeDirectory: { eq: "portfolio" } }) {
        edges {
          node {
            id
            childImageSharp {
              id
              fluid(maxHeight: 1350) {
                ...GatsbyImageSharpFluid
                presentationWidth
                presentationHeight
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div css={body}>
        <p>
          This page is a work in progress, but please enjoy these shots while
          I'm at it!
        </p>
        <div css={gallery}>
          {data.portfolio.edges.map(image => (
            <BackgroundImage
              key={image.node.id}
              Tag="div"
              backgroundColor={`#040e18`}
              css={[
                background,
                spanByAspectRatio(
                  image.node.childImageSharp.fluid.presentationWidth,
                  image.node.childImageSharp.fluid.presentationHeight
                ),
              ]}
              key={image.node.id}
              fluid={image.node.childImageSharp.fluid}
            >
              <div style={{}}>overlay</div>
            </BackgroundImage>
          ))}
        </div>
      </div>
    </Layout>
  )
}

function spanByAspectRatio(width, height) {
  const greatest = gcd(width, height)

  let cols = width / greatest
  let rows = height / greatest

  if (cols === rows) {
    cols = Math.floor(Math.random() * 4)
    rows = Math.floor(Math.random() * 4)

    cols = cols === 0 ? 1 : cols
    rows = rows === 0 ? 1 : rows
  }

  return css`
    grid-column: span ${cols * Math.floor(Math.random() * 2)};
    grid-row: span ${rows * Math.floor(Math.random() * 2)};
  `
}

export default Portfolio
