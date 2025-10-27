import React from 'react';
import '../styles/servicePage1.css';

// Import images from assets
import extension1 from '../assets/hairextensions1.png';
import extension2 from '../assets/hairextensions2.png';
import extension3 from '../assets/hairextensions3.png';
import scissors from '../assets/scissors.png';

const HairExtensions = () => {
  return (
    <div className="service-page1 hair-extensions-section">
      <div className="container">
        <div className="service-layout">
          <div className="image-content-wrapper">
            <div className="service-details">
              <h2 className="service-heading">HAIR EXTENSIONS</h2>
              <div className="service-description">
                <p>
Length, volume, and versatility — redefined.Our premium extensions are crafted from 100%
human hair and seamlessly blended to match your natural texture. Applied with precision, they
move, feel, and style effortlessly, offering the fullness you’ve always desired.
</p>
                <p className="includes"><strong>Includes:</strong> Consulatation / Custom Shade Matching / Extension care guidance</p>
                <img src={scissors} alt="Scissors" className="scissors-icon" />
              </div>
            </div>
            <div className="service-images">
              <img src={extension1} alt="Hair Extensions 1" className="service-image" />
              <img src={extension2} alt="Hair Extensions 2" className="service-image" />
              <img src={extension3} alt="Hair Extensions 3" className="service-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HairExtensions;
