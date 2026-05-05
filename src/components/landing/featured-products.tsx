import Link from "next/link";
import { ProductCard } from "@/components/product/product-card";
import { getFeaturedProducts } from "@/lib/mock-data";

export function FeaturedProducts() {
  const products = getFeaturedProducts();
  if (products.length === 0) return null;

  return (
    <section className="container py-28">
      <div className="mb-14 grid items-end gap-6 md:grid-cols-2">
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            02 — The collection
          </p>
          <h2 className="editorial-headline mt-6 text-5xl md:text-6xl">
            A small, <span className="editorial-italic text-primary">deliberate</span>
            <br /> catalogue.
          </h2>
        </div>
        <div className="flex md:justify-end">
          <Link
            href="/products"
            className="inline-flex items-center gap-3 border-b border-foreground pb-1 text-sm uppercase tracking-[0.2em] hover:text-primary hover:border-primary"
          >
            See every object →
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-4">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={{
              id: p.id,
              slug: p.slug,
              name: p.name,
              tagline: p.tagline,
              basePrice: p.basePrice,
              compareAt: p.compareAt,
              rating: p.rating,
              reviewCount: p.reviewCount,
              imageUrl: p.images[0]?.url ?? "/placeholder-product.png",
              categorySlug: p.categorySlug,
            }}
          />
        ))}
      </div>
    </section>
  );
}
