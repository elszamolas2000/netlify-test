import React, { useState } from "react"
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBRow,
  MDBContainer,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
  MDBTypography,
} from "mdbreact"

import styled from "styled-components"
import Heading from "../title/title"
import SimpleFade from "../fade/simpleFade"

const Container = styled(MDBContainer)`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`
const Card = styled(MDBCard)`
  box-shadow: none;
  margin-top: 7rem;
  scroll-margin-top: 5rem;
  @media screen and (max-width: 1196px) {
    margin-top: 5rem;
  }
`
const FancyBox = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
`
const FirstMarker = styled.div`
  background: #0f2027;
  background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);
  background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
  width: 2rem;
`
const SecondMarker = styled.div`
  width: 2rem;
  background: #ad5389;
  background: -webkit-linear-gradient(to right, #3c1053, #ad5389);
  background: linear-gradient(to right, #3c1053, #ad5389);
`
const ThirdMarker = styled.div`
  width: 2rem;
  background: #000046;
  background: -webkit-linear-gradient(to right, #1cb5e0, #000046);
  background: linear-gradient(to right, #1cb5e0, #000046);
`
const Row = styled(MDBRow)`
  text-align: left;
  display: flex;
  align-items: center;
  width: 80%;
  @media screen and (max-width: 1280px) {
    width: 100%;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    width: 100%;
  }
`

const Typo = styled(MDBTypography)`
  font-size: 0.99rem;
  font-weight: 400;
`
const Header = styled(MDBTypography)`
  @media screen and (max-width: 900px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`
const Service = () => {
  return (
    <SimpleFade>
      <Container id={"service"}>
        <Heading title="Szolgáltatásaink" fill="#B6244F" />
        <Header tag="h3">
          Az alábbi, könyveléssel kapcsolatos és egyéb szolgáltatásaink
          elérhetőek ügyfeleink számára Eger és környékén.
        </Header>
        <Row>
          <Card border="rgba-teal-strong">
            <MDBCardHeader>
              <Typo tag="h2">Könyvelés</Typo>
            </MDBCardHeader>
            <MDBCardBody className="text-info">
              <FancyBox>
                <FirstMarker />
                <MDBListGroup>
                  <MDBListGroupItem hover>
                    <p>
                      Kettős könyvvitel: kimenő, bejövő számlák (devizában is),
                      pénztárbizonylatok könyvelése (igény esetén kiállítása),
                      bankbizonylatok, vegyes bizonylatok, tárgyi eszközök
                      nyilvántartása
                    </p>
                  </MDBListGroupItem>
                  <MDBListGroupItem hover>
                    <p>Pénztárkönyv vezetése</p>
                  </MDBListGroupItem>
                  <MDBListGroupItem hover>
                    <p>Naplófőkönyv</p>
                  </MDBListGroupItem>
                  <MDBListGroupItem hover>
                    <p>Adóbevallások elkészítése (havi, negyedéves, éves)</p>
                  </MDBListGroupItem>
                  <MDBListGroupItem hover>
                    <p>Év végi zárás készítése</p>
                  </MDBListGroupItem>
                  <MDBListGroupItem hover>
                    <p>Analitikák készítése</p>
                  </MDBListGroupItem>
                  <MDBListGroupItem hover>
                    <p>Adatszolgáltatás hitelkérelemhez, pályázatokhoz</p>
                  </MDBListGroupItem>
                  <MDBListGroupItem hover>
                    <p>
                      {" "}
                      Kapcsolattartás az adóhatósággal (adófolyószámla,
                      egyeztetés, képviselet)
                    </p>
                  </MDBListGroupItem>
                </MDBListGroup>
              </FancyBox>
            </MDBCardBody>
          </Card>
        </Row>

        <Row center>
          <MDBCol className="md-4">
            <Card border="rgba-teal-strong">
              <MDBCardHeader>
                <Typo tag="h2">
                  Munkaügyi feladatok, szabályzatok és beszámoló készítése
                </Typo>
              </MDBCardHeader>
              <MDBCardBody className="text-info">
                <FancyBox>
                  <SecondMarker />
                  <MDBListGroup>
                    <MDBListGroupItem hover>
                      <p>Bérszámfejtés</p>
                    </MDBListGroupItem>
                    <MDBListGroupItem hover>
                      <p>Dolgozók ki- és bejelentése</p>
                    </MDBListGroupItem>
                    <MDBListGroupItem hover>
                      <p>Munkaügyi nyilvántartások vezetése</p>
                    </MDBListGroupItem>
                  </MDBListGroup>
                </FancyBox>
              </MDBCardBody>
            </Card>
          </MDBCol>
          <MDBCol className="md-4">
            <Card border="rgba-teal-strong">
              <MDBCardHeader>
                <Typo tag="h2">Szabályzatok és beszámoló elkészítése</Typo>
              </MDBCardHeader>
              <MDBCardBody className="text-info">
                <FancyBox>
                  <ThirdMarker />
                  <MDBListGroup>
                    <MDBListGroupItem hover>
                      <MDBTypography tag="p">
                        Számviteli szabályzatok készítése, aktualizálása
                      </MDBTypography>
                    </MDBListGroupItem>
                    <MDBListGroupItem hover>
                      <p>Évközi és év végi mérleg</p>
                    </MDBListGroupItem>
                    <MDBListGroupItem hover>
                      <p>Kiegészítő melléklet készítés</p>
                    </MDBListGroupItem>
                  </MDBListGroup>
                </FancyBox>
              </MDBCardBody>
            </Card>
          </MDBCol>
        </Row>
      </Container>
    </SimpleFade>
  )
}

export default Service
