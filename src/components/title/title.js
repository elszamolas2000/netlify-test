import { MDBTypography } from "mdbreact"
import React from "react"
import styled from "styled-components"
import BrushStroke from "../../assets/brush.svg"

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 4rem 0rem;
  @media screen and (max-width: 600px) {
    margin: 2rem 0rem;
  }
`

const BrushStrokeWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`

const BrushStrokeIcon = styled(BrushStroke)`
  width: 450px;
  height: 450px;
  margin-top: -8.5rem;
  margin-right: 2rem;
  @media screen and (max-width: 600px) {
    width: 300px;
    height: 300px;
    margin-top: -5.675rem;
    margin-right: 1.5rem;
  }
  @media screen and (max-width: 360px) {
    width: 250px;
    height: 250px;
    margin-top: -4.75rem;
    margin-right: 1.25rem;
  }
  fill: ${props => props.fill};
`

const Typo = styled(MDBTypography)`
  z-index: 100;
  font-size: 2rem;
  font-weight: 500;
  color: ${props => props.color};
  @media screen and (max-width: 600px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 360px) {
    font-size: 1.1rem;
  }
`
const Heading = ({ title, fill, color }) => (
  <TitleWrapper>
    <BrushStrokeWrapper>
      <BrushStrokeIcon fill={fill || "#39a2ae"} />
    </BrushStrokeWrapper>
    <Typo color={color || "#fff"} tag="h2">
      {title}
    </Typo>
  </TitleWrapper>
)

export default Heading
