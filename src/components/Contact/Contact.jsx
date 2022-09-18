import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>christophermolly@gmail.com</h5>
            <a
              href="mailto:vikthour01@gamil.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Christopher Molly</h5>
            <a
              href="https://mobile.facebook.com/?_rdc=1&_rdr&tbua=1"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>Whatsapp</h4>
            <h5>09060186352</h5>
            <a
              href="https://www.whatsapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        <form>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
