import React, { useLayoutEffect, useState } from "react"
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
} from "mdbreact"

import Card from "../card/card"
import { Slide } from "react-awesome-reveal"
import withWindowSize from "../hoc/withWindowSize"
import { GatsbyImage } from "gatsby-plugin-image"
import { CarouselImg } from "../queries/carousel-img"
import styled from "styled-components"
import SimpleSlide from "../slide/simpleSlide"

const CarouselWrapper = styled.div`
  box-shadow: none;
  overflow: hidden;
`
const Carousel = ({ windowWidth }) => {
  const [matches, setMatches] = useState()

  useLayoutEffect(() => {
    setMatches(() => windowWidth < 1100)
  }, [windowWidth])
  const handleAnimation = () => {
    return (
      <div>
        <div>
          <Slide triggerOnce direction={"left"} duration={3000}>
            <Card
              icon="balance-scale"
              title="Könyvelés"
              text="Könyvviteli szolgáltatások Önre szabva"
            />
          </Slide>
        </div>

        <div>
          <Slide triggerOnce direction={"right"} duration={3000}>
            <Card
              icon="address-book"
              title="Magas szintű szolgáltatások"
              text="Ügyfeleink helyett mi tartjuk a kapcsolatot a NAV-val"
            />
          </Slide>
        </div>

        <div>
          <Slide triggerOnce direction={"up"} duration={3000}>
            <Card
              icon="hand-holding-usd"
              title="Kedvezmény új ügyfeleknek"
              text="50% kedvezmény az első két hónapban a könyvelési díjból."
            />
          </Slide>
          );
        </div>
      </div>
    )
  }
  const active = handleAnimation()
  return (
    <CarouselWrapper>
      <MDBCarousel
        interval={8000}
        activeItem={1}
        length={3}
        showControls={false}
        showIndicators={false}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView waves>
              <GatsbyImage
                image={CarouselImg()?.first?.childImageSharp?.gatsbyImageData}
                alt="Az első kép"
                className="d-block w-100"
              />
              <MDBMask overlay="black-strong" className="flex-center">
                {matches && (
                  <SimpleSlide direction={"left"}>
                    <Card
                      icon="briefcase"
                      title="Könyvelés"
                      text="Könyvviteli szolgáltatások Önre szabva"
                    />
                  </SimpleSlide>
                )}
                {!matches && active}
              </MDBMask>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView waves>
              <GatsbyImage
                className="d-block w-100"
                image={CarouselImg()?.second?.childImageSharp?.gatsbyImageData}
                alt="A második kép"
              />
              <MDBMask overlay="black-strong" className="flex-center">
                {matches && (
                  <SimpleSlide direction={"right"}>
                    <Card
                      icon="address-book"
                      title="Magas szintű szolgáltatások"
                      text="Ügyfeleink helyett mi tartjuk a kapcsolatot a NAV-val"
                    />
                  </SimpleSlide>
                )}
                {!matches && active}
              </MDBMask>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView waves>
              <GatsbyImage
                className="d-block w-100"
                image={CarouselImg()?.third?.childImageSharp?.gatsbyImageData}
                alt="A harmadik kép"
              />
              <MDBMask overlay="black-strong" className="flex-center">
                {matches && (
                  <SimpleSlide direction={"up"}>
                    <Card
                      icon="hand-holding-usd"
                      title="Kedvezmény új ügyfeleknek"
                      text="50% kedvezmény az első két hónapban a könyvelési díjból."
                    />
                  </SimpleSlide>
                )}
                {!matches && active}
              </MDBMask>
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </CarouselWrapper>
  )
}

export default withWindowSize(Carousel)
