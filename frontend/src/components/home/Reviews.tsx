import Container from "../ui/Container";
import { GOOGLE_REVIEWS_URL } from "../../data/links";
import { REVIEW_SUMMARY } from "../../data/reviews";

export default function Reviews() {
  const { rating, reviewCount, reviews } = REVIEW_SUMMARY;

  return (
    <section className="border-t border-line py-20">
      <Container>
        <div className="text-center">
          <p className="font-serif text-5xl font-bold text-ink">
            {rating}
            <span className="ml-2 text-3xl text-gold" aria-hidden="true">
              ★
            </span>
          </p>
          <p className="mt-2 text-sm text-muted">from {reviewCount} reviews on Google</p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <li key={review.author} className="rounded-xl border border-line bg-white p-5">
              <p className="text-gold" aria-label="5 out of 5 stars">
                ★★★★★
              </p>
              <blockquote className="mt-2 text-sm leading-relaxed text-ink">“{review.text}”</blockquote>
              <p className="mt-3 text-xs font-medium text-muted">{review.author}</p>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-brand hover:underline"
          >
            Read all reviews on Google →
          </a>
        </p>
      </Container>
    </section>
  );
}
