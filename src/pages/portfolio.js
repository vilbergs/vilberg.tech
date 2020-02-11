/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import BackgroundImage from 'gatsby-background-image'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css' // This only needs to be imported once in your app

const body = css`
  grid-column: 2 / 12;
  grid-row: 2;

  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 43.75em) {
    grid-column: 1 / -1;
  }
`

const imageItem = css`
  position: relative;
  padding-top: 100%;
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

  return (
    <Layout>
      <div css={body}>
        {data.portfolio.edges.map((image, index) => (
          <BackgroundImage
            key={image.node.childImageSharp.id}
            Tag="div"
            fluid={image.node.childImageSharp.fluid}
            css={imageItem}
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

export default Portfolio
