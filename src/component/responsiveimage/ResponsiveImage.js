import React from "react";

const ResponsiveImage = (props) => (
    <img  srcSet={props.srcSet} className={props.className} src={props.src} alt={props.alt} style={props.style}/>
);

export default ResponsiveImage;