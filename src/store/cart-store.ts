"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { CartLineItem } from "@/types";

interface CartState {
  items: CartLineItem[];
  couponCode: string | null;
  add: (item: CartLineItem) => void;
  remove: (variantId: string) => void;
  setQuantity: (variantId: string, quantity: number) => void;
  clear: () => void;
  applyCoupon: (code: string | null) => void;
  // Selectors
  itemCount: () => number;
  subtotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      couponCode: null,

      add: (item) => {
        const items = [...get().items];
        const existing = items.find((i) => i.variantId === item.variantId);
        if (existing) {
          existing.quantity = Math.min(99, existing.quantity + item.quantity);
        } else {
          items.push(item);
        }
        set({ items });
      },

      remove: (variantId) =>
        set({ items: get().items.filter((i) => i.variantId !== variantId) }),

      setQuantity: (variantId, quantity) => {
        if (quantity <= 0) return get().remove(variantId);
        set({
          items: get().items.map((i) =>
            i.variantId === variantId ? { ...i, quantity: Math.min(99, quantity) } : i,
          ),
        });
      },

      clear: () => set({ items: [], couponCode: null }),
      applyCoupon: (code) => set({ couponCode: code }),

      itemCount: () => get().items.reduce((s, i) => s + i.quantity, 0),
      subtotal: () => get().items.reduce((s, i) => s + i.unitPrice * i.quantity, 0),
    }),
    {
      name: "lumen-cart",
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({ items: s.items, couponCode: s.couponCode }),
    },
  ),
);
