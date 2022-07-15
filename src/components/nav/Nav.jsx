import React from 'react';
import './Nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BsInfoSquare } from 'react-icons/bs';
import { RiTeamLine } from 'react-icons/ri';
import { AiOutlineFolderOpen } from 'react-icons/ai';
import { RiServiceLine } from 'react-icons/ri';
import { TbMessage } from 'react-icons/tb';

const Nav = () => {
  const [activeNav, setActiveNav] = React.useState('#home');

  return (
    <nav>
      <a
        onClick={() => setActiveNav('#home')}
        className={activeNav === '#home' ? 'active' : ''}
        href="#top"
      >
        <AiOutlineHome />{' '}
      </a>

      <a
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
        href="#about"
      >
        <BsInfoSquare />{' '}
      </a>

      <a
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
        href="#experience"
      >
        <RiTeamLine />{' '}
      </a>

      <a
        onClick={() => setActiveNav('#service')}
        className={activeNav === '#service' ? 'active' : ''}
        href="#services"
      >
        <RiServiceLine />{' '}
      </a>

      <a
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
        href="#portfolio"
      >
        <AiOutlineFolderOpen />{' '}
      </a>

      <a
        onClick={() => setActiveNav('#contacts')}
        className={activeNav === '#contacts' ? 'active' : ''}
        href="#contacts"
      >
        <TbMessage />{' '}
      </a>
    </nav>
  );
};

export default Nav;
