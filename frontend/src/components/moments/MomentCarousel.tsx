import { useEffect, useState } from "react";
import { momentImageUrl } from "../../services/momentService";
import type { Moment } from "../../data/types";

/** How long each photo stays on screen before auto-advancing. */
const SLIDE_INTERVAL_MS = 4_000;

interface MomentCarouselProps {
  moments: Moment[];
  emptyMessage: string;
}

export default function MomentCarousel({ moments, emptyMessage }: MomentCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (moments.length < 2 || paused) return;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % moments.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [moments.length, paused]);

  useEffect(() => {
    if (index >= moments.length) setIndex(0);
  }, [moments.length, index]);

  if (moments.length === 0) {
    return <p className="text-center text-muted">{emptyMessage}</p>;
  }

  const moment = moments[index] ?? moments[0];

  return (
    <div
      className="mx-auto max-w-2xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line bg-white">
        <img
          src={momentImageUrl(moment)}
          alt={moment.caption}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <p className="text-sm font-medium text-white">{moment.caption}</p>
          {moment.submittedBy && <p className="text-xs text-white/80">— {moment.submittedBy}</p>}
        </div>
      </div>

      {moments.length > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {moments.map((candidate, candidateIndex) => (
            <button
              key={candidate.id}
              type="button"
              aria-label={`Show photo ${candidateIndex + 1}`}
              onClick={() => setIndex(candidateIndex)}
              className={`h-2 w-2 rounded-full transition-colors ${
                candidateIndex === index ? "bg-brand" : "bg-line"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
