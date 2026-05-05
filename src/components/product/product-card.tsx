import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import type { ProductCardData } from "@/types";

export function ProductCard({ product }: { product: ProductCardData }) {
  const onSale = product.compareAt && product.compareAt > product.basePrice;

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        {onSale && (
          <span className="absolute left-4 top-4 rounded-full bg-background/90 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-foreground backdrop-blur-sm">
            On offer
          </span>
        )}

        {/* Quick view label appears on hover */}
        <div className="pointer-events-none absolute inset-x-4 bottom-4 flex translate-y-2 items-center justify-between rounded-sm bg-background/95 px-3 py-2 text-[11px] uppercase tracking-[0.2em] opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span>View object</span>
          <span>→</span>
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            {product.categorySlug}
          </p>
          <h3 className="mt-1.5 font-display text-base font-medium leading-snug">
            {product.name}
          </h3>
          {product.tagline && (
            <p className="mt-1 line-clamp-1 text-xs italic text-muted-foreground">
              {product.tagline}
            </p>
          )}
        </div>

        <div className="shrink-0 text-right">
          <p className="font-display text-base">{formatPrice(product.basePrice)}</p>
          {onSale && (
            <p className="text-[11px] text-muted-foreground line-through">
              {formatPrice(product.compareAt as number)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
