import React from 'react';
import './FarmerHomepage.css';
import FarmerNavbar from './FarmerNavbar'; // Import your existing FarmerNavbar component

const FarmerHomePage = () => {
  return (
    <div className="farmer-homepage">
      <FarmerNavbar />

      {/* Hero Section with background image */}
      <div className="hero-section" style={{ backgroundImage: `url(${require('./images/hero-farm.jpg')})` }}>
        <div className="hero-content">
          <h1>Your Gateway to Profitable Farming</h1>
          <p>Connect with buyers and sell your crops efficiently.</p>
          <button className="cta-button">Sell Now</button>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="key-features-section">
        <div className="feature">
          <img src={require('./images/fruit.jpg')} alt="Easy Selling" />
          <h3>Easy Selling</h3>
          <p>Seamless process to sell your crops.</p>
        </div>
        <div className="feature">
          <img src={require('./images/fruit.jpg')} alt="Market Prices" />
          <h3>Market Prices</h3>
          <p>Get real-time market prices for your crops.</p>
        </div>
        <div className="feature">
          <img src={require('./images/fruit.jpg')} alt="Inventory Management" />
          <h3>Inventory Management</h3>
          <p>Track and manage your inventory effortlessly.</p>
        </div>
        <div className="feature">
          <img src={require('./images/fruit.jpg')} alt="Buyer Connections" />
          <h3>Buyer Connections</h3>
          <p>Connect directly with potential buyers.</p>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="featured-products-section">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src={require('./images/fruit.jpg')} alt="Onion" />
            <h4>Onion</h4>
          </div>
          <div className="product-card">
            <img src={require('./images/fruit.jpg')} alt="Tomato" />
            <h4>Tomato</h4>
          </div>
          {/* Add more product cards */}
        </div>
      </div>

      {/* Sell Your Products Section */}
      <div className="sell-products-section">
        <h2>Sell Your Products</h2>
        <p>Follow these steps to get started:</p>
        <ul>
          <li>Step 1: Register your account.</li>
          <li>Step 2: Upload your product details.</li>
          <li>Step 3: Start receiving offers from buyers.</li>
        </ul>
        <button className="cta-button">Start Selling</button>
      </div>

      {/* Real-Time Market Prices Section */}
      <div className="market-prices-section">
        <h2>Real-Time Market Prices</h2>
        <ul>
          <li>Wheat: $100</li>
          <li>Rice: $90</li>
          <li>Fruits: $120</li>
          {/* Add more products */}
        </ul>
      </div>

      {/* Success Stories Section */}
      <div className="success-stories-section">
        <h2>Success Stories</h2>
        <p>Hear from our successful farmers:</p>
        {/* Testimonials or stories */}
      </div>

      {/* Resources Section */}
      <div className="resources-section">
        <h2>Resources & Blog Posts</h2>
        {/* Add blog articles or video links */}
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="quick-links">
          <h3>Quick Links</h3>
          {/* Add links */}
        </div>
        <div className="social-media">
          <h3>Follow Us</h3>
          {/* Add social media icons */}
        </div>
        <div className="contact-info">
          <h3>Contact Us</h3>
          {/* Add contact details */}
        </div>
      </footer>
    </div>
  );
};

export default FarmerHomePage;
