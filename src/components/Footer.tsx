import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import logoImage from "@/assets/logo-yigiter.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="bg-background/10 p-3 rounded-lg inline-block">
              <img
                src={logoImage}
                alt="Yiğiter Tarımsal Ürünleri"
                className="h-12 w-auto object-contain"
              />
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
