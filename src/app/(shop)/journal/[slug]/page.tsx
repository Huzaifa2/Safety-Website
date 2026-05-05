import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getJournalBySlug, JOURNAL_POSTS } from "@/lib/journal-data";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });

export function generateStaticParams() {
  return JOURNAL_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getJournalBySlug(params.slug);
  if (!post) return {};
  return { title: post.title, description: post.dek };
}

export default function JournalArticlePage({ params }: { params: { slug: string } }) {
  const post = getJournalBySlug(params.slug);
  if (!post) notFound();

  const more = JOURNAL_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article>
      {/* ─── Title block ──────────────────────────────────── */}
      <section className="grain surface-elevated border-b border-border">
        <div className="container max-w-3xl py-20 md:py-24">
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-3 w-3" />
            Back to journal
          </Link>
          <p className="mt-10 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            {post.category} · {post.readMinutes} min read
          </p>
          <h1 className="editorial-headline mt-6 text-[clamp(2.5rem,6vw,5rem)] font-light text-balance">
            {post.title}
          </h1>
          <p className="mt-8 text-lg italic leading-relaxed text-muted-foreground text-pretty">
            {post.dek}
          </p>
          <p className="mt-10 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {formatDate(post.date)} · The VELVE Studio
          </p>
        </div>
      </section>

      {/* ─── Hero image ───────────────────────────────────── */}
      <section className="container max-w-5xl py-12">
        <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            priority
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* ─── Body ─────────────────────────────────────────── */}
      <section className="container max-w-2xl py-12 pb-28">
        <div className="space-y-7">
          {post.body.map((para, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "text-pretty text-[18px] leading-relaxed first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:font-medium first-letter:leading-[0.85] first-letter:text-primary"
                  : "text-pretty text-[16px] leading-relaxed text-muted-foreground"
              }
            >
              {para}
            </p>
          ))}
        </div>

        {/* End mark */}
        <div className="mt-16 flex items-center justify-center gap-6 border-t border-border pt-8 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
          <span>—</span>
          <span>End of entry</span>
          <span>—</span>
        </div>
      </section>

      {/* ─── More entries ─────────────────────────────────── */}
      <section className="border-t border-border bg-card/40">
        <div className="container py-20">
          <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            Continue reading
          </p>
          <h2 className="editorial-headline mt-6 text-3xl md:text-4xl">
            More from the <span className="editorial-italic text-primary">studio.</span>
          </h2>

          <div className="mt-12 grid gap-x-10 gap-y-14 md:grid-cols-3">
            {more.map((p) => (
              <Link key={p.slug} href={`/journal/${p.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-muted">
                  <Image
                    src={p.imageUrl}
                    alt={p.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  {p.category} · {p.readMinutes} min
                </p>
                <h3 className="editorial-headline mt-2 text-xl leading-tight">{p.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
