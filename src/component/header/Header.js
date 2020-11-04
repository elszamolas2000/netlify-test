import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBContainer } from 'mdbreact';
import Logo from "../../assets/logo.webp";
import "./Header.scss";


import withWindowSize from '../hoc/withWindowSize/withWindowSize';
import NavLink from '../nav/NavLink';
import { HelmetProvider, Helmet  } from 'react-helmet-async';



class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      seo: {
        title: "Elszámolás 2000 Bt.-Könyvelés Egerben",
        description: "Az Elszámolás 2000 Bt. több éves tapasztalattal végzi precíz munkáját a könyvelés, bérszámfejtés, adóbevallás, konzultáció, mérleg készítés és könyvelési tanácsadás területén Egerben."
      }

    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }





  scrollToDiv = (id) => {
    const anchor = document.querySelector(id)
    anchor.scrollIntoView({
      behavior: 'smooth',
      block: 'start', inline: "nearest"
    });
    let vcc = {
      title: "Elszámolás 2000 Bt.-Könyvelés felsőfokon Egerben",
      description: "Az Elszámolás 2000 Bt. több éves tapasztalattal végzi precíz munkáját a könyvelés, bérszámfejtés, adóbevallás, konzultáció, mérleg készítés és könyvelési tanácsadás területén Egerben."
    };
    if (id === "#home") {
      vcc = {
        title: "Elszámolás 2000 Bt.-Bemutatkozás",
        description: "Az Elszámolás 2000 Bt. bemutatkozás: precizítás, megbízhatóság, magas minőség"
      };
    }
    if (id === "#service") {
      vcc = {
        title: "Elszámolás 2000 Bt.-Szolgáltatásaink",
        description: "Szolgáltatásaink: könyvelés, bérszámfejtés, adóbevallás, konzultáció, mérleg készítés,munkaügy, könyvelési tanácsadás."
      };
    }
    if (id === "#calculator") {
      vcc = {
        title: "Elszámolás 2000 Bt.-Könyvelési díj kalkulátor",
        description: "A könyvelési díj kalkulátorral kiszámolhatja, mennyibe kerülne Önnek, ha igénybe venné a szolgáltatásainkat."
      };
    }
    if (id === "#contact") {
      vcc = {
        title: "Elszámolás 2000 Bt.-Kapcsolat",
        description: "Küldjön üzenetet, vagy vegye fel a kapcsolatot velünk a megadott elérhetőségeink egyikén"
      };

    }
    if (this.props.windowWidth > 992) {
      this.setState({
        seo: vcc
      });
    }
    if (this.props.windowWidth < 992) {
      const collaspse = id === "#welcome" ? false : !this.state.collapse;
      this.setState({
        collapse: collaspse,
        seo: vcc
      });
    }

  }

  render() {



    return (
      <HelmetProvider>
        <Helmet>
          <title>{this.state.seo.title}</title>
          <link rel="canonical" href={"https://elszamolas2000bt.hu"} />
          <meta name="description" content={this.state.seo.description} />
        </Helmet>
        <MDBContainer fluid>
          <header>
            <MDBNavbar className={this.state.collapse && this.props.windowWidth < 400 ? "navbar-color" : undefined} color="stylish-color" fixed="top" dark expand="lg" scrolling transparent>
              <MDBNavbarBrand >
                <NavLink onClick={() => this.scrollToDiv("#welcome")} empty><div style={{ cursor: "pointer" }}>
                  <img src={Logo} alt="logo" width={this.props.windowWidth < 600 ? "30px" : "50px"} />
                  <strong style={this.props.windowWidth < 600 ? { marginLeft: "7px", fontSize: "1rem" } : { marginLeft: "10px" }}>Elszámolás 2000 Bt.</strong>
                </div></NavLink>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.onClick} />
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav right >

                  <MDBNavItem>
                    <NavLink onClick={() => this.scrollToDiv("#home")}
                      title="Bemutatkozás" icon="info-circle" />
                  </MDBNavItem>
                  <MDBNavItem>
                    <NavLink onClick={() => this.scrollToDiv("#service")}
                      title="Szolgáltatásaink" icon="chart-pie" />
                  </MDBNavItem>
                  <MDBNavItem>
                    <NavLink title="Könyvelési díj kalkulátor" onClick={() => this.scrollToDiv("#calculator")} icon="calculator" />

                  </MDBNavItem>
                  <MDBNavItem>
                    <NavLink title="Kapcsolat" onClick={() => this.scrollToDiv("#contact")} icon="headphones-alt" />


                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
        </MDBContainer>
      </HelmetProvider>
    )
  }

};

export default withWindowSize(Header);