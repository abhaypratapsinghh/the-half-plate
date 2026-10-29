export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container" style={{ textAlign: "center", width: "100%", maxWidth: "100%" }}>
        <div className="restaurant-header">
          <div className="restaurant-icons">
            <i className="fas fa-hat-chef"></i>
            <i className="fas fa-utensils"></i>
            <i className="fas fa-mug-hot"></i>
          </div>
          <h1>THE HALF PLATE</h1>
          <p className="hero-subtitle">Taste The Excellence</p>
        </div>

        <p className="hero-description">
          Experience culinary excellence through our carefully crafted menu, featuring authentic
          flavors and premium ingredients. Join us for an unforgettable dining experience in a
          warm and welcoming atmosphere.
        </p>

        <div className="hero-cta">
          <a href="#menu" className="cta-btn">
            Explore Menu
          </a>
          <a href="#contact" className="cta-btn">
            Book A Table
          </a>
        </div>
      </div>
    </section>
  );
}
