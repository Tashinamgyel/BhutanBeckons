import Image from "next/image";
import type { MediaAsset } from "@/data/types";

interface MediaFrameProps {
  media: MediaAsset;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function MediaFrame({
  media,
  className = "",
  priority = false,
  sizes = "(max-width: 760px) 100vw, 50vw",
}: MediaFrameProps) {
  if (media.src) {
    return (
      <div className={`media-frame ${className}`.trim()}>
        <Image
          src={media.src}
          alt={media.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="media-frame__image"
        />
      </div>
    );
  }

  return (
    <div
      className={`media-frame media-frame--placeholder media-frame--${media.tone ?? "juniper"} ${className}`.trim()}
      role="img"
      aria-label={media.alt}
    >
      <span>[ {media.label ?? media.alt} ]</span>
    </div>
  );
}
