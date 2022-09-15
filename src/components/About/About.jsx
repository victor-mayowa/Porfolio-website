import React from "react";
import "./About.css";
import PIC from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Known</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__pic">
          <div className="about__pic-image">
            <img src={PIC} alt="pics" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icons" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icons" />
              <h5>Client</h5>
              <small>300+ world wide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icons" />
              <h5>Project</h5>
              <small>80+ completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            praesentium error dolorum repudiandae quas at facere esse ab harum
            consectetur eius, dolorem mollitia, dolores tenetur facilis.
            Corrupti alias ullam quidem!
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
