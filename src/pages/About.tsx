import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-glow to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-up">
            Hakkımızda
          </h1>
          <p className="text-xl opacity-95 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Yiğiter Tarım Ürünleri olarak, modern tarım teknolojileri ve kaliteli hizmetlerle üreticilerin yanındayız.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
              Firmamız
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                Yiğiter Tarım Ürünleri, güçlü mühendis kadrosu, bilinçli yöneticileri ve 
                deneyimli saha ekibi ile bölgesindeki tüm üreticilere hizmet götürmeyi 
                amaçlayan bir zirai işletmedir.
              </p>
              <p className="text-lg leading-relaxed">
                Gerek teknik destek, gerekse üreticilerimizin ihtiyacı olan zirai ilaç, 
                gübre, damla sulama sistemleri gibi ürünlerin tedariğini düzenli olarak 
                gerçekleştirip, üreticilerimizin kapılarına kadar teslim etme sürecini 
                yönetmektedir.
              </p>
              <p className="text-lg leading-relaxed">
                Yiğiter Tarım, zirai ilaç, gübre, tohum, damla sulama sistemleri, tarım 
                makinaları gibi üreticilerimizin ihtiyaç duyduğu tüm ürünleri her dönem 
                stoklarında bulundurmaktadır. Müşteri memnuniyeti odaklı çalışma anlayışımız 
                ve kaliteli hizmet sunma ilkemiz ile sektörde güvenilir bir marka olmayı 
                hedefliyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6 p-4 bg-primary/10 rounded-lg w-fit">
                  <Target className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Misyonumuz
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Tarım sektöründe faaliyet gösteren üreticilere, en kaliteli ürünleri 
                  en uygun fiyatlarla sunarak, modern tarım teknolojileri ve uzman kadromuzla 
                  verimliliklerini artırmalarına katkı sağlamak.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6 p-4 bg-secondary/10 rounded-lg w-fit">
                  <Eye className="h-12 w-12 text-secondary" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Vizyonumuz
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Türkiye tarımının gelişimine katkı sağlayan, yenilikçi çözümler sunan, 
                  güvenilir ve tercih edilen bir marka olmak. Sürdürülebilir tarım 
                  uygulamaları ile geleceğe değer katmak.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Değerlerimiz
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-4 p-3 bg-accent/10 rounded-full w-fit mx-auto">
                  <Award className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Kalite
                </h3>
                <p className="text-muted-foreground">
                  En yüksek kalite standartlarında ürün ve hizmet sunmak.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit mx-auto">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Müşteri Odaklılık
                </h3>
                <p className="text-muted-foreground">
                  Üreticilerin ihtiyaçlarına özel çözümler geliştirmek.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-4 p-3 bg-secondary/10 rounded-full w-fit mx-auto">
                  <Target className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Güvenilirlik
                </h3>
                <p className="text-muted-foreground">
                  Sözümüzün ve hizmet kalitemizin güvencesi olmak.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
