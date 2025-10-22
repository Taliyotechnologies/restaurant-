import Image from "next/image";
import Link from "next/link";
import { Alfa_Slab_One, Dancing_Script } from "next/font/google";
import bgTexture from "@/assets/background2.png";
import blogHero from "@/assets/food 1.png";
import bgPaper from "@/assets/background.png";
import hand from "@/assets/hand.png";
import posts, { totalPosts } from "@/data/blogPosts";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Blog",
  description: "News and stories from Buda's Pub.",
};

const alfa = Alfa_Slab_One({ subsets: ["latin"], weight: "400", display: "swap" });
const script = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"], display: "swap" });

export default function BlogPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const total = totalPosts; // 8
  const pRaw = Array.isArray(searchParams?.p)
    ? parseInt((searchParams?.p as string[])[0] as string)
    : parseInt((searchParams?.p as string) ?? "");
  const current = Number.isFinite(pRaw) && pRaw >= 1 && pRaw <= total ? pRaw : 1;
  const idx = current - 1;
  const sidePosts = [1, 2, 3].map((k) => posts[(idx + k) % total]);
  return (
    <>
      <section className="section-bleed relative overflow-hidden border-b border-borderline/70 text-neutral-100">
        <Image src={blogHero} alt="Blog hero" aria-hidden fill sizes="100vw" className="object-cover pointer-events-none select-none" />
        <Image src={bgTexture} alt="" aria-hidden fill sizes="100vw" className="object-cover opacity-45 mix-blend-multiply pointer-events-none select-none" />
        <div aria-hidden className="absolute inset-0 bg-[#E1C07A]/35 mix-blend-screen" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <h1
            className={`${alfa.className} text-center uppercase tracking-wide text-5xl md:text-7xl font-black text-red-600 text-outline`}
          >
            BLOG
          </h1>
        </div>
      </section>

      <section className="section-bleed relative overflow-hidden">
        <Image src={bgPaper} alt="" aria-hidden fill sizes="100vw" className="object-cover pointer-events-none select-none" />
        <div className="paper-dots absolute inset-0 pointer-events-none" aria-hidden />
        <div className="relative container-max mx-auto px-6 md:px-8 py-12 md:py-16">
          <div className="text-center">
            <p className={`${script.className} text-goldbeige text-2xl md:text-3xl`}>Margaret’s</p>
            <h2 className={`${alfa.className} text-3xl sm:text-4xl md:text-5xl font-extrabold text-black uppercase`}>Memorable Stories & Recipes</h2>
            <p className="mt-2 text-neutral-900/90">Stories that will spice up your day!</p>
            <p className="mt-1 text-neutral-900/90">This is not just a restaurant in Budapest.</p>
            <p className="mt-1 text-neutral-900/90">This is the place where your food is always impeccable, your beer is always freshly tapped and cold, and there is always a familiar face sitting at the next table.</p>
            <p className="mt-2 text-neutral-900/90">Read more!</p>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-3">
            <div className="relative w-full max-w-[560px]">
              <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 border border-black bg-transparent px-3 py-2 shadow-[0_2px_0_#000]">
                <input
                  type="email"
                  placeholder="What is your email address? *"
                  className="flex-1 min-w-0 w-full sm:w-auto h-10 md:h-12 rounded-sm border border-black bg-[#fbf3dd] px-4 text-sm md:text-base text-neutral-900 placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-black/40"
                />
                <button
                  type="button"
                  className="w-full sm:w-auto shrink-0 px-5 md:px-6 h-10 md:h-12 bg-[#ef2d2d] text-black border-2 border-black rounded-sm font-semibold text-sm md:text-base shadow-[0_2px_0_#000]"
                >
                  I subscribe
                </button>
              </div>
            </div>
            <Image src={hand} alt="" width={460} height={170} className="hidden sm:block h-16 md:h-20 w-auto select-none pointer-events-none" />
          </div>

          <div className="mt-10">
            <div className="h-[2px] bg-black/60" />
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                <button type="button" className="px-2 py-1.5 bg-[#ef2d2d] text-black border-2 border-black rounded-sm shadow-[0_2px_0_#000] text-xs md:text-sm">All</button>
                <button type="button" className="px-2 py-1.5 bg-transparent text-black border border-black rounded-sm shadow-[2px_2px_0_#000] text-xs md:text-sm">Recipe</button>
              </div>
              <form className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
                <input
                  type="text"
                  placeholder="search"
                  className="flex-1 min-w-0 w-full sm:w-[220px] h-9 md:h-10 rounded-sm border border-black bg-[#fbf3dd] px-3 text-xs md:text-sm text-neutral-900 placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-black/40"
                />
                <button type="submit" className="w-full sm:w-auto shrink-0 whitespace-nowrap px-3 md:px-4 h-9 md:h-10 bg-[#ef2d2d] text-black border-2 border-black rounded-sm font-semibold text-xs md:text-sm shadow-[0_2px_0_#000]">Search</button>
              </form>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 md:gap-10 items-start">
            <div>
              <Link href={`/blog/${posts[idx].slug}`} className="block group">
                <div className="relative w-full aspect-[16/9] rounded-sm overflow-hidden border border-black shadow-[0_6px_16px_rgba(0,0,0,0.35)]">
                  <Image src={posts[idx].image} alt={posts[idx].title} fill sizes="(min-width: 1024px) 720px, 100vw" className="object-cover transition-transform group-hover:scale-[1.02]" />
                  <div aria-hidden className="absolute bottom-3 right-3 w-8 h-8 bg-[#ef2d2d] border-2 border-black rounded-sm shadow-[0_2px_0_#000]" />
                </div>
                <h3 className={`${alfa.className} mt-4 text-2xl md:text-3xl font-extrabold text-black group-hover:underline`}>{posts[idx].title}</h3>
              </Link>
              <div className="mt-3 space-y-2 text-neutral-900/90 text-sm md:text-base max-w-prose">
                {posts[idx].body.slice(0, 6).map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {sidePosts.map((p) => (
                <Link key={p.id} href={`/blog/${p.slug}`} className="grid grid-cols-[120px_1fr] md:grid-cols-[140px_1fr] gap-4 items-start group">
                  <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden border border-black shadow-[0_2px_0_#000]">
                    <Image src={p.image} alt={p.title} fill sizes="(min-width: 1024px) 140px, 36vw" className="object-cover transition-transform group-hover:scale-[1.03]" />
                  </div>
                  <div>
                    <h4 className={`${alfa.className} text-lg md:text-xl font-extrabold text-black group-hover:underline`}>{p.title}</h4>
                    <p className="mt-1 text-neutral-900/90 text-sm md:text-base line-clamp-6">{p.body.slice(0, 6).join(" ")}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="flex items-center gap-3 text-black">
              <Link href={`?p=1`} className={`${current === 1 ? "text-goldbeige font-semibold" : "hover:underline"}`}>1</Link>
              <Link href={`?p=2`} className={`${current === 2 ? "text-goldbeige font-semibold" : "hover:underline"}`}>2</Link>
              <span aria-hidden className="text-black/60">…</span>
              <Link href={`?p=${total}`} className={`${current === total ? "text-goldbeige font-semibold" : "hover:underline"}`}>{total}</Link>
            </div>
            <Link
              aria-label="Next page"
              href={`?p=${current < total ? current + 1 : total}`}
              className="w-8 h-8 grid place-items-center rounded-full bg-black text-neutral-100 border border-black shadow-[0_2px_0_#000]"
            >
              &gt;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      </>
    );
  }
