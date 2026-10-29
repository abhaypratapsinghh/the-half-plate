const inrFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

/** Formats a whole-rupee number as a localized ₹ amount, e.g. 149 -> "₹149". */
export function formatCurrency(value: number): string {
  return inrFormatter.format(value);
}
