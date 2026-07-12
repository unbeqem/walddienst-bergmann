import { siteConfig } from "@/content/site";

const BASE_URL = "https://walddienst-bergmann.de";

export function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    image: `${BASE_URL}/icon.png`,
    url: BASE_URL,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: "Neukirch",
      postalCode: "01936",
      addressCountry: "DE",
    },
    founder: {
      "@type": "Person",
      name: siteConfig.founder,
    },
    areaServed: "Sachsen",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
