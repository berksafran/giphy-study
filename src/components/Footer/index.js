import React from "react";
import { FooterWrapper } from "./styles/styles";
import FooterImage from "./footer.svg";

function Footer() {
  return (
    <FooterWrapper>
      <p>by Berk Safranbolulu | 2020</p>
      <img src={FooterImage} alt="Footer" />
    </FooterWrapper>
  );
}

export default Footer;
