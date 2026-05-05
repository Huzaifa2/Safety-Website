"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="grain surface-elevated relative overflow-hidden">
      <div className="container grid gap-16 py-24 md:grid-cols-12 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7"
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            01 — A new chapter in intimate wellness
          </p>

          <h1 className="editorial-headline mt-8 text-[clamp(3rem,9vw,7.5rem)] font-light text-balance">
            Quietly
            <br />
            <span className="editorial-italic font-normal text-primary">considered.</span>
            <br />
            Distinctly yours.
          </h1>

          <p className="mt-10 max-w-md text-[15px] leading-relaxed text-muted-foreground text-pretty">
            VELVE is a slow-made line of intimate essentials — designed in studio,
            held to medical-grade standards, and delivered without a single mention
            on the box.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-8">
            <Link
              href="/products"
              className="group inline-flex items-center gap-3 border-b border-foreground pb-1 text-sm uppercase tracking-[0.2em] transition-colors hover:text-primary hover:border-primary"
            >
              Shop the collection
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/subscribe"
              className="text-sm uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
            >
              Build your ritual →
            </Link>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="md:col-span-5"
        >
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted">
              <Image
                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1200&q=85&auto=format&fit=crop"
                alt="VELVE — featured object"
                fill
                priority
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>

            {/* Editorial caption card */}
            <div className="absolute -left-6 bottom-8 hidden w-64 rounded-sm border border-border bg-background p-5 shadow-[0_24px_60px_-30px_rgba(40,20,40,0.4)] md:block">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Object 01
              </p>
              <p className="editorial-headline mt-2 text-2xl">
                Ultra Thin <span className="editorial-italic">Classic</span>
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                0.045mm. Electronically tested. ISO 4074 certified.
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                <span className="text-xs text-muted-foreground">From</span>
                <span className="font-display text-base">$14.99</span>
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
