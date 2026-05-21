import Image from "next/image";
import type { Metadata } from "next";
import { AboutFeatureCard } from "@/components/AboutFeatureCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SiteFooter } from "@/components/SiteFooter";
import aboutHeaderImage from "@/Brand_assets/about-header.jpg";
import aboutVillaImage from "@/Brand_assets/about-villa.jpg";
import founderPortraitImage from "@/Brand_assets/founder-portrait.jpg";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "HKM Mimarlık; modern villa, lüks konut ve iç mekan projelerinde zamansız, işlevsel ve sakin mimari çözümler üretir.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "HKM Mimarlık — Hakkımızda",
    description:
      "Modern villa, lüks konut ve iç mekan projelerinde sakin, net ve uygulanabilir mimari yaklaşım.",
    url: "/about",
    siteName: "HKM Mimarlık",
    images: [
      {
        url: aboutHeaderImage.src,
        width: aboutHeaderImage.width,
        height: aboutHeaderImage.height,
        alt: "HKM Mimarlık hakkında hero görseli",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HKM Mimarlık — Hakkımızda",
    description:
      "Modern villa, lüks konut ve iç mekan projelerinde sakin, net ve uygulanabilir mimari yaklaşım.",
    images: [aboutHeaderImage.src],
  },
};

const features = [
  {
    icon: "building",
    title: "Mimari Proje",
    text: "Modern villa ve lüks konut projelerinde arsa, ihtiyaç ve yaşam senaryosuna özel mimari çözümler geliştiriyoruz.",
  },
  {
    icon: "interior",
    title: "İç Mekan Tasarımı",
    text: "Konut iç mekanlarında konforu, malzeme bütünlüğünü ve kullanıcı alışkanlıklarını dengeli bir tasarım diliyle buluşturuyoruz.",
  },
  {
    icon: "urban",
    title: "Kentsel Tasarım",
    text: "Yerleşim kararlarından ortak alan kurgusuna kadar çevresiyle uyumlu, insan odaklı ve sürdürülebilir tasarım yaklaşımları sunuyoruz.",
  },
  {
    icon: "planning",
    title: "Proje Planlama",
    text: "Konsept aşamasından uygulamaya kadar süreci ölçülebilir, takip edilebilir ve doğru zamanlamayla ilerleyen bir plana dönüştürüyoruz.",
  },
  {
    icon: "modeling",
    title: "3D Modelleme",
    text: "Projeleri uygulama öncesinde gerçekçi görselleştirmelerle okunabilir hale getiriyor, tasarım kararlarını daha net değerlendirmenizi sağlıyoruz.",
  },
  {
    icon: "decor",
    title: "Dekor Planı",
    text: "Mekan karakterini güçlendiren mobilya, renk, doku ve aydınlatma önerileriyle bütüncül dekorasyon çözümleri hazırlıyoruz.",
  },
] as const;

