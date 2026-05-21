import Image from "next/image";
import Link from "next/link";
import footerLogo from "@/Brand_assets/Footer-logo.png";

const footerGroups = [
  {
    title: "Kurumsal",
    links: [
      { label: "Ana Sayfa", href: "/" },
      { label: "Hakkımızda", href: "/about" },
      { label: "İletişim", href: "/contact" },
      { label: "Projelerimiz", href: "/project" },
    ],
  },
] as const;

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

type Props = {
  activeLabel?: string;
};

export function SiteFooter({ activeLabel = "Hakkımızda" }: Props) {
  return (
    <div className="about-calm">
      <footer className="border-t border-[var(--about-outline-variant)] bg-[var(--about-surface-container-lowest)] px-[var(--about-gutter)] py-16 md:py-20">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
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
                <Link
                  key={link.label}
                  href={link.href}
                  className={`about-body-md transition-opacity duration-300 hover:opacity-100 ${
                    link.label === activeLabel
                      ? "font-bold text-[var(--about-primary)] opacity-100"
                      : "text-[var(--about-on-surface-variant)] opacity-80"
                  }`}
                >
                  {link.label}
                </Link>
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
                rel={item.type === "address" ? "noopener noreferrer" : undefined}
                className="about-body-md inline-flex items-start gap-3 text-[var(--about-on-surface-variant)] opacity-85 transition-opacity duration-300 hover:opacity-100"
                aria-label={`${item.label}: ${item.value}`}
              >
                <ContactIcon type={item.type} />
                <span>{item.value}</span>
              </a>
            ))}
          </div>

        </div>

        <div className="mx-auto mt-16 max-w-[1280px] border-t border-[var(--about-surface-container-highest)] pt-10">
          <p className="about-body-md text-center text-[var(--about-on-surface-variant)] md:text-left">
            © 2026 HKM Mimarlık. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
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
