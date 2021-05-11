import {
  MDBCard,
  MDBCardHeader,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
  MDBTypography,
} from "mdbreact"
import React from "react"
import styled from "styled-components"

const CardCol = styled(MDBCol)`
  min-width: 20rem;
  @media screen and (max-width: 450px) {
    margin-top: 2rem;
  }
`

const CatalogWrapper = styled(MDBListGroup)`
  font-size: 0.9rem;
  @media screen and (max-width: 400px) {
    font-size: 0.8rem;
  }
`

const Catalog = () => {
  return (
    <CardCol>
      <MDBCard border="rgba-teal-strong">
        <MDBCardHeader>
          <MDBTypography tag="p">Bruttó áraink</MDBTypography>
        </MDBCardHeader>
        <div style={{ textAlign: "center" }}>
          <CatalogWrapper>
            <MDBListGroupItem hover>
              <MDBTypography tag="p">
                Egyéni vállalkozás 8.000 Ft -tól /hó
              </MDBTypography>
            </MDBListGroupItem>
            <MDBListGroupItem hover>
              <MDBTypography tag="p">
                Betéti társaság 10.000 Ft -tól/ hó
              </MDBTypography>
            </MDBListGroupItem>
            <MDBListGroupItem hover>
              <MDBTypography tag="p">
                Korlátolt felelősségű társaság 15.000 Ft -tól / hó
              </MDBTypography>
            </MDBListGroupItem>
            <MDBListGroupItem hover>
              <MDBTypography tag="p">
                Bérszámfejtés 1500 Ft-tól fő / hó
              </MDBTypography>
            </MDBListGroupItem>
            <MDBListGroupItem hover>
              <MDBTypography tag="p">
                Év végi zárás, beszámoló készítés + 1 havi díjért
              </MDBTypography>
            </MDBListGroupItem>
          </CatalogWrapper>
        </div>
      </MDBCard>
    </CardCol>
  )
}

export default Catalog
