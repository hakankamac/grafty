import Image from "next/image";
import { AboutFeatureCard } from "@/components/AboutFeatureCard";
import aboutHeaderImage from "@/Brand_assets/about-header.jpg";
import footerLogo from "@/Brand_assets/Footer-logo.png";

const heroImage = aboutHeaderImage.src;

const villaImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuACbymr7ak44ohaOPMlbjV0s-dpHA8zUyu-2taOu7nEL_aY1RcAEk2emFv4dTSv5C3JmVGjV5jTQm6iHlhQDjagRR3xRRTfD_PPK8aPC-EiwD6zTi9w4z2JwV7hvi6hRavDI-c3SNDcbzddD9R9AA6NnYwSLy5ksxNVKOmZTsdcehnndwdJatX8vWJmK6MnkkiTOSheH9VNBBTAagGuADXq4PhOVm7LOEMvIbw4uStA8rOO-txQBdkoNd0nbDQG2rwspit3zaq2GBU";

const portraitImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDzyF_ezoLsD0ZAxwkJecjNHo6EnVjZba5hATUeRUqQn_tWRqM8EjzuXZsA6Q5KXNx5398_DR3Qwa3MZ6nCYKmMFC9Nrpq5wvKxx9Qg4MQR7ZhdZHAyZjjDt9qeR4laKz5KjySsbu969RPgPpg5_mODOj0a81ZtRIUTD77KtYFugUoajrXV41-X4Ti0eaez1yUMRvKjeH5__SiAdbMYQ0fd8GHEI3RFqQdw_qDikWHQY4gISVqi_JkSt2Lm4OTdRLJaG613I9sqAdU";

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

const footerGroups = [
  {
    title: "Kurumsal",
    links: ["Ana Sayfa", "Hakkımızda", "İletişim", "Projelerimiz"],
  },
];

const contactItems = [
  {
    type: "phone",
    label: "Telefon",
    value: "+90 554 754 76 24",
    href: "tel:+905547547624",
  },
  {
    type: "mail",
    label: "E-posta",
    value: "info@hkmmimarlik.com",
    href: "mailto:info@hkmmimarlik.com",
  },
  {
    type: "address",
    label: "Adres",
    value: "2 KOZA S N 147/5, Gaziosmanpaşa",
    href: "https://www.google.com/maps/search/?api=1&query=2%20KOZA%20S%20N%20147%2F5%2C%20Gaziosmanpa%C5%9Fa",
  },
] as const;

