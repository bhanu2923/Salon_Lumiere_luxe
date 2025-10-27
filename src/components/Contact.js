import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebookF, FaInstagram, FaTwitter, FaPaperPlane } from 'react-icons/fa';
import '../styles/Contact.css';

// Salon-related images
const contactBg = 'https://images.pexels.com/photos/705255/pexels-photo-705255.jpeg?cs=srgb&dl=pexels-delbeautybox-211032-705255.jpg&fm=jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div 
      className="contact-page animate-fade-in" 
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      <div className="contact-overlay">
        <div className="contact-container">
          {/* Left Side - Contact Info */}
          <div className="contact-info-section animate-slide-in-left">
            <div className="contact-info-content">
              <h2>Get In Touch</h2>
              <p className="contact-subtitle">We'd love to hear from you</p>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-details">
                  <h3>Visit Us</h3>
                  <p>123 Beauty Street, New York, NY 10001</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-details">
                  <h3>Call Us</h3>
                  <p>+1 (212) 123-4567</p>
                  <p>+1 (646) 123-4567</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-details">
                  <h3>Email Us</h3>
                  <p>contact@lumiere-luxe.com</p>
                  <p>appointments@lumiere-luxe.com</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <FaClock />
                </div>
                <div className="contact-details">
                  <h3>Working Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                  <p>Saturday: 10:00 AM - 6:00 PM</p>
                  <p>Sunday: 12:00 PM - 5:00 PM</p>
                </div>
              </div>

              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaFacebookF />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaInstagram />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form-section animate-slide-in-right">
            <div className="form-container">
              <div className="form-header">
                <h2>Send Us a Message</h2>
                <p>Have questions or special requests? We're here to help!</p>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                  
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="form-select"
                  >
                    <option value="">Select a Service</option>
                    <option value="hair">Hair Services</option>
                    <option value="skin">Skin Care</option>
                    <option value="nails">Nail Services</option>
                    <option value="spa">Spa Treatments</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    className="form-textarea"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className={`submit-btn ${isSubmitting ? 'submitting' : ''}`} 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="btn-icon" />
                      Send Message
                    </>
                  )}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="form-message success animate-message-in">
                    <span className="tick">✓</span>
                    <div>
                      <h4>Thank you!</h4>
                      <p>Your message has been sent successfully. We'll get back to you soon!</p>
                    </div>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="form-message error animate-message-in">
                    <span className="exclamation">!</span>
                    <div>
                      <h4>Oops! Something went wrong.</h4>
                      <p>Please try again later or contact us directly.</p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="map-container animate-fade-in-up">
        <div className="map-overlay">
          <h3>Our Location</h3>
          <p>Visit our salon for a personalized beauty experience</p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-73.99110708459372!3d40.75621937932784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259aa982c6fb1%3A0x1d7a5a1e9b9c8f0d!2s123%20Beauty%20St%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Salon Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
