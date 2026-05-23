"use client";

import FadeUp from "@/components/FadeUp";

const benefits = [
  { num: "01", title: "Clareza sobre si mesma", desc: "Muitas pessoas percebem, ao longo do processo, que passam a compreender melhor suas próprias reações e sentimentos." },
  { num: "02", title: "Palavras para o que antes não tinha nome", desc: "O processo terapêutico pode ajudar a dar forma ao que parecia confuso ou inexprimível." },
  { num: "03", title: "Uma relação diferente com as próprias emoções", desc: "Com tempo e trabalho, é possível desenvolver uma postura mais compassiva consigo mesma." },
];

export default function Benefits() {
  return (
    <section className="bg-warm py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeUp className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">O processo</p>
          <h2 className="font-serif text-4xl md:text-6xl text-balance">
            O que a terapia pode oferecer
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {benefits.map((b, i) => (
            <FadeUp key={b.num} delay={i * 0.1}>
              <div className="font-serif text-7xl md:text-8xl text-green-200 mb-4">{b.num}</div>
              <h3 className="font-serif text-3xl md:text-4xl mb-4">{b.title}</h3>
              <p className="text-neutral-500 text-lg leading-relaxed max-w-sm">{b.desc}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
