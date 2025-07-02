export type Category = {
  icon: string;
  label: string;
  slug: string;
};

export const categories: Category[] = [
  { icon: "solar:bus-linear", label: "Transportasi", slug: "jasa-transportasi" },
  { icon: "solar:donut-bold", label: "Makanan", slug: "makanan-minuman" },
  { icon: "solar:scooter-bold", label: "Kurir", slug: "kurir" },
  { icon: "solar:cup-paper-bold", label: "Suvenir", slug: "souvenir" },
  { icon: "solar:armchair-2-bold", label: "Furnitur", slug: "furniture" },
  { icon: "solar:ruler-cross-pen-bold", label: "Alat Tulis Kantor", slug: "alat-tulis-kantor" },
  { icon: "solar:thermometer-bold", label: "Kesehatan", slug: "alat-kesehatan" },
  { icon: "solar:t-shirt-bold", label: "Fashion", slug: "fashion" },
  { icon: "solar:sledgehammer-bold", label: "Perkakas", slug: "perkakas" },
  { icon: "solar:pallete-2-bold", label: "Jasa Kreatif", slug: "jasa-kreatif-kebutuhan-kantor" },
  { icon: "solar:suitcase-tag-bold", label: "Akomodasi", slug: "akomodasi" },
  { icon: "solar:lightbulb-bolt-bold", label: "Elektronik", slug: "peralatan-elektronik" },
  {
    icon: "solar:paint-roller-bold",
    label: "Sewa Peralatan & Ruangan",
    slug: "sewa-peralatan-ruangan",
  },
  { icon: "solar:leaf-bold", label: "Pertanian & Peternakan", slug: "pertanian-peternakan" },
];

export const findCategoryBySlug = (slug: Category["slug"]) => {
  return categories.find((x) => x.slug == slug);
};
