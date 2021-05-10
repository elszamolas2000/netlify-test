import React from "react"
import styled from "styled-components"
import Carousel from "../carousel/carousel"
import withWindowSize from "../hoc/withWindowSize"

const WelcomePanel = styled.div`
  overflow: hidden;
`

const Welcome = () => (
  <WelcomePanel className="welcome" id={"welcome"}>
    <Carousel />
  </WelcomePanel>
)
export default withWindowSize(Welcome)
