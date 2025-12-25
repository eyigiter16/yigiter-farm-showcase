import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Leaf, Flower2, Droplets, Wheat, PawPrint, CheckCircle } from "lucide-react";
import handshakeImage from "@/assets/icon-handshake-new.png";

const Partners = () => {
  const partnerGroups = [
    {
      title: "Zirai İlaç",
      subtitle: "Bitki Koruma Ürünleri",
      icon: Shield,
      description: "Bitki sağlığı ve verim artışına yönelik, ruhsatlı ve güvenilir ürünler sunan yerli ve uluslararası firmalarla çalışıyoruz.",
      companies: ["Adama", "Syngenta", "Bayer", "BASF", "Corteva", "Doğal Kimya", "Ferbis", "UPL", "FMC", "Hektaş", "Safa Tarım", "Sumiagro", "Sunset", "Agrobest"],
    },
    {
      title: "Tohum",
      subtitle: "Tarla Bitkileri",
      icon: Wheat,
      description: "Bölge iklim ve toprak yapısına uygun, sertifikalı ve yüksek verimli tarla bitkileri tohumları tedarik ediyoruz.",
      companies: ["LG", "Pioneer", "Tasaco", "Ekmen Tarım", "Yıldız Tohum", "Agromar", "Dekalb", "Hayat Tohum", "Syngenta", "Tekcan Tohumculuk", "2A Tohumculuk", "Alfa Tohum", "Trakya Tarım ve Veterinerlik", "Huntas", "Doruk Tohumculuk"],
    },
    {
      title: "Tohum",
      subtitle: "Bahçe & Sera",
      icon: Flower2,
      description: "Açık alan, bahçe ve sera üretimine uygun; kaliteli ve yüksek performanslı sebze tohumları sunuyoruz.",
      companies: ["Agromar", "Seminis", "Bursa Tohumculuk", "İstanbul Tohumculuk", "Arzuman", "Syngenta", "Naz Tohum", "Altın Tohumculuk", "Zeta Tohumculuk", "Küçükçiftlik Tohumculuk", "Asgen Sebze Tohumları", "Burgen Tohum", "Balıkesir Tohum", "Fito", "Sakata", "May Tohumculuk", "Dr Tohumculuk"],
    },
    {
      title: "Gübre",
      subtitle: "Mineral & Organomineral",
      icon: Droplets,
      description: "Bitkisel üretimde verim ve kaliteyi artırmaya yönelik mineral, organomineral ve özel amaçlı gübre çeşitleri sunuyoruz.",
      companies: ["Gemlik", "İGSAŞ", "Toros", "Seleda", "Dr. Tarsa", "Bontera", "Biosen", "Altıntar", "Milagro", "Hekagro", "Şahtar Tarım", "Everris", "İsaş Doğa Bilimleri", "Sofbey SA"],
    },
    {
      title: "Yem",
      subtitle: "Hayvancılık Ürünleri",
      icon: Leaf,
      description: "Hayvancılık faaliyetlerinde sağlıklı gelişim ve verimlilik için kaliteli yem ürünleri tedarik ediyoruz.",
      companies: ["Optima", "Özlem Yem", "Maysan"],
    },
    {
      title: "Mama",
      subtitle: "Evcil Hayvan Ürünleri",
      icon: PawPrint,
      description: "Kedi ve köpekler için güvenilir ve besleyici mama ürünleri sunuyoruz.",
      companies: ["Lider Pet Food"],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-glow to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary-foreground/20 rounded-2xl">
              <img src={handshakeImage} alt="İş Ortaklarımız" className="h-20 w-auto" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-up">
            İş Ortaklarımız
          </h1>
          <p className="text-xl opacity-95 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Sektörün kanıtlanmış markaları, sahada test edilmiş ürünler.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-muted/30 rounded-2xl p-8 border border-border">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Neden Bu Markalarla Çalışıyoruz?
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Ürün seçimimizi rastgele yapmıyoruz. Tedarikçilerimizi bölge koşullarına 
                    uygunluk, sahada kanıtlanmış performans ve üreticilerimizden aldığımız 
                    geri bildirimlere göre belirliyoruz.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Listede yer alan her firma, yıllardır Trakya çiftçisinin güvenini kazanmış 
                    ve sonuçlarıyla kendini kanıtlamış markalardır. Bizim için önemli olan 
                    tek kriter: üreticinin tarlasında işe yaraması.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Groups */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            {partnerGroups.map((group, index) => {
              const IconComponent = group.icon;
              return (
                <Card
                  key={index}
                  className="border-2 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-foreground">
                          {group.title}
                        </CardTitle>
                        <p className="text-sm font-medium text-primary">
                          {group.subtitle}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {group.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.companies.map((company, companyIndex) => (
                        <span
                          key={companyIndex}
                          className="px-3 py-1.5 bg-background border border-border rounded-full text-sm font-medium text-foreground hover:bg-primary/5 transition-colors"
                        >
                          {company}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Aradığınız Markayı Bulamadınız mı?
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Listede olmayan bir marka veya ürün arıyorsanız bize bildirin. 
            Tedarik ağımız geniş, ihtiyacınıza çözüm buluruz.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Partners;