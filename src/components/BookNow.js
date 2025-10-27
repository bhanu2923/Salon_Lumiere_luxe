import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/BookNow.css';

const BookNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your booking request! We will contact you shortly to confirm your appointment.');
  };

  return (
    <div className="book-now-page">
      {/* Hero Section */}
      <section className="booking-hero">
        <div className="container">
          <h1>Book an Appointment</h1>
          
          <p className="hero-subtitle">Schedule your perfect beauty experience</p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="booking-content">
        <div className="container">
          <div className="booking-container">
            <div className="booking-form-container">
              <h2>Make a Reservation</h2>
              <p className="form-intro">
                Fill out the form below to book your appointment. We'll get back to you shortly to confirm your booking.
              </p>
              
              <form className="booking-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="service">Service *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a Service</option>
                      <option value="haircut">Haircut & Styling</option>
                      <option value="color">Hair Coloring</option>
                      <option value="treatment">Hair Treatment</option>
                      <option value="facial">Facial Treatment</option>
                      <option value="manicure">Manicure</option>
                      <option value="pedicure">Pedicure</option>
                      <option value="waxing">Waxing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date">Preferred Date *</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="time">Preferred Time *</label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Time</option>
                      <option value="09:00">09:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">01:00 PM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                      <option value="17:00">05:00 PM</option>
                      <option value="18:00">06:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="notes">Special Requests or Notes</label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows="4"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Any specific requests or additional information we should know?"
                  ></textarea>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn-book-now">
                    Book Appointment
                  </button>
                </div>
              </form>
            </div>

            <div className="booking-info">
              <div className="info-box">
                <h3>Working Hours</h3>
                <ul className="hours-list">
                  <li><span>Monday - Friday:</span> 9:00 AM - 8:00 PM</li>
                  <li><span>Saturday:</span> 10:00 AM - 6:00 PM</li>
                  <li><span>Sunday:</span> Closed</li>
                </ul>
              </div>

              <div className="info-box">
                <h3>Need Help?</h3>
                <p>Call us at: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
                <p>Email: <a href="mailto:info@lumiere-luxe.com">info@lumiere-luxe.com</a></p>
              </div>

              <div className="info-box">
                <h3>Important Notes</h3>
                <ul className="notes-list">
                  <li>Please arrive 10 minutes before your appointment</li>
                  <li>24-hour cancellation policy applies</li>
                  <li>Late arrivals may result in reduced service time</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookNow;
