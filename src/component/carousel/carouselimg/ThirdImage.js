import React from "react";
import ResponsiveImage from "../../responsiveimage/ResponsiveImage";

import Third_1920 from "../../../assets/third_1920.webp";
import Third_1280 from "../../../assets/third_1280.webp";
import Third_980 from "../../../assets/third_980.webp";
import Third_720 from "../../../assets/third_720.webp";
import Third_580 from "../../../assets/third_580.webp";
import Third_420 from "../../../assets/third_420.webp";
import Third_360 from "../../../assets/third_360.webp";

const ThirdImage = () => {

    return (
        <ResponsiveImage src={Third_360} srcSet={`${Third_360} 360w, ${Third_420}
         420w, ${Third_580} 580w ,${Third_720} 720w, ${Third_980} 980w ,${Third_1280} 1280w, ${Third_1920} 1920w`}
            alt={" Third slide image"} style={{ maxHeight: "100vh" }}
            className="d-block w-100" />
    )
}

export default ThirdImage;