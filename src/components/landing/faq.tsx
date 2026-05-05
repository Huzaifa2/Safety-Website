import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "How discreet is your shipping, really?",
    a: "Plain corrugated box. No branding, no product references, no perfume. The return label uses a neutral fulfillment name. The carrier sees a parcel — nothing more.",
  },
  {
    q: "Are the products tested and certified?",
    a: "Every product is FDA-cleared and ISO 4074 certified. Each batch is electronically tested and traceable to its production line.",
  },
  {
    q: "What payment options do you offer?",
    a: "Major cards via secure checkout, plus Apple Pay, Google Pay, and Cash on Delivery in supported regions.",
  },
  {
    q: "Can I pause or cancel my Ritual subscription?",
    a: "Anytime. Pause, skip, or cancel from your account — no friction, no calls.",
  },
  {
    q: "Do you ship internationally?",
    a: "We currently ship to 30+ countries. Options and timing appear at checkout based on your address.",
  },
];

export function Faq() {
  return (
    <section className="container py-28">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            05 — Considered, not complicated
          </p>
          <h2 className="editorial-headline mt-6 text-5xl md:text-6xl">
            Asked &<br />
            <span className="editorial-italic text-primary">answered.</span>
          </h2>
        </div>

        <div className="md:col-span-7">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="font-display text-lg font-medium">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-pretty">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
