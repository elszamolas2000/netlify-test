import { MDBIcon } from "mdbreact";
import React, { Component } from "react";
import withWindowSize from "../hoc/withWindowSize/withWindowSize";

import "./NavLink.scss";

class NavLink extends Component {

    render() {
        const cls = this.props.windowWidth > 1396 ? "navlink-item" :
        "navlink-item navlink-item--lg";
        return (
            <div onClick={this.props.onClick} className={!this.props.empty ?cls:undefined}>
              {this.props.empty? this.props.children: <><MDBIcon  icon={this.props.icon} />
               <span className={"navlink-item--link" }>{this.props.title}</span></>}
                  
            </div>
        );
    }
}

export default withWindowSize(NavLink);