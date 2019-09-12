/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Menu from './Menu'

const background = '#ff3900'
const text = 'rgba(0,0,0,0.87)'

const header = css`
  grid-column: 1 / -1;
`

const navigation = css`
  background-color: ${background};
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 10px 0;

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
      color: rgb(0, 0, 0, 0.87);
      flex-grow: 1;
      font-size: 1.9em;
      font-weight: 500;
      text-align: center;
      margin: 0.25em 0;
      padding: 0 0.4em;
      border-left: 3px solid ${text};

      @media (min-width: 43.75em) {
        font-size: 4em;
        /* 2.5x body copy size = 40px */
        border-left: 7px solid ${text};
      }

      &:first-of-type {
        border-left: none;
      }

      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }
`

const Header = () => (
  <header css={header}>
    <Menu css={navigation} />
  </header>
)

export default Header
