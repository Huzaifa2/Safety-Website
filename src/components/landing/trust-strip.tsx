const ROWS = [
  { num: "01", label: "FDA cleared", body: "Every batch electronically tested." },
  { num: "02", label: "ISO 4074", body: "International condom safety standard." },
  { num: "03", label: "Plain shipping", body: "Unmarked box. Neutral return label." },
  { num: "04", label: "Quiet returns", body: "30 days, no awkward emails." },
];

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-background">
      <div className="container grid divide-y divide-border md:grid-cols-4 md:divide-x md:divide-y-0">
        {ROWS.map((r) => (
          <div key={r.num} className="px-6 py-10 first:pl-0 last:pr-0 md:px-10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              — {r.num}
            </p>
            <p className="editorial-headline mt-3 text-2xl">{r.label}</p>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{r.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
