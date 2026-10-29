import { useEffect, useState } from "react";
import StarRating from "../ui/StarRating";
import { momentImageUrl } from "../../services/momentService";
import type { GuestReview, Moment } from "../../data/types";

/** How long each slide stays on screen before auto-advancing. */
const SLIDE_INTERVAL_MS = 5_000;

type Slide = { kind: "review"; review: GuestReview } | { kind: "moment"; moment: Moment };

interface ReviewCarouselProps {
  reviews: GuestReview[];
  celebrationMoments: Moment[];
}

/** Interleaves reviews with celebration photos so the carousel mixes feedback with moments from the restaurant. */
function buildSlides(reviews: GuestReview[], moments: Moment[]): Slide[] {
  const slides: Slide[] = [];
  const maxLength = Math.max(reviews.length, moments.length);

  for (let i = 0; i < maxLength; i++) {
    if (reviews[i]) slides.push({ kind: "review", review: reviews[i] });
    if (moments[i]) slides.push({ kind: "moment", moment: moments[i] });
  }

  return slides;
}

export default function ReviewCarousel({ reviews, celebrationMoments }: ReviewCarouselProps) {
  const slides = buildSlides(reviews, celebrationMoments);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (slides.length < 2 || paused) return;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [slides.length, paused]);

  useEffect(() => {
    if (index >= slides.length) setIndex(0);
  }, [slides.length, index]);

  if (slides.length === 0) {
    return <p className="mt-10 text-center text-muted">Be the first to leave a review!</p>;
  }

  const slide = slides[index] ?? slides[0];

  return (
    <div
      className="mx-auto mt-10 max-w-2xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden rounded-xl border border-line bg-white">
        {slide.kind === "review" ? (
          <div className="p-8 text-center">
            <StarRating rating={slide.review.rating} />
            <blockquote className="mt-4 font-serif text-lg leading-relaxed text-ink">
              “{slide.review.text}”
            </blockquote>
            <p className="mt-4 text-sm font-medium text-muted">{slide.review.author}</p>
          </div>
        ) : (
          <div className="relative aspect-[16/9]">
            <img
              src={momentImageUrl(slide.moment)}
              alt={slide.moment.caption}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-sm font-medium text-white">{slide.moment.caption}</p>
              <p className="text-xs text-white/80">Celebrated at The Half Plate</p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {slides.map((candidate, candidateIndex) => (
          <button
            key={candidate.kind === "review" ? `review-${candidate.review.id}` : `moment-${candidate.moment.id}`}
            type="button"
            aria-label={`Show slide ${candidateIndex + 1}`}
            onClick={() => setIndex(candidateIndex)}
            className={`h-2 w-2 rounded-full transition-colors ${
              candidateIndex === index ? "bg-brand" : "bg-line"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
