import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/layout/seo"
import Hgroup from "../components/hgroup"

import SkillIcon from "../components/skillsicon"

import { CenterContainer } from "../components/style/page"
import WebDesign from "../../content/assets/images/svg/skills/web-design.svg"
import WebDevelopment from "../../content/assets/images/svg/skills/web-development.svg"

const WebStyle = {
  color: "#418EB2",
  width: "85px",
  height: "85px",
  padding: "4px",
}

const SkillHeading = styled.h2`
  color: ${props => props.theme.Primary};
  background: "red";
`

const Skills = () => {
  return (
    <Layout>
      <SEO title="Skills"></SEO>
      <Hgroup img="/images/page/skills.jpg" title="Skills"></Hgroup>
      <CenterContainer>
        <div className="columns">
          <div className="column is-6">
            <WebDesign style={WebStyle}></WebDesign>
            <SkillHeading className="title is-3">Web Design</SkillHeading>
            <p style={{ textAlign: "justify" }}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident
            </p>
          </div>

          <div className="column">&ensp;</div>
          <div className="column is-6">
            <WebDevelopment style={WebStyle}></WebDevelopment>
            <SkillHeading className="title is-3">Web Development</SkillHeading>
            <p style={{ textAlign: "justify" }}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident
            </p>
          </div>
        </div>

        <div style={{ marginTop: "30px" }}>
          <h2 className="title is-3" style={{ color: "#17A2B8" }}>
            MY STACK
          </h2>
          <SkillIcon></SkillIcon>
        </div>
      </CenterContainer>
    </Layout>
  )
}

export default Skills
