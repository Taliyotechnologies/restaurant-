import Image, { StaticImageData } from "next/image";
import { Alfa_Slab_One } from "next/font/google";
import bgTexture from "@/assets/background2.png";
import foodHero from "@/assets/food 1.png";
import bgPaper from "@/assets/background.png";
import cat1 from "@/assets/topcategories1.png";
import cat5 from "@/assets/topcategories5.png";
import food7 from "@/assets/food 7.png";
import cheff1 from "@/assets/cheff food1.png";
import cheff2 from "@/assets/cheff food2.png";
import cheff3 from "@/assets/cheff food3.png";
import cheff4 from "@/assets/cheff food4.png";
import cheff5 from "@/assets/cheff food5.png";
import cheff6 from "@/assets/cheff food6.png";
import cheff7 from "@/assets/cheff food7.png";
import cheff8 from "@/assets/cheff food8.png";
import dessertImg from "@/assets/desert.png";
import appetizersImg from "@/assets/Appetizers.png";
import hamburgersImg from "@/assets/Hamburgers.png";
import soupsImg from "@/assets/Soups.png";
import saladsImg from "@/assets/Salads.png";
import beerskateImg from "@/assets/Beer skate.png";
import salads1Img from "@/assets/Salads1.png";
import salads2Img from "@/assets/Salads2.png";
import salads3Img from "@/assets/Salads3.png";
import salads4Img from "@/assets/Salads4.png";
import salads5Img from "@/assets/Salads5.png";
import soups1Img from "@/assets/Soups1.png";
import soups2Img from "@/assets/Soups2.png";
import soups3Img from "@/assets/Soups3.png";
import soups4Img from "@/assets/Soups4.png";
import soups5Img from "@/assets/Soups5.png";
import dessert1Img from "@/assets/desert1.png";
import dessert2Img from "@/assets/desert2.png";
import dessert3Img from "@/assets/desert3.png";
import dessert4Img from "@/assets/desert4.png";
import dessert5Img from "@/assets/desert5.png";
import appetizer1Img from "@/assets/Appetizers1.png";
import appetizer2Img from "@/assets/Appetizers2.png";
import appetizer3Img from "@/assets/Appetizers3.png";
import appetizer4Img from "@/assets/Appetizers4.png";
import appetizer5Img from "@/assets/Appetizers5.png";
import MenuQuickView from "@/components/MenuQuickView";
import main1 from "@/assets/Main courses1.png";
import main2 from "@/assets/Main courses2.png";
import main3 from "@/assets/Main courses3.png";
import main4 from "@/assets/Main courses4.png";
import main5 from "@/assets/Main courses5.png";
import main6 from "@/assets/Main courses6.png";
import main7 from "@/assets/Main courses7.png";
import main8 from "@/assets/Main courses8.png";
import main9 from "@/assets/Main courses9.png";
import main10 from "@/assets/Main courses10.png";
import main11 from "@/assets/Main courses11.png";
import burger1 from "@/assets/burger1.png";
import burger2 from "@/assets/burger2.png";
import burger3 from "@/assets/burger3.png";
import burger4 from "@/assets/burger4.png";
import burger5 from "@/assets/burger5.png";

export const metadata = {
  title: "Menu",
  description: "Explore our pub classics, burgers and craft beer list.",
};

const alfa = Alfa_Slab_One({ subsets: ["latin"], weight: "400", display: "swap" });

