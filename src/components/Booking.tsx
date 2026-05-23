"use client";

import FadeUp from "@/components/FadeUp";

export default function Booking() {
  return (
    <section id="agendar" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-start">
        <FadeUp>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">Começar</p>
          <h2
            className="font-serif mb-6 text-balance leading-[0.95]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Pronta para começar?
          </h2>
          <p className="text-lg text-neutral-500 max-w-md mb-8 leading-relaxed">
            Agende uma conversa gratuita de 20 minutos. Sem compromisso, sem pressão. Apenas uma conversa para ver se nos entendemos.
          </p>

          <ul className="space-y-5 text-neutral-700">
            {([
              { icon: "✉️", label: "E-mail", value: "contato@isadorasasse.com.br", href: "mailto:contato@isadorasasse.com.br" },
              { icon: "📱", label: "WhatsApp", value: "(11) 99999-9999", href: "tel:+5511999999999", whatsapp: "https://wa.me/5511999999999" },
              { icon: "📍", label: "Localização", value: "Canoas, RS · Online para todo o Brasil", href: undefined },
            ] as { icon: string; label: string; value: string; href?: string; whatsapp?: string }[]).map((item) => (
              <li key={item.label} className="flex items-center gap-4">
                <span className="h-10 w-10 rounded-full bg-warm border border-neutral-200 grid place-items-center text-base shrink-0">
                  {item.icon}
                </span>
                {item.href ? (
                  <a href={item.href} className="text-sm hover:text-green-600 transition-colors">{item.value}</a>
                ) : (
                  <span className="text-sm text-neutral-500">{item.value}</span>
                )}
                {"whatsapp" in item && item.whatsapp && (
                  <a
                    href={item.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-xs font-medium px-3 py-1.5 rounded-full transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Conversar
                  </a>
                )}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-xs text-neutral-400 leading-relaxed">
            Após o agendamento, você receberá uma confirmação automática por e-mail com todos os detalhes da sessão.
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="rounded-3xl border border-neutral-200 overflow-hidden">
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1z0CtuehacZEXtXvEDGtQ23L0clOXS_GjDObU37Y41boa_b5_VzB20SRNcU8hJ4qRfPXF8vH2R?gv=true"
              style={{ border: 0 }}
              width="100%"
              height="600"
              frameBorder={0}
              title="Agendamento de consulta — Isadora Sasse"
              loading="lazy"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
