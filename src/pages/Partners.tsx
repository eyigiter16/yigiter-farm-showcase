import { Card, CardContent } from "@/components/ui/card";
import { Building2, Handshake } from "lucide-react";

const Partners = () => {
  const partners = [
    {
      name: "Bayer Tarım",
      category: "Zirai İlaç",
      description: "Dünya çapında tanınmış, bitki koruma ürünleri ve tohumculuk alanında lider firma.",
    },
    {
      name: "Syngenta",
      category: "Tohum & İlaç",
      description: "Yenilikçi tarım çözümleri ve sürdürülebilir tarım teknolojileri konusunda global lider.",
    },
    {
      name: "Netafim",
      category: "Sulama Sistemleri",
      description: "Damla sulama teknolojilerinde dünya lideri, su tasarrufu ve verimlilik uzmanı.",
    },
    {
      name: "Yara Türkiye",
      category: "Gübre",
      description: "Mineral gübre üretimi ve tarımsal besin çözümleri konusunda uzman firma.",
    },
    {
      name: "BASF Tarım",
      category: "Zirai İlaç & Tohum",
      description: "Kimya ve tarım sektöründe inovatif çözümler sunan global şirket.",
    },
    {
      name: "Ege Gübre",
      category: "Gübre",
      description: "Türkiye'nin önde gelen gübre üreticilerinden, organik ve kimyevi gübre uzmanı.",
    },
    {
      name: "Toro Tarım",
      category: "Tarım Makinaları",
      description: "Modern tarım makinaları ve ekipmanları konusunda yerli üretici firma.",
    },
    {
      name: "Corteva Agriscience",
      category: "Tohum & Koruma",
      description: "Bitki koruma ürünleri ve tohum teknolojilerinde dünya çapında hizmet veren firma.",
    },
    {
      name: "May Tohum",
      category: "Tohum",
      description: "Yerli ve hibrit tohum üretiminde Türkiye'nin lider firmalarından.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-glow to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary-foreground/10 rounded-full">
              <Handshake className="h-16 w-16" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-up">
            İş Ortaklarımız
          </h1>
          <p className="text-xl opacity-95 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Sektörün lider firmalarıyla iş birliği içinde, kaliteli ürünleri üreticilerimize sunuyoruz.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Yiğiter Tarım Ürünleri olarak, dünya çapında tanınmış ve Türkiye'nin önde gelen 
              tarım firmaları ile iş birliği yapıyoruz. Bu sayede üreticilerimize en kaliteli 
              ürünleri, en uygun fiyatlarla ve zamanında teslim edebiliyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {partners.map((partner, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Building2 className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-sm font-semibold text-primary mb-3">
                    {partner.category}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {partner.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Kaliteli Ürünler İçin Doğru Adres
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            İş ortaklarımızın ürünleri hakkında detaylı bilgi almak ve sipariş vermek için bizimle iletişime geçin.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Partners;
