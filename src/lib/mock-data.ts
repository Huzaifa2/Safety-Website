export type MockVariant = {
  id: string;
  name: string;
  price?: number;
  stock: number;
};

export type MockImage = { id: string; url: string; alt?: string };

export type MockProduct = {
  id: string;
  slug: string;
  name: string;
  tagline?: string;
  description: string;
  basePrice: number;
  compareAt?: number;
  rating: number;
  reviewCount: number;
  isFeatured: boolean;
  categorySlug: "condoms" | "lubricants" | "bundles";
  categoryName: string;
  type?: string;
  images: MockImage[];
  variants: MockVariant[];
  certifications: string[];
  safetyInfo?: string;
  ingredients?: string;
};

// All URLs verified to return HTTP 200 from Unsplash.
const u = (id: string) =>
  `https://images.unsplash.com/${id}?w=900&q=80&auto=format&fit=crop`;

const IMG = {
  // Condoms — packets / wrappers / packaging
  condomA: u("photo-1584515933487-779824d29309"), // packets flatlay
  condomB: u("photo-1606206873764-fd15e242df52"), // single packet pink
  condomC: u("photo-1571781926291-c477ebfd024b"), // foil packets pile
  condomD: u("photo-1612817288484-6f916006741a"), // wrapper close-up
  condomE: u("photo-1631730486572-226d1f595b68"), // packet detail
  condomF: u("photo-1631729371254-42c2892f0e6e"), // packaging
  // Lubricants — bottles / cosmetic-style
  lubeA: u("photo-1556228720-195a672e8a03"), // pump bottle
  lubeB: u("photo-1620916566398-39f1143ab7be"), // amber bottle
  lubeC: u("photo-1608248543803-ba4f8c70ae0b"), // care bottle
  lubeD: u("photo-1599751449128-eb7249c3d6b1"), // care detail
  lubeE: u("photo-1576426863848-c21f53c60b19"), // dropper bottle
  lubeF: u("photo-1556228852-80b6e5eeff06"), // bottle styled
  lubeG: u("photo-1556228578-8c89e6adf883"), // bottle on neutral
  // Lifestyle / detail
  lifestyleA: u("photo-1584308972272-9e4e7685e80f"),
  lifestyleB: u("photo-1598662957563-ee4965d4d72c"),
};

