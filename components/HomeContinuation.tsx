import Image from "next/image";
import Link from "next/link";
import homeProjectOne from "@/Brand_assets/Home Pictures/home-1.jpg";
import homeProjectTwo from "@/Brand_assets/Home Pictures/home-2.jpg";
import homeProjectThree from "@/Brand_assets/Home Pictures/home-3.jpg";
import { HomeScrollReveal } from "@/components/HomeScrollReveal";
import { SiteFooter } from "@/components/SiteFooter";

const founderPortrait =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDzyF_ezoLsD0ZAxwkJecjNHo6EnVjZba5hATUeRUqQn_tWRqM8EjzuXZsA6Q5KXNx5398_DR3Qwa3MZ6nCYKmMFC9Nrpq5wvKxx9Qg4MQR7ZhdZHAyZjjDt9qeR4laKz5KjySsbu969RPgPpg5_mODOj0a81ZtRIUTD77KtYFugUoajrXV41-X4Ti0eaez1yUMRvKjeH5__SiAdbMYQ0fd8GHEI3RFqQdw_qDikWHQY4gISVqi_JkSt2Lm4OTdRLJaG613I9sqAdU";

const services = [
  {
    number: "01",
    title: "Mimari Proje",
    text: "Arsa verileri, ihtiyaç programı ve yaşam senaryosunu dengeli bir mimari plana dönüştürüyoruz.",
  },
  {
    number: "02",
    title: "İç Mekan Tasarımı",
    text: "Malzeme, ışık ve mobilya kararlarını aynı sakin dil içinde bütünleştiriyoruz.",
  },
  {
    number: "03",
    title: "3D Modelleme",
    text: "Tasarım kararlarını uygulama öncesinde okunabilir ve gerçekçi görsellerle netleştiriyoruz.",
  },
  {
    number: "04",
    title: "Proje Planlama",
    text: "Konseptten uygulama takibine kadar süreci ölçülebilir, açık ve kontrollü hale getiriyoruz.",
  },
] as const;

const selectedProjects = [
  {
    number: "01",
    title: "Modern Villa",
    category: "Mimari Proje",
    image: homeProjectOne,
  },
  {
    number: "02",
    title: "İç Mekan",
    category: "Malzeme / Işık",
    image: homeProjectTwo,
  },
  {
    number: "03",
    title: "Konut Projesi",
    category: "Yaşam Alanı",
    image: homeProjectThree,
  },
] as const;

const processSteps = [
  {
    number: "01",
    title: "Keşif",
    text: "İhtiyaçları, mekanı ve bağlamı analiz ederek doğru soruları soruyoruz.",
  },
  {
    number: "02",
    title: "Konsept",
    text: "Fikirleri, yaşam senaryosuna uygun mekansal yaklaşımlara dönüştürüyoruz.",
  },
  {
    number: "03",
    title: "Proje",
    text: "Tasarımı teknik doğrulukla geliştiriyor, detaylandırıyor ve planlıyoruz.",
  },
  {
    number: "04",
    title: "Uygulama",
    text: "Projenin sahada doğru şekilde hayata geçmesini sağlıyoruz.",
  },
] as const;