export default function MenuPage() {
  const HERO_IMG = foodHero;
  const categories = [
    { key: "all", label: "All", count: 105, img: cat1 },
    { key: "chef", label: "Chef Offer", count: 7, img: cheff1 },
    { key: "desserts", label: "Desserts", count: 6, img: dessertImg },
    { key: "appetizers", label: "Appetizers", count: 12, img: appetizersImg },
    { key: "mains", label: "Main courses", count: 11, img: cat5 },
    { key: "burgers", label: "Hamburgers", count: 5, img: hamburgersImg },
    { key: "sides", label: "Side dishes", count: 14, img: food7 },
    { key: "soups", label: "Soups", count: 6, img: soupsImg },
    { key: "salads", label: "Salads", count: 5, img: saladsImg },
    { key: "beerSkate", label: "Beer skate", count: 15, img: beerskateImg },
  ] as const;
  const sectionMap: Record<string, string> = { chef: "chef", desserts: "desserts", appetizers: "appetizers", mains: "mains", burgers: "burgers", sides: "sides", soups: "soups", salads: "salads", beerSkate: "beerSkate" };
  const activeKey = "all" as const;
  const chefItems = [
    { title: "Cluj-Napoca tomato rigatoni", price: "3980Ft", img: cheff2 },
    { title: "Homemade sorbet selection with exploding candy", price: "3680Ft", img: cheff3 },
    { title: "Rosemary lamb shank with wild broccoli, purple cabbage puree, and pearl onion jus", price: "12480Ft", img: cheff4 },
    { title: "Tempurated tripe with herb-garlic dip", price: "3680Ft", img: cheff1 },
    { title: "Seared Chicken Supreme with Spring Greens", price: "4680Ft", img: cheff5 },
    { title: "Herb‑Crusted Salmon with Seasonal Salad", price: "4980Ft", img: cheff6 },
    { title: "Oven‑Baked Four‑Cheese Lasagna", price: "5280Ft", img: cheff7 },
    { title: "Beer‑Braised Pork Knuckle with Baby Potatoes", price: "5580Ft", img: cheff8 },
  ] as const;
  const dessertItems = [
    { title: "Classic tiramisu", price: "2980Ft", img: dessert1Img },
    { title: "Homemade sorbet trio", price: "2680Ft", img: dessert2Img },
    { title: "Warm apple crumble", price: "3180Ft", img: dessert3Img },
    { title: "Pistachio cheesecake", price: "3380Ft", img: dessert4Img },
    { title: "Vanilla panna cotta", price: "3280Ft", img: dessert5Img },
    { title: "Signature dessert", price: "3480Ft", img: dessertImg },
  ] as const;
  const appetizerItems = [
    { title: "Crispy Onion Rings with Garlic Dip", price: "2580Ft", img: appetizersImg },
    { title: "Parmesan Asparagus with Herb Oil", price: "2680Ft", img: appetizer1Img },
    { title: "Citrus Radish Carpaccio", price: "2780Ft", img: appetizer2Img },
    { title: "Mediterranean Mezze Platter", price: "2880Ft", img: appetizer3Img },
    { title: "Garlic Butter Shrimp Skillet", price: "2980Ft", img: appetizer4Img },
    { title: "Cheese & Olive Skewers", price: "3080Ft", img: appetizer5Img },
  ] as const;
  const mainItems = [
    { title: "Grilled Ribeye with Herb Butter", price: "6780Ft", img: main1 },
    { title: "Creamy Chicken Alfredo", price: "6480Ft", img: main2 },
    { title: "BBQ Pork Ribs with Slaw", price: "7580Ft", img: main3 },
    { title: "Seared Salmon with Lemon Butter", price: "7180Ft", img: main4 },
    { title: "Beef Stroganoff with Mushrooms", price: "6880Ft", img: main5 },
    { title: "Spicy Sausage Penne", price: "7380Ft", img: main6 },
    { title: "Wild Mushroom Risotto", price: "7680Ft", img: main7 },
    { title: "Herb-Crusted Pork Chop", price: "7280Ft", img: main8 },
    { title: "Roasted Duck Breast", price: "7080Ft", img: main9 },
    { title: "Truffle Mac and Cheese", price: "7880Ft", img: main10 },
    { title: "Herb-Crusted Lamb Shoulder", price: "8080Ft", img: main11 },
  ] as const;
  const burgerItems = [
    { title: "Classic smash burger", price: "4280Ft", img: burger1 },
    { title: "Cheese burger", price: "4480Ft", img: burger2 },
    { title: "BBQ bacon burger", price: "4780Ft", img: burger3 },
    { title: "Spicy jalapeño burger", price: "4680Ft", img: burger4 },
    { title: "Mushroom swiss burger", price: "4580Ft", img: burger5 },
  ] as const;
  const saladItems = [
    { title: "Greek Salad", price: "3180Ft", img: salads1Img },
    { title: "Classic Caesar Salad", price: "3180Ft", img: salads2Img },
    { title: "Caprese Salad", price: "3180Ft", img: salads3Img },
    { title: "Mediterranean Couscous Salad", price: "3180Ft", img: salads4Img },
    { title: "Garden Salad", price: "3180Ft", img: salads5Img },
  ] as const;
  const soupsItems = [
    { title: "Chef's soup of the day", price: "2280Ft", img: soupsImg },
    { title: "Creamy Tomato Basil Soup", price: "2180Ft", img: soups1Img },
    { title: "Classic Chicken Noodle Soup", price: "2180Ft", img: soups2Img },
    { title: "Roasted Pumpkin Soup", price: "2280Ft", img: soups3Img },
    { title: "Mushroom Velouté", price: "2380Ft", img: soups4Img },
    { title: "Hungarian Goulash Soup", price: "2380Ft", img: soups5Img },
  ] as const;
  const sidesItems = [
    { title: "French fries", price: "1680Ft", img: appetizer1Img },
    { title: "Onion rings", price: "1780Ft", img: appetizer2Img },
    { title: "Garlic bread", price: "1580Ft", img: appetizer3Img },
    { title: "Coleslaw", price: "1480Ft", img: appetizer4Img },
    { title: "Mixed pickles", price: "1680Ft", img: appetizer5Img },
  ] as const;
  const beerSkateItems = [
    { title: "Beer Skate Taster #1", price: "4980Ft", img: beerskateImg },
    { title: "Beer Skate Taster #2", price: "5280Ft", img: beerskateImg },
    { title: "Beer Skate Taster #3", price: "5580Ft", img: beerskateImg },
    { title: "Beer Skate Taster #4", price: "5880Ft", img: beerskateImg },
  ] as const;
  return (
    <>
      <section className="section-bleed relative overflow-hidden border-b border-borderline/70 text-neutral-100">
        <Image src={HERO_IMG} alt="Menu hero" aria-hidden fill sizes="100vw" className="object-cover pointer-events-none select-none" />
        <Image src={bgTexture} alt="" aria-hidden fill sizes="100vw" className="object-cover opacity-45 mix-blend-multiply pointer-events-none select-none" />
        <div aria-hidden className="absolute inset-0 bg-[#E1C07A]/35 mix-blend-screen" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <h1
            className={`${alfa.className} text-center uppercase tracking-wide text-5xl md:text-7xl font-black text-red-600 text-outline`}
          >
            MENU
          </h1>
        </div>
      </section>
      <section id="menu-top" className="section-bleed relative overflow-hidden border-b border-borderline/70 scroll-mt-24 md:scroll-mt-28">
        <Image src={bgPaper} alt="" aria-hidden fill sizes="100vw" className="object-cover pointer-events-none select-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-10">
          <div className="flex items-center gap-2">
            <button aria-current="page" className="px-3 py-1.5 bg-black text-white text-sm font-semibold rounded-sm">Menu</button>
            <button className="px-3 py-1.5 border border-black text-black text-sm font-semibold rounded-sm">Drinks list</button>
          </div>
          <div className="mt-5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-4 min-w-max">
              {categories.map((c) => {
                const target = c.key === "all" ? "menu-top" : (sectionMap[c.key] ?? "menu-top");
                return (
                  <a
                    key={c.key}
                    href={`#${target}`}
                    className="block focus:outline-none focus:ring-2 focus:ring-red-500/40 rounded-md"
                  >
                    <div className="relative w-56 h-40 md:w-60 md:h-44 shrink-0 rounded-md overflow-hidden shadow-[0_6px_16px_rgba(0,0,0,0.3)] ring-1 ring-black/10">
                      <Image src={c.img} alt={c.label} fill sizes="240px" className="object-cover" />
                      <div className={`${c.key === activeKey ? "bg-red-600" : "bg-black/85"} absolute bottom-0 left-0 right-0 px-3 py-2`}>
                        <p className="text-white text-sm font-bold leading-tight">{c.label}</p>
                        <p className="text-white/90 text-xs">{c.count} pcs</p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="mt-5 h-[3px] bg-black relative">
            <div className="absolute left-0 top-0 h-[3px] w-28 bg-red-600" />
          </div>
          <div className="mt-6 text-center md:text-left">
            <h2 className={`${alfa.className} text-3xl md:text-5xl font-black text-black`}>A MENU THAT HAS EVERYTHING!</h2>
            <p className="mt-3 text-neutral-900/90 max-w-3xl md:max-w-4xl">Fresh ingredients, modern Hungarian cuisine, and of course our craft beer — with us you don’t have to choose, you get everything at once!</p>
          </div>
        </div>
      </section>
      {/* Chef Offer cards */}
      <section id="chef" className="section-bleed relative overflow-hidden border-b border-borderline/70 scroll-mt-24 md:scroll-mt-28">
        <Image src={bgPaper} alt="" aria-hidden fill sizes="100vw" className="object-cover pointer-events-none select-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
          <div className="flex items-center gap-3">
            <h3 className={`${alfa.className} text-2xl md:text-4xl font-black text-black`}>Chef Offer</h3>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {chefItems.map((item) => (
              <article
                key={item.title}
                data-menu-item
                data-category="Chef Offer"
                data-title={item.title}
                data-price={item.price}
                data-img={(item.img as StaticImageData).src}
                className="group rounded-md border-2 border-black bg-[#F4ECD3] shadow-[0_6px_0_#000] transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image src={item.img} alt={item.title} fill sizes="(min-width:1024px) 280px, (min-width:640px) 44vw, 92vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                </div>
                <div className="px-4 pt-3 pb-3">
                  <h4 className="font-extrabold text-black leading-tight">{item.title}</h4>
                  <div className="mt-3 h-[2px] w-full bg-black/90" />
                  <p className="mt-2 text-lg font-extrabold text-black tracking-wide">{item.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="desserts" className="section-bleed relative overflow-hidden border-b border-borderline/70 scroll-mt-24 md:scroll-mt-28">
        <Image src={bgPaper} alt="" aria-hidden fill sizes="100vw" className="object-cover pointer-events-none select-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
          <div className="flex items-center gap-3">
            <h3 className={`${alfa.className} text-2xl md:text-4xl font-black text-black`}>Desserts</h3>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {dessertItems.map((item) => (
              <article
                key={item.title}
                data-menu-item
                data-category="Desserts"
                data-title={item.title}
                data-price={item.price}
                data-img={(item.img as StaticImageData).src}
                className="group rounded-md border-2 border-black bg-[#F4ECD3] shadow-[0_6px_0_#000] transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image src={item.img} alt={item.title} fill sizes="(min-width:1024px) 280px, (min-width:640px) 44vw, 92vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                </div>
                <div className="px-4 pt-3 pb-3">
                  <h4 className="font-extrabold text-black leading-tight">{item.title}</h4>
                  <div className="mt-3 h-[2px] w-full bg-black/90" />
                  <p className="mt-2 text-lg font-extrabold text-black tracking-wide">{item.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="appetizers" className="section-bleed relative overflow-hidden border-b border-borderline/70 scroll-mt-24 md:scroll-mt-28">
        <Image src={bgPaper} alt="" aria-hidden fill sizes="100vw" className="object-cover pointer-events-none select-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
          <div className="flex items-center gap-3">
            <h3 className={`${alfa.className} text-2xl md:text-4xl font-black text-black`}>Appetizers</h3>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {appetizerItems.map((item) => (
              <article
                key={item.title}
                data-menu-item
                data-category="Appetizers"
                data-title={item.title}
                data-price={item.price}
                data-img={(item.img as StaticImageData).src}
                className="group rounded-md border-2 border-black bg-[#F4ECD3] shadow-[0_6px_0_#000] transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image src={item.img} alt={item.title} fill sizes="(min-width:1024px) 280px, (min-width:640px) 44vw, 92vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                </div>
                <div className="px-4 pt-3 pb-3">
                  <h4 className="font-extrabold text-black leading-tight">{item.title}</h4>
                  <div className="mt-3 h-[2px] w-full bg-black/90" />
                  <p className="mt-2 text-lg font-extrabold text-black tracking-wide">{item.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="mains" className="section-bleed relative overflow-hidden border-b border-borderline/70 scroll-mt-24 md:scroll-mt-28">
        <Image src={bgPaper} alt="" aria-hidden fill sizes="100vw" className="object-cover pointer-events-none select-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
          <div className="flex items-center gap-3">
            <h3 className={`${alfa.className} text-2xl md:text-4xl font-black text-black`}>Main courses</h3>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {mainItems.map((item) => (
              <article
                key={item.title}
                data-menu-item
                data-category="Main courses"
                data-title={item.title}
                data-price={item.price}
                data-img={(item.img as StaticImageData).src}
                className="group rounded-md border-2 border-black bg-[#F4ECD3] shadow-[0_6px_0_#000] transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image src={item.img} alt={item.title} fill sizes="(min-width:1024px) 280px, (min-width:640px) 44vw, 92vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                </div>
                <div className="px-4 pt-3 pb-3">
                  <h4 className="font-extrabold text-black leading-tight">{item.title}</h4>
                  <div className="mt-3 h-[2px] w-full bg-black/90" />
                  <p className="mt-2 text-lg font-extrabold text-black tracking-wide">{item.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="burgers" className="section-bleed relative overflow-hidden border-b border-borderline/70 scroll-mt-24 md:scroll-mt-28">
        <Image src={bgPaper} alt="" aria-hidden fill sizes="100vw" className="object-cover pointer-events-none select-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
          <div className="flex items-center gap-3">
            <h3 className={`${alfa.className} text-2xl md:text-4xl font-black text-black`}>Hamburgers</h3>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {burgerItems.map((item) => (
              <article
                key={item.title}
                data-menu-item
                data-category="Hamburgers"
                data-title={item.title}
                data-price={item.price}
                data-img={(item.img as StaticImageData).src}
                className="group rounded-md border-2 border-black bg-[#F4ECD3] shadow-[0_6px_0_#000] transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image src={item.img} alt={item.title} fill sizes="(min-width:1024px) 280px, (min-width:640px) 44vw, 92vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                </div>
                <div className="px-4 pt-3 pb-3">
                  <h4 className="font-extrabold text-black leading-tight">{item.title}</h4>
                  <div className="mt-3 h-[2px] w-full bg-black/90" />
                  <p className="mt-2 text-lg font-extrabold text-black tracking-wide">{item.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="sides" className="section-bleed relative overflow-hidden border-b border-borderline/70 scroll-mt-24 md:scroll-mt-28">
        <Image src={bgPaper} alt="" aria-hidden fill sizes="100vw" className="object-cover pointer-events-none select-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
          <div className="flex items-center gap-3">
            <h3 className={`${alfa.className} text-2xl md:text-4xl font-black text-black`}>Side dishes</h3>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {sidesItems.map((item) => (
              <article
                key={item.title}
                data-menu-item
                data-category="Side dishes"
                data-title={item.title}
                data-price={item.price}
                data-img={(item.img as StaticImageData).src}
                className="group rounded-md border-2 border-black bg-[#F4ECD3] shadow-[0_6px_0_#000] transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image src={item.img} alt={item.title} fill sizes="(min-width:1024px) 280px, (min-width:640px) 44vw, 92vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                </div>
                <div className="px-4 pt-3 pb-3">
                  <h4 className="font-extrabold text-black leading-tight">{item.title}</h4>
                  <div className="mt-3 h-[2px] w-full bg-black/90" />
                  <p className="mt-2 text-lg font-extrabold text-black tracking-wide">{item.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="soups" className="section-bleed relative overflow-hidden border-b border-borderline/70 scroll-mt-24 md:scroll-mt-28">
        <Image src={bgPaper} alt="" aria-hidden fill sizes="100vw" className="object-cover pointer-events-none select-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
          <div className="flex items-center gap-3">
            <h3 className={`${alfa.className} text-2xl md:text-4xl font-black text-black`}>Soups</h3>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {soupsItems.map((item) => (
              <article
                key={item.title}
                data-menu-item
                data-category="Soups"
                data-title={item.title}
                data-price={item.price}
                data-img={(item.img as StaticImageData).src}
                className="group rounded-md border-2 border-black bg-[#F4ECD3] shadow-[0_6px_0_#000] transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image src={item.img} alt={item.title} fill sizes="(min-width:1024px) 280px, (min-width:640px) 44vw, 92vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                </div>
                <div className="px-4 pt-3 pb-3">
                  <h4 className="font-extrabold text-black leading-tight">{item.title}</h4>
                  <div className="mt-3 h-[2px] w-full bg-black/90" />
                  <p className="mt-2 text-lg font-extrabold text-black tracking-wide">{item.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="salads" className="section-bleed relative overflow-hidden border-b border-borderline/70 scroll-mt-24 md:scroll-mt-28">
        <Image src={bgPaper} alt="" aria-hidden fill sizes="100vw" className="object-cover pointer-events-none select-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
          <div className="flex items-center gap-3">
            <h3 className={`${alfa.className} text-2xl md:text-4xl font-black text-black`}>Salads</h3>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {saladItems.map((item) => (
              <article
                key={item.title}
                data-menu-item
                data-category="Salads"
                data-title={item.title}
                data-price={item.price}
                data-img={(item.img as StaticImageData).src}
                className="group rounded-md border-2 border-black bg-[#F4ECD3] shadow-[0_6px_0_#000] transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image src={item.img} alt={item.title} fill sizes="(min-width:1024px) 280px, (min-width:640px) 44vw, 92vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                </div>
                <div className="px-4 pt-3 pb-3">
                  <h4 className="font-extrabold text-black leading-tight">{item.title}</h4>
                  <div className="mt-3 h-[2px] w-full bg-black/90" />
                  <p className="mt-2 text-lg font-extrabold text-black tracking-wide">{item.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="beerSkate" className="section-bleed relative overflow-hidden border-b border-borderline/70 scroll-mt-24 md:scroll-mt-28">
        <Image src={bgPaper} alt="" aria-hidden fill sizes="100vw" className="object-cover pointer-events-none select-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
          <div className="flex items-center gap-3">
            <h3 className={`${alfa.className} text-2xl md:text-4xl font-black text-black`}>Beer skate</h3>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {beerSkateItems.map((item) => (
              <article
                key={item.title}
                data-menu-item
                data-category="Beer skate"
                data-title={item.title}
                data-price={item.price}
                data-img={(item.img as StaticImageData).src}
                className="group rounded-md border-2 border-black bg-[#F4ECD3] shadow-[0_6px_0_#000] transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image src={item.img} alt={item.title} fill sizes="(min-width:1024px) 280px, (min-width:640px) 44vw, 92vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                </div>
                <div className="px-4 pt-3 pb-3">
                  <h4 className="font-extrabold text-black leading-tight">{item.title}</h4>
                  <div className="mt-3 h-[2px] w-full bg-black/90" />
                  <p className="mt-2 text-lg font-extrabold text-black tracking-wide">{item.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* Quick view modal overlay */}
      <MenuQuickView />
    </>
  );
}
