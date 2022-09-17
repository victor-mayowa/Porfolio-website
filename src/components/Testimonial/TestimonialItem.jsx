import React from "react";
// import "./Testimonial.css";

const TestimonialItem = ({ avatar, name, review }) => {
  return (
    <article className="testimonial">
      <div className="client__avatar">
        <img src={avatar} alt={avatar} />
      </div>
      <h5 className="client__name">{name}</h5>
      <small className="client__review">{review}</small>
    </article>
  );
};

export default TestimonialItem;
