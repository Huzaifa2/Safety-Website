"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  if (!number) return null;
  const url = `https://wa.me/${number.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hi Lumen, I have a question about my order.",
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-30 grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white shadow-soft transition-transform hover:scale-105 hover:shadow-glow"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
