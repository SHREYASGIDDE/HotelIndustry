import React from "react";
import "./styles.css";

const MenuPage = () => {
  return (
    <div className="container">

      {/* Menu Section */}
      <section className="menu-section">
        <h2>Our Menu</h2>
        <div className="menu-items">
          <div className="menu-item">
            <button>
            <img src="/images/dish1.jpg" alt="Dish 1" className="menu-image" />
            </button>
            <h3>Tanduri Chicken</h3>
            <p>Tandoori chicken is a dish made from chicken marinated in yogurt and spices and roasted in a tandoor, a cylindrical clay oven. The dish is now popular worldwide. The modern form of the dish was popularized by the Moti Mahal restaurant in New Delhi, India in the late 1940s.</p>
          </div>
          <div className="menu-item">
            <img src="/images/dish2.jpg" alt="Dish 2" className="menu-image" />
            <h3>Chicken Curry</h3>
            <p>A typical curry from the Indian subcontinent consists of chicken stewed in an onion- and tomato-based sauce, flavoured with ginger, garlic, tomato puree, chilli peppers and a variety of spices, often including turmeric, cumin, coriander, cinnamon, and cardamom.</p>
          </div>
          <div className="menu-item">
            <img src="/images/dish3.jpg" alt="Dish 3" className="menu-image" />
            <h3>Roti</h3>
            <p>he roti is a traditional flatbread from the Indian subcontinent. It is normally eaten with cooked vegetables or curries; it can be used as a carrier for them. It is made most often from wheat flour, cooked on a flat or slightly concave iron griddle called a tawa.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        {/* <p>&copy; 2025 Luxury Stay & Dine. All rights reserved.</p> */}
      </footer>
    </div>
  );
};

export default MenuPage;
