import React from 'react';
import './Portfolio.css';

import portfolioData from './PortfolioData';

const Portfolio = () => {
  const portfolioDataElement = portfolioData.map((item) => {
    return (
      <article key={item.id} className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={item.imgSrc} alt="portfolio" />
        </div>
        <h3>{item.title}</h3>
        <div className="portfolio__item-cta">
          <a
            href={item.codeLink}
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href={item.liveLink}
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </div>
      </article>
    );
  });

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioDataElement}
      </div>
    </section>
  );
};

export default Portfolio;
