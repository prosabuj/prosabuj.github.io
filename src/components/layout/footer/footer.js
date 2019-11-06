import React from "react"
import styled from "styled-components"

const FooterSec = styled.div`
  text-align: center;
  color: white;
  background: ${props => props.theme.Primary};
  padding: 10px 0px;
  margin-top: 8px;
`

const Footer = () => {
  return (
    <footer>
      <FooterSec>
        © {new Date().getFullYear()}, Created by{" "}
        <span style={{ cursor: "pointer" }} title="Sabuj Ali">
          Me
        </span>
      </FooterSec>
    </footer>
  )
}

export default Footer
