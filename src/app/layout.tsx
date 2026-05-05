import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import { Providers } from "@/components/layout/providers";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "VELVE · Intimate wellness, quietly luxurious",
    template: "%s · VELVE",
  },
  description:
    "Considered intimate wellness essentials. Made for grown-ups who care about how things are made, packaged, and delivered.",
  keywords: ["intimate wellness", "condoms", "lubricants", "discreet shipping"],
  openGraph: {
    type: "website",
    siteName: "VELVE",
    title: "VELVE · Intimate wellness, quietly luxurious",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#171318" },
    { media: "(prefers-color-scheme: light)", color: "#f5efe7" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${fraunces.variable}`}>
      <body className="min-h-screen bg-background font-sans">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
