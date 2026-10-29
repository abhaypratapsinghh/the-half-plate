import type { ReactNode } from "react";
import { Link } from "react-router";

interface ButtonProps {
  /** An app route like "/menu", or an absolute URL (opens in a new tab). */
  to: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  size?: "md" | "sm";
  onClick?: () => void;
}

const VARIANTS = {
  primary: "bg-brand text-white hover:bg-brand-light",
  outline: "border border-brand text-brand hover:bg-brand hover:text-white",
};

const SIZES = {
  md: "px-5 py-2.5 text-sm",
  sm: "px-4 py-1.5 text-sm",
};

export default function Button({ to, children, variant = "primary", size = "md", onClick }: ButtonProps) {
  const className = `inline-block rounded-full font-medium transition-colors ${SIZES[size]} ${VARIANTS[variant]}`;

  if (/^https?:\/\//.test(to)) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" onClick={onClick} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} onClick={onClick} className={className}>
      {children}
    </Link>
  );
}
