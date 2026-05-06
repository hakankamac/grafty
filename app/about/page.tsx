import { PageHero } from "@/components/PageHero";

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="01 — About Studio"
        title="Built on Quietude"
        subtitle="A small architecture practice designing residences that prioritise daylight, material honesty, and the gardens they sit in."
        imageUrl="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2400&q=80"
      />

      <section className="px-6 md:px-10 py-24 md:py-32 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/50 mb-6">
              Practice
            </p>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-[-0.03em] leading-[1.05] text-white">
              Architecture as a slow conversation between site and shelter.
            </h2>
          </div>
          <div className="text-white/70 leading-relaxed text-base md:text-lg space-y-5 font-light">
            <p>
              Founded in 2014, grafty operates from a converted barn outside the city. We
              work in small teams, build slowly, and refuse projects that don&apos;t fit
              the studio&apos;s rhythm.
            </p>
            <p>
              Our drawings begin in pencil and finish on site — we believe in being present
              at every pour, every glazing day, every handover. Each villa we sign off on
              is one we&apos;d quietly want to live in ourselves.
            </p>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-3 gap-6 md:gap-12 border-t border-white/10 pt-14">
          <Stat value="11" label="Years in practice" />
          <Stat value="34" label="Completed villas" />
          <Stat value="06" label="Cities" />
        </div>
      </section>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display font-extrabold text-5xl md:text-7xl tracking-[-0.04em] text-white leading-none">
        {value}
      </div>
      <div className="text-[11px] uppercase tracking-[0.24em] text-white/50 mt-3">
        {label}
      </div>
    </div>
  );
}
