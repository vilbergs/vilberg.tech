/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Logo = props => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "signature.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.logo.childImageSharp.fluid} {...props} />
}

export default Logo
