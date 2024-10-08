import React from 'react';
import './FarmerNavbar.css';
import { FaSearch, FaCartPlus, FaUser } from 'react-icons/fa'; // Import icons

function FarmerNavbar() {
  return (
    <nav className="navbar">
      {/* Left side: Brand Name, Navigation Links, Categories, Cart, and Profile */}
      <div className="navbar-left">
        <div className="navbar-logo">
          <h1>FarmMinds</h1>
        </div>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#sell">Sell</a></li> {/* New Sell Link */}
        </ul>
        <div className="navbar-actions">
          <div className="categories">
            <a href="#categories" className="categories-link">Categories</a>
            <div className="dropdown">
              <ul className="dropdown-menu">
                <li><a href="#fruits">Fruits</a></li>
                <li><a href="#vegetables">Vegetables</a></li>
                <li><a href="#dairy">Dairy</a></li>
                <li><a href="#nuts">Nuts</a></li>
              </ul>
            </div>
          </div>

          <button className="cart-button"><FaCartPlus /></button>
          <button className="profile-button"><FaUser /></button>
        </div>
      </div>

      {/* Centered Search Bar */}
      <div className="navbar-center">
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-bar" />
          <FaSearch className="search-icon" />
        </div>
      </div>
    </nav>
  );
}

export default FarmerNavbar;
