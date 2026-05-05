"use client";

import { create } from "zustand";

interface UiState {
  cartOpen: boolean;
  mobileMenuOpen: boolean;
  setCartOpen: (open: boolean) => void;
  setMobileMenuOpen: (open: boolean) => void;
  toggleCart: () => void;
}

export const useUiStore = create<UiState>((set, get) => ({
  cartOpen: false,
  mobileMenuOpen: false,
  setCartOpen: (cartOpen) => set({ cartOpen }),
  setMobileMenuOpen: (mobileMenuOpen) => set({ mobileMenuOpen }),
  toggleCart: () => set({ cartOpen: !get().cartOpen }),
}));
