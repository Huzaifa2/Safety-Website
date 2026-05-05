import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden
      className={cn("h-7 w-7", className)}
      fill="none"
    >
      <rect width="64" height="64" rx="14" className="fill-foreground" />
      <path
        d="M16 18 L32 50 L48 18"
        stroke="hsl(var(--background))"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display text-[1.35rem] font-medium tracking-[0.18em]",
        className,
      )}
    >
      VELVE
    </span>
  );
}
