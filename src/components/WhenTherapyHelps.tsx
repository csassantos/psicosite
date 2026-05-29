"use client";

import FadeUp from "@/components/FadeUp";

const situations = [
  { num: "01", title: "Você sente ansiedade e não sabe por quê", desc: "Vamos desacelerar juntos e encontrar as palavras para o que está por baixo." },
  { num: "02", title: "Um relacionamento terminou e você está perdida", desc: "O luto tem sua própria forma. Você não precisa atravessá-lo sozinha.", offset: true },
  { num: "03", title: "Você funciona bem, mas por dentro está vazia", desc: "Estar bem no papel não é o mesmo que se sentir bem.", negOffset: true },
  { num: "04", title: "Os mesmos padrões continuam se repetindo", desc: "Existe um motivo — e existe um caminho para além deles." },
  { num: "05", title: "Você carrega coisas que nunca disse em voz alta", desc: "Este é um espaço onde o não-dito é bem-vindo." },
  { num: "06", title: "Você quer se entender mais profundamente", desc: "A terapia não é só para crises. É para tornar-se.", offset: true },
];

export default function WhenTherapyHelps() {
  return (
    <section id="situacoes" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeUp className="max-w-3xl mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">Para quem é</p>
          <h2 className="font-serif text-4xl md:text-6xl text-balance">
            Você pode estar aqui porque…
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {situations.map((s, i) => (
            <FadeUp
              key={s.num}
              delay={i * 0.07}
              className={`group relative rounded-2xl bg-white border border-neutral-200/70 p-7 md:p-8
                shadow-[0_1px_2px_rgba(0,0,0,0.03)]
                hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.12)]
                hover:-translate-y-1 transition-[box-shadow,transform] duration-500 overflow-hidden
                ${s.offset ? "md:mt-10" : ""}
                ${s.negOffset ? "lg:-mt-6" : ""}
              `}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 to-green-100/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-warm border border-neutral-200 flex items-center justify-center mb-6">
                  <span className="font-serif text-green-600 text-sm">{s.num}</span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl leading-snug text-balance">{s.title}</h3>
                <p className="mt-4 text-neutral-500 text-[15px] leading-relaxed max-h-40 md:opacity-0 md:max-h-0 md:group-hover:opacity-100 md:group-hover:max-h-40 transition-all duration-500 overflow-hidden">
                  {s.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
