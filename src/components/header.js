import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header
    style={{
      gridArea: 'h',
      height: '20vh',
      backgroundColor: 'peru',
    }}
  ></header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
