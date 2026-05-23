"use client";

import FadeUp from "@/components/FadeUp";

const steps = [
  { label: "Primeiro", title: "Entendendo a sua história", desc: "Uma primeira sessão sem pressa. Sem questionários, sem scripts — apenas escuta." },
  { label: "Depois", title: "Construindo um entendimento compartilhado", desc: "Nomeamos juntos o que está acontecendo e acordamos o que importa mais." },
  { label: "Em andamento", title: "O trabalho, no seu ritmo", desc: "Sessões semanais ou quinzenais. Ajustamos conforme a sua vida se move." },
];

export default function Approach() {
  return (
    <section id="abordagem" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeUp className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">A abordagem</p>
          <h2 className="font-serif text-4xl md:text-6xl text-balance">Como trabalhamos juntos</h2>
        </FadeUp>

        <div className="relative">
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-[30px] left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"
          />
          <div className="grid md:grid-cols-3 gap-10 md:gap-8 relative">
            {steps.map((s, i) => (
              <FadeUp key={s.label} delay={i * 0.12}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-4 w-4 rounded-full bg-green-500 ring-8 ring-background shrink-0" />
                  <span className="text-xs uppercase tracking-[0.2em] text-neutral-400">{s.label}</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl mb-4 text-balance">{s.title}</h3>
                <p className="text-neutral-500 leading-relaxed max-w-sm">{s.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
