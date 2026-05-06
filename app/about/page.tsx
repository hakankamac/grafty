import { AboutFeatureCard } from "@/components/AboutFeatureCard";

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAgcoUM_LJ8Usk7TBvn2UKs7KK0p55AEufQr1gBhxpcBD-y_pphMU77FltQMV2U-BXjbYjfqcBFwRMxPWyzmPM-pNG5UPPD3_ewMWdmmSqydCHCc-F9JuupUUPONEmzD4CSpz_SYVtb_g55qAsE1daWagBSVNR4UeF_pjd_GVtfOITjkEjHf90hzXKyU9oclSJN8qYATF5yOKH2DBDwi0Zo9QJeXEumP7642ZJGwhmlO2cJzSs0giYLXCbbxrF0QXPr0xfTbc-6yv8";

const villaImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuACbymr7ak44ohaOPMlbjV0s-dpHA8zUyu-2taOu7nEL_aY1RcAEk2emFv4dTSv5C3JmVGjV5jTQm6iHlhQDjagRR3xRRTfD_PPK8aPC-EiwD6zTi9w4z2JwV7hvi6hRavDI-c3SNDcbzddD9R9AA6NnYwSLy5ksxNVKOmZTsdcehnndwdJatX8vWJmK6MnkkiTOSheH9VNBBTAagGuADXq4PhOVm7LOEMvIbw4uStA8rOO-txQBdkoNd0nbDQG2rwspit3zaq2GBU";

const portraitImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDzyF_ezoLsD0ZAxwkJecjNHo6EnVjZba5hATUeRUqQn_tWRqM8EjzuXZsA6Q5KXNx5398_DR3Qwa3MZ6nCYKmMFC9Nrpq5wvKxx9Qg4MQR7ZhdZHAyZjjDt9qeR4laKz5KjySsbu969RPgPpg5_mODOj0a81ZtRIUTD77KtYFugUoajrXV41-X4Ti0eaez1yUMRvKjeH5__SiAdbMYQ0fd8GHEI3RFqQdw_qDikWHQY4gISVqi_JkSt2Lm4OTdRLJaG613I9sqAdU";

const features = [
  {
    icon: "premium",
    title: "Exclusive Access",
    text: "Off-market opportunities and first refusal on prime coastal developments.",
  },
  {
    icon: "bank",
    title: "Institutional Trust",
    text: "Navigating complex international investments with absolute compliance and security.",
  },
  {
    icon: "architecture",
    title: "Curated Design",
    text: "Partnering only with developers who share our vision for corporate modernism.",
  },
  {
    icon: "handshake",
    title: "Concierge Service",
    text: "From initial inquiry to post-purchase management, handled with quiet efficiency.",
  },
  {
    icon: "insights",
    title: "Market Intelligence",
    text: "Data-driven insights to ensure your asset appreciates in the vibrant local economy.",
  },
  {
    icon: "eco",
    title: "Sustainable Luxury",
    text: "Prioritizing estates that harmonize with the delicate Mauritian ecosystem.",
  },
] as const;

const footerGroups = [
  {
    title: "Collections",
    links: ["Luxury Villas", "Penthouse Collection", "Beachfront Estates"],
  },
  {
    title: "Regions",
    links: ["North Coast", "West Coast"],
  },
  {
    title: "Company",
    links: ["About Us", "Contact Us", "Privacy Policy"],
  },
];

export default function AboutPage() {
  return (
    <main className="about-calm min-h-screen overflow-hidden">
      <section
        className="relative flex min-h-[520px] w-full items-end bg-cover bg-center px-[var(--about-gutter)] pb-20 pt-36 md:min-h-[560px] md:pb-24"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-[var(--about-inverse-surface)]/65 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-black/20" />
        <div className="relative z-10 mx-auto flex w-full max-w-[var(--about-container)] flex-col gap-4">
          <h1 className="about-display about-fade-in-up max-w-[10ch] text-white">
            About Allys
          </h1>
          <p className="about-headline-sm about-fade-in-up about-stagger-1 max-w-2xl text-[var(--about-surface-container-highest)]">
            Mauritian Property Experts guiding you to unparalleled island living.
          </p>
        </div>
      </section>

      <section className="px-[var(--about-gutter)] py-20 md:py-28">
        <div className="mx-auto grid max-w-[var(--about-container)] grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-20">
          <div className="flex flex-col gap-6">
            <h2 className="about-headline-lg text-[var(--about-on-surface)]">
              Mauritian Property Experts
            </h2>
            <div className="h-1 w-16 rounded-full bg-[var(--about-primary)]" />
            <div className="space-y-5">
              <p className="about-body-lg text-[var(--about-on-surface-variant)]">
                At Allys, we believe that luxury is defined by space,
                tranquility, and seamless integration with nature. For over a
                decade, we have curated the most exclusive portfolio of
                high-net-worth investments across Mauritius, offering a
                concierge-level approach to real estate acquisition.
              </p>
              <p className="about-body-md text-[var(--about-on-surface-variant)]">
                Our institutional trust is built on absolute discretion,
                profound market intelligence, and an unwavering commitment to
                architectural excellence. We do not merely sell properties; we
                connect discerning global investors with legacy assets in one of
                the world's most breathtaking environments.
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
              Our Difference
            </p>
            <h2 className="about-headline-md text-[var(--about-on-surface)]">
              What Sets Us Apart
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
              Leadership
            </p>
            <h2 className="about-headline-lg about-fade-in about-stagger-1 text-[var(--about-on-surface)]">
              Meet Our Leadership
            </h2>
            <div className="space-y-5">
              <div>
                <h3 className="about-headline-md text-[var(--about-on-surface)]">
                  Mr. Bilal Mamodeally
                </h3>
                <p className="about-label mt-2 text-[var(--about-tertiary)]">
                  Managing Director &amp; Founder
                </p>
              </div>
              <p className="about-body-md text-[var(--about-on-surface-variant)]">
                With over two decades of expertise in international real estate
                and wealth management, Bilal founded Allys to address a critical
                gap in the Mauritian market: the need for a truly premium,
                discretion-led brokerage tailored for global elite investors.
              </p>
              <p className="about-body-md text-[var(--about-on-surface-variant)]">
                His vision of Calm Luxury shapes every interaction, ensuring
                clients experience an acquisition process as serene as the
                island itself.
              </p>
            </div>
          </div>

          <div className="order-1 aspect-square w-full overflow-hidden rounded-[2rem] shadow-[0_28px_70px_-38px_rgba(0,0,0,0.38)] md:order-2 md:aspect-[4/5]">
            <img
              alt="Managing Director portrait"
              src={portraitImage}
              className="h-full w-full object-cover object-top about-fade-in"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--about-outline-variant)] bg-[var(--about-surface-container-lowest)] px-[var(--about-gutter)] py-16 md:py-20">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 md:grid-cols-4 md:gap-12">
          <div className="flex flex-col gap-4">
            <div className="about-headline-sm font-bold text-[var(--about-primary)]">
              Allys
            </div>
            <p className="about-body-md max-w-sm text-[var(--about-on-surface-variant)]">
              Curating exceptional living spaces and legacy investments on the
              shores of Mauritius.
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
                    link === "About Us"
                      ? "font-bold text-[var(--about-primary)] opacity-100"
                      : "text-[var(--about-on-surface-variant)] opacity-80"
                  }`}
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-[1280px] border-t border-[var(--about-surface-container-highest)] pt-10">
          <p className="about-body-md text-center text-[var(--about-on-surface-variant)] md:text-left">
            (c) 2024 Allys Luxury Real Estate. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
