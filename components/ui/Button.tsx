import type { ComponentProps } from "react";
import { Link } from "@/i18n/navigation";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-accent-light",
  secondary: "bg-ink text-white hover:bg-charcoal",
  ghost: "border border-ink/20 text-ink hover:border-accent hover:text-accent",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors";

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant }) {
  return (
    <Link
      className={`${base} ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
}

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<"a"> & { variant?: Variant }) {
  return (
    <a className={`${base} ${variantClasses[variant]} ${className}`} {...props} />
  );
}
