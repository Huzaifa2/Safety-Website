const QUOTES = [
  {
    body: "Finally a brand that doesn't shout. The packaging looks like skincare and the products feel premium.",
    name: "A. Reyes",
    role: "Verified · 6 months",
  },
  {
    body: "The monthly ritual is a quiet upgrade I didn't know I needed. Set, forget, repeat.",
    name: "J. Kahn",
    role: "Subscriber · 1 year",
  },
  {
    body: "Customer service replied in five minutes. Shipping was discreet — unmarked box, neutral label, exactly as promised.",
    name: "S. Pearce",
    role: "Verified · 3 months",
  },
];

export function Testimonials() {
  return (
    <section className="container py-28">
      <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
        04 — In their words
      </p>
      <h2 className="editorial-headline mt-6 max-w-3xl text-5xl md:text-6xl">
        Trusted by <span className="editorial-italic text-primary">grown-ups</span>{" "}
        with taste.
      </h2>

      <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
        {QUOTES.map((q, i) => (
          <figure key={i} className="bg-background p-10">
            <span className="font-display text-5xl leading-none text-primary opacity-50">
              "
            </span>
            <blockquote className="mt-3 text-[15px] leading-relaxed text-pretty">
              {q.body}
            </blockquote>
            <figcaption className="mt-8 border-t border-border pt-4 text-[11px] uppercase tracking-[0.2em]">
              <span className="font-medium">{q.name}</span>
              <span className="ml-2 text-muted-foreground">{q.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
