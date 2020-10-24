import React from "react";
import ResponsiveImage from "../../responsiveimage/ResponsiveImage";

import Second_1920 from "../../../assets/second_1920.webp";
import Second_1280 from "../../../assets/second_1280.webp";
import Second_980 from "../../../assets/second_980.webp";
import Second_720 from "../../../assets/second_720.webp";
import Second_580 from "../../../assets/second_580.webp";
import Second_420 from "../../../assets/second_420.webp";
import Second_360 from "../../../assets/second_360.webp";

const SecondImage = () => {

    return (
        <ResponsiveImage src={Second_360} srcSet={`${Second_360} 360w, ${Second_420}
         420w ,${Second_580} 580w ,${Second_720} 720w ,${Second_980} 980w ,${Second_1280} 1280w, ${Second_1920} 1920w`}
            alt={"Second slide image"} style={{ maxHeight: "100vh" }}
            className="d-block w-100" />
    )
}

export default SecondImage;