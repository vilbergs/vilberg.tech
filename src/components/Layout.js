/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import 'normalize.css'
import 'typeface-roboto'
import 'typeface-scope-one'
import { phone, tabletPortrait, desktop } from '../utils/breakpoints'
import SEO from '../components/Seo'
import { LinkedIn, Instagram, GitHub } from '../components/Social'
import MobileMenu from './MobileMenu'
import Menu from './Menu'

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
  ol,
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
const nav = css`
  ${phone} {
    display: none;
  }
`

const mobileNav = css`
  ${tabletPortrait} {
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

const Layout = ({ containerOptions, children, title }) => (
  <div css={[container(containerOptions), typography]}>
    <SEO title={title} />

    <Menu css={nav} />
    <MobileMenu css={mobileNav} />
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
