import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdbreact"
import React from "react"
import styled from "styled-components"
import SimpleFade from "../fade/simpleFade"
import withWindowSize from "../hoc/withWindowSize"
import Panel from "../panel/panel"
import Heading from "../title/title"

const Container = styled(MDBContainer)`
  width: 100%;
  // background-color: #dfe6e9;
  text-align: center;
  padding: 1rem 5rem;
  margin: 2rem 0rem;
  font-size: 1.1rem;
  @media screen and (max-width: 900px) {
    padding: 1rem 2rem;
  }
`

const Title = styled(MDBRow)`
  width: 100%;
  padding: 1rem;
  margin: 2rem 0rem;
  overflow: hidden;
`

const Welcome = styled.div`
  max-width: 100%;
  display: flex;
  align-items: stretch;
  transition: all 0.4s;
  @media screen and (max-width: 720px) {
    flex-direction: column;
    align-items: center;
  }
`

const Typo = styled(MDBTypography)`
  @media screen and (max-width: 900px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`

const Home = ({ windowWidth }) => (
  <Container fluid id="home">
    <SimpleFade>
      <Heading title="Bemutatkozás" />
      <Title className={"home-title"}>
        <MDBCol>
          <Typo tag="h5">
            Már több, mint 20 éve, hogy könyvelőirodánk kezdő és már működő
            cégek (Kft., Bt.), egyéni vállalkozások és non-profit szervezetek
            teljes körű könyvelését vállalja Egerben és környékén.
          </Typo>
        </MDBCol>
      </Title>
      {windowWidth > 1300 ? (
        <Welcome>
          <Panel
            color="linear-gradient(to left, #1F1C18, #8E0E00)"
            icon="briefcase"
            content="A könyvelési anyagért szükség szerint Egerben és környékén házhoz megyünk."
          />

          <Panel
            color="linear-gradient(to left, #3498db, #2c3e50)"
            icon="at"
            content=" Garantáljuk a gyors választ elektronikus üzeneteire, hívását személyesen fogadjuk."
          />

          <Panel
            color="linear-gradient(to left, #71B280, #134E5E)"
            icon="university"
            content="Felsőfokú szakmai képesítéssel rendelkezünk (közgazdász, valamint mérlegképes könyvelő)."
          />

          <Panel
            color="linear-gradient(to left, #2a0845, #6441A5)"
            icon="credit-card"
            content="Ügyfeleinkkel szerződést kötünk, munkánkról számlát adunk, anyagi felelősséget vállalunk."
          />
        </Welcome>
      ) : (
        <div>
          {" "}
          <Welcome>
            <Panel
              color="linear-gradient(to left, #1F1C18, #8E0E00)"
              icon="briefcase"
              content="A könyvelési anyagért szükség szerint Egerben és környékén házhoz megyünk."
            />

            <Panel
              color="linear-gradient(to left, #3498db, #2c3e50)"
              icon="at"
              content=" Garantáljuk a gyors választ elektronikus üzeneteire, hívását személyesen fogadjuk."
            />
          </Welcome>
          <Welcome>
            <Panel
              color="linear-gradient(to left, #71B280, #134E5E)"
              icon="university"
              content="Felsőfokú szakmai képesítéssel rendelkezünk (közgazdász, valamint mérlegképes könyvelő)."
            />

            <Panel
              color="linear-gradient(to left, #2a0845, #6441A5)"
              icon="credit-card"
              content="Ügyfeleinkkel szerződést kötünk, munkánkról számlát adunk, anyagi felelősséget vállalunk."
            />
          </Welcome>
        </div>
      )}
    </SimpleFade>
  </Container>
)

export default withWindowSize(Home)
