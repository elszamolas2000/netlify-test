import React, { Component } from "react";


const NavLink =(props)=>{

        return (
            <div onClick={props.onClick} className={props.className}>
                {props.title}
            </div>
        );


}

export default NavLink;