import { TESTIMONIAL } from "../../data/contact";

export default function Testimonial() {
  return (
    <div className="testimonial-module">
      <div className="testimonial-text">"{TESTIMONIAL.text}"</div>
      <div className="testimonial-author">{TESTIMONIAL.author}</div>
    </div>
  );
}
