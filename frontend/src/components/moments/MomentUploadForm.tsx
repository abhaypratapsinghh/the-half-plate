import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { submitMoment } from "../../services/momentService";
import type { Moment, MomentCategory } from "../../data/types";

interface MomentUploadFormProps {
  category: MomentCategory;
  title: string;
  description: string;
  onSubmitted: (moment: Moment) => void;
}

export default function MomentUploadForm({ category, title, description, onSubmitted }: MomentUploadFormProps) {
  const [caption, setCaption] = useState("");
  const [submittedBy, setSubmittedBy] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    setPhoto(event.target.files?.[0] ?? null);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!photo) {
      setError("Please choose a photo to upload.");
      return;
    }
    setError(null);
    setSubmitting(true);
    try {
      const moment = await submitMoment({ category, caption, submittedBy: submittedBy || undefined, photo });
      onSubmitted(moment);
      setCaption("");
      setSubmittedBy("");
      setPhoto(null);
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-xl rounded-xl border border-line bg-white p-6">
      <h3 className="font-serif text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-1 text-sm text-muted">{description}</p>

      <label className="mt-4 block text-sm font-medium text-ink">
        Your name (optional)
        <input
          type="text"
          maxLength={60}
          value={submittedBy}
          onChange={(event) => setSubmittedBy(event.target.value)}
          className="mt-1 w-full rounded-lg border border-line px-3 py-2 text-sm focus:border-brand focus:outline-none"
        />
      </label>

      <label className="mt-4 block text-sm font-medium text-ink">
        Caption
        <input
          type="text"
          required
          maxLength={200}
          value={caption}
          onChange={(event) => setCaption(event.target.value)}
          placeholder="What were you celebrating?"
          className="mt-1 w-full rounded-lg border border-line px-3 py-2 text-sm focus:border-brand focus:outline-none"
        />
      </label>

      <label className="mt-4 block text-sm font-medium text-ink">
        Photo (JPEG, PNG, or WebP, up to 5MB)
        <input
          type="file"
          required
          accept="image/jpeg,image/png,image/webp"
          onChange={handleFileChange}
          className="mt-1 w-full text-sm text-muted"
        />
      </label>

      {error && <p className="mt-3 text-sm text-brand">{error}</p>}
      {done && !error && <p className="mt-3 text-sm text-ink">Thanks for sharing your photo!</p>}

      <button
        type="submit"
        disabled={submitting}
        className="mt-4 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-light disabled:opacity-60"
      >
        {submitting ? "Uploading…" : "Share photo"}
      </button>
    </form>
  );
}
