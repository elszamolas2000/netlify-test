import React, { useState } from "react"
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
} from "mdbreact"

import withWindowSize from "../hoc/withWindowSize"
import NavLink from "../nav/navlink"
import SEO from "../seo"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import Logo from "../queries/logo"

const Navbar = styled(MDBNavbar)`
  ${props => {
    if (props.sm === "true") {
      return ` background-color: #4B515D;`
    }
  }}
`

const ImgWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`

const ImgBox = styled.div`
  width: 50px;
  height: 50px;
  ${props => {
    if (props.sm === "true") {
      return `
        width:30px;
        height:30px;
      `
    }
  }}
`

const Title = styled.strong`
  margin-left: 10px;
  ${props => {
    if (props.sm === "true") {
      return `
    margin-left: 7px;
     fontSize: "1rem";`
    }
  }}
`
const Header = ({ windowWidth }) => {
  const [seo, setSeo] = useState({
    title: "Elszámolás 2000 Bt.-Könyvelés Egerben",
    description:
      "Az Elszámolás 2000 Bt. több éves tapasztalattal végzi precíz munkáját a könyvelés, bérszámfejtés, adóbevallás, konzultáció, mérleg készítés és könyvelési tanácsadás területén Egerben.",
    collapse: false,
  })

  const scrollToDiv = id => {
    const anchor = document.querySelector(id)
    anchor.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    })
    let vcc = {
      title: "Könyvelés felsőfokon Egerben",
      description:
        "Az Elszámolás 2000 Bt. több éves tapasztalattal végzi precíz munkáját a könyvelés, bérszámfejtés, adóbevallás, konzultáció, mérleg készítés és könyvelési tanácsadás területén Egerben.",
    }
    if (id === "#home") {
      vcc = {
        title: "Bemutatkozás",
        description:
          "Az Elszámolás 2000 Bt. bemutatkozás: precizítás, megbízhatóság, magas minőség",
      }
    }
    if (id === "#service") {
      vcc = {
        title: "Szolgáltatásaink",
        description:
          "Szolgáltatásaink: könyvelés, bérszámfejtés, adóbevallás, konzultáció, mérleg készítés,munkaügy, könyvelési tanácsadás.",
      }
    }
    if (id === "#calculator") {
      vcc = {
        title: "Könyvelési díj kalkulátor",
        description:
          "A könyvelési díj kalkulátorral kiszámolhatja, mennyibe kerülne Önnek, ha igénybe venné a szolgáltatásainkat.",
      }
    }
    if (id === "#contact") {
      vcc = {
        title: "Kapcsolat",
        description:
          "Küldjön üzenetet, vagy vegye fel a kapcsolatot velünk a megadott elérhetőségeink egyikén",
      }
    }
    if (windowWidth > 992) {
      setSeo({
        ...seo,
        title: vcc.title,
        description: vcc.description,
      })
    }
    if (windowWidth < 992) {
      const collaspse = id === "#welcome" ? false : !seo.collapse
      setSeo({
        collapse: collaspse,
        title: vcc.title,
        description: vcc.description,
      })
    }
  }
  const image = Logo()?.data?.childImageSharp.gatsbyImageData
  return (
    <>
      <SEO title={seo.title} description={seo.description} />
      <MDBContainer fluid>
        <header>
          <Navbar
            sm={(seo.collapse && windowWidth < 400).toString()}
            color="stylish-color"
            fixed="top"
            dark
            expand="lg"
            scrolling
            transparent
          >
            <MDBNavbarBrand>
              <NavLink
                href="/#egri-konyveloiroda"
                onClick={() => scrollToDiv("#welcome")}
                empty
              >
                <ImgWrapper>
                  <ImgBox sm={(windowWidth < 600).toString()}>
                    <GatsbyImage
                      image={image}
                      alt="Az Elszámolás 2000 Bt. logója"
                    />
                  </ImgBox>
                  <Title sm={(windowWidth < 600).toString()}>
                    Elszámolás 2000 Bt.
                  </Title>
                </ImgWrapper>
              </NavLink>
            </MDBNavbarBrand>
            <MDBNavbarToggler
              aria-label="Menü gomb a navigációhoz"
              onClick={() => setSeo({ ...seo, collapse: !seo.collapse })}
            />
            <MDBCollapse isOpen={seo.collapse} navbar>
              <MDBNavbarNav right>
                <div>
                  <NavLink
                    href="/#bemutatkozas"
                    onClick={() => scrollToDiv("#home")}
                    title="Bemutatkozás"
                    icon="info-circle"
                  />
                </div>
                <div>
                  <NavLink
                    href="/#szolgaltatasaink"
                    onClick={() => scrollToDiv("#service")}
                    title="Szolgáltatásaink"
                    icon="chart-pie"
                  />
                </div>
                <div>
                  <NavLink
                    href="/#kalkulator"
                    title="Könyvelési díj kalkulátor"
                    onClick={() => scrollToDiv("#calculator")}
                    icon="calculator"
                  />
                </div>
                <div>
                  <NavLink
                    href="/#kapcsolat"
                    title="Kapcsolat"
                    onClick={() => scrollToDiv("#contact")}
                    icon="headphones-alt"
                  />
                </div>
              </MDBNavbarNav>
            </MDBCollapse>
          </Navbar>
        </header>
      </MDBContainer>
    </>
  )
}

export default withWindowSize(Header)
