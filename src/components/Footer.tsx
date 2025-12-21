import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              {/* Footer logo variant - inverted colors */}
              <svg
                width={40}
                height={40}
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <circle cx="32" cy="32" r="30" className="fill-primary-foreground/10" />
                <path d="M32 52V36" className="stroke-primary-foreground" strokeWidth="4" strokeLinecap="round" />
                <path d="M32 36L18 18C16 15 18 12 22 14C26 16 30 24 32 36" className="fill-primary-foreground" />
                <path d="M32 36L46 18C48 15 46 12 42 14C38 16 34 24 32 36" className="fill-primary-foreground" />
                <path d="M32 14C32 14 36 10 40 12C36 14 34 18 32 22C30 18 28 14 24 12C28 10 32 14 32 14Z" className="fill-accent" />
                <path d="M12 44C16 42 24 43 32 42C40 41 48 42 52 44" className="stroke-primary-foreground/30" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <div>
                <h3 className="text-xl font-bold">Yiğiter</h3>
                <p className="text-sm opacity-90">Tarım Ürünleri</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Tarımın güçlü yarını için, bizimle verimliliği keşfedin. Modern tarım teknolojileri ve kaliteli ürünlerle hizmetinizdeyiz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Ana Sayfa" },
                { to: "/hakkimizda", label: "Hakkımızda" },
                { to: "/ekibimiz", label: "Ekibimiz" },
                { to: "/is-ortaklarimiz", label: "İş Ortaklarımız" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm opacity-80 hover:opacity-100 hover:underline transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hizmetlerimiz</h4>
            <ul className="space-y-2">
              {[
                "Zirai İlaç",
                "Gübre Çözümleri",
                "Tohum",
                "Damla Sulama",
                "Tarım Teknolojileri",
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm opacity-80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm opacity-80">+90 XXX XXX XX XX</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm opacity-80">info@yigitertarim.com.tr</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm opacity-80">Adres Bilgisi, Şehir, Türkiye</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Yiğiter Tarım Ürünleri. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
