import Image from "next/image";

export const metadata = {
  title: "Buda's Pub",
  description: "About Buda's Pub - our story, vibes and hospitality.",
};

export default function BudasPubPage() {
  return (
    <section className="py-8">
      <h1 className="text-2xl text-goldbeige font-semibold mb-4">Buda’s Pub</h1>
      <p className="text-neutral-300 mb-6 max-w-2xl">
        A cozy neighborhood spot for friends, families and fans of great food. We host live music, trivia nights, and more.
      </p>
      <div className="relative w-full h-72">
        <Image
          src="https://picsum.photos/seed/budas/1200/500"
          alt="Buda's Pub interior"
          fill
          className="object-cover rounded"
        />
      </div>
    </section>
  );
}
