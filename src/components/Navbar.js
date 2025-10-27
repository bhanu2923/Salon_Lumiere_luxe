import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/luxe-logo.png';

const Navbar = () => {

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="Lumiere Luxe Logo" style={{ height: '50px' }} />
      </Link>
      
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/services/hair" className="nav-link">Hair Care</Link>
        <Link to="/services/skin" className="nav-link">Skin & Body</Link>
        <Link to="/services/nail-care" className="nav-link">Nail Care</Link>
        <Link to="/blog" className="nav-link">Blogs</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
      
      <div className="cta-buttons">
        <Link to="/book" className="btn btn-book">Book Now</Link>
      </div>
    </nav>
  );
};

export default Navbar;
