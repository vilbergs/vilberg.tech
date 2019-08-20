/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Header from './header'
import 'typeface-roboto'

const Container = styled.div`
  font-family: Roboto;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-areas:
    '. h h h h h h h h .'
    '. b b b b b b b b .'
    '. f f f f f f f f .';
`

const Body = styled.div`
  grid-area: b;
`

const Footer = styled.main`
  grid-area: f;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Body>{children}</Body>
      <Footer></Footer>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
