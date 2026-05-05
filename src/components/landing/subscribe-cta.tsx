import Link from "next/link";
import Image from "next/image";

export function SubscribeCta() {
  return (
    <section className="container py-12">
      <div className="grid items-stretch gap-0 overflow-hidden rounded-sm border border-border md:grid-cols-2">
        <div className="relative aspect-[4/5] md:aspect-auto">
          <Image
            src="https://images.unsplash.com/photo-1599751449128-eb7249c3d6b1?w=1200&q=85&auto=format&fit=crop"
            alt="The Ritual subscription"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-between gap-12 bg-card p-10 md:p-16">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              06 — The Ritual
            </p>
            <h3 className="editorial-headline mt-6 text-4xl md:text-5xl">
              A monthly <span className="editorial-italic text-primary">ritual,</span>
              <br />
              quietly delivered.
            </h3>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground text-pretty">
              Choose your essentials. Pick a cadence. We'll handle the rest —
              save 20%, pause anytime, no awkward conversations.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/subscribe"
              className="inline-flex items-center gap-3 border-b border-foreground pb-1 text-sm uppercase tracking-[0.2em] hover:text-primary hover:border-primary"
            >
              Build your ritual →
            </Link>
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              From $11.99 · cancel anytime
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
