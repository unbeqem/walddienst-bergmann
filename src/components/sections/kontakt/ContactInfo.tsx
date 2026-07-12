import { MapPin, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/content/site";

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-6 text-linen-50">
      <h3 className="font-display text-2xl">Lassen Sie uns gemeinsam was bewegen</h3>

      <div className="flex items-start gap-3">
        <MapPin size={22} className="mt-0.5 shrink-0 text-timber-300" />
        <p>
          {siteConfig.address.street}
          <br />
          {siteConfig.address.city}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Mail size={22} className="shrink-0 text-timber-300" />
        <a href={`mailto:${siteConfig.email}`} className="hover:underline">
          {siteConfig.email}
        </a>
      </div>

      <div className="flex items-center gap-3">
        <Phone size={22} className="shrink-0 text-timber-300" />
        <a href={siteConfig.phoneHref} className="hover:underline">
          {siteConfig.phone}
        </a>
      </div>
    </div>
  );
}
