import React from "react";
import CTA from "./CTA";
import "./Header.css";
import Pic from "../../assets/me.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello i'm</h5>
        <h1>Christopher Molly</h1>
        <h5 className="text-light">fullstack developer</h5>
        <CTA />

        <HeaderSocial />

        <div className="me">
          <img src={Pic} alt="img" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
