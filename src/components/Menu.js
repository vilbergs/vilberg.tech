/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Link } from 'gatsby'
import { LinkedIn, Instagram, GitHub } from './Social'
import { tabletPortrait, phone } from '../utils/breakpoints'

const navigation = css`
  grid-column: 2 / 12;
  grid-row: 1;
  z-index: 16;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: baseline;
  height: 100px;

  ${tabletPortrait} {
    grid-column: 2 / 12;
  }

  font-size: 1.3em;

  a {
    font-family: Scope One;
    text-decoration: none;
  }

  .navigation-heading,
  .navigation-menu a {
    color: inherit;
  }

  .navigation-menu {
    a:not(:first-of-type) {
      margin-left: 30px;
    }

    a {
      transition: 0.3s;

      :hover {
        color: #7a614c;
      }
    }

    .active {
      border-bottom: 3px solid #7a614c;
    }
  }
`

const navSocialMedia = css`
  ${phone} {
    display: none;
  }

  a:last-child {
    margin: 0;
  }
`

const Menu = ({ color = 'black', ...props }) => {
  return (
    <nav css={navigation} {...props}>
      <Link to="/" className="navigation-heading">
        Vilberg
      </Link>

      <div className="navigation-menu">
        <Link aria-label="View blog page" to="/blog" activeClassName="active">
          Blog
        </Link>
        <Link
          aria-label="View photography page"
          to="/photography"
          activeClassName="active"
        >
          Photography
        </Link>
      </div>

      <div css={navSocialMedia}>
        <LinkedIn />
        <Instagram />
        <GitHub />
      </div>
    </nav>
  )
}

export default Menu
