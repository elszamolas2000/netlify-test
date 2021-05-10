import { MDBCard, MDBCardBody, MDBCardText, MDBIcon } from "mdbreact"
import React, { useState } from "react"
import styled from "styled-components"

const PanelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const PanelCard = styled(MDBCard)`
  text-align: center;
  color: white;
  padding: 1rem;
  flex: 1;
  margin: 1rem;
  @media screen and (min-width: 1300px) {
    margin: 0.5rem;
  }
  transition: all 0.4s;
  cursor: pointer;
  &:hover,
  &:active {
    transform: scale(1.05);
    z-index: 20;
    box-shadow: 0.5rem 0.5rem 0.5rem rgba(black, 0.5);
  }
  background: ${props => props.color};
`
const Circle = styled.div`
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
  position: absolute;
  background: ${props => props.color};
`

const CardText = styled.p`
  color: #fff;
`

const PanelImg = styled(MDBIcon)`
  color: white;
  padding: 5rem;
  z-index: 100;
`
const Panel = ({ color, icon, content }) => {
  const [pause, setPause] = useState(false)

  return (
    <PanelCard color={color} onClick={() => setPause(() => !pause)}>
      <MDBCardBody>
        <PanelContainer>
          <PanelImg icon={icon} size="3x" />
          <Circle color={color} delay={"3s"}></Circle>
        </PanelContainer>
        <CardText>{content}</CardText>
      </MDBCardBody>
    </PanelCard>
  )
}

export default Panel
