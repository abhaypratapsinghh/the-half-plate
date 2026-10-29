import { momentImageUrl } from "../../services/momentService";
import type { Moment } from "../../data/types";

interface MomentGalleryProps {
  moments: Moment[];
  emptyMessage: string;
}

export default function MomentGallery({ moments, emptyMessage }: MomentGalleryProps) {
  if (moments.length === 0) {
    return <p className="text-center text-muted">{emptyMessage}</p>;
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {moments.map((moment) => (
        <li key={moment.id} className="overflow-hidden rounded-xl border border-line bg-white">
          <img
            src={momentImageUrl(moment)}
            alt={moment.caption}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="p-4">
            <p className="text-sm text-ink">{moment.caption}</p>
            {moment.submittedBy && <p className="mt-1 text-xs font-medium text-muted">— {moment.submittedBy}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}
