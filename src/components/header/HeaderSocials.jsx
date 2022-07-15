import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaAws } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/khurram-mahmood-842ba51/?originalSubdomain=uk"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://www.github.com/" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.aws.com/" target="_blank" rel="noreferrer">
        <FaAws />
      </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
        <FaFacebookSquare />
      </a>
    </div>
  );
};

export default HeaderSocials;
