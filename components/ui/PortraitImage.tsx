import Image from "next/image";
import ImagePlaceholder from "./ImagePlaceholder";

/**
 * Renders a real photo (next/image) when `src` is a URL (local /images/...
 * path or a remote https:// one, e.g. the Unsplash stock photos used for
 * the initial launch — see public/images/CREDITS.md), otherwise falls back
 * to the neutral ImagePlaceholder.
 */
export default function PortraitImage({
  src,
  alt,
  className = "",
  rounded = "rounded-xl",
  sizes = "(min-width: 640px) 33vw, 100vw",
}: {
  src?: string;
  alt: string;
  className?: string;
  rounded?: string;
  sizes?: string;
}) {
  if (!src) {
    return (
      <ImagePlaceholder expectedSrc="" label={alt} rounded={rounded} className={className} />
    );
  }

  return (
    <div className={`relative overflow-hidden ${rounded} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
