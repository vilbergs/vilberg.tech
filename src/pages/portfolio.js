/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import gcd from 'gcd'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css' // This only needs to be imported once in your app

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
  grid-gap: 5px;
  grid-auto-flow: dense;
  grid-auto-rows: 150px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #ffffff;
  opacity: 0;
  transition: all 0.6s;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
    opacity: 1;
  }
`

const Portfolio = () => {
  const [activePhoto, setActivePhoto] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

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

  const handleLightboxOpen = index => {
    setActivePhoto(index)
    setLightboxOpen(open => !open)
  }

  const handleLightboxClose = index => {
    setLightboxOpen(open => !open)
  }

  const imageAtIndex = index =>
    data.portfolio.edges[index].node.childImageSharp.fluid.src

  const nextIndex = (activePhoto + 1) % data.portfolio.edges.length
  const previousIndex =
    (activePhoto + data.portfolio.edges.length - 1) %
    data.portfolio.edges.length

  return (
    <Layout>
      <div css={body}>
        <p>
          This page is a work in progress, but please enjoy these shots while
          I'm at it!
        </p>
        <div css={gallery}>
          {data.portfolio.edges.map((image, index) => (
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

            <BackgroundImage
              key={image.node.childImageSharp.id}
              Tag="div"
              fluid={image.node.childImageSharp.fluid}
              css={spanByAspectRatio(
                image.node.childImageSharp.fluid.presentationWidth,
                image.node.childImageSharp.fluid.presentationHeight
              )}
            >
              <div
                onClick={() => handleLightboxOpen(index)}
                css={overlay(image.node.childImageSharp.fluid)}
              >
                Open
              </div>
            </BackgroundImage>
          ))}
        </div>
      </div>
      {lightboxOpen ? (
        <Lightbox
          mainSrc={imageAtIndex(activePhoto)}
          nextSrc={imageAtIndex(nextIndex)}
          prevSrc={imageAtIndex(previousIndex)}
          onMoveNextRequest={() => setActivePhoto(nextIndex)}
          onMovePrevRequest={() => setActivePhoto(previousIndex)}
          onCloseRequest={handleLightboxClose}
          enableZoom={false}
        />
      ) : null}
    </Layout>
  )
}

function spanByAspectRatio(width, height) {
  const greatest = gcd(width, height)

  let cols = width / greatest
  let rows = height / greatest

  return css`
    position: relative;
    grid-column: span ${cols};
    grid-row: span ${rows};
  `
}

export default Portfolio
