import React from "react"
import { MDBCollapse } from "mdbreact"

const Collapse = ({ children, collapse }) => {
  return <MDBCollapse isOpen={collapse}>{children}</MDBCollapse>
}

export default Collapse
