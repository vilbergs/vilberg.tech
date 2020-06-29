/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Link } from 'gatsby'
import { LinkedIn, Instagram, GitHub } from './Social'
import { tabletPortrait, phone } from '../utils/breakpoints'
import { useState } from 'react'

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

  .navigation-heading {
  }

  .navigation-menu a:not(:first-of-type) {
    margin-left: 30px;
  }
`

const navSocialMedia = css`
  ${phone} {
    display: none;
  }
`

const Menu = ({ color = 'black', ...props }) => {
  const [isToggledOn, setToggle] = useState(false)
  const toggle = () => setToggle(!isToggledOn)

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
