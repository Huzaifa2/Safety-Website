export type ProductCardData = {
  id: string;
  slug: string;
  name: string;
  tagline?: string | null;
  basePrice: number;
  compareAt?: number | null;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  categorySlug: string;
};

export type CartLineItem = {
  variantId: string;
  productId: string;
  productSlug: string;
  productName: string;
  variantName: string;
  imageUrl: string;
  unitPrice: number;
  quantity: number;
};