export const MOCK_PRODUCTS: MockProduct[] = [
  {
    id: "p1",
    slug: "ultra-thin-classic",
    name: "Ultra Thin · Classic",
    tagline: "Maximum sensitivity. 0.045mm.",
    description:
      "Our flagship ultra-thin condom for natural sensation, electronically tested and ISO certified.",
    basePrice: 1499,
    compareAt: 1899,
    rating: 4.9,
    reviewCount: 2341,
    isFeatured: true,
    categorySlug: "condoms",
    categoryName: "Condoms",
    type: "ultra-thin",
    images: [
      { id: "p1-1", url: IMG.condomA, alt: "Ultra Thin pack" },
      { id: "p1-2", url: IMG.condomB, alt: "Detail" },
      { id: "p1-3", url: IMG.condomD, alt: "Wrapper" },
      { id: "p1-4", url: IMG.lifestyleA, alt: "Lifestyle" },
    ],
    variants: [
      { id: "v1", name: "Pack of 12", stock: 240 },
      { id: "v2", name: "Pack of 24", price: 2799, stock: 120 },
    ],
    certifications: ["FDA-cleared", "ISO 4074"],
    safetyInfo:
      "Single-use only. Do not use with oil-based lubricants. Store away from heat and sunlight.",
  },
  {
    id: "p2",
    slug: "dotted-pleasure",
    name: "Dotted · Pleasure",
    tagline: "Textured for added sensation.",
    description:
      "Subtly textured surface for enhanced stimulation, with a smooth lubricated finish.",
    basePrice: 1599,
    rating: 4.8,
    reviewCount: 1102,
    isFeatured: true,
    categorySlug: "condoms",
    categoryName: "Condoms",
    type: "dotted",
    images: [
      { id: "p2-1", url: IMG.condomB, alt: "Dotted pack" },
      { id: "p2-2", url: IMG.condomE, alt: "Texture detail" },
      { id: "p2-3", url: IMG.condomF, alt: "Packaging" },
    ],
    variants: [{ id: "v3", name: "Pack of 12", stock: 180 }],
    certifications: ["FDA-cleared", "ISO 4074"],
  },
  {
    id: "p3",
    slug: "flavored-strawberry",
    name: "Flavored · Strawberry",
    tagline: "Sweet and discreet.",
    description: "Vegan, sugar-free flavor coating with a smooth glide.",
    basePrice: 1399,
    rating: 4.7,
    reviewCount: 642,
    isFeatured: true,
    categorySlug: "condoms",
    categoryName: "Condoms",
    type: "flavored",
    images: [
      { id: "p3-1", url: IMG.condomC, alt: "Flavored packs" },
      { id: "p3-2", url: IMG.condomA, alt: "Detail" },
      { id: "p3-3", url: IMG.lifestyleB, alt: "Lifestyle" },
    ],
    variants: [{ id: "v4", name: "Pack of 10", stock: 150 }],
    certifications: ["FDA-cleared"],
  },
  {
    id: "p4",
    slug: "delay-extended",
    name: "Delay · Extended",
    tagline: "Designed for longer moments.",
    description:
      "Climax-control formula with a benzocaine-free desensitizing inner lining.",
    basePrice: 1799,
    rating: 4.6,
    reviewCount: 410,
    isFeatured: false,
    categorySlug: "condoms",
    categoryName: "Condoms",
    type: "delay",
    images: [
      { id: "p4-1", url: IMG.condomD, alt: "Delay pack" },
      { id: "p4-2", url: IMG.condomF, alt: "Packaging" },
      { id: "p4-3", url: IMG.condomE, alt: "Detail" },
    ],
    variants: [{ id: "v5", name: "Pack of 10", stock: 90 }],
    certifications: ["FDA-cleared"],
  },
  {
    id: "p5",
    slug: "ribbed-intensity",
    name: "Ribbed · Intensity",
    tagline: "Heightened sensation.",
    description:
      "Deeply ribbed body and reservoir tip for extra grip and amplified stimulation.",
    basePrice: 1599,
    rating: 4.7,
    reviewCount: 318,
    isFeatured: false,
    categorySlug: "condoms",
    categoryName: "Condoms",
    type: "dotted",
    images: [
      { id: "p5-1", url: IMG.condomE, alt: "Ribbed pack" },
      { id: "p5-2", url: IMG.condomC, alt: "Detail" },
    ],
    variants: [{ id: "v11", name: "Pack of 12", stock: 130 }],
    certifications: ["FDA-cleared", "ISO 4074"],
  },
  {
    id: "p6",
    slug: "natural-feel",
    name: "Natural Feel",
    tagline: "Latex-free, hypoallergenic.",
    description:
      "Polyisoprene formula for those with latex sensitivity. Skin-soft, body-warming feel.",
    basePrice: 1899,
    compareAt: 2199,
    rating: 4.8,
    reviewCount: 877,
    isFeatured: true,
    categorySlug: "condoms",
    categoryName: "Condoms",
    type: "ultra-thin",
    images: [
      { id: "p6-1", url: IMG.condomF, alt: "Natural Feel pack" },
      { id: "p6-2", url: IMG.condomA, alt: "Detail" },
      { id: "p6-3", url: IMG.lifestyleA, alt: "Lifestyle" },
    ],
    variants: [{ id: "v12", name: "Pack of 10", stock: 95 }],
    certifications: ["FDA-cleared", "ISO 4074", "Latex-free"],
  },
  {
    id: "p7",
    slug: "water-glide",
    name: "Water Glide · Pure",
    tagline: "Silky water-based lubricant.",
    description:
      "Hydrating, pH-balanced, and condom-compatible. Free of glycerin, parabens, and fragrance.",
    basePrice: 1899,
    rating: 4.9,
    reviewCount: 1801,
    isFeatured: true,
    categorySlug: "lubricants",
    categoryName: "Lubricants",
    type: "water-based",
    images: [
      { id: "p7-1", url: IMG.lubeA, alt: "Water Glide bottle" },
      { id: "p7-2", url: IMG.lubeD, alt: "Detail" },
      { id: "p7-3", url: IMG.lubeF, alt: "Styled" },
    ],
    variants: [
      { id: "v6", name: "100 ml", stock: 200 },
      { id: "v7", name: "250 ml", price: 2999, stock: 90 },
    ],
    certifications: ["FDA-cleared"],
    ingredients:
      "Water, propylene glycol, hydroxyethylcellulose, sodium benzoate.",
  },
  {
    id: "p8",
    slug: "silk-silicone",
    name: "Silk Silicone",
    tagline: "Long-lasting silky finish.",
    description:
      "Premium silicone formula. A little goes a long way; perfect for low-friction comfort.",
    basePrice: 2299,
    rating: 4.8,
    reviewCount: 524,
    isFeatured: true,
    categorySlug: "lubricants",
    categoryName: "Lubricants",
    type: "silicone",
    images: [
      { id: "p8-1", url: IMG.lubeB, alt: "Silk Silicone" },
      { id: "p8-2", url: IMG.lubeG, alt: "Detail" },
      { id: "p8-3", url: IMG.lifestyleB, alt: "Lifestyle" },
    ],
    variants: [{ id: "v8", name: "100 ml", stock: 110 }],
    certifications: ["FDA-cleared"],
  },
  {
    id: "p9",
    slug: "flavored-vanilla",
    name: "Flavored · Vanilla",
    tagline: "Subtle warmth, smooth finish.",
    description: "Edible water-based formula with a natural vanilla note.",
    basePrice: 1699,
    rating: 4.5,
    reviewCount: 218,
    isFeatured: false,
    categorySlug: "lubricants",
    categoryName: "Lubricants",
    type: "flavored",
    images: [
      { id: "p9-1", url: IMG.lubeC, alt: "Vanilla bottle" },
      { id: "p9-2", url: IMG.lubeE, alt: "Detail" },
    ],
    variants: [{ id: "v9", name: "75 ml", stock: 70 }],
    certifications: ["FDA-cleared"],
  },
  {
    id: "p10",
    slug: "warming-glow",
    name: "Warming Glow",
    tagline: "A gentle warming sensation.",
    description:
      "Body-safe water-based formula with a soothing warming effect on contact.",
    basePrice: 2099,
    rating: 4.6,
    reviewCount: 196,
    isFeatured: false,
    categorySlug: "lubricants",
    categoryName: "Lubricants",
    type: "water-based",
    images: [
      { id: "p10-1", url: IMG.lubeF, alt: "Warming Glow bottle" },
      { id: "p10-2", url: IMG.lubeA, alt: "Detail" },
    ],
    variants: [{ id: "v13", name: "100 ml", stock: 140 }],
    certifications: ["FDA-cleared"],
  },
  {
    id: "p11",
    slug: "essentials-bundle",
    name: "Essentials Bundle",
    tagline: "Save 20% on your top picks.",
    description:
      "Includes Ultra Thin (12), Water Glide (100ml), and a discreet travel pouch.",
    basePrice: 2999,
    compareAt: 3797,
    rating: 4.9,
    reviewCount: 988,
    isFeatured: true,
    categorySlug: "bundles",
    categoryName: "Bundles",
    images: [
      { id: "p11-1", url: IMG.lifestyleA, alt: "Bundle" },
      { id: "p11-2", url: IMG.condomA, alt: "Includes condoms" },
      { id: "p11-3", url: IMG.lubeA, alt: "Includes lubricant" },
    ],
    variants: [{ id: "v10", name: "Bundle", stock: 60 }],
    certifications: ["FDA-cleared", "ISO 4074"],
  },
  {
    id: "p12",
    slug: "weekend-bundle",
    name: "Weekend Bundle",
    tagline: "Everything for a weekend away.",
    description:
      "Curated mix of Natural Feel (10), Silk Silicone (100ml), and a leather-look pouch.",
    basePrice: 3899,
    compareAt: 4598,
    rating: 4.8,
    reviewCount: 412,
    isFeatured: true,
    categorySlug: "bundles",
    categoryName: "Bundles",
    images: [
      { id: "p12-1", url: IMG.lifestyleB, alt: "Weekend bundle" },
      { id: "p12-2", url: IMG.condomF, alt: "Includes condoms" },
      { id: "p12-3", url: IMG.lubeB, alt: "Includes silicone" },
    ],
    variants: [{ id: "v14", name: "Bundle", stock: 45 }],
    certifications: ["FDA-cleared", "ISO 4074"],
  },
];

export function getProductsByCategory(category?: string, type?: string) {
  return MOCK_PRODUCTS.filter((p) => {
    if (category && category !== "all" && p.categorySlug !== category) return false;
    if (type && p.type !== type) return false;
    return true;
  });
}

export function getProductBySlug(slug: string) {
  return MOCK_PRODUCTS.find((p) => p.slug === slug);
}

export function getFeaturedProducts() {
  return MOCK_PRODUCTS.filter((p) => p.isFeatured).slice(0, 8);
}

export function getRelatedProducts(slug: string, category: string) {
  return MOCK_PRODUCTS.filter((p) => p.categorySlug === category && p.slug !== slug).slice(0, 4);
}
