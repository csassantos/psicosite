import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPost } from "@/lib/posts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const post = await getPost(slug);
    return {
      title: post.title,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: "article",
        publishedTime: post.date,
        authors: ["Isadora Sasse"],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.excerpt,
      },
    };
  } catch {
    return { title: "Post não encontrado" };
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let post;
  try {
    post = await getPost(slug);
  } catch {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-16">
        <article className="mx-auto max-w-3xl px-6 md:px-10 py-16 md:py-24">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-green-600 transition-colors mb-12"
          >
            ← Voltar ao blog
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium bg-green-50 text-green-600 px-2.5 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-xs text-neutral-400">{post.readTime} de leitura</span>
              <time className="text-xs text-neutral-400">
                {new Date(post.date).toLocaleDateString("pt-BR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
              {post.title}
            </h1>
            <p className="mt-6 text-lg text-neutral-500 leading-relaxed">{post.excerpt}</p>
          </header>

          <div
            className="prose prose-neutral prose-lg max-w-none
              prose-headings:font-serif prose-headings:font-normal
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-p:text-neutral-600 prose-p:leading-relaxed
              prose-strong:text-neutral-800 prose-strong:font-semibold
              prose-li:text-neutral-600
              prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          <div className="mt-20 pt-10 border-t border-neutral-200">
            <div className="bg-green-50 rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <p className="font-serif text-xl text-neutral-800 mb-2">
                  Quer conversar sobre isso?
                </p>
                <p className="text-sm text-neutral-500">
                  A primeira conversa é gratuita e sem compromisso.
                </p>
              </div>
              <Link
                href="/#agendar"
                className="shrink-0 bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-6 py-3 rounded-full transition-colors"
              >
                Agendar consulta
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
