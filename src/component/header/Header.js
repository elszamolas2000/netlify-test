import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBContainer } from 'mdbreact';
import Logo from "../../assets/logo.webp";
import "./Header.scss";


import withWindowSize from '../hoc/withWindowSize/withWindowSize';
import NavLink from '../nav/NavLink';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
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
    if (id !== "#welcome" && this.props.windowWidth < 992) {
      this.setState({
        collapse: !this.state.collapse
      });
    }
  }

  render() {
 


    return (
      <MDBContainer fluid>
        <header>
          <MDBNavbar className={this.state.collapse && this.props.windowWidth < 400 && "navbar-color"} color="stylish-color" fixed="top" dark expand="lg" scrolling transparent>
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
    )
  }
  
};

export default withWindowSize(Header);