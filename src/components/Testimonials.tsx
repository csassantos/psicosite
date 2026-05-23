"use client";

import { useEffect, useRef } from "react";
import FadeUp from "@/components/FadeUp";

const testimonials = [
  { quote: "Cheguei sem saber o que estava errado. Saí com palavras para coisas que carregava há vinte anos.", name: "Mariana", city: "Canoas/RS" },
  { quote: "A Ana não performa empatia. Ela oferece algo mais raro — atenção de verdade.", name: "Lucas", city: "Rio de Janeiro" },
  { quote: "O primeiro lugar em anos onde eu não precisei estar bem para ter permissão de falar.", name: "Júlia", city: "Porto Alegre" },
  { quote: "Lento, cuidadoso e silenciosamente transformador. Sou uma pessoa diferente para meus filhos hoje.", name: "André", city: "Belo Horizonte" },
];

const doubled = [...testimonials, ...testimonials];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame: number;
    let pos = 0;

    const step = () => {
      pos += 0.4;
      if (pos >= track.scrollWidth / 2) pos = 0;
      track.style.transform = `translateX(-${pos}px)`;
      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    const pause = () => cancelAnimationFrame(frame);
    const resume = () => { frame = requestAnimationFrame(step); };
    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <section id="depoimentos" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 mb-10">
        <FadeUp>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">Depoimentos</p>
          <h2 className="font-serif text-4xl md:text-6xl max-w-3xl text-balance">O que dizem os pacientes</h2>
        </FadeUp>
      </div>

      <div className="overflow-hidden">
        <div ref={trackRef} className="flex gap-6 md:gap-8 w-max">
          {doubled.map((t, i) => (
            <figure key={i} className="shrink-0 w-[85vw] sm:w-[420px] rounded-3xl bg-warm border border-neutral-200 p-8 md:p-10">
              <svg aria-hidden="true" viewBox="0 0 32 32" className="h-7 w-7 text-green-400 mb-6" fill="currentColor">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
              </svg>
              <blockquote className="font-serif text-xl md:text-2xl leading-snug text-balance text-neutral-800">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 text-sm text-neutral-400">
                — {t.name}, {t.city}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
