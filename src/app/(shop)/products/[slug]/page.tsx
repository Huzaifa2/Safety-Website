import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Star, BadgeCheck } from "lucide-react";
import { ProductGallery } from "@/components/product/product-gallery";
import { AddToCart } from "@/components/product/add-to-cart";
import { ProductCard } from "@/components/product/product-card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getProductBySlug, getRelatedProducts } from "@/lib/mock-data";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.tagline ?? product.description,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = getRelatedProducts(product.slug, product.categorySlug);

  return (
    <div className="container py-12">
      <div className="grid gap-12 md:grid-cols-2">
        <ProductGallery images={product.images} name={product.name} />

        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            {product.categoryName}
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold leading-tight">{product.name}</h1>
          {product.tagline && <p className="mt-2 text-muted-foreground">{product.tagline}</p>}

          {product.reviewCount > 0 && (
            <div className="mt-3 flex items-center gap-2 text-sm">
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < Math.round(product.rating) ? "fill-current" : ""}`}
                  />
                ))}
              </div>
              <span className="text-muted-foreground">
                {product.rating.toFixed(1)} · {product.reviewCount} reviews
              </span>
            </div>
          )}

          <Separator className="my-6" />

          <AddToCart product={product} />

          <Separator className="my-8" />

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold">About this product</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>
            </div>

            {product.certifications.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {product.certifications.map((c) => (
                  <Badge key={c} variant="outline" className="gap-1.5">
                    <BadgeCheck className="h-3 w-3 text-primary" />
                    {c}
                  </Badge>
                ))}
              </div>
            )}

            {product.safetyInfo && (
              <div>
                <h3 className="text-sm font-semibold">Safety information</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {product.safetyInfo}
                </p>
              </div>
            )}

            {product.ingredients && (
              <div>
                <h3 className="text-sm font-semibold">Ingredients</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {product.ingredients}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="mb-6 font-display text-2xl font-semibold">You may also like</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {related.map((p) => (
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
      )}
    </div>
  );
}
