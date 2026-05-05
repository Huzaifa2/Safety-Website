"use client";

import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/store/cart-store";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const setQty = useCartStore((s) => s.setQuantity);
  const remove = useCartStore((s) => s.remove);
  const subtotal = useCartStore((s) => s.subtotal());

  return (
    <div className="container py-12">
      <h1 className="font-display text-4xl font-semibold">Your bag</h1>

      {items.length === 0 ? (
        <Card className="mt-10">
          <CardContent className="grid place-items-center gap-4 p-16 text-center">
            <p className="text-muted-foreground">Your bag is empty.</p>
            <Button asChild>
              <Link href="/products">Continue shopping</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_360px]">
          <ul className="divide-y divide-border/40 rounded-2xl border border-border/50 bg-card">
            {items.map((i) => (
              <li key={i.variantId} className="flex gap-4 p-5">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-muted">
                  <Image src={i.imageUrl} alt={i.productName} fill sizes="96px" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="flex justify-between gap-3">
                    <Link href={`/products/${i.productSlug}`} className="font-medium hover:underline">
                      {i.productName}
                    </Link>
                    <span className="font-semibold">{formatPrice(i.unitPrice * i.quantity)}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{i.variantName}</p>
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <div className="inline-flex items-center rounded-full border border-border">
                      <button
                        aria-label="Decrease"
                        onClick={() => setQty(i.variantId, i.quantity - 1)}
                        className="grid h-8 w-8 place-items-center rounded-full hover:bg-accent"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-8 text-center text-sm">{i.quantity}</span>
                      <button
                        aria-label="Increase"
                        onClick={() => setQty(i.variantId, i.quantity + 1)}
                        className="grid h-8 w-8 place-items-center rounded-full hover:bg-accent"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => remove(i.variantId)}
                      className="flex items-center gap-1 text-xs text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="h-3 w-3" /> Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <Card className="md:sticky md:top-24 md:self-start">
            <CardContent className="space-y-4 p-6">
              <h3 className="font-display text-lg font-semibold">Summary</h3>
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">
                    {subtotal >= 4000 ? "Free" : "Calculated at checkout"}
                  </span>
                </div>
              </div>
              <Separator />
              <Button asChild size="lg" className="w-full">
                <Link href="/checkout">Checkout</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
