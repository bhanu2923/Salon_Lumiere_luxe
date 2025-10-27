import React from 'react';
import '../styles/servicePage1.css';

// Import images from assets
import extension1 from '../assets/haircarerituals1.png';
import extension2 from '../assets/haircarerituals2.png';
import extension3 from '../assets/haircarerituals3.png';
import scissors from '../assets/scissors.png';

const HairExtensions = () => {
  return (
    <div className="service-page1 hair-care-section">
      <div className="container">
        <div className="service-layout">
          <div className="image-content-wrapper">
            <div className="service-images">
              <img src={extension1} alt="Hair Care 1" className="service-image" />
              <img src={extension2} alt="Hair Care 2" className="service-image" />
              <img src={extension3} alt="Hair Care 3" className="service-image" />
            </div>
            <div className="service-details">
              <h2 className="service-heading">HAIR CARE RITUALS</h2>
              <div className="service-description">
                <p>
                  
Luxury is in the details and in the way we care. Indulge in therapeutic scalp massages, Aromatherapy-infused washes, an customized nourishment masks that restore moisture, relieve stress, and promote healthy growth.

                </p>
                <p className="includes">
                  <strong>Includes:</strong>Scalp massage / Nourishment therapy 
/ Hair wellness consultation
                </p>
                <img src={scissors} alt="Scissors" className="scissors-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HairExtensions;
