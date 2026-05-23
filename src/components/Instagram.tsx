"use client";

import FadeUp from "@/components/FadeUp";

const INSTAGRAM_HANDLE = "isasasse.psi";

interface ReelEmbed {
  id: string;
  url: string;
  title: string;
}

// Add Isadora's reels here — just paste the reel URL from Instagram
const INSTAGRAM_REELS: ReelEmbed[] = [
  {
    id: "1",
    url: "https://www.instagram.com/reel/XXXXXXXXXXX/",
    title: "Reel 1",
  },
  {
    id: "2",
    url: "https://www.instagram.com/reel/XXXXXXXXXXX/",
    title: "Reel 2",
  },
  {
    id: "3",
    url: "https://www.instagram.com/reel/XXXXXXXXXXX/",
    title: "Reel 3",
  },
];

function getEmbedUrl(url: string) {
  return url.replace(/\/$/, "") + "/embed/";
}

export default function Instagram() {
  return (
    <section id="instagram" className="py-16 md:py-24 bg-warm">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeUp className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">Instagram</p>
            <h2 className="font-serif text-4xl md:text-5xl text-balance">
              Conteúdo sobre saúde mental
            </h2>
            <p className="mt-4 text-neutral-500 max-w-md leading-relaxed">
              Reflexões, referências e conteúdo educativo sobre psicologia e bem-estar.
            </p>
          </div>
          <a
            href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 border border-neutral-200 hover:border-green-400 text-neutral-600 hover:text-green-600 px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @{INSTAGRAM_HANDLE}
          </a>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INSTAGRAM_REELS.map((reel, i) => (
            <FadeUp key={reel.id} delay={i * 0.1}>
              <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-white">
                <iframe
                  src={getEmbedUrl(reel.url)}
                  title={reel.title}
                  className="w-full"
                  height="560"
                  frameBorder={0}
                  scrolling="no"
                  allow="encrypted-media"
                  loading="lazy"
                />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
