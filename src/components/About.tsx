"use client";

import Image from "next/image";
import FadeUp from "@/components/FadeUp";

export default function About() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-warm">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-12 gap-12 md:gap-16 items-center">
        <FadeUp className="md:col-span-5 relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-neutral-200 relative bg-green-50">
            <Image
              src="https://image.pollinations.ai/prompt/professional%20female%20psychologist%20wearing%20white%20lab%20coat%2C%20warm%20smile%2C%20soft%20natural%20light%2C%20clean%20light%20background%2C%20portrait%20photo%2C%20realistic%2C%20Brazilian%20woman%2C%2030s%2C%20calm%20and%20welcoming%20expression?width=600&height=750&nologo=true&seed=42"
              alt="Isadora Sasse — Psicóloga Clínica"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <div className="absolute -bottom-5 -right-4 md:-right-6 bg-background border border-neutral-200 rounded-2xl px-6 py-5 shadow-lg max-w-[200px]">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-1">Formada em</p>
            <p className="font-serif text-2xl">2025</p>
          </div>
        </FadeUp>

        <FadeUp delay={0.15} className="md:col-span-7">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-6">Sobre</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-balance">Olá, sou a Isadora.</h2>
          <div className="space-y-5 text-lg text-neutral-600 leading-relaxed max-w-xl">
            <p>
              Sou psicóloga clínica formada no final de 2025, com experiência clínica construída ao longo do estágio obrigatório — e que continuei desenvolvendo com os mesmos pacientes após a graduação. Atendo adultos que navegam pela ansiedade, transições, luto e as formas mais silenciosas de sofrimento que nem sempre têm nome.
            </p>
            <p>
              Minha prática é baseada na terapia cognitivo-comportamental (TCC), sustentada pela crença de que a mudança real acontece devagar, na relação, e nos seus próprios termos.
            </p>
          </div>

          <blockquote className="mt-8 border-l-2 border-green-500 pl-6 font-serif italic text-2xl md:text-3xl text-neutral-800 max-w-xl leading-snug">
            "A terapia não é consertar o que está quebrado. É aprender a forma do que já está lá."
          </blockquote>

          <div className="mt-6 flex flex-wrap gap-3">
            {["CRP 00/00000", "TCC", "Ansiedade", "Relacionamentos", "Luto", "Online"].map((tag) => (
              <span key={tag} className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full border border-neutral-200 text-neutral-500">
                {tag}
              </span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
