import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sprout, Droplets, ShieldCheck, Users, Lightbulb, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";

const Home = () => {
  const services = [
    {
      icon: Sprout,
      title: "Zirai İlaç",
      description: "Bitki koruma ürünleri ve modern zirai ilaç çözümleri ile ekinlerinizi koruyun.",
    },
    {
      icon: Droplets,
      title: "Gübre Çözümleri",
      description: "Kimyevi ve organomineral gübreler ile toprak verimliliğini artırın.",
    },
    {
      icon: ShieldCheck,
      title: "Kaliteli Tohum",
      description: "Yüksek verimli, sertifikalı tohum çeşitleri ile üretiminizi garantiye alın.",
    },
    {
      icon: Droplets,
      title: "Damla Sulama",
      description: "Modern sulama sistemleri ile su tasarrufu yapın ve verimliliği artırın.",
    },
    {
      icon: Lightbulb,
      title: "Tarım Teknolojileri",
      description: "Akıllı tarım teknolojileri ve yenilikçi çözümlerle geleceğe hazırlanın.",
    },
    {
      icon: Users,
      title: "Teknik Destek",
      description: "Uzman kadromuz ile 7/24 teknik destek ve danışmanlık hizmeti.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-secondary/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
            Tarımın Güçlü Yarını İçin
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Bizimle verimliliği keşfedin. Modern tarım teknolojileri ve kaliteli ürünlerle yanınızdayız.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            >
              <Link to="/iletisim">Bize Ulaşın</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6"
            >
              <Link to="/hakkimizda">Daha Fazla Bilgi</Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary-foreground rounded-full animate-float" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Hizmetlerimiz
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Yücel Tarım, güçlü mühendis kadrosu ve bilinçli yöneticileri ile üreticilere kapsamlı hizmet sunmaktadır.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Yiğiter Tarım Ürünleri
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Yiğiter Tarım, güçlü mühendis kadrosu, bilinçli yöneticileri ve saha ekibi ile, 
                bölgesindeki tüm üreticilere hizmet götürmeyi amaçlayan bir zirai işletmedir.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Gerek teknik destek, gerekse üreticilerimizin ihtiyacı olan zirai ilaç, gübre, 
                damla sulama sistemleri gibi ürünlerin tedariğini düzenli olarak gerçekleştirip, 
                üreticilerimizin kapılarına kadar teslim etme sürecini yönetmektedir.
              </p>
              <div className="flex gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary-glow">
                  <Link to="/hakkimizda">Hakkımızda</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/ekibimiz">Ekibimiz</Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-fade-in">
              <Card className="bg-primary text-primary-foreground p-8 text-center">
                <TrendingUp className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-4xl font-bold mb-2">15+</h3>
                <p className="text-sm opacity-90">Yıllık Deneyim</p>
              </Card>
              <Card className="bg-secondary text-secondary-foreground p-8 text-center">
                <Users className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-4xl font-bold mb-2">1000+</h3>
                <p className="text-sm opacity-90">Mutlu Üretici</p>
              </Card>
              <Card className="bg-accent text-accent-foreground p-8 text-center">
                <Sprout className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-4xl font-bold mb-2">500+</h3>
                <p className="text-sm opacity-90">Farklı Ürün</p>
              </Card>
              <Card className="bg-muted p-8 text-center">
                <ShieldCheck className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-4xl font-bold mb-2 text-foreground">7/24</h3>
                <p className="text-sm text-muted-foreground">Teknik Destek</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tarımda Başarıya Birlikte Ulaşalım
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Ürünlerimiz ve hizmetlerimiz hakkında daha fazla bilgi almak için bizimle iletişime geçin.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6"
          >
            <Link to="/iletisim">İletişime Geçin</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
