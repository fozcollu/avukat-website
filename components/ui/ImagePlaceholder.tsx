import { ImageIcon } from "lucide-react";

/**
 * Stand-in for real photography until AI-generated images are produced and
 * dropped into /public/images (see README.md "Görseller" section for the
 * expected file names). Swap usages of this component for next/image once
 * the real files exist — the expected `src` path is kept as a data attribute
 * here purely so it's easy to grep for what still needs an image.
 */
export default function ImagePlaceholder({
  expectedSrc,
  label,
  className = "",
  rounded = "rounded-xl",
  dark = false,
}: {
  expectedSrc: string;
  label?: string;
  className?: string;
  rounded?: string;
  dark?: boolean;
}) {
  return (
    <div
      data-expected-src={expectedSrc}
      className={`flex flex-col items-center justify-center gap-2 border ${
        dark
          ? "border-white/10 bg-charcoal text-white/30"
          : "border-ink/10 bg-mist text-slate/50"
      } ${rounded} ${className}`}
    >
      <ImageIcon strokeWidth={1.25} className="h-7 w-7" />
      {label && (
        <span className="px-4 text-center text-xs">{label}</span>
      )}
    </div>
  );
}
