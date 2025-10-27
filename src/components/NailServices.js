import React from 'react';
import NailCare from './NailCare';
import NailArt from './NailArt';
import MP from './MP';
import LuxuryExtensions from './LuxuryExtensions';
import '../styles/NailServices.css';

const NailServices = () => {
  return (
    <div className="nail-services-container">
      <NailCare />
      <NailArt />
      <MP />
      <LuxuryExtensions />
    </div>
  );
};

export default NailServices;
