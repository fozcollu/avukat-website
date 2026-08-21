import Image from "next/image";
import ImagePlaceholder from "./ImagePlaceholder";

/**
 * Renders a real photo (next/image) when `src` is a URL (local /images/...
 * path or a remote https:// one, e.g. the Unsplash stock photos used for
 * the initial launch — see public/images/CREDITS.md), otherwise falls back
 * to the neutral ImagePlaceholder.
 *
 * Remote (http/https) sources are rendered `unoptimized`: Next's image
 * optimizer fetches the source *server-side* to resize/re-encode it, and in
 * network-restricted environments (this dev sandbox, some hosting setups)
 * that server-side fetch to a third-party CDN can fail even though a normal
 * browser loading the same URL directly works fine. Skipping optimization
 * makes the browser request the (already appropriately-sized-via-query-
 * params) Unsplash URL directly instead, which is far more reliable for a
 * handful of stock photos.
 */
export default function PortraitImage({
  src,
  alt,
  className = "",
  rounded = "rounded-xl",
  sizes = "(min-width: 640px) 33vw, 100vw",
  dark = false,
}: {
  src?: string;
  alt: string;
  className?: string;
  rounded?: string;
  sizes?: string;
  dark?: boolean;
}) {
  if (!src) {
    return (
      <ImagePlaceholder
        expectedSrc=""
        label={alt}
        rounded={rounded}
        className={className}
        dark={dark}
      />
    );
  }

  const isRemote = /^https?:\/\//.test(src);

  return (
    <div className={`relative overflow-hidden ${rounded} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        unoptimized={isRemote}
        className="object-cover"
      />
    </div>
  );
}
