import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/layout/seo"
import { CenterContainer, HeadingText } from "../components/style/page"
import FacebookIcon from "../../content/assets/images/svg/social/facebook.svg"
import GithubIcon from "../../content/assets/images/svg/social/github.svg"
import LinkedinIcon from "../../content/assets/images/svg/social/linkedin.svg"
import TwitterIcon from "../../content/assets/images/svg/social/twitter.svg"

const ExternalLink = ({ link, children }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

export const ProImage = styled.img`
  width: 160px;
  background: teal;
  border-radius: 50%;
  border: 5px solid #ececec;
`
export const Experienced = styled.p`
  text-align: justify;
  max-width: 750px;
  margin: 0 auto;
  color: ${props => props.theme.Text};
  font-size: 18px;
`

const Icon = {
  width: "45px",
  margin: "2px",
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CenterContainer>
      <HeadingText>Sabuj Ali</HeadingText>
      <ProImage src="/images/sabuj-ali.jpg"></ProImage>
      <Experienced>
        Bringing more than two years of experience Full Stack Developer (MERN),
        including closing user requirements, producing code, and enhancing
        designs to wow customers. Focused on creating clean, robust code with
        exceptional security. Able to achieve compatibility targets while
        meeting and exceeding customer demands.
      </Experienced>
      <hr />
      <div>
        <ExternalLink link="https://facebook.com/ProSabuj">
          <FacebookIcon style={Icon}></FacebookIcon>
        </ExternalLink>

        <ExternalLink link="https://github.com/ProSabuj">
          <GithubIcon style={Icon}></GithubIcon>
        </ExternalLink>

        <ExternalLink link="https://www.linkedin.com/in/ProSabuj">
          <LinkedinIcon style={Icon}></LinkedinIcon>
        </ExternalLink>

        <ExternalLink link="https://twitter.com/ProSabuj">
          <TwitterIcon style={Icon}></TwitterIcon>
        </ExternalLink>
      </div>
    </CenterContainer>
  </Layout>
)

export default IndexPage
