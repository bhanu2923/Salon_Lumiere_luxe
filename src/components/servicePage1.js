import React from 'react';
import '../styles/servicePage1.css';

// Import images from assets
import hair1 from '../assets/hair1.png';
import hair2 from '../assets/hair2.png';
import hair3 from '../assets/hair3.png';
import scissors from '../assets/scissors.png';

const ServicePage1 = () => {
  return (
    <div className="service-page1">
      <div className="service-hero">
        <div className="container">
          <h1 className="service-title">Hair Services</h1>
          <p className="service-content">
            At Lumiere Luxe, we believe hair is more than style — it's identity. Each strand tells a story of confidence, care, and character. 
            Our experts combine artistry with advanced hair science to craft looks that are timeless, healthy, and entirely you.
          </p>
        </div>
      </div>
      
      <div className="container">
        <div className="service-layout">
          <div className="image-content-wrapper">
            <div className="service-images">
              <img src={hair1} alt="Hair Style 1" className="service-image" />
              <img src={hair2} alt="Hair Style 2" className="service-image" />
              <img src={hair3} alt="Hair Style 3" className="service-image" />
            </div>
            <div className="service-details">
              <h2 className="service-heading">HAIR CUT</h2>
              <div className="service-description">
                <p>Precision meets personality. Our stylists take time to understand your features, lifestyle,
                and preferences before sculpting a look that feels naturally you. Whether you want a 
                subtle trim or a statement change, each cut is finished with expert detailing and restorative 
                care to keep your hair strong and radiant.</p>
                <p className="includes"><strong>Includes:</strong> Consultation / Luxury wash / Customized cut & finish</p>
                <img src={scissors} alt="Scissors" className="scissors-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage1;
