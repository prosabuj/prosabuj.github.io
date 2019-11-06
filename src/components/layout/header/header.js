import PropTypes from "prop-types"
import React from "react"
import Navbar from "../navbar"

const Header = ({ siteTitle }) => (
  <header>
    <Navbar title={siteTitle}></Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
