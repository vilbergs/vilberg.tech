/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'
import gcd from 'gcd'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

const body = css`
  grid-column: 2 / 12;
  grid-row: 2;

  p {
    text-align: center;
  }
`

const gallery = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-auto-flow: dense;
  grid-auto-rows: 100px;
  grid-gap: 5px;
  .portrait {
  }
`

const imageStyle = css`
  object-fit: cover;
  width: 100%;
  max-height: 100%;
`

const overlay = image => css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &:hover {
    background-color: blue;
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
            // <div
            // style={{
            //   position: 'relative',
            // ...spanByAspectRatio(
            //   image.node.childImageSharp.fluid.presentationWidth,
            //   image.node.childImageSharp.fluid.presentationHeight
            // ),
            // }}
            // >
            //   <Img

            //     imgStyle={{ objectFit: 'cover' }}
            //     key={image.node.id}
            //     loading="lazy"
            //     fluid={image.node.childImageSharp.fluid}
            //   >
            //
            //   </Img>
            // </div>

            // <BackgroundImage
            //   key={image.node.childImageSharp.id}
            //   Tag="div"
            //   fluid={image.node.childImageSharp.fluid}
            //   css={spanByAspectRatio(
            //     image.node.childImageSharp.fluid.presentationWidth,
            //     image.node.childImageSharp.fluid.presentationHeight
            //   )}
            // >
            //   <div css={overlay(image.node.childImageSharp.fluid)}>overlay</div>
            // </BackgroundImage>

            <div
              css={spanByAspectRatio(
                image.node.childImageSharp.fluid.presentationWidth,
                image.node.childImageSharp.fluid.presentationHeight
              )}
            >
              <img
                css={imageStyle}
                src={image.node.childImageSharp.fluid.src}
              ></img>
              <div css={overlay}>overlay</div>
            </div>
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
    const rand = Math.floor(Math.random() * 4)
    cols = rand
    rows = rand

    cols = cols === 0 ? 1 : cols
    rows = rows === 0 ? 1 : rows
  }

  return css`
    position: relative;
    grid-column: span ${cols};
    grid-row: span ${rows};
  `
}

export default Portfolio
