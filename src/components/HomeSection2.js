import React from 'react';
import { Link } from 'react-router-dom';
import './HomeSection2.css';
import saloon from '../assets/saloon.jpg';
const HomeSection2 = () => {
  return (
    <div className="home-section2">
      <div className="content-section">
        <h1>A Cut Above the Rest</h1>
        <p className="description">
          At Lumiere, we redefine luxury as personal, purposeful, and pure. Visionaries and insiders alike choose us for next-level hairdressing, makeup, aesthetics, massage therapy, and nail services.       </p>
        <p className="description">
          Our team of artisans curates tailored experiences in serene spaces, blending premium products with heartfelt care.
        </p>
        <Link to="/services" className="explore-button">Explore Services</Link>

        <div className="highlight-section">
          <h2>Why Lumiere</h2>
          <p className="highlight-description">
          </p>
          
          <ul className="features-list">
            <li>
              <span className="bullet">•</span>
              <span className="bold-text">Unrushed&nbsp;rituals</span><span className="highlight-text">&nbsp;for hair, skin, and soul.</span>
            </li>
            <li>
              <span className="bullet">•</span>
              <span className="bold-text">Sustainable&nbsp;luxury</span><span className="highlight-text">&nbsp;with eco-conscious products.</span>
            </li>
            <li>
              <span className="bullet">•</span>
              <span className="bold-text">A&nbsp;haven&nbsp;where</span><span className="highlight-text">&nbsp;every client feels like a luminary.</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="image-section">
        <img 
          src={saloon} 
          alt="Lumiere Salon" 
          className="salon-image"
        />
      </div>
    </div>
  );
};

export default HomeSection2;