import React from 'react';
import skinImage from '../assets/skinandbodyimg.png';
import '../styles/Skin.css';

const Skin = () => {
  
  return (
    <div className="skin-page">
      <div className="skin-content">
        <div className="container">
          <h1>Skin & Body </h1>
          <p className="subtitle">At Lumiere Luxe, beauty begins with care</p>
          <p className="description">
            Our skin and body rituals are thoughtfully designed to restore balance, clarity, and radiance. 
            Each treatment blends advanced skincare science with the art of touch ensuring results that 
            feel as good as they look.
          </p>
         
          <div className="skin-bottom-image">
            <img src={skinImage} alt="Skin care" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skin;
