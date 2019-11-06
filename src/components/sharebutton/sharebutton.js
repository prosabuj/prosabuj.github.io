import React from "react"
import styled from "styled-components"
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share"

const Share = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ShareLink = styled.div`
  display: flex;
  flex-direction: row;
`

const ShareLabel = styled.span`
  font-size: 1.2em;
  margin: 25px 0 5px;
`

const ShareButton = props => {
  const { excerpt, posturl, title } = props
  return (
    <Share>
      <ShareLabel>SHARE</ShareLabel>
      <ShareLink>
        <TwitterShareButton
          url={posturl}
          title={title}
          additionalProps={{
            "aria-label": "Twitter share",
          }}
        >
          <TwitterIcon round size={35} />
        </TwitterShareButton>
        <FacebookShareButton
          url={posturl}
          quote={`${title} - ${excerpt}`}
          additionalProps={{
            "aria-label": "Facebook share",
          }}
        >
          <FacebookIcon round size={35} />
        </FacebookShareButton>
        <LinkedinShareButton
          url={posturl}
          title={title}
          description={excerpt}
          additionalProps={{
            "aria-label": "LinkedIn share",
          }}
        >
          <LinkedinIcon round size={35} />
        </LinkedinShareButton>
      </ShareLink>
    </Share>
  )
}

export default ShareButton
