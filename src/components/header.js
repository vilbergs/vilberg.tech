import PropTypes from 'prop-types'
import React from 'react'
import Date from './date'

const Header = ({ siteTitle }) => (
  <header
    style={{
      gridArea: 'h',
      height: '20vh',
    }}
  >
    <Date />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
