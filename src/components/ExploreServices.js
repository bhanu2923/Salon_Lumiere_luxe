import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ExploreServices.css';

const ExploreServices = () => {
  // Sample services data with navigation paths
  const services = [
    {
      id: 1,
      title: 'Hair Styling',
      description: 'Transform your look with our expert hair styling services, from modern cuts to classic styles.',
      image: 'https://media.istockphoto.com/id/1147811403/photo/business-woman-lady-boss-in-beauty-salon-making-hairdress-and-looking-to-the-mirror.jpg?s=612x612&w=0&k=20&c=WmL2VgSEdUPI7W0ogFHuRtBsL0BFT6KYdLJ7cuadmHk=',
      category: 'Hair',
      path: '/services/hair'
    },
    {
      id: 2,
      title: 'Skin Care',
      description: 'Reveal your natural glow with our professional skin care treatments and facials.',
      image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000',
      category: 'Skin',
      path: '/services/skin'
    },
    {
      id: 3,
      title: 'Nail Care',
      description: 'Pamper yourself with our luxurious manicure and pedicure services.',
      image: 'https://media.istockphoto.com/id/914169004/photo/stylish-manicure-and-make-up-in-a-pale-pink-color.jpg?s=612x612&w=0&k=20&c=3XlOi5gfM7HlXLEuyn0XIHBwYiGalWlv742F9idfOas=',
      category: 'Nails',
      path: '/services/nail-care'
    },
    {
      id: 4,
      title: 'Makeup',
      description: 'Enhance your natural beauty with our professional makeup services for any occasion.',
      image: 'https://media.istockphoto.com/id/1340302535/photo/beautiful-indian-woman-getting-ready-to-a-wedding-reception-at-the-beauty-parlor.jpg?s=612x612&w=0&k=20&c=GzhivtaqLIDXBQ69R0DlIOfwY4aOYUI67gxWKTM3ooA=',
      category: 'Makeup',
      path: '/services/makeup'
    },
  ];

  return (
    <div className="services-page">
      <div className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Discover our comprehensive range of beauty and wellness services designed to pamper and transform</p>
        </div>
      </div>

      <div className="services-container">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <Link to={service.path} key={service.id} className="service-card-link">
                <div className="service-card">
                  <div className="service-image">
                    <img src={service.image} alt={service.title} />
                    <span className="service-category">{service.category}</span>
                  </div>
                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className="learn-more">
                      Learn More <span>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="container">
          <h2>Ready to Experience the Difference?</h2>
          <p>Book your appointment today and let our experts help you look and feel your best.</p>
          <Link to="/book" className="cta-button">Book Now</Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreServices;
