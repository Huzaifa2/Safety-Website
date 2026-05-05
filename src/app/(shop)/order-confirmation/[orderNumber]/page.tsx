import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function OrderConfirmationPage({
  params,
}: {
  params: { orderNumber: string };
}) {
  return (
    <div className="container max-w-2xl py-16">
      <Card>
        <CardContent className="space-y-6 p-10 text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500" />
          <div>
            <h1 className="font-display text-3xl font-semibold">Thank you</h1>
            <p className="mt-2 text-muted-foreground">
              Your order <span className="font-medium text-foreground">{params.orderNumber}</span>{" "}
              has been received and ships in plain packaging.
            </p>
          </div>

          <p className="text-xs text-muted-foreground">
            This is a UI demo — no payment was processed.
          </p>

          <Button asChild>
            <Link href="/products">Continue shopping</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
