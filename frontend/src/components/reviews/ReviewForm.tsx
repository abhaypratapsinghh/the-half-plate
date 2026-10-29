import { useState } from "react";
import type { FormEvent } from "react";
import StarRating from "../ui/StarRating";
import { submitReview } from "../../services/reviewService";
import type { GuestReview } from "../../data/types";

interface ReviewFormProps {
  onSubmitted: (review: GuestReview) => void;
}

export default function ReviewForm({ onSubmitted }: ReviewFormProps) {
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const review = await submitReview({ author, rating, text });
      onSubmitted(review);
      setAuthor("");
      setRating(5);
      setText("");
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-xl rounded-xl border border-line bg-white p-6">
      <h3 className="font-serif text-xl font-semibold text-ink">Write a review</h3>
      <p className="mt-1 text-sm text-muted">Tell other guests about your visit.</p>

      <div className="mt-4">
        <StarRating rating={rating} onChange={setRating} size="lg" />
      </div>

      <label className="mt-4 block text-sm font-medium text-ink">
        Your name
        <input
          type="text"
          required
          maxLength={60}
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
          className="mt-1 w-full rounded-lg border border-line px-3 py-2 text-sm focus:border-brand focus:outline-none"
        />
      </label>

      <label className="mt-4 block text-sm font-medium text-ink">
        Your review
        <textarea
          required
          minLength={5}
          maxLength={500}
          rows={4}
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="What did you enjoy about your visit?"
          className="mt-1 w-full rounded-lg border border-line px-3 py-2 text-sm focus:border-brand focus:outline-none"
        />
      </label>

      {error && <p className="mt-3 text-sm text-brand">{error}</p>}
      {done && !error && <p className="mt-3 text-sm text-ink">Thanks for sharing your feedback!</p>}

      <button
        type="submit"
        disabled={submitting}
        className="mt-4 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-light disabled:opacity-60"
      >
        {submitting ? "Submitting…" : "Submit review"}
      </button>
    </form>
  );
}
