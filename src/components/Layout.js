/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import 'normalize.css'
import Link from '../components/Link'
import 'typeface-roboto'
import 'typeface-scope-one'
import { LinkedIn, Instagram, GitHub } from '../components/Social'

const breakpoints = [600, 900, 1200]

export const phone = `@media (max-width: ${599}px)`

export const [tabletPortrait, tabletLandscape, desktop] = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

const typography = css`
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

  ul,
  h3,
  h4,
  h5,
  h6,
  p {
    font-family: Roboto;
    -webkit-font-smoothing: antialiased;
  }

  p {
    line-height: 1.7;
  }

  font-size: 1em;
  /* equivalent to 16px */
  line-height: 112.5%;

  ${desktop} {
    font-size: 112.5%;

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

  ${desktop} {
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

  ${desktop} {
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

  ${desktop} {
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

  ${desktop} {
    blockquote {
      font-size: 1.5em;
      /* 24px / 16px = */
      line-height: 1.45833333;
      /* 35px / 24px */
    }
  }
`

const container = (
  options = {
    gridTemplateRows: 'auto 1fr auto',
    mobileGridTemplateRows: 'auto 1fr auto',
  }
) => css`
  display: grid;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: ${options.gridTemplateRows};
  max-width: 100%;

  ${phone} {
    grid-template-rows: ${options.mobileGridTemplateRows};
  }
`

const navigation = css`
  grid-column: 2 / 12;
  grid-row: 1;
  z-index: 16;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  height: 100px;

  ${tabletPortrait} {
    grid-column: 2 / 12;
  }

  h2 {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;

    ${phone} {
      margin: 0 auto;
    }

    li {
      display: inline;
      padding: 0 15px;
      color: rgb(0, 0, 0, 0.87);
      font-size: 1.5em;
      font-weight: 500;
      text-align: center;

      &:first-of-type {
        border-left: none;
      }

      .active {
        border-bottom: 3px solid #7a614c;
      }

      a {
        font-family: Scope One;
        text-decoration: none;

        color: inherit;

        ${phone} {
          text-align: center;
        }
      }
    }
  }
`

const navSocialMedia = css`
  ${phone} {
    display: none;
  }
`

const footer = css`
  grid-column: 1 / -1;
  grid-row: -1;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #707070;

  padding: 50px 0;
  margin-top: -15px;

  a {
    color: inherit;

    &:last-child {
      margin: 0;
    }
  }
`

const Layout = ({ containerOptions, children }) => (
  <div css={[container(containerOptions), typography]}>
    <div css={[typography, navigation]}>
      <ul>
        <li>
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/blog" activeClassName="active" partiallyActive>
            Blog
          </Link>
        </li>
        <li>
          <Link to="/portfolio" activeClassName="active">
            Portfolio
          </Link>
        </li>
      </ul>
      <div css={navSocialMedia}>
        <LinkedIn />
        <Instagram />
        <GitHub />
      </div>
    </div>

    {children}
    <footer css={footer}>
      <div>
        <LinkedIn />
        <Instagram />
        <GitHub />
      </div>
      <p>
        All rights reserved © {new Date().getFullYear()} • Vilberg Sindri •{' '}
        <a href="mailto:vilbergs@gmail.com">vilbergs@gmail.com</a>
      </p>
    </footer>
  </div>
)

export default Layout