export function HomeContinuation() {
  return (
    <main className="about-calm home-continuation overflow-hidden">
      <HomeScrollReveal />
      <section
        id="home-vision"
        className="relative scroll-mt-28 bg-[var(--about-surface)] px-[var(--about-gutter)] pb-20 pt-20 md:pb-28 md:pt-28"
      >
        <div className="mx-auto grid max-w-[var(--about-container)] grid-cols-1 items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
          <div className="about-fade-in-up flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <span className="h-6 w-0.5 bg-[var(--about-tertiary)]" />
              <p className="about-label text-[var(--about-on-surface)]">
                Kurucu / Mimari Vizyonumuz
              </p>
            </div>

            <h2 className="about-headline-lg max-w-[13ch] text-[var(--about-on-surface)]">
              Her proje, yaşam biçimini mimari bir dengeye dönüştürür.
            </h2>

            <div className="max-w-2xl space-y-5">
              <p className="about-body-md text-[var(--about-on-surface-variant)]">
                HKM Mimarlık olarak; arsa, ışık, malzeme ve kullanıcı
                alışkanlıklarını aynı sakin çizgide buluşturan zamansız yaşam
                alanları üretmeye inanıyoruz.
              </p>
              <p className="about-body-md text-[var(--about-on-surface-variant)]">
                Modern villa, lüks konut ve iç mekan projelerinde estetik,
                işlevsellik ve sürdürülebilirliği bir araya getirerek,
                bulunduğu çevreyle uyumlu ve uzun ömürlü mimari çözümler
                geliştiriyoruz.
              </p>
            </div>

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <Link
                href="/about"
                className="inline-flex min-h-14 w-fit items-center gap-8 rounded-full bg-[var(--about-primary)] px-8 text-[0.98rem] font-extrabold text-white transition-[transform,background,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[var(--about-primary-container)] hover:shadow-[0_18px_36px_-24px_rgba(0,95,52,0.8)]"
              >
                Hakkımızda
                <span aria-hidden="true">→</span>
              </Link>
            </div>

          </div>

          <div className="relative about-fade-in-up about-stagger-2 mx-auto w-full max-w-[540px] pt-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1rem] border border-[var(--about-outline-variant)] bg-[var(--about-surface-container)] shadow-[0_26px_70px_-52px_rgba(25,28,29,0.62)]">
              <Image
                alt="HKM Mimarlık kurucu mimari vizyon portresi"
                src={founderPortrait}
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                quality={80}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="home-services"
        className="scroll-mt-28 bg-[var(--about-surface-container-low)] px-[var(--about-gutter)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-[var(--about-container)]">
          <div className="flex flex-col gap-12">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.65fr)] lg:items-end">
              <div>
                <p className="about-label mb-4 text-[var(--about-primary)]">
                  Hizmetlerimiz
                </p>
                <h2 className="about-headline-lg max-w-[18ch] text-[var(--about-on-surface)]">
                  Mimari süreci fikirden uygulamaya taşıyoruz.
                </h2>
              </div>
              <p className="about-body-md max-w-xl text-[var(--about-on-surface-variant)] lg:pb-2">
                Konsept kararlarından uygulama planına kadar her adımı net,
                ölçülü ve yaşam senaryonuza uygun bir mimari sürece
                dönüştürüyoruz.
              </p>
            </div>

            <div className="home-service-list divide-y divide-[var(--about-outline-variant)] border-y border-[var(--about-outline-variant)]">
              {services.map((service, index) => (
                <Link
                  key={service.number}
                  href="/about"
                  className={`home-service-row group grid gap-5 px-5 py-7 md:grid-cols-[84px_1fr_minmax(220px,0.7fr)_44px] md:items-center md:px-6 ${
                    index === 0 ? "home-service-row-default" : ""
                  }`}
                >
                  <span className="about-label text-[var(--about-primary)] transition-colors duration-300 group-hover:text-[var(--about-tertiary)]">
                    {service.number}
                  </span>
                  <h3 className="about-headline-sm text-[var(--about-on-surface)]">
                    {service.title}
                  </h3>
                  <p className="about-body-md text-[var(--about-on-surface-variant)]">
                    {service.text}
                  </p>
                  <span
                    aria-hidden="true"
                    className="grid h-11 w-11 place-items-center rounded-full border border-[var(--about-outline-variant)] text-[var(--about-primary)] transition-[background,border-color,color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:border-[var(--about-primary)] group-hover:bg-[var(--about-primary)] group-hover:text-white"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    >
                      <path d="M7 17 17 7" />
                      <path d="M9 7h8v8" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="home-projects"
        className="scroll-mt-28 bg-[var(--about-surface)] px-[var(--about-gutter)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-[var(--about-container)]">
          <div className="mb-12 grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.65fr)] lg:items-start">
            <div>
              <h2 className="about-headline-lg max-w-[12ch] text-[var(--about-on-surface)]">
                Seçili Projeler
              </h2>
              <div className="mt-5 h-px w-20 bg-[var(--about-outline)]" />
            </div>
            <p className="about-body-md max-w-xl text-[var(--about-on-surface-variant)] lg:pb-2">
              Farklı ölçeklerdeki projelerimizde, yaşayan mekanlar üretirken
              estetik, işlev ve sürdürülebilirliği bir arada ele alıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-1.5 md:grid-cols-3">
            {selectedProjects.map((project) => (
              <Link
                key={project.number}
                href="/project"
                className="home-project-panel group relative aspect-[4/5] min-h-[420px] overflow-hidden bg-[var(--about-surface-container)]"
              >
                <Image
                  src={project.image}
                  alt={`${project.title} mimari proje görseli`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  quality={82}
                  className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.035]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/18 to-transparent"
                />
                <div className="absolute left-6 top-6 flex items-center gap-4 text-white">
                  <span className="text-xl font-medium leading-none">
                    {project.number}
                  </span>
                  <span className="h-px w-10 bg-white/70" />
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-center gap-8 p-6 text-white md:p-7">
                  <h3 className="about-headline-sm text-white">
                    {project.title}
                  </h3>
                  <span aria-hidden="true" className="text-3xl leading-none">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="home-process"
        className="scroll-mt-28 bg-[var(--about-surface)] px-[var(--about-gutter)] pb-20 pt-4 md:pb-28 md:pt-2"
      >
        <div className="mx-auto max-w-[var(--about-container)]">
          <div className="mb-12 grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.65fr)] lg:items-start">
            <div>
              <h2 className="about-headline-lg max-w-[12ch] text-[var(--about-on-surface)]">
                Tasarım Süreci
              </h2>
            </div>
            <p className="about-body-md max-w-xl text-[var(--about-on-surface-variant)] lg:pb-1">
              Her projede, fikri ilk eskizden anahtar teslimine kadar bütüncül
              bir yaklaşımla yönetiyoruz.
            </p>
          </div>

          <div className="home-process-timeline grid gap-10 md:grid-cols-4 md:gap-0">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="home-process-step relative md:pr-12"
              >
                <span className="about-label block text-[var(--about-primary)]">
                  {step.number}
                </span>
                <h3 className="mt-10 text-lg font-semibold leading-7 text-[var(--about-on-surface)]">
                  {step.title}
                </h3>
                <p className="about-body-md mt-3 max-w-[24ch] text-[var(--about-on-surface-variant)]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter activeLabel="Ana Sayfa" />
    </main>
  );
}
