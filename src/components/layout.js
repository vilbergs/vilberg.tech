/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Helmet } from 'react-helmet'
import 'normalize.css'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './Header'
import Menu from './Menu'
import Background from '../components/Background'
import 'typeface-roboto'
import 'typeface-scope-one'

const background = '#ff3900'

export const typography = css`
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
    color: rgba(0, 0, 0, 0.87);
  }

  h3,
  h4,
  h5,
  h6,
  p {
    font-family: Roboto;
    -webkit-font-smoothing: antialiased;
  }

  font-size: 1em;
  /* equivalent to 16px */
  line-height: 1.25;
  /* equivalent to 20px */

  @media (min-width: 43.75em) {
    font-size: 1em;
    /* equivalent to 16px */
    line-height: 1.5;
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
    font-weight: 400;
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

const container = ({ background }) => css`
  font-family: Roboto;
  display: grid;
  grid-template-columns: 100px repeat(8, 1fr) 100px;
  grid-template-areas:
    'h h h h h h h h h h'
    'b b b b b b b b b b';

  @media (min-width: 43.75em) {
    grid-template-areas:
      'h h h h h h h h h h'
      '. b b b b b b b b .';
  }
`

const body = css`
  grid-area: b;
  padding: 15px 15px 90px 15px;
`

const mobileMenu = css`
  position: fixed;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  background-color: ${background};
  padding: 10px 0;

  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

  @media (min-width: 43.75em) {
    display: none;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      desktop: file(relativePath: { eq: "bg.jpg" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `)

  return (
    <Background>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <main css={[container, typography]}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <content css={body}>{children}</content>
      </main>
      <Menu css={mobileMenu} />
    </Background>
  )
}

export default Layout
