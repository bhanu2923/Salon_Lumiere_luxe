import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Blog.css';

const Blog = () => {
  // Sample blog posts data - replace with your actual blog content
  const blogPosts = [
    {
      id: 1,
      title: '10 Essential Hair Care Tips for the Summer',
      excerpt: 'Discover how to protect and nourish your hair during the hot summer months with these expert tips.',
      
      image:'https://svenson.com.ph/wp-content/uploads/2023/04/back-view-of-a-woman-with-healthy-and-wavy-hair.jpg',
      category: 'Hair Care'
    },
    {
      id: 2,
      title: 'The Ultimate Guide to Skin Hydration',
      excerpt: 'Learn the best practices for keeping your skin hydrated and glowing all year round.',
      image:'https://healthwire.pk/wp-content/uploads/2022/06/skin-care-tips-for-summer.jpg',
      category: 'Skin Care'
    },
    {
      id: 3,
      title: 'Nail Art Trends for 2023',
      excerpt: 'Stay ahead of the curve with these stunning nail art trends that are taking over this year.',
      image:'https://fivestarnailsandspa.com/wp-content/uploads/2021/10/natural-nail-care-nailed-main.jpg',
      category: 'Nail Care'
    },
  ];

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <div className="container">
          <h1>Beauty & Wellness Blog</h1>
          <p>Discover the latest trends, tips, and expert advice for all your beauty needs</p>
        </div>
      </div>

      {/* New Wellness Section */}
      <div className="wellness-section">
        <div className="container">
          <div className="wellness-content">
            <div className="wellness-image">
              <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Wellness & Beauty" />
            </div>
            <div className="wellness-text">
              <h2>Transform Your Beauty Routine</h2>
              <p>At our salon, we believe that beauty and wellness go hand in hand. Our expert team is dedicated to providing you with personalized treatments that enhance your natural beauty while promoting overall well-being.</p>
              <ul className="wellness-features">
                <li>Holistic beauty treatments tailored to your needs</li>
                <li>Premium quality products for lasting results</li>
                <li>Relaxing environment for complete rejuvenation</li>
                <li>Expert advice for your beauty and wellness journey</li>
              </ul>
              <Link to="/book" className="cta-button">Book Your Session</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-container">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <div key={post.id} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <span className="blog-category">{post.category}</span>
                </div>
                <div className="blog-content">
                  <span className="blog-date">{post.date}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="read-more">
                    Read More <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
