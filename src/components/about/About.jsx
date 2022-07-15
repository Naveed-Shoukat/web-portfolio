import React from 'react';
import './About.css';
import MainOwner from '../../assets/MainOwner2.png';
import { RiTeamLine } from 'react-icons/ri';
import { AiOutlineFolderOpen } from 'react-icons/ai';
import { RiServiceLine } from 'react-icons/ri';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Myself</h2>
      <div className="continer about__container">
        <div className="about__myself">
          <img src={MainOwner} alt="Main Owner" />
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <RiTeamLine className="about__card_icon" />
              <h5>Experience</h5>
              <small>20+ years of working experience</small>
            </article>

            <article className="about__card">
              <AiOutlineFolderOpen className="about__card_icon" />
              <h5>Portfolio</h5>
              <small>500+ Projects</small>
            </article>

            <article className="about__card">
              <RiServiceLine className="about__card_icon" />
              <h5>Service</h5>
              <small>5+ years of AWS experience</small>
            </article>
          </div>
          <div className="about__cards_para">
            <p>
              Passionate IT leader with a proven track record of delivering
              results in the software lifecycle. Over last 20 years experience I
              have:
            </p>
            <p>
              Architected, Designed , Developed and managed large scale IT
              projects and also digital and cloud native transformation
              initiatives in some of the major banks as well as non financial
              organisations in the UK. - Extensive experience of reducing value
              stream delivery lead time, mean time to recover and error rate and
              increasing delivery frequency and creating products that customer
              love.
            </p>
          </div>

          <h2>Technology Skills</h2>
          <ul className="about__skills">
            <li>Amazon Web Services - AWS</li>
            <li>Cloud Native</li>
            <li>Lean Management</li>
            <li>Improving Delivery Frequency</li>
            <li>Coaching</li>
            <li>Continuous Improvement</li>
            <li>DevOps Culture</li>
            <li>Kotlin</li>
            <li>Java</li>
            <li>Spring Boot</li>
            <li>Reactive Programming</li>
            <li>Agile</li>
          </ul>
          <div className="about-btn">
            <a href="#contacts" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
