import React from "react"
import { Fade } from "react-awesome-reveal"
import withWindowSize from "../hoc/withWindowSize"

const SimpleFade = ({ windowWidth, children }) =>
  windowWidth < 900 ? (
    <>{children}</>
  ) : (
    <Fade cascade triggerOnce>
      {children}
    </Fade>
  )

export default withWindowSize(SimpleFade)
