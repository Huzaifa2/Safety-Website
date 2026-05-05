import type { Metadata } from "next";
import { CheckoutForm } from "@/components/checkout/checkout-form";

export const metadata: Metadata = {
  title: "Checkout",
  robots: { index: false, follow: false },
};

export default function CheckoutPage() {
  return (
    <div className="container py-12">
      <h1 className="font-display text-3xl font-semibold md:text-4xl">Checkout</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Discreet packaging · 256-bit SSL · 30-day returns
      </p>

      <div className="mt-8">
        <CheckoutForm />
      </div>
    </div>
  );
}
