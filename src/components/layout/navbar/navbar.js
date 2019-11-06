import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavLink = ({ to, children }) => {
  return (
    <Link to={to} className="navbar-item" activeStyle={{ color: "#1078ff" }}>
      {children}
    </Link>
  )
}

const Logo = styled.h2`
  font-size: 22px;
  text-transform: uppercase;
  color: red;
  font-weight: bold;
`

const Navbar = () => {
  const [buttonPath] = useState("#")
  const [toggle, setToggle] = useState(false)

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <Logo>Sabuj</Logo>
          </Link>
          <a
            onClick={() => setToggle(!toggle)}
            href={buttonPath}
            role="button"
            className={
              toggle ? "navbar-burger burger is-active" : "navbar-burger burger"
            }
            aria-label="menu"
            aria-expanded="false"
            data-target="navBar"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navBar"
          className={toggle ? "navbar-menu is-active" : "navbar-menu"}
        >
          <div className="navbar-start has-text-centered">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </div>

          {/* <div className="navbar-end has-text-centered">
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/" className="button is-primary">
                  <strong>Sign up</strong>
                </Link>
                <Link to="/" className="button is-light">
                  Log in
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
