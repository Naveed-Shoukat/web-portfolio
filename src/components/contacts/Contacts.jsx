import React, { useRef } from 'react';
import './Contacts.css';
import { MdOutlineMail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_portfolio_khurra',
        'temp_portfolio_khurram',
        form.current,
        'thhyfB2VLQrdWsHmd'
      )
      .then(
        (result) => {
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contacts">
      <h5>Get In Touch</h5>
      <h2>Contacts Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>shoukat.naveed@gmail.com</h5>
            <a
              href="mailto: shoukat.naveed@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send an Email message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>KhurramMehmood</h5>
            <a
              href="https://www.linkedin.com/in/khurram-mahmood-842ba51/details/skills/"
              target="_blank"
              rel="noreferrer"
            >
              Send a message on Messenger
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+90 534 352 1132</h5>
            <a
              href="https://api.whatsapp.com/send?phone=905343521132"
              target="_blank"
              rel="noreferrer"
            >
              Send message on WhatsApp
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Enter your Full Name"
            required
            // autoComplete="off"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            required
          />
          <textarea
            name="message"
            id=""
            rows="7"
            placeholder="Enter your Message"
            required
            spellCheck
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
