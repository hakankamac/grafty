import { PageHero } from "@/components/PageHero";

const PROJECTS = [
  {
    id: "01",
    title: "Casa Verde",
    location: "Tulum, Mexico",
    year: "2024",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "02",
    title: "Stone Court",
    location: "Provence, France",
    year: "2023",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "03",
    title: "Cantilever House",
    location: "Big Sur, USA",
    year: "2023",
    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "04",
    title: "Villa Atik",
    location: "Bodrum, Türkiye",
    year: "2022",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "05",
    title: "Forest Frame",
    location: "Karuizawa, Japan",
    year: "2022",
    img: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "06",
    title: "Sea Loggia",
    location: "Paros, Greece",
    year: "2021",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function ProjectPage() {
  return (
    <main>
      <PageHero
        eyebrow="02 — Selected Works"
        title="Project Index"
        subtitle="Eleven completed residences across four climates. Each entry below is a study in restraint."
        imageUrl="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2400&q=80"
      />

      <section className="px-6 md:px-10 py-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-20">
          {PROJECTS.map((p) => (
            <article key={p.id} className="group">
              <div className="relative aspect-[4/5] overflow-hidden mb-6">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-smooth group-hover:scale-[1.05]"
                  style={{ backgroundImage: `url(${p.img})` }}
                />
              </div>
              <div className="flex justify-between items-baseline gap-4 flex-wrap">
                <div className="flex items-baseline gap-3">
                  <span className="text-[11px] tracking-[0.24em] text-white/50 uppercase">
                    — {p.id}
                  </span>
                  <span className="font-display font-semibold text-2xl md:text-[28px] text-white tracking-[-0.02em]">
                    {p.title}
                  </span>
                </div>
                <div className="text-[11px] uppercase tracking-[0.24em] text-white/50">
                  {p.location} · {p.year}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
