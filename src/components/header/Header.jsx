import React from 'react';
import './Header.css';
import CTA from './CTA';
import MainImg from '../../assets/MainOwner.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header id="#top">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Khurram Mehmood</h1>
        <h5 className="text-light">
          Senior Application Architect at Amazon Web Services (AWS)
        </h5>
        <CTA />
        <HeaderSocials />
        <div className="main-img">
          <img src={MainImg} alt="Portfolio Owner" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
