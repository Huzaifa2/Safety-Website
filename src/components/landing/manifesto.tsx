import Image from "next/image";

export function Manifesto() {
  return (
    <section className="grain surface-feature">
      <div className="container grid items-center gap-16 py-28 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="text-[10px] uppercase tracking-[0.4em] opacity-60">
            03 — A note from the studio
          </p>
          <p className="editorial-headline mt-8 text-4xl leading-[1.05] md:text-6xl">
            We treat <span className="editorial-italic">intimate</span> the same
            way thoughtful brands treat skincare:
            <span className="opacity-60"> ingredients, transparency, restraint.</span>
          </p>
          <p className="mt-10 max-w-md text-sm leading-relaxed opacity-80 text-pretty">
            No cartoon mascots. No noise. Just well-made objects in calm
            packaging, designed for adults who already know what they like.
          </p>
        </div>

        <div className="relative md:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1556228852-80b6e5eeff06?w=1000&q=85&auto=format&fit=crop"
              alt="Studio still life"
              fill
              sizes="(min-width: 768px) 35vw, 100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-4 text-[11px] uppercase tracking-[0.3em] opacity-60">
            — From the VELVE studio, no. 12 of a series
          </p>
        </div>
      </div>
    </section>
  );
}
