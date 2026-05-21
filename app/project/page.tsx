import Image from "next/image";
import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SiteFooter } from "@/components/SiteFooter";
import { PROJECTS } from "@/lib/projects";

const featuredProject = PROJECTS.find((project) => project.featured) ?? PROJECTS[0];

export const metadata: Metadata = {
  title: "Projelerimiz",
  description:
    "HKM Mimarlık'ın modern villa, lüks konut ve iç mekan projelerinden seçili işler.",
  alternates: { canonical: "/project" },
  openGraph: {
    title: "HKM Mimarlık — Projelerimiz",
    description:
      "Modern villa, lüks konut ve iç mekan projelerinde seçili mimari çalışmalar.",
    url: "/project",
    siteName: "HKM Mimarlık",
    images: [
      {
        url: featuredProject.image,
        width: 1800,
        height: 1200,
        alt: `${featuredProject.title} mimari proje görseli`,
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HKM Mimarlık — Projelerimiz",
    description:
      "Modern villa, lüks konut ve iç mekan projelerinde seçili mimari çalışmalar.",
    images: [featuredProject.image],
  },
};

export default function ProjectPage() {
  return (
    <main className="project-calm project-scroll-root min-h-screen overflow-hidden">
      <ScrollReveal rootSelector=".project-scroll-root" />
      <section className="project-hero project-photo-hero relative flex min-h-[520px] items-end overflow-hidden px-[var(--project-gutter)] pb-16 pt-40 md:min-h-[590px] md:pb-24 md:pt-48">
        <Image
          src={featuredProject.image}
          alt=""
          fill
          priority
          sizes="100vw"
          quality={80}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/60" />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.07] mix-blend-overlay grain"
        />

        <div className="relative z-10 mx-auto w-full max-w-[var(--project-container)]">
          <p className="project-label project-fade-up mb-5 text-[var(--project-inverse-primary)]">
            Projelerimiz
          </p>
          <h1 className="project-display project-fade-up project-delay-1 max-w-[12ch] text-white title-shadow">
            Projelerimiz
          </h1>
          <p className="project-body-lg project-fade-up project-delay-2 mt-6 max-w-2xl text-white">
            Modern villa, lüks konut ve iç mekan projelerinde; arsa
            potansiyelini, yaşam senaryosunu ve malzeme karakterini aynı sakin
            mimari dilde buluşturuyoruz.
          </p>
        </div>
      </section>

      <section className="scroll-reveal-section px-[var(--project-gutter)] py-20 md:py-28">
        <div className="mx-auto max-w-[var(--project-container)]">
          <article
            className="project-featured grid grid-cols-1 overflow-hidden rounded-[20px] border border-[var(--project-outline-variant)] bg-[var(--project-surface-container-lowest)] shadow-[0_34px_90px_-58px_rgba(25,28,29,0.55)] lg:grid-cols-[1.2fr_0.8fr]"
            data-scroll-reveal
          >
            <div className="project-image-wrap aspect-[16/11] lg:aspect-auto">
              <Image
                src={featuredProject.image}
                alt={`${featuredProject.title} mimari proje görseli`}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                quality={80}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-between gap-12 p-7 md:p-10 lg:p-12">
              <div>
                <p className="project-label mb-5 text-[var(--project-tertiary)]">
                  Öne çıkan proje
                </p>
                <h2 className="project-headline-lg text-[var(--project-on-surface)]">
                  {featuredProject.title}
                </h2>
                <p className="project-body-md mt-5 text-[var(--project-on-surface-variant)]">
                  {featuredProject.description}
                </p>
              </div>

              <ProjectFacts project={featuredProject} />
            </div>
          </article>
        </div>
      </section>

      <section className="scroll-reveal-section bg-[var(--project-surface-container-low)] px-[var(--project-gutter)] py-20 md:py-28">
        <div className="mx-auto max-w-[var(--project-container)]">
          <div className="mb-12 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
            <div>
              <p className="project-label mb-4 text-[var(--project-primary)]">
                Seçili işler
              </p>
              <h2 className="project-headline-md max-w-2xl text-[var(--project-on-surface)]">
                Her proje, kullanıcı ihtiyacı ve arazi karakterine göre
                yeniden kurgulanır.
              </h2>
            </div>
            <p className="project-body-md max-w-md text-[var(--project-on-surface-variant)]">
              Geçici görseller gerçek HKM proje arşiviyle değiştirildiğinde
              sayfa aynı veri yapısıyla çalışmaya devam eder.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {PROJECTS.map((project, index) => (
              <article
                key={project.title}
                className="project-card group flex min-h-full flex-col overflow-hidden rounded-[20px] border border-[var(--project-outline-variant)] bg-[var(--project-surface-container-lowest)]"
                data-scroll-reveal
              >
                <div className="project-image-wrap aspect-[4/3]">
                  <Image
                    src={project.image}
                    alt={`${project.title} mimari proje görseli`}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    quality={80}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <span className="project-meta text-[var(--project-outline)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="rounded-full bg-[var(--project-surface-container)] px-3 py-1 text-sm font-semibold text-[var(--project-primary)]">
                      {project.service}
                    </span>
                  </div>

                  <h3 className="project-headline-sm text-[var(--project-on-surface)]">
                    {project.title}
                  </h3>
                  <p className="project-body-md mt-4 flex-1 text-[var(--project-on-surface-variant)]">
                    {project.description}
                  </p>

                  <ProjectFacts project={project} compact />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-reveal-section px-[var(--project-gutter)] py-20 md:py-28">
        <div
          className="project-cta mx-auto grid max-w-[var(--project-container)] grid-cols-1 gap-10 rounded-[20px] bg-[var(--project-inverse-surface)] p-7 text-white md:p-12 lg:grid-cols-[1fr_auto] lg:items-end"
          data-scroll-reveal
        >
          <div>
            <p className="project-label mb-5 text-[var(--project-inverse-primary)]">
              Proje danışmanlığı
            </p>
            <h2 className="project-headline-lg max-w-2xl">
              Projenizi birlikte değerlendirelim.
            </h2>
            <p className="project-body-md mt-5 max-w-2xl text-white/75">
              Arsanız, yaşam ihtiyacınız veya mevcut mekanınız için ilk
              mimari yönü birlikte netleştirelim.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href="mailto:info@hkmmimarlik.com"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--project-primary)] px-7 text-base font-bold text-white transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[var(--project-primary-container)] hover:shadow-[0_18px_38px_-22px_rgba(120,218,155,0.75)]"
            >
              Teklif görüşmesi al
            </a>
            <a
              href="tel:+905547547624"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-7 text-base font-bold text-white transition-[transform,background-color,border-color] duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10"
            >
              +90 554 754 76 24
            </a>
          </div>
        </div>
      </section>

      <SiteFooter activeLabel="Projelerimiz" />
    </main>
  );
}

function ProjectFacts({
  project,
  compact = false,
}: {
  project: (typeof PROJECTS)[number];
  compact?: boolean;
}) {
  return (
    <div className={compact ? "mt-7" : ""}>
      <div className="mb-5 flex flex-wrap gap-2">
        {[project.location, project.year, project.service].map((item) => (
          <span
            key={item}
            className="rounded-full border border-[var(--project-outline-variant)] px-3 py-1 text-sm font-semibold text-[var(--project-on-surface-variant)]"
          >
            {item}
          </span>
        ))}
      </div>

      <dl className="grid grid-cols-3 gap-3 border-t border-[var(--project-outline-variant)] pt-5">
        {project.metrics.map((metric) => (
          <div key={metric}>
            <dt className="sr-only">Proje metriği</dt>
            <dd className="project-meta text-[var(--project-on-surface)]">
              {metric}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
