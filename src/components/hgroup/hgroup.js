import React from "react"
import styled from "styled-components"

const HGroup = styled.hgroup`
  position: relative;
  color: white;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40vh;
  flex: 1 1 0%;
`
const HGroupImg = styled.img`
  z-index: -1;
  width: 100%;
  height: 100%;
  background: teal;
  object-fit: cover;
  position: absolute !important;
`

const HGroupTitle = styled.div`
  text-align: center;
  font-size: calc(1em + 0.5vw);
  display: grid;
  justify-content: center;
  margin: 1em;
`

const HeadingH1 = styled.h1`
  color: #fff;
  font-size: 55px;
  text-transform: uppercase;
  background: #0a0a0ab0;
  border-radius: 5px;
  padding: 0 15px;
`

const Hgroup = ({ img, title }) => {
  return (
    <HGroup>
      <HGroupImg src={img} alt={title}></HGroupImg>
      <HGroupTitle>
        <HeadingH1>{title}</HeadingH1>
      </HGroupTitle>
    </HGroup>
  )
}

export default Hgroup
