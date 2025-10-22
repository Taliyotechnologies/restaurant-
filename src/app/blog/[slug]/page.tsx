import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Alfa_Slab_One, Dancing_Script } from "next/font/google";
import bgPaper from "@/assets/background.png";
import posts, { totalPosts, getPostBySlug, getIndexBySlug } from "@/data/blogPosts";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  return {
    title: post ? post.title : "Blog",
    description: post ? post.excerpt : "Blog article",
  };
}

const alfa = Alfa_Slab_One({ subsets: ["latin"], weight: "400", display: "swap" });
const script = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"], display: "swap" });

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();
  const idx = getIndexBySlug(params.slug);
  const sidePosts = [1, 2, 3].map((k) => posts[(idx + k) % totalPosts]);

  return (
    <section className="section-bleed relative overflow-hidden">
      <Image src={bgPaper} alt="" aria-hidden fill sizes="100vw" className="object-cover pointer-events-none select-none" />
      <div className="paper-dots absolute inset-0 pointer-events-none" aria-hidden />
      <div className="relative container-max mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="max-w-3xl">
          <p className={`${script.className} text-goldbeige text-2xl md:text-3xl`}>Margaret’s</p>
          <h1 className={`${alfa.className} text-3xl sm:text-4xl md:text-5xl font-extrabold text-black`}>{post.title}</h1>
          <p className="mt-2 text-neutral-900/90">{post.excerpt}</p>
          <div className="mt-1 text-xs text-neutral-800/80">{new Date(post.date).toLocaleDateString()}</div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 md:gap-10 items-start">
          <article>
            <div className="relative w-full aspect-[16/9] rounded-sm overflow-hidden border border-black shadow-[0_6px_16px_rgba(0,0,0,0.35)]">
              <Image src={post.image} alt={post.title} fill sizes="(min-width: 1024px) 720px, 100vw" className="object-cover" />
            </div>
            <div className="prose prose-neutral max-w-none mt-6 text-neutral-900">
              {post.body.map((para, i) => (
                <p key={i} className="mb-4 leading-relaxed text-[15px] md:text-base">
                  {para}
                </p>
              ))}
            </div>
          </article>

          <aside className="space-y-6">
            {sidePosts.map((p) => (
              <Link key={p.id} href={`/blog/${p.slug}`} className="grid grid-cols-[120px_1fr] md:grid-cols-[140px_1fr] gap-4 items-start group">
                <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden border border-black shadow-[0_2px_0_#000]">
                  <Image src={p.image} alt={p.title} fill sizes="(min-width: 1024px) 140px, 36vw" className="object-cover transition-transform group-hover:scale-[1.03]" />
                </div>
                <div>
                  <h3 className={`${alfa.className} text-lg md:text-xl font-extrabold text-black group-hover:underline`}>{p.title}</h3>
                  <p className="mt-1 text-neutral-900/90 text-sm md:text-base line-clamp-3">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </aside>
        </div>

        <div className="mt-10 flex items-center justify-between">
          <Link href="/blog" className="text-black hover:underline">← Back to Blog</Link>
          <Link href={`/blog/${sidePosts[0].slug}`} className="w-8 h-8 grid place-items-center rounded-full bg-black text-neutral-100 border border-black shadow-[0_2px_0_#000]" aria-label="Next article">
            &gt;
          </Link>
        </div>
      </div>
    </section>
  );
}
