interface StarRatingProps {
  rating: number;
  /** When provided, renders clickable stars that call this with the picked rating (1-5). */
  onChange?: (rating: number) => void;
  size?: "sm" | "lg";
}

const STARS = [1, 2, 3, 4, 5];

export default function StarRating({ rating, onChange, size = "sm" }: StarRatingProps) {
  const textSize = size === "lg" ? "text-2xl" : "text-base";

  if (!onChange) {
    return (
      <p className={`text-gold ${textSize}`} aria-label={`${rating} out of 5 stars`}>
        {STARS.map((star) => (star <= rating ? "★" : "☆")).join("")}
      </p>
    );
  }

  return (
    <div className={`flex gap-1 ${textSize}`} role="radiogroup" aria-label="Rating">
      {STARS.map((star) => (
        <button
          key={star}
          type="button"
          role="radio"
          aria-checked={star === rating}
          aria-label={`${star} star${star > 1 ? "s" : ""}`}
          onClick={() => onChange(star)}
          className={star <= rating ? "text-gold" : "text-line hover:text-gold"}
        >
          ★
        </button>
      ))}
    </div>
  );
}
