import Button from "./Button";
import { ORDER_LINKS } from "../../data/links";

interface OrderLinksProps {
  size?: "md" | "sm";
  /** Text before the buttons; omit to show the platform names alone. */
  label?: string;
  onClick?: () => void;
}

export default function OrderLinks({ size = "md", label, onClick }: OrderLinksProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {label && <span className="text-sm text-muted">{label}</span>}
      {ORDER_LINKS.map((link) => (
        <Button key={link.platform} to={link.url} variant="outline" size={size} onClick={onClick}>
          {link.platform}
        </Button>
      ))}
    </div>
  );
}
