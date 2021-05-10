import React from "react"
import { Slide } from "react-awesome-reveal"
import withWindowSize from "../hoc/withWindowSize"

const SimpleSlide = ({ windowWidth, children, direction }) =>
  windowWidth < 900 ? (
    <>{children}</>
  ) : (
    <Slide triggerOnce direction={direction} duration={3000}>
      {children}
    </Slide>
  )

export default withWindowSize(SimpleSlide)
