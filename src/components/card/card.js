import React, { useState } from "react"
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBIcon,
  MDBView,
} from "mdbreact"
import withWindowSize from "../hoc/withWindowSize"
import { Hinge } from "react-awesome-reveal"
import styled from "styled-components"

const TransparentCard = styled(MDBCard)`
  background-color: transparent;
  box-shadow: none;
  margin-top: 1rem;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    font-size: .9rem;
  }
`

const TransparentHeader = styled(MDBCardHeader)`
  background-color: transparent;
  box-shadow: none;
  margin-top: 1rem;
  cursor: pointer;
`

const CardBody = styled(MDBCardBody)`
  background-color: #f58d30;
  border-radius: 0.4rem;
  color: #212121;
`

const CardText = styled(MDBCardText)`
  color: #212121 !important;
`

const CardLogo = styled(MDBIcon)`
  color: #f58d30;
`
const Card = ({ windowWidth, icon, title, text }) => {
  const [isHinge, setHinge] = useState(false)

  const changeHinge = () => {
    setHinge(() => !isHinge)
  }

  const card = isHinge ? (
    <Hinge triggerOnce={true} duration={2000}>
      <TransparentCard className="text-center ">
        <TransparentHeader>
          <MDBView>
            <CardLogo icon={icon} size="3x" />
          </MDBView>
        </TransparentHeader>
        <CardBody>
          {windowWidth > 496 && <MDBCardTitle>{title}</MDBCardTitle>}

          <CardText>{windowWidth > 496 ? text : title}</CardText>
        </CardBody>
      </TransparentCard>
    </Hinge>
  ) : (
    <TransparentCard className="text-center">
      <TransparentHeader>
        <MDBView>
          <CardLogo icon={icon} size="3x" />
        </MDBView>
      </TransparentHeader>
      <CardBody>
        {windowWidth > 496 && <MDBCardTitle>{title}</MDBCardTitle>}

        <CardText>{windowWidth > 496 ? text : title}</CardText>
      </CardBody>
    </TransparentCard>
  )
  return (
    <MDBCol>
      <div onClick={changeHinge}>{card}</div>
    </MDBCol>
  )
}

export default withWindowSize(Card)
