import React from 'react';
import Skin from './Skin';
import Threading from './Threading';
import Bleach from './Bleach';
import Facials from './Facials';
import '../styles/SkinAndThreading.css';

const SkinAndThreading = () => {
  return (
    <div className="skin-and-threading-container">
      <Skin />
      <Threading />
      <Bleach />
      <Facials />
    </div>
  );
};

export default SkinAndThreading;
