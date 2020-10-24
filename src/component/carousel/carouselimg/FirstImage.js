import React from "react";
import ResponsiveImage from "../../responsiveimage/ResponsiveImage";

import First_1920 from "../../../assets/first_1920.webp";
import First_1280 from "../../../assets/first_1280.webp";
import First_980 from "../../../assets/first_980.webp";
import First_720 from "../../../assets/first_720.webp";
import First_580 from "../../../assets/first_580.webp";
import First_420 from "../../../assets/first_420.webp";
import First_360 from "../../../assets/first_360.webp";

const FirstImage = () => {

    return (
        <ResponsiveImage  srcSet={`${First_360} 360w, ${First_420}
         420w ,${First_580} 580w ,${First_720} 720w ,${First_980} 980w ,${First_1280} 1280w, ${First_1920} 1920w`}
            alt={"First slide image"} style={{ maxHeight: "100vh" }} src={First_360}
            className="d-block w-100" />
    )
}

export default FirstImage;