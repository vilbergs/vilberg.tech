/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import 'typeface-bungee-shade'
import 'typeface-share-tech-mono'

const container = css`
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 2fr 5em 1fr 2fr;

  @media (min-width: 43.75em) {
    grid-template-rows: 2fr 10em 1fr 2fr;
  }
`

const landingHeading = css`
  grid-column: 2;
  grid-row: 2;
  font-size: 3.5em;
  font-family: Bungee Shade;
  color: #ff3900;
  padding: 5px;
  margin: 0;
  @media (min-width: 43.75em) {
    font-size: 8em;
    /* 2.5x body copy size = 40px */
    line-height: 1.125;
    padding: 5px;
  }
`
const navigation = css`
  grid-column: 2;
  grid-row: 3;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: row;
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      font-family: Share Tech Mono;
      color: #ff3900;
      flex-grow: 1;
      font-size: 1.9em;
      font-weight: 500;
      text-align: center;
      margin: 0.25em 0;
      padding: 0 0.4em;
      border-left: 2px solid #ff3900;

      @media (min-width: 43.75em) {
        font-size: 4em;
        /* 2.5x body copy size = 40px */
        border-left: 7px solid #ff3900;
      }

      &:first-of-type {
        border-left: none;
      }

      a {
        color: inherit;
      }
    }
  }
`

const IndexPage = () => (
  <div css={container}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Home</title>
    </Helmet>
    <h1 css={landingHeading}>Vilberg </h1>
    <nav css={navigation}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default IndexPage
