export type Marketplace = {
  meta: {
    auth: string;
    clientId: string;
    clientSecret: string;
  };
  icon: string;
  slug: string;
  name: string;
  link: (category: string, token?: string) => string;
};

export const marketplaces: Marketplace[] = [
  {
    meta: {
      auth: "https://bela-dev.ayoomall.com/lkpp/sso-login",
      clientId: "FRFKM6GNI5R3V",
      clientSecret: "MYDLI0R9SIGGRBS8A7EWPJZ6WFBXT",
    },
    icon: "https://media-bela-rajastore.airmasgroup.co.id/logo/sVAxed8qnoAPcyilvvhV8UTcYdGUd3kLJMdoBK9t.png",
    slug: "ayoomall-bela-dev",
    name: "AyooMall Bela",
    link: (cat: string, token?: string) =>
      `https://bela-dev.ayoomall.com/category/${cat}?nonce=${token}`,
  },
  {
    meta: {
      auth: "https://dev.ayoomall.com/lkpp/login",
      clientId: "FRFKM6GNI5R3V",
      clientSecret: "MYDLI0R9SIGGRBS8A7EWPJZ6WFBXT",
    },
    icon: "https://media-bela-rajastore.airmasgroup.co.id/logo/sVAxed8qnoAPcyilvvhV8UTcYdGUd3kLJMdoBK9t.png",
    slug: "ayoomall-dev",
    name: "AyooMall",
    link: (cat: string, token?: string) =>
      `https://dev.ayoomall.com/category/${cat}?nonce=${token}`,
  },
];

export const findMarketplaceBySlug = (slug: Marketplace["slug"]) => {
  return marketplaces.find((x) => x.slug == slug);
};
