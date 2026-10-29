import { createContext, useContext, type ReactNode } from "react";
import { useContact } from "../hooks/useContact";
import type { ContactInfo } from "../data/types";

interface ContactState {
  data: ContactInfo | null;
  loading: boolean;
  error: Error | null;
}

const ContactContext = createContext<ContactState | null>(null);

export function ContactProvider({ children }: { children: ReactNode }) {
  const contact = useContact();
  return <ContactContext.Provider value={contact}>{children}</ContactContext.Provider>;
}

export function useContactInfo(): ContactState {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error("useContactInfo must be used inside <ContactProvider>");
  }
  return context;
}
