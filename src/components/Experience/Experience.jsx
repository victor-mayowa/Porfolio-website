import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div className="content">
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div className="content">
                <h4>CSS</h4>
                 <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div className="content">
                <h4>Javascript</h4>
                 <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div className="content">
                <h4>Tailwind</h4>
                 <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div className="content">
                <h4>Bootstrap</h4>
                 <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div className="content">
                <h4>React</h4>
                 <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div className="content">
                <h4>Node JS</h4>
                 <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div className="content">
                <h4>PHP</h4>
                 <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div className="content">
                <h4>Python</h4>
                 <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div className="content">
                <h4>MongoDB</h4>
                 <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div className="content">
                <h4>MySQL</h4>
                 <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
