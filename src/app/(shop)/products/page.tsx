import { ProductCard } from "@/components/product/product-card";
import { ProductFilters } from "@/components/product/product-filters";
import { getProductsByCategory } from "@/lib/mock-data";

interface SearchParams {
  category?: string;
  type?: string;
  sort?: string;
}

export default function ProductsPage({ searchParams }: { searchParams: SearchParams }) {
  let products = getProductsByCategory(searchParams.category, searchParams.type);

  if (searchParams.sort === "price_asc") products = [...products].sort((a, b) => a.basePrice - b.basePrice);
  else if (searchParams.sort === "price_desc") products = [...products].sort((a, b) => b.basePrice - a.basePrice);
  else if (searchParams.sort === "rating") products = [...products].sort((a, b) => b.rating - a.rating);

  return (
    <div className="container py-16">
      <header className="mb-14">
        <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
          The collection
        </p>
        <h1 className="editorial-headline mt-6 text-5xl md:text-6xl">
          Every <span className="editorial-italic text-primary">object</span> in the studio.
        </h1>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
          A small, deliberate catalogue. Carefully made for confidence and
          comfort — discreet shipping on every order.
        </p>
      </header>

      <div className="grid gap-10 md:grid-cols-[240px_1fr]">
        <aside className="md:sticky md:top-24 md:self-start">
          <ProductFilters />
        </aside>

        {products.length === 0 ? (
          <div className="grid place-items-center rounded-2xl border border-dashed border-border/60 p-20 text-center">
            <p className="text-muted-foreground">No products match your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3">
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
        )}
      </div>
    </div>
  );
}
