/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Link } from 'gatsby'
import 'typeface-share-tech-mono'

const text = 'rgba(0,0,0,0.87)'

const menu = css`
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style-type: none;
    margin: 0;
    padding: 0;

    @media (min-width: 43.75em) {
      justify-content: flex-end;
    }

    li {
      font-family: Share Tech Mono;
      color: ${text};
      flex-grow: 1;
      font-size: 1.9em;
      font-weight: 500;
      text-align: center;
      margin: 0.25em 0;
      padding: 0 0.4em;
      border-left: 3px solid ${text};

      @media (min-width: 43.75em) {
        font-size: 1.2em;
        /* 2.5x body copy size = 40px */
        border-left: 2px solid ${text};
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
const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent, href }) => {
      return {
        style: {
          textDecoration:
            isCurrent || window.location.pathname === '/'
              ? 'underline'
              : 'none',
        },
      }
    }}
  />
)

const Menu = props => {
  return (
    <nav css={menu} {...props}>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" activeClassName="active">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
