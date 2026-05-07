import { SiteFooter } from "@/components/SiteFooter";
import { PROJECTS } from "@/lib/projects";

const stats = [
  { value: "6", label: "Seçili proje" },
  { value: "3", label: "Ana uzmanlık" },
  { value: "2023-26", label: "Portfolyo aralığı" },
] as const;

const featuredProject = PROJECTS.find((project) => project.featured) ?? PROJECTS[0];

export default function ProjectPage() {
  return (
    <main className="project-calm min-h-screen overflow-hidden">
      <section
        className="project-hero project-photo-hero relative flex min-h-[560px] items-end overflow-hidden px-[var(--project-gutter)] pb-16 pt-44 md:min-h-[620px] md:pb-24 md:pt-52"
        style={{ backgroundImage: `url(${featuredProject.image})` }}
      >
        <div className="absolute inset-0 bg-[var(--project-inverse-surface)]/55 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/24 to-black/28" />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-overlay grain"
        />

        <div className="relative z-10 mx-auto grid w-full max-w-[var(--project-container)] grid-cols-1 gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div className="project-fade-up">
            <p className="project-label mb-5 text-white/75">
              HKM Mimarlık Portfolyo
            </p>
            <h1 className="project-display max-w-[9ch] text-white title-shadow">
              Projelerimiz
            </h1>
          </div>

          <div className="project-fade-up project-delay-1 flex flex-col gap-8">
            <p className="project-body-lg max-w-xl text-white">
              Modern villa, lüks konut ve iç mekan projelerinde; arsa
              potansiyelini, yaşam senaryosunu ve malzeme karakterini aynı
              sakin mimari dilde buluşturuyoruz.
            </p>

            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[18px] border border-white/20 bg-white/12 p-4 text-white shadow-[0_18px_42px_-30px_rgba(0,0,0,0.55)] backdrop-blur-xl"
                >
                  <strong className="block text-2xl font-bold leading-none md:text-3xl">
                    {stat.value}
                  </strong>
                  <span className="project-meta mt-2 block text-white/70">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-[var(--project-gutter)] py-20 md:py-28">
        <div className="mx-auto max-w-[var(--project-container)]">
          <article className="project-featured grid grid-cols-1 overflow-hidden rounded-[20px] border border-[var(--project-outline-variant)] bg-[var(--project-surface-container-lowest)] shadow-[0_34px_90px_-58px_rgba(25,28,29,0.55)] lg:grid-cols-[1.2fr_0.8fr]">
            <div className="project-image-wrap aspect-[16/11] lg:aspect-auto">
              <img
                src={featuredProject.image}
                alt={`${featuredProject.title} mimari proje görseli`}
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

      <section className="bg-[var(--project-surface-container-low)] px-[var(--project-gutter)] py-20 md:py-28">
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
              >
                <div className="project-image-wrap aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={`${project.title} mimari proje görseli`}
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

      <section className="px-[var(--project-gutter)] py-20 md:py-28">
        <div className="project-cta mx-auto grid max-w-[var(--project-container)] grid-cols-1 gap-10 rounded-[20px] bg-[var(--project-inverse-surface)] p-7 text-white md:p-12 lg:grid-cols-[1fr_auto] lg:items-end">
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
