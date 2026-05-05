import { Hero } from "@/components/landing/hero";
import { TrustStrip } from "@/components/landing/trust-strip";
import { FeaturedProducts } from "@/components/landing/featured-products";
import { Manifesto } from "@/components/landing/manifesto";
import { SubscribeCta } from "@/components/landing/subscribe-cta";
import { Testimonials } from "@/components/landing/testimonials";
import { Faq } from "@/components/landing/faq";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <FeaturedProducts />
      <Manifesto />
      <SubscribeCta />
      <Testimonials />
      <Faq />
    </>
  );
}
