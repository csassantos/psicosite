"use client";

import { useState } from "react";
import FadeUp from "@/components/FadeUp";

const faqs = [
  { q: "Como funciona a primeira consulta?", a: "Uma conversa inicial sem pressa. Sem questionários, sem scripts — apenas escuta. Você conta um pouco sobre você e o que te traz à terapia." },
  { q: "Online ou presencial?", a: "Ofereço as duas opções. Atendimento presencial em Canoas/RS e online para todo o Brasil via videochamada. A eficácia é equivalente." },
  { q: "Com que frequência são as sessões?", a: "Geralmente uma vez por semana, com 50 minutos de duração. A frequência pode ser ajustada conforme seu processo e necessidade." },
  { q: "Quanto tempo dura um processo terapêutico?", a: "Depende de cada pessoa e dos objetivos da terapia. A duração é determinada pelo seu ritmo, não por um prazo fixo." },
  { q: "O que compartilho é confidencial?", a: "Sim, totalmente. O sigilo é um princípio ético fundamental da psicologia, garantido pelo Código de Ética do CFP." },
  { q: "Quanto custa a sessão?", a: "Os valores são informados no momento do agendamento. Oferecemos opções de pacotes com condições especiais." },
  { q: "E se eu nunca fiz terapia antes?", a: "Perfeito para começar. A primeira conversa é gratuita e sem compromisso — é só para ver se existe conexão." },
];

function FAQItem({ q, a, delay }: { q: string; a: string; delay: number }) {
  const [open, setOpen] = useState(false);
  return (
    <FadeUp delay={delay} className="border-b border-neutral-200 last:border-0 py-1">
      <button
        className="group w-full flex items-center justify-between text-left py-5 gap-6 hover:text-green-600 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-serif text-xl md:text-2xl text-balance">{q}</span>
        <svg
          className={`h-5 w-5 shrink-0 transition-transform duration-300 text-green-500 ${open ? "rotate-45" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14M5 12h14" />
        </svg>
      </button>
      {open && <p className="pb-5 text-neutral-500 leading-relaxed text-[15px]">{a}</p>}
    </FadeUp>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-warm">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeUp>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">Dúvidas</p>
          <h2 className="font-serif text-4xl md:text-6xl mb-10 text-balance">Perguntas frequentes</h2>
        </FadeUp>
        <div>
          {faqs.map((item, i) => (
            <FAQItem key={item.q} q={item.q} a={item.a} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}
