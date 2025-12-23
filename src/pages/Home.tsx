import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, HeadphonesIcon } from "lucide-react";
import heroImage from "@/assets/hero-tractor.png";
import cropsImage from "@/assets/crops-field.png";
import cattleImage from "@/assets/cattle-feeding.png";
import handshakeIcon from "@/assets/icon-handshake.png";

const Home = () => {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 80 80" className="w-16 h-16">
          <circle cx="40" cy="60" r="18" fill="hsl(var(--primary))" opacity="0.15"/>
          <path d="M20 65 Q30 55 40 58 Q50 61 60 55 L60 72 L20 72 Z" fill="hsl(var(--primary))" opacity="0.3"/>
          <g fill="hsl(var(--accent))">
            <ellipse cx="30" cy="28" rx="3" ry="7" transform="rotate(-15 30 28)" />
            <ellipse cx="27" cy="34" rx="2.5" ry="5.5" transform="rotate(-25 27 34)" />
            <ellipse cx="33" cy="34" rx="2.5" ry="5.5" transform="rotate(5 33 34)" />
            <rect x="29" y="32" width="2" height="20" rx="1" fill="hsl(var(--primary))"/>
          </g>
          <g fill="hsl(var(--accent))">
            <ellipse cx="50" cy="28" rx="3" ry="7" transform="rotate(15 50 28)" />
            <ellipse cx="53" cy="34" rx="2.5" ry="5.5" transform="rotate(25 53 34)" />
            <ellipse cx="47" cy="34" rx="2.5" ry="5.5" transform="rotate(-5 47 34)" />
            <rect x="49" y="32" width="2" height="20" rx="1" fill="hsl(var(--primary))"/>
          </g>
          <circle cx="40" cy="18" r="8" fill="hsl(var(--accent))" opacity="0.3"/>
        </svg>
      ),
      title: "Geniş Ürün Yelpazesi",
      description: "Tarım ve hayvancılık faaliyetleriniz için tohumdan gübreye, yemden ekipmana taze geniş bir ürün yelpazesi sunuyoruz.",
    },
    {
      iconImage: handshakeIcon,
      title: "Güvenilir Tedarik",
      description: "Zamanında teslimat, kaliteli ürünler ve sürdürülebilir tedarik anlayışıyla uzun vadeli bir iş ortağı olmayı hedefliyoruz.",
    },
    {
      icon: <HeadphonesIcon className="w-12 h-12 text-primary" />,
      title: "Satış Sonrası Destek",
      description: "Satış sonrası süreçte teknik destek ve danışmanlık hizmetleriyle her zaman yanınızdayız.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />
        
        {/* Gradient Overlay - Left side darker for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up">
              <span className="text-primary">Yiğiter</span>{" "}
              <span className="text-foreground">Tarımsal</span>
              <br />
              <span className="text-foreground">Ürünleri'ne</span>{" "}
              <span className="text-primary">Hoşgeldiniz</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Çiftçiler, bayiler ve üreticiler için <strong className="text-foreground">tarımsal ürünler, hayvan yemleri ve mama çözümleri</strong> sunuyoruz.
            </p>
            
            <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary-glow text-primary-foreground text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all group"
              >
                <Link to="/urunler" className="flex items-center gap-2">
                  Ürünlerimizi Keşfedin
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-24 text-background"
          >
            <path
              d="M0,40 Q300,100 600,60 T1200,80 L1200,120 L0,120 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Tarım ve Hayvancılıkta</span>{" "}
              <span className="text-primary">Güvenilir Çözümler</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 mx-auto w-24 h-24 flex items-center justify-center">
                    {feature.iconImage ? (
                      <img 
                        src={feature.iconImage} 
                        alt={feature.title}
                        className="w-20 h-20 object-contain"
                      />
                    ) : (
                      feature.icon
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-muted/20 relative overflow-hidden">
        {/* Decorative wave at top */}
        <div className="absolute top-0 left-0 right-0">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-16 text-background"
          >
            <path
              d="M0,60 Q300,20 600,60 T1200,40 L1200,0 L0,0 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 pt-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Tarım ve Hayvancılıkta</span>{" "}
              <span className="text-primary">Güvenilir Çözümler</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Yiğiter Tarımsal Ürünleri olarak tarım ve hayvancılık sektörünün ihtiyaçlarına yönelik kaliteli ürünler sunuyor, üretimin her aşamasında müşterilerimize destek oluyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Crops Card */}
            <div className="rounded-2xl overflow-hidden shadow-xl group">
              <div className="relative h-72 overflow-hidden">
                <img
                  src={cropsImage}
                  alt="Tarımsal Ürünler"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-background">
                  <h3 className="text-2xl font-bold">Tarımsal Ürünler</h3>
                  <p className="opacity-90">Tohum, gübre ve ilaç çözümleri</p>
                </div>
              </div>
            </div>

            {/* Cattle Card */}
            <div className="rounded-2xl overflow-hidden shadow-xl group">
              <div className="relative h-72 overflow-hidden">
                <img
                  src={cattleImage}
                  alt="Hayvancılık Ürünleri"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-background">
                  <h3 className="text-2xl font-bold">Hayvancılık Ürünleri</h3>
                  <p className="opacity-90">Kaliteli yem ve bakım ürünleri</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tarımda Başarıya Birlikte Ulaşalım
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Ürünlerimiz ve hizmetlerimiz hakkında daha fazla bilgi almak için bizimle iletişime geçin.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full"
          >
            <Link to="/iletisim">İletişime Geçin</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
