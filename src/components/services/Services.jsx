import React from 'react';
import './Services.css';
import { BsCheck2Square } from 'react-icons/bs';

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2Square className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck2Square className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck2Square className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck2Square className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck2Square className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>WebDevelopment</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2Square className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck2Square className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck2Square className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck2Square className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck2Square className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck2Square className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck2Square className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Content Creations</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2Square className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck2Square className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck2Square className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck2Square className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck2Square className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
