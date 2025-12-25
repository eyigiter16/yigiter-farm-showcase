import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Cpu, Smartphone, Satellite, Wind, Thermometer, Sprout, Tractor } from "lucide-react";
import technologyHero from "@/assets/tractor-spraying.png";

const Technologies = () => {
  const technologies = [
    {
      icon: Droplets,
      title: "Damla Sulama Sistemleri",
      description: "Modern damla sulama teknolojileri ile su tasarrufu yaparak verimliliği artırın. Otomatik kontrol sistemleri ve sensörlerle tam kontrol.",
      features: ["Su tasarrufu %70'e kadar", "Otomatik sulama kontrolü", "Gübre karıştırma sistemleri", "Akıllı sensör entegrasyonu"],
    },
    {
      icon: Cpu,
      title: "Akıllı Tarım Sistemleri",
      description: "IoT teknolojileri ile tarlalarınızı uzaktan izleyin ve yönetin. Gerçek zamanlı veri analizi ile bilinçli kararlar alın.",
      features: ["Gerçek zamanlı izleme", "Bulut tabanlı veri analizi", "Mobil uygulama desteği", "Otomatik raporlama"],
    },
    {
      icon: Smartphone,
      title: "Mobil Tarım Uygulamaları",
      description: "Akıllı telefon ve tablet uygulamaları ile tarım operasyonlarınızı her yerden yönetin.",
      features: ["Ekim takvimleri", "İlaçlama planlama", "Hasat optimizasyonu", "Maliyet hesaplama"],
    },
    {
      icon: Satellite,
      title: "Uydu Görüntüleme",
      description: "Uydu teknolojisi ile tarlanızın sağlığını uzaydan izleyin. Bitki sağlığı haritaları ve verimlilik analizi.",
      features: ["NDVI analizi", "Bitki stres tespiti", "Verimlilik haritaları", "Düzenli raporlama"],
    },
    {
      icon: Wind,
      title: "Hava Durumu İstasyonları",
      description: "Hassas hava durumu ölçümleri ile doğru zamanda doğru kararlar alın. Bölgesel tahmin ve uyarılar.",
      features: ["Gerçek zamanlı ölçüm", "Yağış tahmini", "Don uyarısı", "Rüzgar ve nem takibi"],
    },
    {
      icon: Thermometer,
      title: "Toprak Sensörleri",
      description: "Toprak nem, sıcaklık ve besin değerlerini sürekli izleyin. Optimum yetiştirme koşullarını sağlayın.",
      features: ["Nem ölçümü", "pH analizi", "Besin analizi", "Tuzluluk kontrolü"],
    },
    {
      icon: Sprout,
      title: "Hassas Tarım Teknolojileri",
      description: "GPS ve sensör teknolojileri ile her metrekareye özel bakım. Minimum girdi ile maksimum verim.",
      features: ["GPS destekli sürüm", "Değişken oranlı uygulama", "Ürün haritalaması", "Verim takibi"],
    },
    {
      icon: Tractor,
      title: "Otonom Tarım Makinaları",
      description: "Sürücüsüz traktörler ve akıllı ekipmanlarla tarım operasyonlarınızı otomatikleştirin.",
      features: ["Otonom sürüş", "Hassas konumlandırma", "Gece operasyonları", "Yakıt tasarrufu"],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${technologyHero})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/85" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-up">
            Tarım Teknolojileri
          </h1>
          <p className="text-xl opacity-95 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Geleceğin tarımını bugünden deneyimleyin. Modern teknolojilerle verimliliğinizi artırın.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Yiğiter Tarım Ürünleri olarak, tarım sektöründeki en son teknolojileri takip ediyor 
              ve üreticilerimize sunuyoruz. Akıllı tarım sistemleri, hassas tarım teknolojileri ve 
              otomasyon çözümleri ile tarım operasyonlarınızı optimize edin, maliyetleri düşürün 
              ve verimliliği artırın.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {technologies.map((tech, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex-shrink-0">
                      <tech.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {tech.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 pl-16">
                    <h4 className="text-sm font-semibold text-primary mb-3">
                      Özellikler:
                    </h4>
                    <ul className="space-y-2">
                      {tech.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Teknolojinin Faydaları
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">%40</div>
              <p className="text-lg opacity-90">Maliyet Düşüşü</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">%60</div>
              <p className="text-lg opacity-90">Verim Artışı</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">%70</div>
              <p className="text-lg opacity-90">Su Tasarrufu</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Teknoloji Danışmanlığı Alın
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Tarım teknolojileri hakkında detaylı bilgi almak ve işletmeniz için en uygun çözümleri 
            keşfetmek için uzman ekibimizle görüşün.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Technologies;
