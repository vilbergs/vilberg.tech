import React from 'react'
import { Link } from 'gatsby'

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
    <nav {...props}>
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
