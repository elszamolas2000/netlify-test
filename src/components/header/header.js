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
  const [collapse, setCollapse] = useState(false)
  const schemeMarkup = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "Elszámolás 2000 Bt.",
    image:
      "https://elszamolas2000bt.hu/static/3b4e221b44c21bc74254c678f7805949/1f187/logo.webp",
    "@id": "",
    url: "https://elszamolas2000bt.hu/",
    telephone: "+36/30-8696-420",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Veres Péter út 3.",
      addressLocality: "Eger",
      postalCode: "3300",
      addressCountry: "HU",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    sameAs:
      "https://www.facebook.com/pages/category/Financial-Service/Elsz%C3%A1mol%C3%A1s-2000-BT-113031620117233/",
  }
  const scrollToDiv = id => {
    const anchor = document.querySelector(id)
    anchor.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    })

    if (windowWidth < 992) {
      const collaspse = id === "#welcome" ? false : !collapse
      setCollapse(collaspse)
    }
  }
  const image = Logo()?.data?.childImageSharp.gatsbyImageData
  return (
    <>
      <SEO
        title={"Könyvelés felsőfokon Egerben"}
        description={
          "Az Elszámolás 2000 Bt. több éves tapasztalattal végzi precíz munkáját a könyvelés, bérszámfejtés, adóbevallás, konzultáció, mérleg készítés és könyvelési tanácsadás területén Egerben."
        }
        schemeMarkup={schemeMarkup}
      />
      <MDBContainer fluid>
        <header>
          <Navbar
            sm={(collapse && windowWidth < 400).toString()}
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
              onClick={() => setCollapse(!collapse)}
            />
            <MDBCollapse isOpen={collapse} navbar>
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
