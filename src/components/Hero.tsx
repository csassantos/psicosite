export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 hero-mesh" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute -right-24 top-1/3 w-[480px] h-[480px] rounded-full bg-green-200/30 blur-3xl pointer-events-none"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 w-full py-16 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-9">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-8">
            Psicóloga Clínica · Canoas/RS &amp; Online
          </p>

          <h1
            className="font-serif leading-[0.95] text-balance"
            style={{ fontSize: "clamp(2.75rem, 8vw, 6.5rem)" }}
          >
            <span className="block">Você não</span>
            <span className="block">precisa carregar</span>
            <span className="block text-green-500">isso sozinha.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-neutral-500 leading-relaxed">
            Um espaço calmo e cuidadoso para o tipo de trabalho que não cabe em podcast ou dica de produtividade.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#agendar"
              className="inline-flex items-center rounded-full bg-green-500 text-white px-7 py-3.5 text-base font-medium hover:bg-green-600 transition-colors shadow-[0_10px_30px_-12px_rgba(46,139,114,0.5)]"
            >
              Agendar consulta gratuita
            </a>
            <a
              href="#situacoes"
              className="group inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors text-sm"
            >
              Saiba mais
              <span className="transition-transform group-hover:translate-y-0.5 inline-block">↓</span>
            </a>
          </div>

          <div className="mt-10 flex gap-12">
            <div>
              <p className="font-serif text-4xl text-green-500">TCC</p>
              <p className="text-xs text-neutral-400 mt-1 uppercase tracking-wide">abordagem</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-green-500">Online</p>
              <p className="text-xs text-neutral-400 mt-1 uppercase tracking-wide">& presencial</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-green-500">2025</p>
              <p className="text-xs text-neutral-400 mt-1 uppercase tracking-wide">formada em psicologia</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
