import React, { useState } from "react"
import {
  MDBContainer,
  MDBBtn,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardFooter,
} from "mdbreact"
import Collapse from "../collapse/collapse"
import withWindowSize from "../hoc/withWindowSize"
import styled from "styled-components"
import Heading from "../title/title"
import TableData from "./tableData"
import Catalog from "./catalog"
import { useDispatch, useSelector } from "react-redux"
import {
  computeKataSum,
  computeNonKataSum,
  setProcess,
  toggleByType,
} from "../../slices/calculator"
import { Netto, NumberA, NumberOfB, NumberOfD, Type } from "../enums/types"
import SimpleFade from "../fade/simpleFade"

const CalculatorContainer = styled(MDBContainer)`
  margin-top: 7rem;
  text-align: center;
  @media screen and(max-width:1196px) {
    padding-top: 5rem;
  }
`
const CalculatorHeader = styled(MDBCardHeader)`
  background-color: white;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const Warning = styled.span`
  font-size: 0.8rem;
  color: orangered;
  padding: 1rem;
  text-align: center;
`

const Kata = styled.div`
  padding: 0.8rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`

const Row = styled(MDBRow)`
  text-align: left;
`

const Card = styled(MDBCard)`
  margin-top: 4rem;
  width: 80%;
  @media screen and (max-width: 1250px) {
    width: 90%;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

const CardRow = styled(MDBRow)`
  display: flex;
  align-items: center;
  padding: 2rem;
  @media screen and (max-width: 840px) {
    flex-direction: column;
  }
  @media screen and (max-width: 600px) {
    padding: 1rem;
  }
  @media screen and (max-width: 450px) {
    padding: 0.2rem;
  }
`

const CardCol = styled(MDBCol)`
  @media screen and (max-width: 840px) {
    margin-top: 3rem;
  }
`

const Btn = styled(MDBBtn)`
  margin: 2rem 0rem;
`

const Select = styled.select`
  margin-bottom: 1rem;
`

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  width: 100%;
`

const Calculator = () => {
  const { process } = useSelector(state => state.calculator)
  const dispatch = useDispatch()
  const navigateToTable = () => {
    const anchor = document.querySelector("#table")
    anchor.scrollIntoView({ behavior: "smooth" })
  }

  const toggle = e => {
    const { name, value } = e.target
    dispatch(toggleByType(value))
    if (value === Type.NP) {
      navigateToTable()
    }
  }

  const handleChange = e => {
    const { name, value } = e.target
    dispatch(setProcess({ ...process, [name]: value }))
  }

  const activateMoreSelect = () => {
    dispatch(
      setProcess({
        ...process,
        collapseMore: !process.collapseMore,
        collapseKata: false,
        isVisible: false,
        disabled: false,
      })
    )
  }

  const computeKata = () => {
    dispatch(computeKataSum())
    navigateToTable()
  }

  const computeValue = e => {
    e.preventDefault()
    dispatch(computeNonKataSum())
    navigateToTable()
  }
  const cls =
    process.type === ""
      ? "browser-default custom-select spec-select"
      : "browser-default custom-select"
  return (
    <CalculatorContainer fluid id={"calculator"}>
      <SimpleFade>
        <Heading title=" Könyvelési díj kalkulátor" />
        <Row center>
          <Card>
            <MDBContainer fluid>
              <CalculatorHeader>
                <Header>
                  <p>Áraink tájékoztató jellegűek</p>
                  <Warning>
                    {" "}
                    A fizetendő összeg nagyban változhat abban az esetben ha Ön
                    pénzügyi előkészítést vállal a könyvelés számára
                  </Warning>
                </Header>
              </CalculatorHeader>
              <CardRow>
                <Catalog />

                <CardCol>
                  <form className="mx-3 grey-text">
                    <label htmlFor="type"> Vállalkozása típusa</label>
                    <Select
                      className={cls}
                      id="type"
                      name="type"
                      value={process.type}
                      onChange={toggle}
                    >
                      <option value="" disabled hidden>
                        Kérjük válasszon...
                      </option>
                      <option name="type" value={Type.EV}>
                        Egyéni vállalkozó
                      </option>
                      <option name="type" value={Type.KFT}>
                        Korlátolt felelősségű társaság
                      </option>
                      <option name="type" value={Type.BT}>
                        Betéti társaság
                      </option>
                      <option name="type" value={Type.NP}>
                        Nonprofit szervezet
                      </option>
                    </Select>
                    <Collapse collapse={process.collapseKata}>
                      <Kata>
                        <h5>Ön vagy az Ön cége KATÁS?</h5>
                        <div>
                          <MDBBtn onClick={computeKata} icon="thumbs-up">
                            Igen
                            <MDBIcon icon="thumbs-up" className="ml-2" far />
                          </MDBBtn>
                          <MDBBtn onClick={activateMoreSelect}>
                            Nem{" "}
                            <MDBIcon icon="thumbs-down" className="ml-2" far />
                          </MDBBtn>
                        </div>
                      </Kata>
                    </Collapse>
                    <Collapse collapse={process.collapseMore}>
                      <label htmlFor="numberOfB">
                        {" "}
                        Bizonylatok száma havonta(kp-s számlák, pénztár napi
                        zárások, átutalásos számlák,bankszámlakivonatokon
                        szereplő tételek )
                      </label>
                      <Select
                        className="browser-default custom-select"
                        id="numberOfB"
                        name="numberOfB"
                        value={process.numberOfB}
                        onChange={handleChange}
                      >
                        <option name="numberOfB" value={NumberOfB["1-50"]}>
                          1-50
                        </option>
                        <option name="numberOfB" value={NumberOfB["51-100"]}>
                          51-100
                        </option>
                        <option name="numberOfB" value={NumberOfB["101-200"]}>
                          101-200
                        </option>
                        <option name="numberOfB" value={NumberOfB["201-300"]}>
                          201-300
                        </option>
                        <option name="numberOfB" value={NumberOfB["301-500"]}>
                          301-500{" "}
                        </option>
                        <option
                          name="numberOfB"
                          value={NumberOfB["500 felett"]}
                        >
                          500 felett{" "}
                        </option>
                      </Select>
                      <label htmlFor="netto"> Éves nettó árbevétel</label>
                      <Select
                        className="browser-default custom-select"
                        id="netto"
                        name="netto"
                        value={process.netto}
                        onChange={handleChange}
                      >
                        <option name="netto" value={Netto["0-10 millióig"]}>
                          0-10 millióig
                        </option>
                        <option name="netto" value={Netto["11-50 millióig"]}>
                          11-50 millióig
                        </option>
                        <option name="netto" value={Netto["51-100 millióig"]}>
                          51-100 millióig
                        </option>
                        <option name="netto" value={Netto["101-500 millióig"]}>
                          101-500 millióig
                        </option>
                        <option name="netto" value={Netto["500 millió felett"]}>
                          500 millió felett
                        </option>
                      </Select>
                      <label htmlFor="numberOfA"> Áfa gyakorisága</label>
                      <Select
                        className="browser-default custom-select"
                        id="numberOfA"
                        name="numberOfA"
                        value={process.numberOfA}
                        onChange={handleChange}
                      >
                        <option
                          name="numberOfA"
                          value={NumberA["nem vagyok áfa adóalany"]}
                        >
                          nem vagyok áfa adóalany
                        </option>
                        <option name="numberOfA" value={NumberA.havi}>
                          havi
                        </option>
                        <option name="numberOfA" value={NumberA.negyedéves}>
                          negyedéves
                        </option>
                        <option name="numberOfA" value={NumberA.éves}>
                          éves
                        </option>
                      </Select>
                      <label htmlFor="numberOfD">Devizás forgalom</label>
                      <select
                        className="browser-default custom-select"
                        id="numberOfD"
                        name="numberOfD"
                        value={process.numberOfD}
                        onChange={handleChange}
                      >
                        <option name="numberOfD" value={NumberOfD.Nem}>
                          Nem
                        </option>
                        <option
                          name="numberOfD"
                          value={NumberOfD["Igen, jelentős"]}
                        >
                          Igen, jelentős
                        </option>
                        <option
                          name="numberOfD"
                          value={NumberOfD["Igen, nem jelentős"]}
                        >
                          Igen, nem jelentős
                        </option>
                      </select>
                    </Collapse>
                    <InputBox>
                      <label htmlFor="fix">Havidíjas alkalmazottak száma</label>
                      <input
                        onChange={handleChange}
                        name="fix"
                        type="text"
                        group
                      />
                    </InputBox>
                    <InputBox>
                      <label htmlFor="fix">
                        Nem havidíjas alkalmazottak száma
                      </label>
                      <input
                        onChange={handleChange}
                        id="other"
                        name="other"
                        group
                        type="text"
                      />
                    </InputBox>
                  </form>
                </CardCol>
              </CardRow>
            </MDBContainer>
            <MDBCardFooter>
              <Modal id={"table"}>
                <Btn
                  color="unique"
                  disabled={process?.disabled}
                  onClick={computeValue}
                >
                  Számolás
                  <MDBIcon far icon="paper-plane" className="ml-2" />
                </Btn>
                {process.isVisible && <TableData />}
              </Modal>
            </MDBCardFooter>
          </Card>
        </Row>
      </SimpleFade>
    </CalculatorContainer>
  )
}

export default withWindowSize(Calculator)
