import React from 'react';
import './Footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        WebSolutions
      </a>
      <ul className="footer__links">
        <li>
          <a href="#top">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Service</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://github.com">
          <FaGithub />
        </a>
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All rights reserved. Designed by WebSolutions</small>
      </div>
    </footer>
  );
};

export default Footer;
