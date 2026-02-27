import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sprout, Leaf, Bug, Wheat, Dog, Cat, Bird, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import tractorImage from "@/assets/tractor-fertilizer.png";
import { categories } from "@/data/products";

const Products = () => {
  const productGroups = [
    {
      title: "Gübre",
      slug: "gubre",
      icon: <Leaf className="h-8 w-8 text-primary" />,
      intro: "Toprağınız yorgun mu, verim düşük mü? Doğru gübreleme ile farkı görün.",
      items: [
        {
          name: "Taban ve Üst Gübreler",
          subcategorySlug: "taban-gubre",
          problem: "Toprağın besin değeri zamanla azalır, bitkiler yeterli besini alamaz.",
          solution: "Mineral ve organomineral gübrelerimizle toprağı besliyor, verimi artırıyoruz.",
          benefit: "Daha güçlü bitkiler, daha yüksek hasat.",
        },
        {
          name: "Yaprak Gübreleri",
          subcategorySlug: "yaprak-gubre",
          problem: "Kök yoluyla alınamayan besinler bitki gelişimini yavaşlatır.",
          solution: "Yapraktan uygulanan özel formüllerle hızlı besin takviyesi sağlıyoruz.",
          benefit: "Hızlı etki, görünür sonuçlar.",
        },
      ],
    },
    {
      title: "Zirai İlaç (Bitki Koruma)",
      slug: "zirai-ilac",
      icon: <Bug className="h-8 w-8 text-primary" />,
      intro: "Hastalık ve zararlılar ürününüzü tehdit ediyor mu? Ruhsatlı ilaçlarla korunun.",
      items: [
        {
          name: "Fungusit (Mantar İlaçları)",
          subcategorySlug: "fungusit",
          problem: "Küf, pas ve mantar hastalıkları ürün kaybına yol açar.",
          solution: "Syngenta, Bayer, BASF gibi güvenilir markaların ruhsatlı ürünlerini sunuyoruz.",
          benefit: "Sağlıklı bitki, kayıpsız hasat.",
        },
        {
          name: "İnsektisit (Böcek İlaçları)",
          subcategorySlug: "insektisit",
          problem: "Zararlı böcekler bitkiye ve meyveye zarar verir.",
          solution: "Etkili ve hedef odaklı insektisitlerle zararlıları kontrol altına alıyoruz.",
          benefit: "Temiz ürün, pazarda değer.",
        },
        {
          name: "Herbisit (Yabancı Ot İlaçları)",
          subcategorySlug: "herbisit",
          problem: "Yabancı otlar su ve besini çalarak verimi düşürür.",
          solution: "Seçici ve geniş spektrumlu herbisitlerle ot kontrolü sağlıyoruz.",
          benefit: "Daha az rekabet, daha çok verim.",
        },
      ],
    },
    {
      title: "Tohum",
      slug: "tohum",
      icon: <Wheat className="h-8 w-8 text-primary" />,
      intro: "Her şey doğru tohumla başlar. Bölgeye uygun, sertifikalı çeşitler sunuyoruz.",
      items: [
        {
          name: "Tarla Bitkileri Tohumları",
          subcategorySlug: "tarla-bitkileri",
          problem: "Uygun olmayan tohum seçimi düşük verim ve hastalık riski demektir.",
          solution: "Pioneer, Dekalb, LG gibi markalardan bölgeye uygun hibrit tohumlar sağlıyoruz.",
          benefit: "Yüksek çimlenme, güçlü bitki, dolu başak.",
        },
        {
          name: "Sebze Tohumları",
          subcategorySlug: "sebze",
          problem: "Düşük kaliteli tohum pazarda değersiz ürün demektir.",
          solution: "Seminis, Syngenta, Sakata gibi markalardan kaliteli sebze tohumları sunuyoruz.",
          benefit: "Homojen ürün, pazarda rekabet avantajı.",
        },
        {
          name: "Bahçe ve Sera Tohumları",
          subcategorySlug: "sera",
          problem: "Sera üretiminde performans farkı doğrudan kâra yansır.",
          solution: "Yüksek performanslı sera çeşitleriyle üretim verimliliğini artırıyoruz.",
          benefit: "Erken hasat, uzun raf ömrü.",
        },
      ],
    },
    {
      title: "Hayvan Yemleri",
      slug: "hayvan-yemleri",
      icon: <Bird className="h-8 w-8 text-primary" />,
      intro: "Sağlıklı hayvan, verimli üretim. Kaliteli yemle farkı yaratın.",
      items: [
        {
          name: "Büyükbaş ve Küçükbaş Yemleri",
          subcategorySlug: "buyukbas",
          problem: "Yetersiz beslenme süt verimini ve et kalitesini düşürür.",
          solution: "Dengeli besin içerikli, güvenilir yem ürünleri tedarik ediyoruz.",
          benefit: "Daha verimli sürü, daha kârlı hayvancılık.",
        },
        {
          name: "Kanatlı Yemleri",
          subcategorySlug: "kanatli",
          problem: "Düşük kaliteli yem yumurta verimini ve civciv sağlığını etkiler.",
          solution: "Tavuk ve güvercin için özel formüllü yemler sunuyoruz.",
          benefit: "Sağlıklı kanatlılar, düzenli verim.",
        },
      ],
    },
    {
      title: "Evcil Hayvan Mamaları",
      slug: "evcil-hayvan-mamalari",
      icon: <Dog className="h-8 w-8 text-primary" />,
      intro: "Kediniz veya köpeğiniz için güvenilir ve besleyici mama çeşitleri.",
      items: [
        {
          name: "Kedi Mamaları",
          subcategorySlug: "kedi",
          problem: "Kalitesiz mama sindirim sorunları ve tüy dökülmesine yol açar.",
          solution: "Lider Pet Food markasından dengeli ve besleyici mamalar sunuyoruz.",
          benefit: "Sağlıklı, enerjik ve mutlu dostlar.",
          icon: <Cat className="h-6 w-6 text-primary" />,
        },
        {
          name: "Köpek Mamaları",
          subcategorySlug: "kopek",
          problem: "Yetersiz beslenme köpeğin gelişimini ve bağışıklığını zayıflatır.",
          solution: "Her yaş ve ırk için uygun mama seçenekleri sağlıyoruz.",
          benefit: "Güçlü kemikler, parlak tüyler, uzun ömür.",
          icon: <Dog className="h-6 w-6 text-primary" />,
        },
      ],
    },
    {
      title: "Teknik Danışmanlık",
      slug: null, // No category page for this
      icon: <Sprout className="h-8 w-8 text-primary" />,
      intro: "Ürün satışının ötesinde, tarlada yanınızdayız.",
      items: [
        {
          name: "Tarla Ziyareti ve Danışmanlık",
          problem: "Yanlış uygulama hem para hem zaman kaybı demektir.",
          solution: "Ekim öncesi, ilaçlama ve gübreleme dönemlerinde saha desteği veriyoruz.",
          benefit: "Doğru zamanda doğru uygulama, maksimum verim.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 pt-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${tractorImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Ürünlerimiz</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tarladan hayvancılığa kadar ihtiyacınız olan her şey tek adreste. 
            Güvenilir markalar, stoklu ürünler, hızlı teslimat.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {productGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="animate-fade-in" style={{ animationDelay: `${groupIndex * 0.1}s` }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {group.icon}
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      {group.title}
                    </h2>
                  </div>
                  {group.slug && (
                    <Link
                      to={`/urunler/${group.slug}`}
                      className="hidden sm:flex items-center gap-2 text-primary hover:text-primary-glow font-medium transition-colors"
                    >
                      Tüm Ürünleri Gör
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
                <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                  {group.intro}
                </p>
                <div className={`grid gap-6 ${
                  group.items.length === 1
                    ? "grid-cols-1 max-w-lg"
                    : group.items.length === 2
                    ? "grid-cols-1 md:grid-cols-2"
                    : group.items.length <= 4
                    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                }`}>
                  {group.items.map((item, itemIndex) => {
                    const cardContent = (
                      <Card
                        className="border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 bg-card h-full"
                      >
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg font-semibold text-primary flex items-center gap-2">
                            {item.icon && item.icon}
                            {item.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div>
                            <p className="text-sm text-muted-foreground">
                              <span className="font-medium text-foreground">Sorun:</span> {item.problem}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              <span className="font-medium text-foreground">Çözüm:</span> {item.solution}
                            </p>
                          </div>
                          <div className="pt-2 border-t border-border/50">
                            <p className="text-sm font-medium text-primary">
                              ✓ {item.benefit}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    );

                    // If item has subcategory, make it clickable
                    if (group.slug && item.subcategorySlug) {
                      return (
                        <Link
                          key={itemIndex}
                          to={`/urunler/${group.slug}?sub=${item.subcategorySlug}`}
                          className="block"
                        >
                          {cardContent}
                        </Link>
                      );
                    }

                    return <div key={itemIndex}>{cardContent}</div>;
                  })}
                </div>
                {group.slug && (
                  <div className="mt-6 sm:hidden">
                    <Button asChild variant="outline" className="w-full">
                      <Link to={`/urunler/${group.slug}`} className="flex items-center gap-2">
                        Tüm {group.title} Ürünlerini Gör
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ürün ve Fiyat Bilgisi Almak İster misiniz?
          </h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Stok durumu, güncel fiyatlar ve teslimat seçenekleri için hemen bize ulaşın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-3 rounded-full"
            >
              <a 
                href="https://wa.me/905448474121?text=Merhaba,%20ürünleriniz%20hakkında%20bilgi%20almak%20istiyorum." 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp ile Yazın
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 rounded-full"
            >
              <Link to="/iletisim">
                İletişim Sayfası
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;