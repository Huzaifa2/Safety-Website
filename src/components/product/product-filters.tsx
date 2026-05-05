"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useTransition } from "react";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { slug: "all", label: "All" },
  { slug: "condoms", label: "Condoms" },
  { slug: "lubricants", label: "Lubricants" },
  { slug: "bundles", label: "Bundles" },
];

const TYPES: Record<string, { value: string; label: string }[]> = {
  condoms: [
    { value: "ultra-thin", label: "Ultra-thin" },
    { value: "dotted", label: "Dotted" },
    { value: "flavored", label: "Flavored" },
    { value: "delay", label: "Delay" },
  ],
  lubricants: [
    { value: "water-based", label: "Water-based" },
    { value: "silicone", label: "Silicone" },
    { value: "flavored", label: "Flavored" },
  ],
};

const SORTS = [
  { value: "newest", label: "Newest" },
  { value: "price_asc", label: "Price: low → high" },
  { value: "price_desc", label: "Price: high → low" },
  { value: "rating", label: "Top rated" },
];

export function ProductFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const category = params.get("category") ?? "all";
  const type = params.get("type") ?? "";
  const sort = params.get("sort") ?? "newest";
  const typesForCat = TYPES[category] ?? [];

  const setParam = (key: string, value: string | null) => {
    const next = new URLSearchParams(params);
    if (value && value !== "all") next.set(key, value);
    else next.delete(key);
    if (key === "category") next.delete("type");
    startTransition(() => router.push(`${pathname}?${next.toString()}`));
  };

  return (
    <div className={cn("space-y-6", isPending && "opacity-60")}>
      <FilterGroup label="Category">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <Pill key={c.slug} active={category === c.slug} onClick={() => setParam("category", c.slug)}>
              {c.label}
            </Pill>
          ))}
        </div>
      </FilterGroup>

      {typesForCat.length > 0 && (
        <FilterGroup label="Type">
          <div className="flex flex-wrap gap-2">
            <Pill active={!type} onClick={() => setParam("type", null)}>
              All
            </Pill>
            {typesForCat.map((t) => (
              <Pill key={t.value} active={type === t.value} onClick={() => setParam("type", t.value)}>
                {t.label}
              </Pill>
            ))}
          </div>
        </FilterGroup>
      )}

      <FilterGroup label="Sort by">
        <select
          value={sort}
          onChange={(e) => setParam("sort", e.target.value)}
          className="h-10 w-full rounded-xl border border-border bg-background/50 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          {SORTS.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </FilterGroup>
    </div>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      {children}
    </div>
  );
}

function Pill({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-3 py-1.5 text-xs font-medium transition",
        active
          ? "bg-primary text-primary-foreground"
          : "border border-border bg-transparent text-muted-foreground hover:border-primary/40 hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}
