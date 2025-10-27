import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import HomeSection2 from './components/HomeSection2';
import HairServices from './components/HairServices';
import HairCare from './components/HairCare';
import Contact from './components/Contact';
import Blog from './components/Blog';
import BookNow from './components/BookNow';
import SkinAndThreading from './components/SkinAndThreading';
import Facials from './components/Facials';
import Bleach from './components/Bleach';
import NailServices from './components/NailServices';
import MP from './components/MP';
import LuxuryExtensions from './components/LuxuryExtensions';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ExploreServices from './components/ExploreServices';
import './styles/Footer.css';
import './styles/servicePage1.css';
import './styles/HairExtensions.css';
import './styles/Contact.css';
import './styles/Blog.css';
import './styles/BookNow.css';
import './styles/Threading.css';
import './styles/NailArt.css';
import './styles/LuxuryExtensions.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <>
            <HomeSection2 />
            <Footer />
          </>
        } />
        <Route path="/services" element={
          <>
            <ExploreServices />
            <Footer />
          </>
        } />
        <Route path="/services/hair" element={
          <HairServices />
        } />
        <Route path="/services/extensions" element={
          <HairServices />
        } />
        <Route path="/services/skin" element={
          <>
            <SkinAndThreading />
            <Footer />
          </>
        } />
        <Route path="/services/nail-care" element={
          <>
            <NailServices />
            <Footer />
          </>
        } />
        <Route path="/services/manicure-pedicure" element={
          <>
            <MP />
            <Footer />
          </>
        } />
        <Route path="/services/luxury-extensions" element={
          <>
            <LuxuryExtensions />
            <Footer />
          </>
        } />
        
        <Route path="/services/care" element={
          <HairCare />
        } />
        <Route path="/contact" element={
          <>
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/blog" element={
          <>
            <Blog />
            <Footer />
          </>
        } />
        <Route path="/book" element={
          <>
            <BookNow />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
