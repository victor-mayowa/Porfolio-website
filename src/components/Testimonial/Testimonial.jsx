import React from "react";
import "./Testimonial.css";
import Data from "./Data";
import TestimonialItem from "./TestimonialItem";
import { SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container testimonials__container"
      >
        {Data.map(({ avatar, name, review }) => {
          return (
            <SwiperSlide key={name} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt={avatar} />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
