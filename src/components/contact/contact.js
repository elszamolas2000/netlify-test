import React from "react"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
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
  margin-right: 0.6rem;
  margin-left: 0.6rem;
  border: 1px solid lightgray;
  padding: 2rem;
  border-radius: 0.4rem;
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

const CardTitle = styled(MDBCardTitle)`
  font-size: 1.25rem;
  color: #0f5875;
`

const Label = styled.label`
  margin-top: 1.5rem;
  color: #212121;
  margin-left: .5rem;
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
                <CardTitle tag="p">Cégnév:</CardTitle>
                <CardText>Elszámolás 2000 Bt.</CardText>
                <CardTitle tag="p">Székhely:</CardTitle>
                <CardText>3300 Eger, Veres Péter út 3. Fszt 3.</CardText>
                <CardTitle tag="p">Adószám:</CardTitle>
                <CardText>20955067-1-10</CardText>
                <CardTitle tag="p">E-mail:</CardTitle>
                <CardText>elszamolas2000bt@gmail.com</CardText>
                <CardTitle tag="p">Telefonszám:</CardTitle>
                <CardText>+36/30-8696-420</CardText>
              </MDBCardBody>
            </Card>
          </MDBCol>
        </Row>

        <Row center>
          <Col lg="6">
            <form onSubmit={onSubmit} className="needs-validation" noValidate>
              <p className="h5 text-center mb-4">Írjon nekünk</p>
              <div className="grey-text">
                <Label htmlFor="name">Az Ön neve</Label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon">
                      <i className="fa fa-user prefix"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    aria-label="Az üzenetküldő neve"
                    required
                    onChange={onChange}
                  />
                </div>

                <Label htmlFor="email">Az Ön email címe</Label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon">
                      <i className="fa fa-envelope prefix"></i>
                    </span>
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    aria-label="Az üzenetküldő email címe"
                    required
                    onChange={onChange}
                  />
                </div>
                <Label htmlFor="name">Tárgy</Label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon">
                      <i className="fa fa-tag prefix"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                    aria-label="Tárgy"
                    required
                    onChange={onChange}
                  />
                </div>
                <Label htmlFor="content">Az Ön üzenete</Label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon">
                      <i className="fa fa-pencil-alt prefix"></i>
                    </span>
                  </div>
                  <textarea
                    type="text"
                    id="content"
                    name="content"
                    className="form-control"
                    aria-label="Az Ön üzenete"
                    required
                    rows={4}
                    onChange={onChange}
                  />
                </div>
              </div>
              <Note tag="p">
                Az itt megadott adatokat semmilyen formában nem tároljuk,
                harmadik félnek nem adjuk át, az üzenetváltás végeztével
                töröljük.
              </Note>
              <div className="text-center">
                <MDBBtn type="submit" outline color="unique">
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
