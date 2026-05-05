import Link from "next/link";

export function Footer() {
  return (
    <footer className="surface-inverse border-t border-border">
      <div className="container py-20">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="font-display text-3xl tracking-[0.18em]">VELVE</span>
            <p className="mt-6 max-w-sm text-sm leading-relaxed opacity-70">
              Considered intimate wellness essentials. Designed in studio, made
              with care, delivered without a single mention on the box.
            </p>

            {/* Newsletter */}
            <form className="mt-10 max-w-sm">
              <label className="block text-[10px] uppercase tracking-[0.3em] opacity-60">
                Stay quietly informed
              </label>
              <div className="mt-3 flex border-b border-on-inverse pb-2">
                <input
                  type="email"
                  required
                  placeholder="you@elsewhere.com"
                  className="flex-1 bg-transparent text-sm text-on-inverse placeholder:opacity-40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="text-[11px] uppercase tracking-[0.2em] transition hover:opacity-60"
                >
                  Submit →
                </button>
              </div>
            </form>
          </div>

          <FooterCol title="Shop" className="md:col-span-2">
            <FooterLink href="/products?category=condoms">Condoms</FooterLink>
            <FooterLink href="/products?category=lubricants">Lubricants</FooterLink>
            <FooterLink href="/products?category=bundles">Sets</FooterLink>
            <FooterLink href="/subscribe">Ritual</FooterLink>
          </FooterCol>

          <FooterCol title="Studio" className="md:col-span-2">
            <FooterLink href="/about">Our story</FooterLink>
            <FooterLink href="/journal">Journal</FooterLink>
            <FooterLink href="/standards">Standards</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterCol>

          <FooterCol title="Care" className="md:col-span-3">
            <FooterLink href="/help/shipping">Shipping & discretion</FooterLink>
            <FooterLink href="/help/returns">Returns</FooterLink>
            <FooterLink href="/help/faq">Help center</FooterLink>
            <FooterLink href="/legal/privacy">Privacy</FooterLink>
            <FooterLink href="/legal/terms">Terms</FooterLink>
          </FooterCol>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-on-inverse pt-6 text-[10px] uppercase tracking-[0.3em] opacity-60">
          <p>© {new Date().getFullYear()} VELVE Studios. All rights reserved.</p>
          <p>Designed quietly · Shipped discreetly</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  className,
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <p className="text-[10px] uppercase tracking-[0.3em] opacity-60">{title}</p>
      <ul className="mt-5 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm opacity-80 transition-opacity hover:opacity-100"
      >
        {children}
      </Link>
    </li>
  );
}
