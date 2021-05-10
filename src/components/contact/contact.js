import React from "react"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBTypography,
} from "mdbreact"

import emailjs from "emailjs-com"
import Notification from "../notification/notification"
import styled from "styled-components"
import Heading from "../title/title"
import { useDispatch, useSelector } from "react-redux"
import { setForm } from "../../slices/contact"
import SimpleFade from "../fade/simpleFade"

const ContactPanel = styled(MDBContainer)`
  padding: 1rem;
  margin-top: 7rem;
  overflow: hidden;
  text-align: center;

`
const Row = styled(MDBRow)`
  text-align: left;
`

const Card = styled(MDBCard)`
  margin-top: 4rem;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`
const Col = styled(MDBCol)`
  margin-top: 4rem;
`

const Note = styled(MDBTypography)`
  font-size: 0.8rem;
  text-align: center;
  padding: 0.6rem;
`

const CardText = styled(MDBCardText)`
  margin-bottom: 1rem !important;
`

const Typo = styled(MDBTypography)`
  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`
const Contact = () => {
  const { form } = useSelector(state => state.contact)
  const dispatch = useDispatch()
  const onSubmit = e => {
    e.preventDefault()
    e.target.className += " was-validated"

    if (e.target.reportValidity()) {
      emailjs
        .sendForm(
          process.env.SERVICE_ID,
          process.env.TEMPLATE_ID,
          e.target,
          process.env.USER_ID
        )
        .then(
          () => {
            dispatch(
              setForm({
                ...form,
                modalName: "success_modal",
              })
            )
          },
          () => {
            dispatch(
              setForm({
                ...form,
                modalName: "failed_modal",
              })
            )
          }
        )
    }
  }
  const onChange = e => {
    const { name, value } = e.target
    dispatch(
      setForm({
        ...form,
        [name]: value,
      })
    )
  }

  return (
    <ContactPanel fluid id={"contact"}>
      <Notification
        name="success_modal"
        icon="check-circle"
        title="Sikeres üzenetküldés"
        message="Üzenetét elküldtük. Hamarosan fel vesszük Önnel a kapcsolatot."
      />

      <Notification
        name="failed_modal"
        icon="times-circle"
        title="Sikertelen üzenetküldés"
        message="Hiba lépett fel, próbálja meg később."
      />
      <SimpleFade>
        <Heading title="Kapcsolat" fill="#B6244F" />
        <Row center className="contact">
          <MDBCol lg="6">
            <Card className="contact-card">
              <MDBCardHeader>
                <Typo tag="h2">Elérhetőségeink</Typo>
              </MDBCardHeader>
              <MDBCardBody className="text-info">
                <MDBCardTitle tag="h5">Cégnév:</MDBCardTitle>
                <CardText>Elszámolás 2000 Bt.</CardText>
                <MDBCardTitle tag="h5">Székhely:</MDBCardTitle>
                <CardText>3300 Eger, Veres Péter út 3. Fszt 3.</CardText>
                <MDBCardTitle tag="h5">Adószám:</MDBCardTitle>
                <CardText>20955067-1-10</CardText>
                <MDBCardTitle tag="h5">E-mail:</MDBCardTitle>
                <CardText>elszamolas2000bt@gmail.com</CardText>
                <MDBCardTitle tag="h5">Telefonszám</MDBCardTitle>
                <CardText>+36/30-8696-420</CardText>
              </MDBCardBody>
            </Card>
          </MDBCol>
        </Row>

        <Row center>
          <Col lg="8">
            <form onSubmit={onSubmit} className="needs-validation" noValidate>
              <p className="h5 text-center mb-4">Írjon nekünk</p>
              <div className="grey-text">
                <MDBInput
                  label="Az Ön neve"
                  icon="user"
                  group
                  type="text"
                  name="name"
                  className="form-control"
                  success="right"
                  required
                  // value={form.formName}
                  onChange={onChange}
                />

                <MDBInput
                  label="Az Ön email címe"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  name="email"
                  success="right"
                  required
                  // value={form.email}
                  onChange={onChange}
                />
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
                <MDBInput
                  onChange={onChange}
                  // value={form.subject}
                  label="Tárgy"
                  icon="tag"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  name="subject"
                  required
                />
                <MDBInput
                  onChange={onChange}
                  // value={form.content}
                  type="textarea"
                  rows="4"
                  label="Az Ön üzenete"
                  icon="pencil-alt"
                  name="content"
                  required
                />
              </div>
              <Note tag="p">
                Az itt megadott adatokat semmilyen formában nem tároljuk,
                harmadik félnek nem adjuk át, az üzenetváltás végeztével
                töröljük.
              </Note>
              <div className="text-center">
                <MDBBtn type="submit" outline color="secondary">
                  Küldés
                  <MDBIcon far icon="paper-plane" className="ml-1" />
                </MDBBtn>
              </div>
            </form>
          </Col>
        </Row>
      </SimpleFade>
    </ContactPanel>
  )
}

export default Contact
