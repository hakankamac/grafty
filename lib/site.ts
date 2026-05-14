import home1 from "@/Brand_assets/Home Pictures/home-1.jpg";
import home2 from "@/Brand_assets/Home Pictures/home-2.jpg";
import home3 from "@/Brand_assets/Home Pictures/home-3.jpg";
import home4 from "@/Brand_assets/Home Pictures/home-4.jpg";

export const NAV = [
  {
    label: "Ana Sayfa",
    href: "/",
    preview:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    label: "Hakkımızda",
    href: "/about",
    preview:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
  },
  {
    label: "Projelerimiz",
    href: "/project",
    preview:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80",
  },
] as const;

export const PAGE_TRANSITIONS = [
  ...NAV,
  {
    label: "İletişim",
    href: "/contact",
  },
] as const;

export const SLIDES = [
  {
    src: home1,
    alt: "Modern white villa with infinity pool",
    line1: "Modern Villa",
    line2: "Tasarımı.",
    subtitle: "HKM Mimarlık, modern villa ve lüks konut projelerinde zamansız yaşam alanları tasarlar.",
  },
  {
    src: home2,
    alt: "Glass and timber luxury home at dusk",
    line1: "İç Mekan",
    line2: "Tasarımı.",
    subtitle: "Mekan akışı, malzeme ve ışığı dengeli bir mimari dille buluşturuyoruz.",
  },
  {
    src: home3,
    alt: "Concrete villa with cantilevered roof",
    line1: "Mimari Proje",
    line2: "Hizmetleri.",
    subtitle: "Konut, villa ve iç mekan projeleri için uygulanabilir tasarım çözümleri üretiyoruz.",
  },
  {
    src: home4,
    alt: "Warm modern residence with pool",
    line1: "Lüks Konut",
    line2: "Projeleri.",
    subtitle: "İhtiyaçlarınıza özel, estetik ve işlevsel yaşam alanları geliştiriyoruz.",
  },
] as const;

export const EASING = [0.22, 1, 0.36, 1] as const;
