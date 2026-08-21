import type { LucideIcon } from "lucide-react";
import { Scale } from "lucide-react";

/**
 * A designed, network-free stand-in for photography: a dark gradient panel
 * with a large watermark icon and a fine line pattern. Used for the hero
 * band and blog covers until real photos are supplied — see
 * public/images/PROMPTS.md. Unlike hotlinking a stock photo, this never
 * depends on a third-party CDN being reachable, so it can't render as a
 * broken image.
 */
export default function AbstractPanel({
  icon: Icon = Scale,
  className = "",
  rounded = "",
}: {
  icon?: LucideIcon;
  className?: string;
  rounded?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-ink via-charcoal to-ink ${rounded} ${className}`}
    >
      {/* fine diagonal line texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #fff 0px, #fff 1px, transparent 1px, transparent 28px)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon
          strokeWidth={0.75}
          className="h-[55%] w-[55%] text-white/10"
        />
      </div>
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
    </div>
  );
}
