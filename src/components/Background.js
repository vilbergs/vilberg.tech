/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const background = css`
  background-position: top center;
  background-repeat: repeat-y;
  background-size: cover;
  overflow: hidden;
`

const Background = props => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "bg.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid

      return (
        <BackgroundImage
          Tag="div"
          backgroundColor={`#040e18`}
          css={background}
          {...props}
        >
          {props.children}
        </BackgroundImage>
      )
    }}
  />
)

export default Background
