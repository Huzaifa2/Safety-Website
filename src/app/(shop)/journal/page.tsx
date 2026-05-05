import Link from "next/link";
import Image from "next/image";
import { JOURNAL_POSTS } from "@/lib/journal-data";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });

export default function JournalIndexPage() {
  const [feature, ...rest] = JOURNAL_POSTS;

  return (
    <>
      {/* ─── Masthead ─────────────────────────────────────── */}
      <section className="grain surface-elevated border-b border-border">
        <div className="container py-20 md:py-24">
          <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            The Journal
          </p>
          <h1 className="editorial-headline mt-6 max-w-4xl text-[clamp(3rem,8vw,6.5rem)] font-light text-balance">
            Field notes from the{" "}
            <span className="editorial-italic font-normal text-primary">studio.</span>
          </h1>
          <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-muted-foreground text-pretty">
            Slow writing about the craft of intimate wellness. Ingredients we
            keep out, decisions we labour over, and the occasional quiet
            opinion.
          </p>
        </div>
      </section>

      {/* ─── Featured ─────────────────────────────────────── */}
      <section className="container py-20">
        <Link
          href={`/journal/${feature.slug}`}
          className="group grid items-center gap-10 md:grid-cols-12"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm md:col-span-7">
            <Image
              src={feature.imageUrl}
              alt={feature.title}
              fill
              priority
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
          <div className="md:col-span-5">
            <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              <span>Latest</span>
              <span>·</span>
              <span>{feature.category}</span>
              <span>·</span>
              <span>{feature.readMinutes} min read</span>
            </div>
            <h2 className="editorial-headline mt-6 text-4xl md:text-5xl">
              {feature.title}
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground text-pretty">
              {feature.dek}
            </p>
            <p className="mt-8 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              {formatDate(feature.date)}
            </p>
            <span className="mt-6 inline-flex items-center gap-3 border-b border-foreground pb-1 text-sm uppercase tracking-[0.2em] transition group-hover:text-primary group-hover:border-primary">
              Read the entry →
            </span>
          </div>
        </Link>
      </section>

      {/* ─── Index ────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container py-20">
          <div className="mb-12 flex items-end justify-between gap-4">
            <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              All entries
            </p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              {JOURNAL_POSTS.length} pieces
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link key={post.slug} href={`/journal/${post.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-muted">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-5">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    {post.category} · {post.readMinutes} min
                  </p>
                  <h3 className="editorial-headline mt-2 text-2xl leading-tight">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {post.dek}
                  </p>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {formatDate(post.date)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
