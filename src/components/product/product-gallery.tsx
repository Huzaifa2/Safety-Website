"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface GalleryImage {
  id: string;
  url: string;
  alt?: string | null;
}

export function ProductGallery({ images, name }: { images: GalleryImage[]; name: string }) {
  const [active, setActive] = useState(0);
  const main = images[active] ?? images[0];

  if (!main) {
    return <div className="aspect-square rounded-2xl bg-muted" />;
  }

  return (
    <div className="grid gap-4 md:grid-cols-[80px_1fr]">
      <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col">
        {images.map((img, i) => (
          <button
            key={img.id}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "relative aspect-square w-20 shrink-0 overflow-hidden rounded-xl border-2 transition",
              i === active ? "border-primary" : "border-transparent opacity-70 hover:opacity-100",
            )}
            aria-label={`View image ${i + 1}`}
          >
            <Image src={img.url} alt={img.alt ?? name} fill sizes="80px" className="object-cover" />
          </button>
        ))}
      </div>

      <div className="order-1 relative aspect-square overflow-hidden rounded-3xl bg-muted md:order-2">
        <Image
          src={main.url}
          alt={main.alt ?? name}
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
