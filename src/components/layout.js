import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Header from './header'
import 'typeface-roboto'

const Container = styled.div`
  font-family: Roboto;
  background-color: #eeeeee;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: [row1-start] 30% [row1-start] auto;
  grid-template-areas:
    '. h h h h h h h h .'
    '. b b b b b b b b .'
    '. f f f f f f f f .';

  body {
    font-size: 100%;
  }

  body,
  caption,
  th,
  td,
  input,
  textarea,
  select,
  option,
  legend,
  fieldset,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size-adjust: 0.5;
  }

  font-size: 1em;
  /* equivalent to 16px */
  line-height: 1.25;
  /* equivalent to 20px */

  @media (min-width: 43.75em) {
    font-size: 1em;
    /* equivalent to 16px */
    line-height: 1.375;
    /* equivalent to 22px */
  }

  h2 {
    font-size: 1.625em;
    /* 1.625x body copy size = 26px */
    line-height: 1.15384615;
    /* 30px / 26px */
  }

  @media (min-width: 43.75em) {
    h2 {
      font-size: 2em;
      /* 2x body copy size = 32px */
      line-height: 1.25;
    }
  }

  @media (min-width: 56.25em) {
    h2 {
      font-size: 2.25em;
      /* 2.25x body copy size = 36px */
      line-height: 1.25;
    }
  }

  h3 {
    font-size: 1.375em;
    /* 1.375x body copy size = 22px */
    line-height: 1.13636364;
    /* 25px / 22px */
  }

  @media (min-width: 43.75em) {
    h3 {
      font-size: 1.5em;
      /* 1.5x body copy size = 24px */
      line-height: 1.25;
    }
  }

  @media (min-width: 56.25em) {
    h3 {
      font-size: 1.75em;
      /* 1.75x body copy size = 28px */
      line-height: 1.25;
    }
  }

  h4 {
    font-size: 1.125em;
    /* 1.125x body copy size = 18px */
    line-height: 1.11111111;
  }

  @media (min-width: 43.75em) {
    h4 {
      line-height: 1.22222222;
      /* (22px / 18px */
    }
  }

  blockquote {
    font-size: 1.25em;
    /* 20px / 16px */
    line-height: 1.25;
    /* 25px / 20px */
  }

  @media (min-width: 43.75em) {
    blockquote {
      font-size: 1.5em;
      /* 24px / 16px = */
      line-height: 1.45833333;
      /* 35px / 24px */
    }
  }
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
