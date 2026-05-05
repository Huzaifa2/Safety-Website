"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Lock, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/store/cart-store";
import { formatPrice } from "@/lib/utils";

export function CheckoutForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponMsg, setCouponMsg] = useState<string | null>(null);

  const items = useCartStore((s) => s.items);
  const subtotal = useCartStore((s) => s.subtotal());
  const clear = useCartStore((s) => s.clear);

  const shipping = subtotal >= 4000 ? 0 : 599;
  const total = Math.max(0, subtotal + shipping - discount);

  function applyCoupon() {
    const code = coupon.trim().toUpperCase();
    if (!code) return;
    if (code === "WELCOME10") {
      setDiscount(Math.floor(subtotal * 0.1));
      setCouponMsg("WELCOME10 applied: 10% off");
    } else {
      setDiscount(0);
      setCouponMsg("Invalid code");
    }
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    startTransition(() => {
      // UI demo: simulate placing an order
      const orderNumber = `LMN-DEMO-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
      clear();
      setTimeout(() => router.push(`/order-confirmation/${orderNumber}`), 400);
    });
  }

  if (items.length === 0) {
    return (
      <Card>
        <CardContent className="p-10 text-center">
          <p className="text-muted-foreground">Your bag is empty.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-8 md:grid-cols-[1fr_360px]">
      <div className="space-y-8">
        <Section title="Contact">
          <Field label="Email" name="email" type="email" required />
        </Section>

        <Section title="Shipping address">
          <Field label="Full name" name="fullName" required />
          <Field label="Address line 1" name="line1" required />
          <Field label="Address line 2 (optional)" name="line2" />
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="City" name="city" required />
            <Field label="State / Region" name="state" required />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Postal code" name="postalCode" required />
            <Field label="Country" name="country" required defaultValue="US" />
          </div>
          <Field label="Phone" name="phone" required type="tel" />
        </Section>

        <Section title="Payment method">
          <RadioGroup name="paymentMethod" defaultValue="CARD" className="grid gap-3">
            <PaymentOption value="CARD" title="Card" subtitle="Visa, Mastercard, Apple Pay (demo)" />
            <PaymentOption value="COD" title="Cash on Delivery" subtitle="Pay when you receive" />
          </RadioGroup>
        </Section>

        <Section title="Order notes (optional)">
          <textarea
            name="notes"
            rows={3}
            className="w-full rounded-xl border border-border bg-background/50 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="Any delivery instructions?"
          />
        </Section>
      </div>

      <aside className="md:sticky md:top-24 md:self-start">
        <Card>
          <CardContent className="space-y-4 p-6">
            <h3 className="font-display text-lg font-semibold">Order summary</h3>
            <ul className="space-y-3">
              {items.map((i) => (
                <li key={i.variantId} className="flex justify-between text-sm">
                  <span className="line-clamp-1">
                    {i.productName} × {i.quantity}
                  </span>
                  <span>{formatPrice(i.unitPrice * i.quantity)}</span>
                </li>
              ))}
            </ul>

            <Separator />

            <div className="flex gap-2">
              <Input
                placeholder="Try WELCOME10"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <Button type="button" variant="outline" onClick={applyCoupon}>
                Apply
              </Button>
            </div>
            {couponMsg && (
              <p className={`text-xs ${discount > 0 ? "text-emerald-500" : "text-destructive"}`}>
                {couponMsg}
              </p>
            )}

            <div className="space-y-1.5 text-sm">
              <Row label="Subtotal" value={formatPrice(subtotal)} />
              {discount > 0 && <Row label="Discount" value={`- ${formatPrice(discount)}`} />}
              <Row label="Shipping" value={shipping === 0 ? "Free" : formatPrice(shipping)} />
              <Separator className="my-2" />
              <Row label="Total" value={formatPrice(total)} bold />
            </div>

            <Button type="submit" size="lg" className="w-full" disabled={isPending}>
              {isPending ? "Processing…" : "Complete order"}
            </Button>

            <div className="space-y-2 pt-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Lock className="h-3 w-3" /> 256-bit SSL encryption
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-3 w-3" /> Discreet, plain packaging
              </div>
            </div>
          </CardContent>
        </Card>
      </aside>
    </form>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-4 font-display text-lg font-semibold">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  defaultValue?: string;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} type={type} required={required} defaultValue={defaultValue} />
    </div>
  );
}

function PaymentOption({
  value,
  title,
  subtitle,
}: {
  value: string;
  title: string;
  subtitle: string;
}) {
  return (
    <Label
      htmlFor={`pm-${value}`}
      className="flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-background/50 p-4 transition has-[:checked]:border-primary has-[:checked]:bg-primary/5"
    >
      <RadioGroupItem id={`pm-${value}`} value={value} />
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      </div>
    </Label>
  );
}

function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className={`flex justify-between ${bold ? "text-base font-semibold" : ""}`}>
      <span className={bold ? "" : "text-muted-foreground"}>{label}</span>
      <span>{value}</span>
    </div>
  );
}
