import React from "react"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import theme from "../../theme"
import "../../../content/assets/css/bulma.min.css"
import "./style.css"

const GlobalStyle = createGlobalStyle`
::selection {
  background: #246390;
  color: #fff;
}

.SocialMediaShareButton {
  margin: 0 0.4em;
  cursor: pointer;
}
`

const MainSection = styled.div`
  min-height: calc(100vh - 110px);
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle></GlobalStyle>
      <Header siteTitle={data.site.siteMetadata.title} />

      <main>
        <MainSection>{children}</MainSection>
      </main>

      <Footer></Footer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
