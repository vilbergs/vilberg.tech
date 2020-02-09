/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useState, useLayoutEffect, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import BackgroundImage from 'gatsby-background-image'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css' // This only needs to be imported once in your app

const IMAGE_WIDTH = 33.33333333333333
const IMAGE_MARGIN = 2.5

// TODO: Make layoutEffect use on resize and update height when needed
const body = height => css`
  grid-column: 2 / 12;
  grid-row: 2;
  display: flex;
  flex-flow: column wrap;
  align-items: stretch;

  height: ${height}px;
`

const overlay = css`
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
  transition: all 0.5s;
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
  const bodyRef = useRef(null)

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

  const handleLightboxClose = () => {
    setLightboxOpen(open => !open)
  }

  const imageAtIndex = index =>
    data.portfolio.edges[index].node.childImageSharp.fluid.src

  const nextIndex = (activePhoto + 1) % data.portfolio.edges.length

  const previousIndex =
    (activePhoto + data.portfolio.edges.length - 1) %
    data.portfolio.edges.length

  const totalHeight = useTotalHeight(data.portfolio.edges, bodyRef.current)

  return (
    <Layout>
      <div css={body(totalHeight)} ref={bodyRef}>
        {data.portfolio.edges.map((image, index) => (
          <BackgroundImage
            key={image.node.childImageSharp.id}
            Tag="div"
            fluid={image.node.childImageSharp.fluid}
            css={spanByAspectRatio(
              image.node.childImageSharp.fluid.aspectRatio
            )}
          >
            <div onClick={() => handleLightboxOpen(index)} css={overlay}>
              Open
            </div>
          </BackgroundImage>
        ))}
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

function spanByAspectRatio(ratio) {
  return css`
    position: relative;
    width: ${IMAGE_WIDTH}%;
    padding-top: ${IMAGE_WIDTH / ratio}%;
    margin: ${IMAGE_MARGIN}px;
  `
}

function useTotalHeight(images, ref) {
  const imageSizeFactor = IMAGE_WIDTH / 100
  const margin = IMAGE_MARGIN * 2

  const [height, setHeight] = useState(0)
  useLayoutEffect(() => {
    function updateSize() {
      const width = ref ? ref.clientWidth : window.innerWidth

      const newHeight = images.reduce(
        (totalHeight, image) =>
          totalHeight +
          (width * imageSizeFactor + margin) /
            image.node.childImageSharp.fluid.aspectRatio,
        0
      )

      setHeight(newHeight / 3)
    }
    window.addEventListener('resize', updateSize)
    updateSize()

    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return height
}
export default Portfolio
