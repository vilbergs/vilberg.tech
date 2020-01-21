/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'
import gcd from 'gcd'
import Layout from '../components/layout'
import Img from 'gatsby-image'

const body = css`
  grid-column: 2 / 12;
  grid-row: 2;

  p {
    text-align: center;
  }
`

const gallery = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-auto-flow: dense;
  grid-gap: 5px;
  .portrait {
  }
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
            <Img
              key={image.node.id}
              style={spanByAspectRatio(
                image.node.childImageSharp.fluid.presentationWidth,
                image.node.childImageSharp.fluid.presentationHeight
              )}
              loading="lazy"
              fluid={image.node.childImageSharp.fluid}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

function spanByAspectRatio(width, height) {
  const greatest = gcd(width, height)

  console.log({
    gridColumn: `span ${width / greatest}`,
    gridRow: `span ${height / greatest}`,
  })

  let cols = width / greatest
  let rows = height / greatest

  if (cols === rows) {
    cols = Math.floor(Math.random() * 4)
    rows = Math.floor(Math.random() * 4)

    cols = cols === 0 ? 1 : cols
    rows = rows === 0 ? 1 : rows
  }

  return {
    gridColumn: `span ${cols * Math.floor(Math.random() * 2)}`,
    gridRow: `span ${rows * Math.floor(Math.random() * 2)}`,
  }
}

export default Portfolio
