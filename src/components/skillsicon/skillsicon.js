import React from "react"

import Html5Icon from "../../../content/assets/images/svg/skills/html5.svg"
import CssIcon from "../../../content/assets/images/svg/skills/css3.svg"
import ExpressIcon from "../../../content/assets/images/svg/skills/express.svg"
import JsIcon from "../../../content/assets/images/svg/skills/js.svg"
import MongoIcon from "../../../content/assets/images/svg/skills/mongodb.svg"
import NodeIcon from "../../../content/assets/images/svg/skills/nodejs.svg"
import NpmIcon from "../../../content/assets/images/svg/skills/npm.svg"
import ReactIcon from "../../../content/assets/images/svg/skills/rreact.svg"
import ReduxIcon from "../../../content/assets/images/svg/skills/redux.svg"
import WordpressIcon from "../../../content/assets/images/svg/skills/wordpress.svg"

const style = { width: "50px", margin: "6px" }

const Skillicon = () => {
  return (
    <React.Fragment>
      <Html5Icon style={style}></Html5Icon>
      <CssIcon style={style}></CssIcon>
      <JsIcon style={style}></JsIcon>
      <WordpressIcon style={style}></WordpressIcon>
      <NpmIcon style={style}></NpmIcon>
      <NodeIcon style={style}></NodeIcon>
      <ExpressIcon style={style}></ExpressIcon>
      <MongoIcon style={style}></MongoIcon>
      <ReactIcon style={style}></ReactIcon>
      <ReduxIcon style={style}></ReduxIcon>
    </React.Fragment>
  )
}

export default Skillicon
