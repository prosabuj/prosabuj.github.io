import React from "react"

import Layout from "../components/layout"
import SEO from "../components/layout/seo"
import Hgroup from "../components/hgroup"
import PortfolioItem from "../components/portfolioitem"

import { CenterContainer } from "../components/style/page"

const Portfolio = () => {
  return (
    <Layout>
      <SEO title="Portfolio"></SEO>
      <Hgroup img="/images/page/portfolio.jpg" title="Portfolio"></Hgroup>
      <CenterContainer>
        <div
          className="columns is-multiline is-centered"
          style={{ padding: "6px" }}
        >
          <PortfolioItem
            image="/images/page/portfolio/unsplash-App.png"
            github="https://github.com/prosabuj/unsplash-app"
            live="https://prosabuj.github.io/unsplash-app"
            title="Unsplash Api App"
            disc="Unsplash Photo App Created by React frontend"
            date="10/09/2019"
          ></PortfolioItem>
        </div>
      </CenterContainer>
    </Layout>
  )
}

export default Portfolio
