import React, { Component } from 'react';
import {
    MDBCard, MDBCardBody, MDBCardHeader,
    MDBRow, MDBContainer, MDBCol, MDBListGroup, MDBListGroupItem
} from "mdbreact";

import "./Service.scss";



import { AttentionSeeker } from 'react-awesome-reveal';

class Service extends Component {

    constructor() {
        super();
        this.state = {
            modal: false
        }
    }

    openModal = () => {
        this.setState({ modal: !this.state.modal });
    }

    render() {

        return (

            <MDBContainer id={"service"} className={"pd"} >
                {/* <Modal isOpen={this.state.modal} toggle={this.openModal} /> */}

                <MDBRow >
                    <AttentionSeeker effect="jello">
                        <MDBCard border="rgba-teal-strong" className="service">

                            <MDBCardHeader >Könyvelés</MDBCardHeader>
                            <MDBCardBody className="text-info">
                               
                                    <div className="fancy-box">
                                        <div className="first-s"></div>
                                        <MDBListGroup >
                                            <MDBListGroupItem hover>  Kettős könyvvitel: kimenő, bejövő számlák (devizában is),
                                            pénztárbizonylatok könyvelése (igény esetén kiállítása),
bankbizonylatok, vegyes bizonylatok, tárgyi eszközök nyilvántartása</MDBListGroupItem>
                                            <MDBListGroupItem hover>Pénztárkönyv vezetése</MDBListGroupItem>
                                            <MDBListGroupItem hover>Naplófőkönyv</MDBListGroupItem>
                                            <MDBListGroupItem hover>Adóbevallások elkészítése (havi, negyedéves, éves)</MDBListGroupItem>
                                            <MDBListGroupItem hover>Év végi zárás készítése</MDBListGroupItem>
                                            <MDBListGroupItem hover>Analitikák készítése</MDBListGroupItem>
                                            <MDBListGroupItem hover>Adatszolgáltatás hitelkérelemhez, pályázatokhoz</MDBListGroupItem>
                                            <MDBListGroupItem hover>Kapcsolattartás az adóhatósággal (adófolyószámla, egyeztetés, képviselet)</MDBListGroupItem>
                                        </MDBListGroup>
                                    </div>
                              
                            </MDBCardBody>
                        </MDBCard>
                    </AttentionSeeker>

                </MDBRow>

                <MDBRow center>
                <AttentionSeeker effect="jello">

                        <MDBCol className="md-4">
                            <MDBCard border="rgba-teal-strong"className="service" >
                                <MDBCardHeader >Munkaügyi feladatok, szabályzatok  és beszámoló elkészítése</MDBCardHeader>
                                <MDBCardBody className="text-info">
                                   
                                        <div className="fancy-box">
                                            <div className="second-s"></div>
                                            <MDBListGroup >
                                                <MDBListGroupItem hover>Bérszámfejtés</MDBListGroupItem>
                                                <MDBListGroupItem hover>Dolgozók ki- és bejelentése</MDBListGroupItem>
                                                <MDBListGroupItem hover>Munkaügyi nyilvántartások vezetése</MDBListGroupItem>
                                            </MDBListGroup>
                                        </div>
                                   
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                    </AttentionSeeker>
                    <AttentionSeeker effect="jello">

                        <MDBCol className="md-4">
                            <MDBCard border="rgba-teal-strong" className="service" >
                                <MDBCardHeader >Szabályzatok  és beszámoló elkészítése</MDBCardHeader>
                                <MDBCardBody className="text-info">
                                    
                                        <div className="fancy-box">
                                            <div className="third-s"></div>
                                            <MDBListGroup >
                                                <MDBListGroupItem hover>Számviteli szabályzatok készítése, aktualizálása</MDBListGroupItem>
                                                <MDBListGroupItem hover>Évközi és év végi mérleg</MDBListGroupItem>
                                                <MDBListGroupItem hover>Kiegészítő melléklet készítés</MDBListGroupItem>
                                            </MDBListGroup>
                                        </div>
                                   
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                        </AttentionSeeker>
                </MDBRow>           

            </MDBContainer >
        );
    }
};

export default Service;