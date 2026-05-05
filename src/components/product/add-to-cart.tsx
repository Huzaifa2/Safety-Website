"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingBag, Check } from "lucide-react";
import type { MockProduct } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/store/cart-store";
import { useUiStore } from "@/store/ui-store";
import { formatPrice, cn } from "@/lib/utils";

export function AddToCart({ product }: { product: MockProduct }) {
  const [variantId, setVariantId] = useState(product.variants[0]?.id ?? "");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const add = useCartStore((s) => s.add);
  const setCartOpen = useUiStore((s) => s.setCartOpen);

  const variant = product.variants.find((v) => v.id === variantId);
  const price = variant?.price ?? product.basePrice;
  const inStock = (variant?.stock ?? 0) > 0;

  const handleAdd = () => {
    if (!variant) return;
    add({
      variantId: variant.id,
      productId: product.id,
      productSlug: product.slug,
      productName: product.name,
      variantName: variant.name,
      imageUrl: product.images[0]?.url ?? "/placeholder-product.png",
      unitPrice: price,
      quantity: qty,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
    setCartOpen(true);
  };

  return (
    <div className="space-y-6">
      {product.variants.length > 1 && (
        <div>
          <p className="mb-2 text-sm font-medium">Size / Variant</p>
          <div className="flex flex-wrap gap-2">
            {product.variants.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setVariantId(v.id)}
                disabled={v.stock === 0}
                className={cn(
                  "rounded-xl border-2 px-4 py-2 text-sm transition",
                  v.id === variantId
                    ? "border-primary bg-primary/10"
                    : "border-border bg-transparent hover:border-primary/40",
                  v.stock === 0 && "opacity-40 line-through",
                )}
              >
                {v.name}
              </button>
            ))}
          </div>
        </div>
      )}

      <div>
        <p className="mb-2 text-sm font-medium">Quantity</p>
        <div className="inline-flex items-center rounded-full border border-border">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="grid h-10 w-10 place-items-center rounded-full hover:bg-accent"
            aria-label="Decrease quantity"
          >
            <Minus className="h-3 w-3" />
          </button>
          <span className="w-8 text-center text-sm font-medium">{qty}</span>
          <button
            type="button"
            onClick={() => setQty((q) => Math.min(99, q + 1))}
            className="grid h-10 w-10 place-items-center rounded-full hover:bg-accent"
            aria-label="Increase quantity"
          >
            <Plus className="h-3 w-3" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 pt-2">
        <div className="text-3xl font-semibold">{formatPrice(price * qty)}</div>
        {inStock ? (
          <Badge variant="success">In stock</Badge>
        ) : (
          <Badge variant="warning">Out of stock</Badge>
        )}
      </div>

      <Button size="lg" className="w-full" onClick={handleAdd} disabled={!inStock || !variant}>
        {added ? (
          <>
            <Check className="h-4 w-4" />
            Added
          </>
        ) : (
          <>
            <ShoppingBag className="h-4 w-4" />
            Add to bag
          </>
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Ships in plain, unmarked packaging · 30-day returns
      </p>
    </div>
  );
}
