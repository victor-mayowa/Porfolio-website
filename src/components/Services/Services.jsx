import React from "react";
import "./Services.css";
import { BsCheck } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
        <article className="service">
          <div className="service__header">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF ARTICLE ONE */}

        <article className="service">
          <div className="service__header">
            <h3>Web development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF ARTICLE TWO */}

        <article className="service">
          <div className="service__header">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF ARTICLE THREE */}
      </div>
    </section>
  );
};

export default Services;
