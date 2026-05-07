export type ProjectItem = {
  title: string;
  description: string;
  location: string;
  year: string;
  service: string;
  metrics: string[];
  image: string;
  featured?: boolean;
};

export const PROJECTS: ProjectItem[] = [
  {
    title: "Yalikavak Villa",
    description:
      "Ege iklimine açılan, gölge-ışık dengesi ve teras yaşamı üzerine kurulu modern konut kurgusu.",
    location: "Bodrum, Muğla",
    year: "2026",
    service: "Mimari Proje",
    metrics: ["580 m2", "3 kat", "Deniz manzarası"],
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=82",
    featured: true,
  },
  {
    title: "Koza Residence",
    description:
      "Kompakt parselde genişlik hissini koruyan, iç-dış mekan geçişlerini güçlendiren aile konutu.",
    location: "Gaziosmanpaşa, İstanbul",
    year: "2025",
    service: "Konut Tasarımı",
    metrics: ["420 m2", "Avlu kurgusu", "Doğal ışık"],
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=82",
  },
  {
    title: "Koru Evi",
    description:
      "Yeşil dokuya saygılı yerleşim, sakin cephe ritmi ve mahremiyet odaklı planlama yaklaşımı.",
    location: "Şile, İstanbul",
    year: "2025",
    service: "Mimari + Peyzaj",
    metrics: ["760 m2 arsa", "Tek kat", "Bahçe yaşamı"],
    image:
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1800&q=82",
  },
  {
    title: "Liman Loft",
    description:
      "Şehir içinde yalın malzeme paleti, akıcı yaşam alanı ve rafine iç mekan bütünlüğü.",
    location: "İzmir",
    year: "2024",
    service: "İç Mekan Tasarımı",
    metrics: ["210 m2", "Açık plan", "Özel üretim"],
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=82",
  },
  {
    title: "Teras House",
    description:
      "Eğimli arazide kot farkını avantaja çeviren, panoramik yaşam teraslarıyla tasarlanan villa.",
    location: "Kaş, Antalya",
    year: "2024",
    service: "3D Modelleme",
    metrics: ["490 m2", "Arazi uyumu", "Teras sistemi"],
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1800&q=82",
  },
  {
    title: "Atolye Ev",
    description:
      "Yaşam, üretim ve dinlenme senaryolarını tek sakin mimari çizgide bir araya getiren özel konut.",
    location: "Urla, İzmir",
    year: "2023",
    service: "Konsept Proje",
    metrics: ["350 m2", "Hibrit yaşam", "Avlu"],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=82",
  },
];
