import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Blog",
  description:
    "Artigos sobre saúde mental, ansiedade, terapia cognitivo-comportamental e autoconhecimento escritos por Isadora Sasse, psicóloga clínica em Canoas/RS.",
  openGraph: {
    title: "Blog | Isadora Sasse Psicóloga",
    description:
      "Reflexões e conteúdo educativo sobre saúde mental, psicoterapia e bem-estar emocional.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-16 md:py-24 border-b border-neutral-200">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">Conteúdo</p>
            <h1 className="font-serif text-5xl md:text-7xl text-balance">Blog</h1>
            <p className="mt-6 text-lg text-neutral-500 max-w-xl leading-relaxed">
              Reflexões sobre saúde mental, psicoterapia e o que significa cuidar de si mesmo.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-[0_16px_40px_-16px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="aspect-[16/9] bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                    <span className="font-serif text-green-300 text-5xl select-none">
                      {post.title.charAt(0)}
                    </span>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-medium bg-green-50 text-green-600 px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-neutral-400">{post.readTime} de leitura</span>
                    </div>
                    <h2 className="font-serif text-xl leading-snug text-neutral-800 mb-3 group-hover:text-green-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-neutral-500 leading-relaxed flex-1">{post.excerpt}</p>
                    <div className="mt-6 flex items-center justify-between">
                      <time className="text-xs text-neutral-400">
                        {new Date(post.date).toLocaleDateString("pt-BR", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </time>
                      <span className="text-xs font-medium text-green-600 group-hover:translate-x-1 transition-transform inline-block">
                        Ler →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
