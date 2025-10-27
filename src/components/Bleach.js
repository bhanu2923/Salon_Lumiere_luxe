import React from 'react';
import { Link } from 'react-router-dom';
import bleachDeTan1 from '../assets/bleachde-tan1.png';
import bleachDeTan2 from '../assets/bleachde-tan2.png';
import '../styles/Bleach.css';

const Bleach = () => {
  return (
    <div className="bleach-page">
      {/* Content Section */}
      <section className="bleach-content">
        <div className="container">
          <div className="bleach-grid">
            <div className="bleach-images">
              <div className="bleach-image-container">
                <img src={bleachDeTan1} alt="Bleach Treatment" className="bleach-img" />
              </div>
              <div className="bleach-image-container">
                <img src={bleachDeTan2} alt="De-Tan Treatment" className="bleach-img" />
              </div>
            </div>

            <div className="bleach-text">
              <h2>Bleach & De-Tan</h2>
              <p>
                Reveal your natural glow. Our skin-brightening and tan-removal treatments even out tone, 
                restore freshness, and renew radiance - safely and effectively.
              </p>
              <p>
                <strong>Includes:</strong> Facial bleach / Body de-tan / Post-care hydration
              </p>
              <div className="scissors-container">
                <Link to="/booking">
                  <img 
                    src={require('../assets/arrow.png')} 
                    alt="Book Now" 
                    className="scissors-image"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bleach;
