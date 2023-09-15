import { createGlobalStyle } from "styled-components";
// imports background image
// import background_image from "../../assets/background_image.png";

const GlobalStyles = createGlobalStyle`


    //* brush script mt font if we want to match the logo
    body {
        font-family: Arial, Helvetica, sans-serif;
    }
    `;

export default GlobalStyles;


// if we want to add a background-image
/* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background_image});
background-size: cover;
background-position: center; */
