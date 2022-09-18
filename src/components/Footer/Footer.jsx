import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#/" className="footer__logo">
        MOLLY
      </a>

      <ul className="permalinks">
        <li>
          <a href="#/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#service">Service</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonial</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="/">
          <FaFacebookF />
        </a>
        <a href="/">
          <AiFillInstagram />
        </a>
        <a href="/">
          <BsTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Christopher Molly. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
