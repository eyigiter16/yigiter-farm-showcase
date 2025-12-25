import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MessageCircle, Users, Truck, HeadphonesIcon } from "lucide-react";
import heroImage from "@/assets/tractor-spraying.png";
import cropsImage from "@/assets/crops-field-new.png";
import cattleImage from "@/assets/cattle-feeding-new.png";

const Home = () => {
  const whyChooseUs = [
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "25+ Yıllık Deneyim",
      description: "Trakya bölgesinde çeyrek asırlık tarım tecrübesiyle üreticilere hizmet veriyoruz.",
    },
    {
      icon: <Truck className="w-10 h-10 text-primary" />,
      title: "Hızlı ve Güvenilir Tedarik",
      description: "Syngenta, Bayer, BASF gibi kanıtlanmış markalardan stoklu ürün tedariği sağlıyoruz.",
    },
    {
      icon: <HeadphonesIcon className="w-10 h-10 text-primary" />,
      title: "Satış Sonrası Destek",
      description: "Tarla ziyaretleri ve teknik danışmanlıkla hasat sonuna kadar yanınızdayız.",
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
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up">
              <span className="text-foreground">Trakya'nın Güvenilir</span>
              <br />
              <span className="text-primary">Tarım Tedarikçisi</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Tekirdağ merkezli olarak <strong className="text-foreground">gübre, ilaç, tohum ve yem</strong> tedarikinde üreticilerin yanındayız.
            </p>
            
            <p className="text-base text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              Sektörün güvenilir markalarıyla çalışıyor, hızlı teslimat ve teknik destek sunuyoruz.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button
                asChild
                size="lg"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all group"
              >
                <a 
                  href="https://wa.me/905448474121?text=Merhaba,%20ürünleriniz%20hakkında%20bilgi%20almak%20istiyorum." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp ile Ulaşın
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 rounded-full border-2"
              >
                <Link to="/urunler" className="flex items-center gap-2">
                  Ürünleri İncele
                  <ArrowRight className="h-5 w-5" />
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Neden</span>{" "}
              <span className="text-primary">Yiğiter Tarım?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trakya'da üreticilerin güvendiği, sahada aktif bir tarım tedarikçisiyiz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 mx-auto w-20 h-20 flex items-center justify-center bg-primary/10 rounded-full">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
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
              <span className="text-foreground">Sunduğumuz</span>{" "}
              <span className="text-primary">Ürün Grupları</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tarla bitkilerinden hayvancılığa kadar geniş ürün yelpazemizle üretim sürecinizin her aşamasında yanınızdayız.
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
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-background">
                  <h3 className="text-2xl font-bold mb-2">Tarımsal Ürünler</h3>
                  <p className="opacity-90">Gübre, zirai ilaç ve sertifikalı tohumlar</p>
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
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-background">
                  <h3 className="text-2xl font-bold mb-2">Hayvancılık & Mama</h3>
                  <p className="opacity-90">Büyükbaş, küçükbaş yemleri ve evcil hayvan mamaları</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-6 rounded-full"
            >
              <Link to="/urunler" className="flex items-center gap-2">
                Tüm Ürünleri Görüntüle
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ürün ve Fiyat Bilgisi İçin Hemen Arayın
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Stok durumu, fiyat ve teslimat hakkında bilgi almak için bize ulaşın. Trakya genelinde hızlı teslimat yapıyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-lg px-8 py-6 rounded-full"
            >
              <a 
                href="https://wa.me/905448474121" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full"
            >
              <a href="tel:+905448474121">
                0544 847 41 21
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;