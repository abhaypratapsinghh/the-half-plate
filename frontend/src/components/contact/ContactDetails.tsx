import type { ComponentType } from "react";
import InstagramIcon from "../ui/InstagramIcon";
import type { ContactInfo } from "../../data/types";

const SOCIAL_ICONS: Record<string, ComponentType> = {
  Instagram: InstagramIcon,
};

export default function ContactDetails({ contact }: { contact: ContactInfo }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted">Address</h2>
        <address className="mt-2 not-italic text-ink">
          {contact.addressLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
      </div>
      <div>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted">Hours</h2>
        <p className="mt-2 text-ink">{contact.openingHours}</p>
      </div>
      <div>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted">Phone</h2>
        <a href={`tel:${contact.phone}`} className="mt-2 block text-ink hover:text-brand">
          {contact.phone}
        </a>
      </div>
      <div>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted">Email</h2>
        <a href={`mailto:${contact.email}`} className="mt-2 block text-ink hover:text-brand">
          {contact.email}
        </a>
      </div>
      {contact.socialLinks.length > 0 && (
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted">Follow us</h2>
          <div className="mt-2 flex flex-wrap gap-4">
            {contact.socialLinks.map((social) => {
              const Icon = SOCIAL_ICONS[social.platform];
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand hover:text-brand-light"
                >
                  {Icon && <Icon />}
                  <span className="text-sm font-medium">{social.platform}</span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
