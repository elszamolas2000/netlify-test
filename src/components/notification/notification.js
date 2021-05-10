import React from "react"
import {
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
} from "mdbreact"
import { useDispatch, useSelector } from "react-redux"
import { resetForm, setForm } from "../../slices/contact"



const Notification = ({ name, title, message, icon }) => {
  const { form } = useSelector(state => state.contact)
  const dispatch = useDispatch()
  const onClose = () => {
    dispatch(setForm({ ...form, modalName: "" }))
    dispatch(resetForm())
  }
  return (
    <MDBModal
      side
      position="bottom-left"
      isOpen={form?.modalName === name}
      toggle={onClose}
    >
      <MDBModalHeader toggle={onClose}>{title}</MDBModalHeader>
      <MDBModalBody>{message}</MDBModalBody>
    </MDBModal>
  )
}

export default Notification
