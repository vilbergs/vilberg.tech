/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import 'normalize.css'
import { Link } from 'gatsby'
import 'typeface-roboto'
import 'typeface-scope-one'
import SubHeading from '../components/SubHeading'
import { LinkedIn, Instagram } from '../components/Social'

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

  h3,
  h4,
  h5,
  h6,
  p,
  a {
    font-family: Roboto;
    -webkit-font-smoothing: antialiased;
  }

  font-size: 1em;
  /* equivalent to 16px */
  line-height: 112.5%;

  @media (min-width: 43.75em) {
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

const container = css`
  display: grid;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto 100px 350px auto 1fr 100px;

  @media (max-width: 43.75em) {
    grid-template-rows: auto 100px 100px 150px auto 1fr auto auto auto 50px;
  }
`

const navigation = css`
  grid-column: 3 / 11;
  grid-row: 1;
  z-index: 16;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 0 30px;
  height: 100px;

  ul {
    margin: 0;
    padding: 0;
    padding-left: 100px;
    list-style-type: none;

    li {
      display: inline;
      padding: 0 15px;
      color: rgb(0, 0, 0, 0.87);
      font-size: 1.5em;
      font-weight: 500;
      text-align: center;

      @media (min-width: 43.75em) {
      }

      &:first-of-type {
        border-left: none;
      }
    }
  }

  h2,
  a {
    font-family: Scope One;
    color: inherit;
  }
`

const footer = css`
  grid-column: 1 / -1;
  grid-row: -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #707070;

  padding: 50px 0;
  margin-top: -15px;

  a {
    color: inherit;
  }
  @media (max-width: 43.75em) {
    grid-row: 12;
  }
`

const Layout = ({ children }) => (
  <div css={[container, typography]}>
    <div css={navigation}>
      <SubHeading
        css={css`
          margin: 0;
        `}
      >
        <Link to="/">V</Link>
      </SubHeading>
      <ul>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
      </ul>
      <div>
        <LinkedIn
          css={css`
            a {
              margin: 0;
            }
          `}
        />
        <Instagram />
      </div>
    </div>
    {children}
    <footer css={footer}>
      <div>
        <LinkedIn
          css={css`
            a {
              margin: 0;
            }
          `}
        />
        <Instagram />
      </div>
      <p>
        All rights reserved © 2020 • Vilberg Elíasson •{' '}
        <a href="mailto:vilbergs@gmail.com">vilbergs@gmail.com</a>
      </p>
    </footer>
  </div>
)

export default Layout
