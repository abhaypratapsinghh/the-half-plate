import { Link } from "react-router";
import Container from "../ui/Container";
import ReviewCarousel from "../reviews/ReviewCarousel";
import ReviewForm from "../reviews/ReviewForm";
import { GOOGLE_REVIEWS_URL } from "../../data/links";
import { REVIEW_SUMMARY } from "../../data/reviews";
import { useReviews } from "../../hooks/useReviews";
import { useMoments } from "../../hooks/useMoments";

export default function Reviews() {
  const { rating, reviewCount } = REVIEW_SUMMARY;
  const { data: reviews, addReview } = useReviews();
  const { data: celebrationMoments } = useMoments();

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
          <p className="mt-2 text-sm text-muted">from {reviewCount} reviews on Google, plus reviews shared here</p>
        </div>

        <ReviewCarousel reviews={reviews} celebrationMoments={celebrationMoments} />

        <p className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-center text-sm">
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-brand hover:underline">
            Read all reviews on Google →
          </a>
          <Link to="/celebrations" className="font-medium text-brand hover:underline">
            See celebrations →
          </Link>
        </p>

        <ReviewForm onSubmitted={addReview} />
      </Container>
    </section>
  );
}
