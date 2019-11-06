import React from "react"

import GithubIcon from "../../../content/assets/images/svg/portfolio/github.svg"
import GlobeIcon from "../../../content/assets/images/svg/portfolio/globe.svg"

const Portfolio = ({
  image = null,
  github = null,
  live = null,
  title = "not provide",
  disc = "this is open source project",
  date = "not provide",
}) => {
  return (
    <div className="column is-5">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt="Portfolio Item" />
          </figure>
        </div>
        <div className="card-content">
          <div className="content is-centerd">
            <p className="title is-4">{title}</p>
            <p>{disc}</p>
            <p style={{ fontWeight: "bold" }}>Date: {date}</p>
            <a href={github}>
              <GithubIcon
                style={{ height: "25px", marginRight: "15px" }}
              ></GithubIcon>
            </a>
            <a href={live}>
              <GlobeIcon style={{ height: "25px" }}></GlobeIcon>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
