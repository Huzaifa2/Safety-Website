export type JournalPost = {
  slug: string;
  title: string;
  dek: string;
  category: "Studio" | "Ingredients" | "Field notes" | "Conversations";
  readMinutes: number;
  date: string;          // ISO
  imageUrl: string;
  body: string[];        // paragraphs
};

const u = (id: string) =>
  `https://images.unsplash.com/${id}?w=1400&q=85&auto=format&fit=crop`;

export const JOURNAL_POSTS: JournalPost[] = [
  {
    slug: "what-discreet-actually-means",
    title: "What 'discreet' actually means",
    dek: "We took apart our own packaging to see whether it lived up to the word — and rebuilt it where it didn't.",
    category: "Studio",
    readMinutes: 4,
    date: "2025-04-22",
    imageUrl: u("photo-1620916566398-39f1143ab7be"),
    body: [
      "When a brand says discreet, what do they actually mean? In our experience, it usually means the product description is omitted from the shipping label — and not much more. The box itself often gives the game away: a glossy print, a coloured tape, a noisy graphic.",
      "We took our own first-generation packaging apart, piece by piece, and asked a simple question: would you mind if a delivery person, a roommate, or a parent saw this on a kitchen counter? The answer for too many of the components was no, but only just.",
      "So we rebuilt. Plain corrugated brown. No print. No tape colour. The return label uses a neutral fulfilment name — 'VS Logistics' — that means absolutely nothing to anyone outside our warehouse. The interior is a single sheet of recycled tissue and a small thank-you card you can choose to omit at checkout.",
      "Discreet shouldn't be a marketing word. It should be a default.",
    ],
  },
  {
    slug: "the-case-for-a-small-catalogue",
    title: "The case for a small catalogue",
    dek: "Why we will probably never have fifty SKUs — and how that benefits you.",
    category: "Studio",
    readMinutes: 3,
    date: "2025-03-18",
    imageUrl: u("photo-1556228852-80b6e5eeff06"),
    body: [
      "Most categories suffer from a peculiar form of choice paralysis: dozens of variants, identical at the level of formulation, separated only by typography on the box. We don't intend to add to that pile.",
      "VELVE keeps a small, deliberate catalogue. Each object earns its place by being meaningfully different — in feel, in formulation, in moment-of-use. If two products do the same thing, only the better one stays.",
      "This is harder for us. It also means you spend less time deciding and more time using.",
    ],
  },
  {
    slug: "ingredients-we-leave-out",
    title: "On ingredients we leave out",
    dek: "Glycerin, parabens, fragrance, taste-of-everything: a short list of what's not in our lubricants, and why.",
    category: "Ingredients",
    readMinutes: 5,
    date: "2025-02-09",
    imageUrl: u("photo-1608248543803-ba4f8c70ae0b"),
    body: [
      "We started with a maximalist ingredients list and crossed things out, one at a time, until what was left was the minimum that still felt right.",
      "Glycerin is common in water-based formulas because it's cheap and adds a slick feel. It also feeds yeast. We left it out.",
      "Fragrance compounds — even the natural ones — are routine irritants for sensitive skin. We left those out, too. Our flavoured products use food-grade extracts at minimum effective dose.",
      "What's left is short, calm, and pH-balanced.",
    ],
  },
  {
    slug: "a-quieter-way-to-shop",
    title: "A quieter way to shop",
    dek: "Field notes on building a checkout that doesn't shout.",
    category: "Field notes",
    readMinutes: 2,
    date: "2025-01-14",
    imageUrl: u("photo-1576426863848-c21f53c60b19"),
    body: [
      "Most ecommerce checkouts try to maximise something — order value, urgency, conversion. Ours tries to minimise something else: anxiety.",
      "There are no countdown timers. No 'only two left in stock.' No upsell modals. The form is short, the buttons are calm, the copy reads like a note from a friend who happens to also be the founder.",
      "This isn't a strategy. It's just how we'd want to be sold to.",
    ],
  },
  {
    slug: "in-conversation-emi",
    title: "In conversation: Emi, our materials lead",
    dek: "On polyisoprene, why it took two years, and the future of latex-free.",
    category: "Conversations",
    readMinutes: 6,
    date: "2024-12-02",
    imageUrl: u("photo-1599751449128-eb7249c3d6b1"),
    body: [
      "Emi joined the studio after a decade in medical-grade materials. We sat down for thirty minutes; the conversation went for two hours. Below, the part that mattered.",
      "On why polyisoprene took so long: 'Latex has a head start of about a hundred years. Polyisoprene needed reformulation pass after reformulation pass to feel as warm. We weren't shipping it until it did.'",
      "On the next thing: 'Bio-based silicone alternatives. Three years out, maybe two.'",
    ],
  },
  {
    slug: "shipping-internationally",
    title: "Shipping internationally, quietly",
    dek: "How we get a plain brown box across thirty borders without ever revealing what's inside.",
    category: "Field notes",
    readMinutes: 3,
    date: "2024-11-12",
    imageUrl: u("photo-1612817288484-6f916006741a"),
    body: [
      "Customs declarations are the single most common point of failure for 'discreet' international shipping. We worked with our freight partner to use the broadest legal HS classification ('personal care articles'), which appears on the form exactly that way and nothing else.",
      "We also chose carriers based on which ones don't print product references on their tracking notifications. (You'd be surprised.)",
      "Net effect: the box looks the same in Sydney, São Paulo, and Stockholm.",
    ],
  },
];

export function getJournalBySlug(slug: string) {
  return JOURNAL_POSTS.find((p) => p.slug === slug);
}
