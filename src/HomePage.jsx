import React from "react";
import "./styles.css";

const HotelRestaurantHome = () => {
  return (
    <div className="container">
      {/* Navbar */}
      

      {/* Hero Section */}
      
      <header className="hero-section">
        <img src="/images/hero.jpg" alt="Luxury Hotel" className="hero-image" />
        <div className="hero-text">
          <h2>Welcome to Luxury Stay & Dine</h2>
          <p>Experience world-class hospitality and gourmet dining.</p>
         
        </div>
      </header>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <img src="/images/LRoom.jpg" alt="Luxury Rooms" className="feature-image" />
          <h3>Luxury Rooms</h3>
          <p>Relax in our comfortable and stylish accommodations.</p>
        </div>
        <div className="feature">
          <img src="/images/GourmetCuisine.jpg" alt="Gourmet Cuisine" className="feature-image" />
          <h3>Gourmet Cuisine</h3>
          <p>Indulge in exquisite dishes crafted by top chefs.</p>
        </div>
        <div className="feature">
          <img src="/images/Exclusive Services.jpg" alt="Exclusive Services" className="feature-image" />
          <h3>Exclusive Services</h3>
          <p>Enjoy spa, concierge, and personalized experiences.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
      </footer>
    </div>
  );
};

export default HotelRestaurantHome;