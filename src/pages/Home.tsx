import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sprout, Handshake, HeadphonesIcon } from "lucide-react";
import heroImage from "@/assets/hero-tractor-wheat.jpg";
import productImage from "@/assets/product-protection.jpg";

const Home = () => {
  const features = [
    {
      icon: Sprout,
      title: "Geniş Ürün Yelpazesi",
      description: "Tarımsal ihtiyaçlarınıza yönelik geniş ürün yelpazesi ve ekipman çeşitliliği sunuyoruz.",
    },
    {
      icon: Handshake,
      title: "Güvenilir Tedarik",
      description: "Zamanında teslimat ve kaliteli ürün garantisi ile güvenilir bir iş ortağıyız.",
    },
    {
      icon: HeadphonesIcon,
      title: "Satış Sonrası Destek",
      description: "Ürünlerimiz için uzman teknik destek ve bakım hizmetleri sağlıyoruz.",
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
              Çiftçiler, bayiler ve üreticiler için kaliteli tarım ürünleri ve ekipmanları sağlıyoruz.
            </p>
            
            <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary-glow text-primary-foreground text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all group"
              >
                <Link to="/is-ortaklarimiz" className="flex items-center gap-2">
                  Ürünlerimizi Keşfedin
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative wheat elements at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background relative">
        {/* Subtle wave decoration at top */}
        <div className="absolute top-0 left-0 right-0 overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-16 text-muted/30"
          >
            <path
              d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 pt-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Yiğiter Tarımsal Ürünleri'ne</span>{" "}
              <span className="text-primary">Hoşgeldiniz</span>
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
                  <div className="mb-6 mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
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

      {/* Product Protection Section */}
      <section className="py-20 bg-muted/20 relative overflow-hidden">
        {/* Decorative wave at top */}
        <div className="absolute top-0 left-0 right-0">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-20 text-background"
          >
            <path
              d="M0,60 Q300,120 600,60 T1200,60 L1200,0 L0,0 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-up">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={productImage}
                  alt="Tarımsal ürün koruma"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
            </div>

            <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Ürünleri Koruma
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dünya standartlarında güvenli tarım ürünleri ile bitkilerinizi koruyun, 
                veriminizi artırın ve kaliteli hasat elde edin.
              </p>
              
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="aspect-video rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img
                    src={heroImage}
                    alt="Tarım makinaları"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-video rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img
                    src={productImage}
                    alt="Tarım ekipmanları"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-video rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-primary/10 flex items-center justify-center">
                  <Sprout className="h-8 w-8 text-primary" />
                </div>
              </div>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="mt-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link to="/tarim-teknolojileri">
                  Daha Fazla Bilgi
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
            className="w-full h-20 text-background rotate-180"
          >
            <path
              d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z"
              fill="currentColor"
            />
          </svg>
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
