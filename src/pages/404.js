import React from "react"

import Layout from "../components/layout"
import SEO from "../components/layout/seo"

import { CenterContainer } from "../components/style/page"
import NotfoundIcon from "../../content/assets/images/svg/404/notfound.svg"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <CenterContainer>
      <NotfoundIcon style={{ maxHeight: "300px" }}></NotfoundIcon>
      <h1 style={{ fontSize: "55px", fontFamily: "cursive" }}>NOT FOUND</h1>
    </CenterContainer>
  </Layout>
)

export default NotFoundPage
