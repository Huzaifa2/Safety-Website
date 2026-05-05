"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShoppingBag, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Wordmark } from "@/components/layout/brand-mark";
import { useCartStore } from "@/store/cart-store";
import { useUiStore } from "@/store/ui-store";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/products?category=condoms", label: "Condoms" },
  { href: "/products?category=lubricants", label: "Lubricants" },
  { href: "/products?category=bundles", label: "Sets" },
  { href: "/subscribe", label: "Ritual" },
  { href: "/journal", label: "Journal" },
];

export function Header() {
  const pathname = usePathname();
  const itemCount = useCartStore((s) => s.itemCount());
  const toggleCart = useUiStore((s) => s.toggleCart);
  const setMobileMenuOpen = useUiStore((s) => s.setMobileMenuOpen);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      {/* Marquee announcement bar */}
      <div className="surface-inverse overflow-hidden border-b border-border/60 py-1.5 text-[10px] uppercase tracking-[0.32em]">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap pl-12">
          {Array.from({ length: 2 }).map((_, copy) => (
            <div key={copy} className="flex shrink-0 items-center gap-12">
              <span>Discreet packaging</span><span>·</span>
              <span>Free shipping over $40</span><span>·</span>
              <span>FDA cleared & ISO 4074</span><span>·</span>
              <span>30-day quiet returns</span><span>·</span>
              <span>Trusted by 100,000+</span><span>·</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container flex h-20 items-center gap-6">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </Button>

        <Link href="/" className="flex items-center gap-2.5">
          <Wordmark />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-9 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[12px] uppercase tracking-[0.2em] transition-colors hover:text-foreground",
                pathname.startsWith(item.href.split("?")[0])
                  ? "text-foreground"
                  : "text-muted-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1">
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="h-4 w-4" />
          </Button>
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleCart}
            aria-label="Open cart"
            className="relative"
          >
            <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
            {itemCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-primary px-1 text-[9px] font-medium text-primary-foreground">
                {itemCount}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