export default function AboutPage() {
  return (
    <main className="about-calm min-h-screen overflow-hidden">
      <section
        className="relative flex min-h-[520px] w-full items-end overflow-hidden bg-cover bg-[center_43%] px-[var(--about-gutter)] pb-16 pt-40 md:min-h-[590px] md:pb-24 md:pt-48"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
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

      <section className="px-[var(--about-gutter)] py-20 md:py-28">
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

          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] shadow-[0_28px_70px_-38px_rgba(0,0,0,0.38)]">
            <img
              alt="Mauritius luxury villa"
              src={villaImage}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--about-surface-container-low)] px-[var(--about-gutter)] py-20 md:py-28">
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

      <section className="bg-[var(--about-surface)] px-[var(--about-gutter)] py-20 md:py-28">
        <div className="mx-auto grid max-w-[var(--about-container)] grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-20">
          <div className="order-2 flex flex-col gap-6 md:order-1">
            <p className="about-label about-fade-in text-[var(--about-primary)]">
              Kurucu / Mimari Vizyonumuz
            </p>
            <h2 className="about-headline-lg about-fade-in about-stagger-1 text-[var(--about-on-surface)]">
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

          <div className="order-1 aspect-square w-full overflow-hidden rounded-[2rem] shadow-[0_28px_70px_-38px_rgba(0,0,0,0.38)] md:order-2 md:aspect-[4/5]">
            <img
              alt="HKM Mimarlık modern villa tasarım vizyonu"
              src={portraitImage}
              className="h-full w-full object-cover object-top about-fade-in"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--about-outline-variant)] bg-[var(--about-surface-container-lowest)] px-[var(--about-gutter)] py-16 md:py-20">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 md:grid-cols-4 md:gap-12">
          <div className="flex flex-col gap-4">
            <Image
              src={footerLogo}
              alt="HKM Mimarlık footer logosu"
              className="h-auto w-[160px] max-w-full object-contain md:w-[180px]"
            />
            <p className="about-body-md max-w-sm text-[var(--about-on-surface-variant)]">
              Modern mimariyle zamansız yaşam alanları tasarlıyoruz.
            </p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title} className="flex flex-col gap-3">
              <span className="about-label mb-2 text-[var(--about-on-surface)]">
                {group.title}
              </span>
              {group.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className={`about-body-md transition-opacity duration-300 hover:opacity-100 ${
                    link === "Hakkımızda"
                      ? "font-bold text-[var(--about-primary)] opacity-100"
                      : "text-[var(--about-on-surface-variant)] opacity-80"
                  }`}
                >
                  {link}
                </a>
              ))}
            </div>
          ))}

          <div className="flex flex-col gap-3">
            <span className="about-label mb-2 text-[var(--about-on-surface)]">
              İletişim
            </span>
            {contactItems.map((item) => (
              <a
                key={item.type}
                href={item.href}
                target={item.type === "address" ? "_blank" : undefined}
                rel={item.type === "address" ? "noreferrer" : undefined}
                className="about-body-md inline-flex items-start gap-3 text-[var(--about-on-surface-variant)] opacity-85 transition-opacity duration-300 hover:opacity-100"
                aria-label={`${item.label}: ${item.value}`}
              >
                <ContactIcon type={item.type} />
                <span>{item.value}</span>
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <span className="about-label mb-1 text-[var(--about-on-surface)]">
              Sosyal Medya
            </span>
            <div className="flex items-center gap-3">
              <SocialButton type="instagram" href="#" label="Instagram" />
              <SocialButton type="facebook" href="#" label="Facebook" />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-[1280px] border-t border-[var(--about-surface-container-highest)] pt-10">
          <p className="about-body-md text-center text-[var(--about-on-surface-variant)] md:text-left">
            © 2026 HKM Mimarlık. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </main>
  );
}

function ContactIcon({ type }: { type: (typeof contactItems)[number]["type"] }) {
  const paths = {
    phone: (
      <path d="M6.5 4.5 9 4l1.4 4-1.7 1.1a12 12 0 0 0 6.2 6.2l1.1-1.7 4 1.4-.5 2.5c-.2.9-1 1.5-1.9 1.5C10.1 19 5 13.9 5 7.4c0-.9.6-1.7 1.5-1.9z" />
    ),
    mail: (
      <>
        <path d="M4 6.5h16v11H4z" />
        <path d="m4.5 7 7.5 6 7.5-6" />
      </>
    ),
    address: (
      <>
        <path d="M12 21s6-5.1 6-11a6 6 0 0 0-12 0c0 5.9 6 11 6 11z" />
        <path d="M12 12.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4z" />
      </>
    ),
  } as const;

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="mt-1 h-5 w-5 shrink-0 text-[var(--about-primary)]"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      {paths[type]}
    </svg>
  );
}

function SocialButton({
  type,
  href,
  label,
}: {
  type: "instagram" | "facebook";
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className={`group grid h-11 w-11 place-items-center rounded-full border border-[var(--about-outline-variant)] bg-[var(--about-surface-container-low)] text-[var(--about-primary)] transition-[transform,background,border-color,color,box-shadow] duration-300 hover:-translate-y-0.5 ${
        type === "instagram"
          ? "hover:border-0 hover:bg-[linear-gradient(135deg,#f58529_0%,#dd2a7b_45%,#8134af_72%,#515bd4_100%)] hover:text-white hover:shadow-[0_14px_28px_-16px_rgba(221,42,123,0.85)]"
          : "hover:border-[#1877f2] hover:bg-[#1877f2] hover:text-white hover:shadow-[0_14px_28px_-16px_rgba(24,119,242,0.85)]"
      }`}
    >
      <SocialIcon type={type} />
    </a>
  );
}

function SocialIcon({ type }: { type: "instagram" | "facebook" }) {
  if (type === "facebook") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
      >
        <path d="M13.6 21v-7.7H16l.4-3h-2.8V8.4c0-.9.3-1.5 1.6-1.5h1.3V4.2C15.9 4.1 15.2 4 14.3 4c-2.5 0-4.2 1.5-4.2 4.2v2.1H7.5v3h2.6V21h3.5z" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      <rect x="5" y="5" width="14" height="14" rx="4" />
      <path d="M9.5 12a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0z" />
      <path d="M15.8 8.2h.01" />
    </svg>
  );
}