export default function AboutPage() {
  return (
    <main className="about-calm min-h-screen overflow-hidden">
      <ScrollReveal rootSelector=".about-calm" />
      <section className="relative flex min-h-[520px] w-full items-end overflow-hidden px-[var(--about-gutter)] pb-16 pt-40 md:min-h-[590px] md:pb-24 md:pt-48">
        <Image
          src={aboutHeaderImage}
          alt=""
          fill
          priority
          sizes="100vw"
          quality={80}
          className="absolute inset-0 h-full w-full object-cover object-[center_43%]"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/60" />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.07] mix-blend-overlay grain"
        />
        <div className="relative z-10 mx-auto flex w-full max-w-[var(--about-container)] flex-col gap-4">
          <p className="about-label about-fade-in-up mb-5 text-[var(--about-inverse-primary)]">
            Hakkımızda
          </p>
          <h1 className="about-hero-title about-fade-in-up max-w-[14ch] text-white">
            Yaşam alanlarını birlikte şekillendirelim.
          </h1>
          <p className="about-hero-copy about-fade-in-up about-stagger-1 mt-2 max-w-2xl text-white">
            Modern villa, lüks konut ve iç mekan projelerinde estetik, işlev ve
            malzeme bütünlüğünü sakin, net ve uygulanabilir bir mimari dille
            buluşturuyoruz.
          </p>
        </div>
      </section>

      <section className="scroll-reveal-section px-[var(--about-gutter)] py-20 md:py-28">
        <div className="mx-auto grid max-w-[var(--about-container)] grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-20">
          <div className="flex flex-col gap-6">
            <h2 className="about-headline-lg text-[var(--about-on-surface)]">
              Modern Villa ve Lüks Konut Mimarisinde Uzman Yaklaşım
            </h2>
            <div className="h-1 w-16 rounded-full bg-[var(--about-primary)]" />
            <div className="space-y-5">
              <p className="about-body-lg text-[var(--about-on-surface-variant)]">
                HKM Mimarlık olarak, her projeyi yalnızca bir yapı olarak
                değil; yaşam biçimini, arsa potansiyelini ve kullanıcı
                ihtiyaçlarını bir araya getiren özgün bir mimari çözüm olarak
                ele alıyoruz. Modern villa tasarımı, lüks konut projeleri ve
                çağdaş yaşam alanlarında estetik, işlevsellik ve
                sürdürülebilirliği aynı çizgide buluşturuyoruz.
              </p>
              <p className="about-body-md text-[var(--about-on-surface-variant)]">
                Tasarım sürecimizde güçlü mimari kurgu, doğru malzeme seçimi,
                doğal ışık kullanımı ve mekan akışını merkeze alıyoruz.
                Amacımız; zamansız, değerini koruyan ve bulunduğu çevreyle uyum
                içinde gelişen konut projeleri üretmek.
              </p>
            </div>
          </div>

          <div
            className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] shadow-[0_28px_70px_-38px_rgba(0,0,0,0.38)]"
            data-scroll-reveal
          >
            <Image
              alt="Mauritius luxury villa"
              src={aboutVillaImage}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              quality={80}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="scroll-reveal-section bg-[var(--about-surface-container-low)] px-[var(--about-gutter)] py-20 md:py-28">
        <div className="mx-auto flex max-w-[var(--about-container)] flex-col gap-14">
          <div className="mx-auto max-w-2xl text-center">
            <p className="about-label mb-4 text-[var(--about-primary)]">
              Hizmetlerimiz
            </p>
            <h2 className="about-headline-md text-[var(--about-on-surface)]">
              Mimari Tasarım Hizmetlerimiz
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {features.map((feature, index) => (
              <AboutFeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                className={`about-stagger-${index + 1}`}
              >
                {feature.text}
              </AboutFeatureCard>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-reveal-section bg-[var(--about-surface)] px-[var(--about-gutter)] py-20 md:py-28">
        <div className="mx-auto grid max-w-[var(--about-container)] grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-20">
          <div className="order-2 flex flex-col gap-6 md:order-1">
            <p className="about-label text-[var(--about-primary)]">
              Kurucu / Mimari Vizyonumuz
            </p>
            <h2 className="about-headline-lg text-[var(--about-on-surface)]">
              HKM Mimarlık’ın Tasarım Yaklaşımı
            </h2>
            <div className="space-y-5">
              <div>
                <h3 className="about-headline-md text-[var(--about-on-surface)]">
                  Kurumsal Vizyon
                </h3>
                <p className="about-label mt-2 text-[var(--about-tertiary)]">
                  Modern, işlevsel ve zamansız mimari
                </p>
              </div>
              <p className="about-body-md text-[var(--about-on-surface-variant)]">
                HKM Mimarlık’ın tasarım yaklaşımı; modern çizgileri, işlevsel
                planlamayı ve kullanıcı odaklı yaşam kurgusunu aynı potada
                buluşturan bütüncül bir mimari anlayışa dayanır. Her projede
                yalnızca estetik bir yapı üretmeyi değil; uzun ömürlü, değerli
                ve yaşanabilir mekanlar tasarlamayı hedefliyoruz.
              </p>
              <p className="about-body-md text-[var(--about-on-surface-variant)]">
                Modern villa projeleri, lüks konut tasarımları ve özel yaşam
                alanlarında mimari kararlarımızı arsa verileri, doğal ışık,
                malzeme kalitesi ve kullanıcı ihtiyaçları belirler. Vizyonumuz;
                bulunduğu çevreyle uyum kuran, zamansız çizgiler taşıyan ve
                günlük yaşamı daha konforlu hale getiren konut projeleri
                geliştirmektir.
              </p>
            </div>
          </div>

          <div
            className="relative order-1 aspect-square w-full overflow-hidden rounded-[2rem] shadow-[0_28px_70px_-38px_rgba(0,0,0,0.38)] md:order-2 md:aspect-[4/5]"
            data-scroll-reveal
          >
            <Image
              alt="HKM Mimarlık modern villa tasarım vizyonu"
              src={founderPortraitImage}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              quality={80}
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      <SiteFooter activeLabel="Hakkımızda" />
    </main>
  );
}
