import React from "react"
import { MDBContainer, MDBFooter, MDBRow } from "mdbreact"
import styled from "styled-components"

const Footers = styled(MDBFooter)`
  background-color: #4b515d;
`
const FooterWrapper = styled.div`
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
`

const Copyright = styled(MDBContainer)`
  font-size: 1rem;
  @media screen and (max-width: 600px) {
    font-size: 0.9rem;
  }
`

const Link = styled.a`
  transition: all 0.3s ease-in;
  &:hover{
    color: #39a2ae;
  }
`
const Footer = () => {
  return (
    <Footers className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <FooterWrapper className=" text-center py-3 ">
          <Copyright fluid>
            &copy; {new Date().getFullYear()} Copyright Elszámolás 2000 Bt.
          </Copyright>
        </FooterWrapper>
      </MDBContainer>
      <div>
        <MDBContainer fluid>
          <MDBRow center>
            <Link
              href="https://github.com/Pityubak"
              rel="noopener noreferrer"
              target="_blank"
            >
              Created by Pityubak
            </Link>
          </MDBRow>
        </MDBContainer>
      </div>
    </Footers>
  )
}

export default Footer
