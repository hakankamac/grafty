import { ContactForm } from "@/components/ContactForm";
import { SiteFooter } from "@/components/SiteFooter";

const contactHeroImage =
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=85";

const mapHref =
  "https://www.google.com/maps/search/?api=1&query=2%20KOZA%20S%20N%20147%2F5%2C%20Gaziosmanpa%C5%9Fa";

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
    href: mapHref,
  },
] as const;

const processSteps = [
  "İlk ihtiyaç analizi",
  "Arsa ve mekan değerlendirmesi",
  "Konsept yön ve teklif süreci",
] as const;

export default function ContactPage() {
  return (
    <main className="contact-calm min-h-screen overflow-hidden">
      <section
        className="contact-photo-hero relative flex min-h-[520px] items-end overflow-hidden px-[var(--contact-gutter)] pb-16 pt-40 md:min-h-[590px] md:pb-24 md:pt-48"
        style={{ backgroundImage: `url(${contactHeroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/60" />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.07] mix-blend-overlay grain"
        />

        <div className="relative z-10 mx-auto w-full max-w-[var(--contact-container)]">
          <p className="contact-label contact-fade-up mb-5 text-[var(--contact-inverse-primary)]">
            İletişim
          </p>
          <h1 className="contact-display contact-fade-up contact-delay-1 max-w-[12ch] text-white title-shadow">
            Projenizi birlikte değerlendirelim.
          </h1>
          <p className="contact-body-lg contact-fade-up contact-delay-2 mt-6 max-w-2xl text-white">
            Modern villa, lüks konut ve iç mekan projeleriniz için ilk mimari
            yönü sakin, net ve uygulanabilir bir görüşmeyle belirleyelim.
          </p>
        </div>
      </section>

      <section className="contact-hero relative px-[var(--contact-gutter)] py-20 md:py-28">
        <div aria-hidden="true" className="contact-grid-pattern" />
        <div aria-hidden="true" className="absolute inset-0 grain opacity-[0.035]" />

        <div className="relative z-10 mx-auto grid max-w-[var(--contact-container)] grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="contact-fade-up flex flex-col gap-7">
            <p className="contact-label text-[var(--contact-primary)]">
              Hızlı Bilgi
            </p>
            <h2 className="contact-headline-lg max-w-xl text-[var(--contact-on-surface)]">
              İlk temas için size en uygun kanalı seçin.
            </h2>
            <p className="contact-body-lg max-w-xl text-[var(--contact-on-surface-variant)]">
              Telefon, e-posta veya konum bağlantısı üzerinden bize
              ulaşabilirsiniz. Formu doldurduğunuzda e-posta uygulamanız
              görüşme talebiyle hazır açılır.
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:max-w-2xl">
              {contactItems.map((item) => (
                <a
                  key={item.type}
                  href={item.href}
                  target={item.type === "address" ? "_blank" : undefined}
                  rel={item.type === "address" ? "noreferrer" : undefined}
                  className="contact-quick-card"
                  aria-label={`${item.label}: ${item.value}`}
                >
                  <ContactIcon type={item.type} />
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-fade-up contact-delay-1">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="px-[var(--contact-gutter)] py-20 md:py-28">
        <div className="mx-auto grid max-w-[var(--contact-container)] grid-cols-1 gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-stretch">
          <article className="contact-info-panel">
            <p className="contact-label text-[var(--contact-tertiary)]">
              Süreç
            </p>
            <h2 className="contact-headline-lg mt-4 text-[var(--contact-on-surface)]">
              İlk görüşmede net bir başlangıç haritası çıkarırız.
            </h2>
            <p className="contact-body-md mt-5 text-[var(--contact-on-surface-variant)]">
              İhtiyacınızı, arsa veya mekan verilerinizi ve hedeflediğiniz
              yaşam senaryosunu birlikte okuruz. Ardından proje kapsamını,
              öncelikleri ve sonraki adımı netleştiririz.
            </p>

            <ol className="mt-10 grid grid-cols-1 gap-4">
              {processSteps.map((step, index) => (
                <li key={step} className="contact-step">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {step}
                </li>
              ))}
            </ol>
          </article>

          <a
            href={mapHref}
            target="_blank"
            rel="noreferrer"
            className="contact-map-card group"
            aria-label="Google Maps üzerinde HKM Mimarlık konumunu aç"
          >
            <div>
              <p className="contact-label text-[var(--contact-inverse-primary)]">
                Konum
              </p>
              <h2 className="contact-headline-lg mt-4 text-white">
                Gaziosmanpaşa ofisimize yol tarifi alın.
              </h2>
              <p className="contact-body-md mt-5 max-w-xl text-white/72">
                2 KOZA S N 147/5, Gaziosmanpaşa adresi için Google Maps
                bağlantısı yeni sekmede açılır.
              </p>
            </div>

            <span className="contact-map-action">
              Google Maps'te Aç
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </span>
          </a>
        </div>
      </section>

      <SiteFooter activeLabel="İletişim" />
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
      className="h-5 w-5 shrink-0"
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
