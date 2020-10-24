import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React, { Component } from "react";

import "./Home.scss";
import { Roll } from "react-awesome-reveal";
import withWindowSize from '../hoc/withWindowSize/withWindowSize';
import Panel from "..//panel/Panel";


class Home extends Component {


    render() {
        const isWide = this.props.windowWidth > 1198 ? <Roll cascade duration={60} direction={"right"} className={"home-title--misc"}>  Több, mint 20 éve cégünk kezdő és már működő cégek (Kft, Bt),
        egyéni vállalkozások és non-profit szervezetek teljes körű könyvelését vállalja. </Roll> : " Több, mint 20 éve cégünk kezdő és már működő cégek (Kft, Bt), egyéni vállalkozások és non-profit szervezetek teljes körű könyvelését vállalja."
        return (
            <MDBContainer fluid className={ this.props.windowWidth > 900 ? "home-lg" :
                this.props.windowWidth > 600 ? " home-md" : "home"} id="home">
                <MDBRow className={"home-title"} >
                    <MDBCol>
                        {isWide}

                    </MDBCol>

                </MDBRow>
                <div className="home-welcome">



                    <Panel className="first" color="first" title="Test" icon="briefcase" content="A könyvelési anyagért szükség szerint Egerben és környékén házhoz megyünk." />


                    <Panel className="second" color="second" icon="at" content=" Garantáljuk a gyors választ elektronikus üzeneteire, hívását személyesen fogadjuk." />

                    <Panel className="third" color="third" icon="university" content="Felsőfokú szakmai képesítéssel rendelkezünk (közgazdász, valamint mérlegképes könyvelő)." />

                    <Panel className="fourth" color="fourth" icon="credit-card" content="Ügyfeleinkkel szerződést kötünk, munkánkról számlát adunk, anyagi felelősséget vállalunk." />


                </div>
            </MDBContainer>
        )
    }

}

export default withWindowSize(Home);
