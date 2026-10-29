import Testimonial from "./Testimonial";

export default function Gallery() {
  return (
    <section id="gallery">
      <div className="container">
        <div className="section-header">
          <h2>Gallery & Reviews</h2>
          <p>See what our guests are enjoying</p>
        </div>

        <div className="gallery-grid">
          {Array.from({ length: 4 }).map((_, i) => (
            <div className="gallery-placeholder" key={i}>
              <i className="fas fa-image"></i>
            </div>
          ))}
        </div>

        <Testimonial />
      </div>
    </section>
  );
}
