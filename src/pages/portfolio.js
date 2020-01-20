/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'

const body = css`
  grid-column: 2 / 12;
  grid-row: 2;
`

const gallery = css`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-auto-flow: dense;

  .landscape {
    grid-column: span 2;
  }

  .portrait {
    grid-row: span 2;
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
        <div css={gallery}>
          {data.portfolio.edges.map(image => (
            <div
              key={image.node.id}
              className={
                image.node.childImageSharp.fluid.aspectRatio > 1
                  ? 'landscape'
                  : 'portrait'
              }
            >
              <Img loading="eager" fluid={image.node.childImageSharp.fluid} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Portfolio
