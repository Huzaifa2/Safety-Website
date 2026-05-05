"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Pause, Truck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn, formatPrice } from "@/lib/utils";

type Plan = "essentials" | "balance" | "studio";
type Cadence = "monthly" | "two-month" | "quarterly";

const PLANS: { id: Plan; name: string; tagline: string; pricePerMonth: number; includes: string[] }[] = [
  {
    id: "essentials",
    name: "Essentials",
    tagline: "The quiet baseline.",
    pricePerMonth: 1199,
    includes: ["Ultra Thin · 12", "Water Glide · 100ml"],
  },
  {
    id: "balance",
    name: "Balance",
    tagline: "Considered variety.",
    pricePerMonth: 1899,
    includes: ["Natural Feel · 10", "Silk Silicone · 100ml", "Travel pouch"],
  },
  {
    id: "studio",
    name: "Studio",
    tagline: "Everything from the studio.",
    pricePerMonth: 2799,
    includes: ["Two condom packs (any)", "Two lubricants (any)", "Studio gift each quarter"],
  },
];

const CADENCES: { id: Cadence; label: string; sub: string }[] = [
  { id: "monthly", label: "Monthly", sub: "Most chosen" },
  { id: "two-month", label: "Every 2 months", sub: "Save 5%" },
  { id: "quarterly", label: "Quarterly", sub: "Save 10%" },
];

const STEPS = [
  { num: "01", title: "Choose your shape", body: "Pick a plan that matches the rhythm of your life." },
  { num: "02", title: "Set the cadence", body: "Monthly, every two, or quarterly. Skip or pause anytime." },
  { num: "03", title: "Quietly delivered", body: "Plain box, neutral label, never a single brand reference." },
];

export default function SubscribePage() {
  const [plan, setPlan] = useState<Plan>("balance");
  const [cadence, setCadence] = useState<Cadence>("monthly");

  const selected = PLANS.find((p) => p.id === plan)!;
  const cadenceMultiplier =
    cadence === "two-month" ? 0.95 : cadence === "quarterly" ? 0.9 : 1;
  const total = Math.round(selected.pricePerMonth * cadenceMultiplier);

  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="grain surface-elevated">
        <div className="container grid gap-16 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              The Ritual
            </p>
            <h1 className="editorial-headline mt-8 text-[clamp(3rem,8vw,6.5rem)] font-light text-balance">
              A monthly{" "}
              <span className="editorial-italic font-normal text-primary">ritual,</span>
              <br />
              quietly delivered.
            </h1>
            <p className="mt-10 max-w-md text-[15px] leading-relaxed text-muted-foreground text-pretty">
              Choose your essentials. Pick a cadence. Save 20% off shop prices.
              Pause, skip, or cancel anytime — no awkward conversations, no friction.
            </p>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5" /> Save up to 20%
              </span>
              <span className="inline-flex items-center gap-2">
                <Pause className="h-3.5 w-3.5" /> Pause anytime
              </span>
              <span className="inline-flex items-center gap-2">
                <Truck className="h-3.5 w-3.5" /> Discreet delivery
              </span>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted">
              <Image
                src="https://images.unsplash.com/photo-1599751449128-eb7249c3d6b1?w=1200&q=85&auto=format&fit=crop"
                alt="The Ritual"
                fill
                priority
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Plan Builder ─────────────────────────────────── */}
      <section className="container py-28">
        <div className="grid gap-16 md:grid-cols-12">
          {/* Plan tiles */}
          <div className="md:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              01 — Choose your plan
            </p>
            <h2 className="editorial-headline mt-6 text-4xl md:text-5xl">
              Three <span className="editorial-italic text-primary">shapes</span> of ritual.
            </h2>

            <div className="mt-10 space-y-4">
              {PLANS.map((p) => {
                const active = p.id === plan;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPlan(p.id)}
                    className={cn(
                      "block w-full rounded-sm border p-6 text-left transition-all md:p-8",
                      active
                        ? "border-foreground bg-card shadow-soft"
                        : "border-border bg-transparent hover:border-foreground/40",
                    )}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                          The {p.name}
                        </p>
                        <p className="editorial-headline mt-2 text-3xl">
                          {p.name}
                          <span className="editorial-italic ml-2 text-muted-foreground">
                            — {p.tagline}
                          </span>
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-display text-2xl">
                          {formatPrice(p.pricePerMonth)}
                          <span className="text-xs text-muted-foreground"> / mo</span>
                        </p>
                        {active && (
                          <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-primary">
                            Selected
                          </p>
                        )}
                      </div>
                    </div>
                    <ul className="mt-5 grid gap-1.5 sm:grid-cols-2">
                      {p.includes.map((line) => (
                        <li
                          key={line}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <Check className="mt-0.5 h-3.5 w-3.5 flex-none text-primary" />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </button>
                );
              })}
            </div>

            <div className="mt-14">
              <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                02 — Set your cadence
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {CADENCES.map((c) => {
                  const active = c.id === cadence;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setCadence(c.id)}
                      className={cn(
                        "rounded-sm border p-4 text-left transition-all",
                        active
                          ? "border-foreground bg-card"
                          : "border-border hover:border-foreground/40",
                      )}
                    >
                      <p className="font-display text-base">{c.label}</p>
                      <p className="mt-0.5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                        {c.sub}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Summary panel */}
          <aside className="md:col-span-5">
            <div className="md:sticky md:top-32">
              <div className="rounded-sm border border-border bg-card p-8">
                <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                  Your ritual
                </p>
                <p className="editorial-headline mt-3 text-3xl">
                  The <span className="editorial-italic text-primary">{selected.name}</span>
                </p>
                <p className="mt-1 text-xs italic text-muted-foreground">{selected.tagline}</p>

                <ul className="mt-6 space-y-2 border-t border-border pt-6">
                  {selected.includes.map((line) => (
                    <li key={line} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{line}</span>
                      <Check className="h-4 w-4 text-primary" />
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex justify-between border-t border-border pt-4 text-sm">
                  <span className="text-muted-foreground">Cadence</span>
                  <span className="font-medium">
                    {CADENCES.find((c) => c.id === cadence)!.label}
                  </span>
                </div>

                <div className="mt-2 flex items-baseline justify-between border-t border-border pt-4">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    Per delivery
                  </span>
                  <span className="font-display text-3xl">{formatPrice(total)}</span>
                </div>

                <Button size="lg" className="mt-6 w-full">
                  Begin your ritual
                </Button>

                <p className="mt-4 text-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Pause · skip · cancel anytime
                </p>
              </div>

              <p className="mt-6 px-2 text-xs italic leading-relaxed text-muted-foreground">
                "I forgot I had a subscription, then a quiet box arrived. That's
                exactly the energy."{" "}
                <span className="not-italic uppercase tracking-[0.2em]">— J. Kahn</span>
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* ─── How it works ─────────────────────────────────── */}
      <section className="border-t border-border bg-background">
        <div className="container py-28">
          <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            How it works
          </p>
          <h2 className="editorial-headline mt-6 max-w-3xl text-4xl md:text-5xl">
            Three steps to a{" "}
            <span className="editorial-italic text-primary">considered</span> month.
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.num} className="bg-background p-10">
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  — {s.num}
                </p>
                <p className="editorial-headline mt-3 text-2xl">{s.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-8">
            <p className="max-w-md text-sm text-muted-foreground">
              Prefer a one-time purchase? The full collection is just as quiet.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-3 border-b border-foreground pb-1 text-sm uppercase tracking-[0.2em] hover:text-primary hover:border-primary"
            >
              Browse the collection →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
