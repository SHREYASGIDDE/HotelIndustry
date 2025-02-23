import React from "react";
import "./styles.css";

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Side - Image */}
        <div className="about-image">
          <img src="/images/About.jpg" alt="Luxury Hotel" />
        </div>

        {/* Right Side - Text */}
        <div className="about-text">
          <h2>About Our Hotel</h2>
          <p>
            Welcome to <strong>Luxury Stay & Dine</strong>, where elegance meets comfort.
            We provide world-class hospitality with exquisite dining and luxurious rooms.
          </p>
          <p>
            Our award-winning chefs prepare gourmet meals, while our stunning views and
            premium service make every stay unforgettable.
          </p>
          <a href="/contact" className="btn">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
