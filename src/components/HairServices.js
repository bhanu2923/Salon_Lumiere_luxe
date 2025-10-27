import React from 'react';
import ServicePage1 from './servicePage1';
import HairExtensions from './HairExtensions';
import HairCare from './HairCare';
import Footer from './Footer';
import '../styles/HairServices.css';

const HairServices = () => {
  return (
    <>
      <div className="hair-services-container">
        <ServicePage1 />
        <HairExtensions />
        <HairCare />
      </div>
      <Footer />
    </>
  );
};

export default HairServices;
