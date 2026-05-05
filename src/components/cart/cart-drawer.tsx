"use client";

import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/store/cart-store";
import { useUiStore } from "@/store/ui-store";
import { formatPrice } from "@/lib/utils";

export function CartDrawer() {
  const open = useUiStore((s) => s.cartOpen);
  const setOpen = useUiStore((s) => s.setCartOpen);
  const items = useCartStore((s) => s.items);
  const setQty = useCartStore((s) => s.setQuantity);
  const remove = useCartStore((s) => s.remove);
  const subtotal = useCartStore((s) => s.subtotal());

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="right" className="flex w-full flex-col p-0 sm:max-w-md">
        <SheetHeader className="border-b border-border/40 p-6">
          <SheetTitle>Your bag</SheetTitle>
          <SheetDescription>
            Discreet packaging · free shipping over $40
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 p-6 text-center">
            <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            <div>
              <p className="font-medium">Your bag is empty</p>
              <p className="text-sm text-muted-foreground">
                Add a few essentials to get started.
              </p>
            </div>
            <Button asChild onClick={() => setOpen(false)}>
              <Link href="/products">Shop now</Link>
            </Button>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-border/40 overflow-y-auto px-6">
              {items.map((item) => (
                <li key={item.variantId} className="flex gap-3 py-4">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-muted">
                    <Image
                      src={item.imageUrl}
                      alt={item.productName}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <Link
                        href={`/products/${item.productSlug}`}
                        onClick={() => setOpen(false)}
                        className="line-clamp-1 text-sm font-medium hover:underline"
                      >
                        {item.productName}
                      </Link>
                      <button
                        type="button"
                        aria-label="Remove"
                        onClick={() => remove(item.variantId)}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground">{item.variantName}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="inline-flex items-center rounded-full border border-border">
                        <button
                          aria-label="Decrease"
                          onClick={() => setQty(item.variantId, item.quantity - 1)}
                          className="grid h-7 w-7 place-items-center rounded-full hover:bg-accent"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-6 text-center text-xs">{item.quantity}</span>
                        <button
                          aria-label="Increase"
                          onClick={() => setQty(item.variantId, item.quantity + 1)}
                          className="grid h-7 w-7 place-items-center rounded-full hover:bg-accent"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="text-sm font-medium">
                        {formatPrice(item.unitPrice * item.quantity)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <Separator />

            <div className="space-y-4 p-6">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Taxes and shipping calculated at checkout.
              </p>
              <Button asChild size="lg" className="w-full" onClick={() => setOpen(false)}>
                <Link href="/checkout">Checkout</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                <Link href="/cart">View bag</Link>
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
