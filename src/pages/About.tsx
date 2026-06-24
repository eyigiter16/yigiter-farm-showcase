import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users, MapPin, Handshake, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import aboutHero from "@/assets/crops-field-new.png";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${aboutHero})`,
          }}
          role="img"
          aria-label="Tarla manzarası"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/85" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
            Hakkımızda
          </h1>
          <p className="text-xl md:text-2xl font-medium opacity-100 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Trakya'da üreticilerin güvendiği, sahada aktif bir tarım tedarikçisiyiz.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
              Biz Kimiz?
            </h2>
            <div className="prose prose-lg max-w-none text-foreground/90 space-y-6">
              <p className="text-xl leading-relaxed font-medium">
                Yiğiter Tarımsal Ürünleri, Tekirdağ merkezli bir tarım tedarik firmasıdır. 
                25 yılı aşkın sektör deneyimimizle Trakya bölgesindeki çiftçilere ve 
                üreticilere gübre, zirai ilaç, tohum ve yem tedarikinde güvenilir bir 
                çözüm ortağı olmayı sürdürüyoruz.
              </p>
              <p className="text-xl leading-relaxed font-medium">
                İşimizi ofisten değil, tarladan yönetiyoruz. Bölgenin toprak yapısını, 
                iklim koşullarını ve üreticilerin gerçek ihtiyaçlarını biliyor, 
                ürün önerilerimizi buna göre yapıyoruz. Syngenta, Bayer, BASF, Pioneer 
                gibi sektörün kanıtlanmış markalarıyla çalışıyor, ürünleri stoklu olarak 
                bulundurup hızlı teslimat sağlıyoruz.
              </p>
              <p className="text-xl leading-relaxed font-medium">
                Sadece ürün satmıyoruz; ekim öncesinden hasat sonrasına kadar 
                teknik destek sunuyoruz. Tarla ziyaretleri yapıyor, toprak analizlerine 
                eşlik ediyor, ilaçlama ve gübreleme konusunda danışmanlık veriyoruz. 
                Bizim için önemli olan tek şey, üreticinin verimli bir sezon geçirmesidir.
              </p>
            </div>

            {/* Team Link Reference */}
            <div className="mt-12 p-8 bg-primary/5 rounded-3xl border-2 border-primary/10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Başarımızın Arkasındaki Güç</h3>
                <p className="text-lg text-foreground/80 font-medium">Deneyimli kadromuz ve uzman ekibimizle tanışın.</p>
              </div>
              <Link 
                to="/ekibimiz" 
                className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-glow transition-all shadow-lg hover:shadow-xl group"
              >
                Ekibimizle Tanışın
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Strengths */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Farkımız
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit mx-auto">
                  <MapPin className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Yerel Bilgi
                </h3>
                <p className="text-muted-foreground">
                  Trakya'nın toprak ve iklim koşullarını biliyor, ürün önerilerimizi buna göre yapıyoruz.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit mx-auto">
                  <Handshake className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Güvenilir Markalar
                </h3>
                <p className="text-muted-foreground">
                  Sektörün kanıtlanmış markaları ile çalışıyor, kaliteden ödün vermiyoruz.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit mx-auto">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Saha Desteği
                </h3>
                <p className="text-muted-foreground">
                  Tarla ziyaretleri ve teknik danışmanlıkla hasat sonuna kadar yanınızdayız.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
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
                  Trakya bölgesindeki üreticilere doğru ürünü, doğru zamanda, doğru 
                  fiyatla ulaştırmak. Teknik bilgi ve saha desteğiyle üreticinin 
                  verimini artırmak.
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
                  Trakya'nın en güvenilir tarım tedarikçisi olmak. Bölgedeki her 
                  üreticinin ihtiyaç duyduğunda ilk arayacağı firma olmak.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
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
                  Dürüstlük
                </h3>
                <p className="text-muted-foreground">
                  Üreticiye ihtiyacı olmayan ürünü satmayız. Doğru bilgiyi, doğru zamanda veririz.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit mx-auto">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Ulaşılabilirlik
                </h3>
                <p className="text-muted-foreground">
                  Telefonunuz her zaman açılır. Sezon yoğunluğunda bile size dönüş yaparız.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-4 p-3 bg-secondary/10 rounded-full w-fit mx-auto">
                  <Target className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Sonuç Odaklılık
                </h3>
                <p className="text-muted-foreground">
                  Amacımız ürün satmak değil, üreticinin verimli bir sezon geçirmesini sağlamak.
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