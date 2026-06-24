import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sprout, Leaf, Bug, Wheat, Dog, Cat, Bird, MessageCircle, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import tractorImage from "@/assets/tractor-fertilizer.png";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const productGroups = [
    {
      title: "Gübre",
      slug: "gubre",
      icon: <Leaf className="h-8 w-8 text-primary" aria-hidden="true" />,
      intro: "Toprağınız yorgun mu, verim düşük mu? Doğru gübreleme ile farkı görün.",
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
      icon: <Bug className="h-8 w-8 text-primary" aria-hidden="true" />,
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
      icon: <Wheat className="h-8 w-8 text-primary" aria-hidden="true" />,
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
      icon: <Bird className="h-8 w-8 text-primary" aria-hidden="true" />,
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
      icon: <Dog className="h-8 w-8 text-primary" aria-hidden="true" />,
      intro: "Kediniz veya köpeğiniz için güvenilir ve besleyici mama çeşitleri.",
      items: [
        {
          name: "Kedi Mamaları",
          subcategorySlug: "kedi",
          problem: "Kalitesiz mama sindirim sorunları ve tüy dökülmesine yol açar.",
          solution: "Lider Pet Food markasından dengeli ve besleyici mamalar sunuyoruz.",
          benefit: "Sağlıklı, enerjik ve mutlu dostlar.",
          icon: <Cat className="h-6 w-6 text-primary" aria-hidden="true" />,
        },
        {
          name: "Köpek Mamaları",
          subcategorySlug: "kopek",
          problem: "Yetersiz beslenme köpeğin gelişimini ve bağışıklığını zayıflatır.",
          solution: "Her yaş ve ırk için uygun mama seçenekleri sağlıyoruz.",
          benefit: "Güçlü kemikler, parlak tüyler, uzun ömür.",
          icon: <Dog className="h-6 w-6 text-primary" aria-hidden="true" />,
        },
      ],
    },
    {
      title: "Teknik Danışmanlık",
      slug: null, 
      icon: <Sprout className="h-8 w-8 text-primary" aria-hidden="true" />,
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

  const filteredGroups = productGroups.map(group => ({
    ...group,
    items: group.items.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(group => group.items.length > 0);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Ürünlerimiz | Yiğiter Tarım Ürünleri</title>
        <meta name="description" content="Gübre, zirai ilaç, tohum ve yem çeşitlerimizle Tekirdağ ve tüm Trakya'da hizmetinizdeyiz. Kaliteli markalar, güvenilir tedarik." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 pt-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${tractorImage})`,
          }}
          role="img"
          aria-label="Tarlada çalışan traktör"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-primary">Ürünlerimiz</span>
          </h1>
          <p className="text-lg text-foreground font-medium max-w-3xl mx-auto">
            Tarladan hayvancılığa kadar ihtiyacınız olan her şey tek adreste. 
            Güvenilir markalar, stoklu ürünler, hızlı teslimat.
          </p>
        </div>
      </section>

      {/* Search Bar Section */}
      <section className="py-8 bg-muted/30 sticky top-20 z-40 border-b border-border shadow-sm">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary group-focus-within:scale-110 transition-transform" />
            <Input
              type="text"
              placeholder="Ürün veya kategori arayın... (Örn: Üre gübresi, Mısır tohumu)"
              className="pl-12 py-7 text-lg rounded-full border-2 border-primary/20 focus:border-primary shadow-md transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Ürün arama"
            />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {filteredGroups.length > 0 ? (
              filteredGroups.map((group, groupIndex) => (
                <div key={groupIndex} className="animate-fade-in" style={{ animationDelay: `${groupIndex * 0.1}s` }}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-2xl">
                        {group.icon}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        {group.title}
                      </h2>
                    </div>
                    {group.slug && (
                      <Link
                        to={`/urunler/${group.slug}`}
                        className="hidden sm:flex items-center gap-2 text-primary hover:text-primary-glow font-bold text-lg transition-colors"
                      >
                        Tümünü Gör
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    )}
                  </div>
                  <p className="text-xl text-foreground/80 mb-10 max-w-3xl font-medium leading-relaxed">
                    {group.intro}
                  </p>
                  <div className={`grid gap-8 ${
                    group.items.length === 1
                      ? "grid-cols-1 max-w-lg"
                      : group.items.length === 2
                      ? "grid-cols-1 md:grid-cols-2"
                      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
                  }`}>
                    {group.items.map((item, itemIndex) => {
                      const cardContent = (
                        <Card
                          className="border-2 border-border/50 hover:border-primary/40 hover:shadow-2xl transition-all duration-500 bg-card h-full group/card overflow-hidden"
                        >
                          <CardHeader className="pb-4 bg-muted/20 group-hover/card:bg-primary/5 transition-colors">
                            <CardTitle className="text-xl font-bold text-primary flex items-center gap-3">
                              {item.icon && item.icon}
                              {item.name}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="p-6 space-y-4">
                            <div className="space-y-2">
                              <p className="text-sm font-bold text-foreground uppercase tracking-wider">Sorun:</p>
                              <p className="text-base text-foreground/80 font-medium">{item.problem}</p>
                            </div>
                            <div className="space-y-2">
                              <p className="text-sm font-bold text-foreground uppercase tracking-wider">Çözüm:</p>
                              <p className="text-base text-foreground/80 font-medium">{item.solution}</p>
                            </div>
                            <div className="pt-4 border-t-2 border-border/30">
                              <p className="text-base font-bold text-primary flex items-center gap-2">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">✓</span>
                                {item.benefit}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      );

                      if (group.slug && item.subcategorySlug) {
                        return (
                          <Link
                            key={itemIndex}
                            to={`/urunler/${group.slug}?sub=${item.subcategorySlug}`}
                            className="block"
                            aria-label={`${item.name} kategorisini gör`}
                          >
                            {cardContent}
                          </Link>
                        );
                      }

                      return <div key={itemIndex}>{cardContent}</div>;
                    })}
                  </div>
                  {group.slug && (
                    <div className="mt-8 sm:hidden">
                      <Button asChild variant="outline" className="w-full py-6 text-lg border-2" aria-label={`Tüm ${group.title} ürünlerini gör`}>
                        <Link to={`/urunler/${group.slug}`} className="flex items-center gap-2">
                          Tüm {group.title} Ürünlerini Gör
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-20 bg-muted/20 rounded-3xl border-2 border-dashed border-border">
                <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Ürün bulunamadı</h3>
                <p className="text-lg text-muted-foreground">Aradığınız kriterlere uygun ürün mevcut değil. Lütfen farklı bir kelime deneyin.</p>
                <Button variant="link" onClick={() => setSearchQuery("")} className="mt-4 text-primary font-bold text-lg">Aramayı Temizle</Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ürün ve Fiyat Bilgisi Almak İster misiniz?
          </h2>
          <p className="text-xl font-medium opacity-100 mb-10 max-w-2xl mx-auto">
            Stok durumu, güncel fiyatlar ve teslimat seçenekleri için hemen bize ulaşın.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-12 py-8 rounded-full shadow-2xl text-xl font-bold transition-all hover:scale-105"
              aria-label="WhatsApp ile iletişime geçin"
            >
              <a 
                href="https://wa.me/905448474121?text=Merhaba,%20ürünleriniz%20hakkında%20bilgi%20almak%20istiyorum." 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-6 w-6" />
                WhatsApp ile Yazın
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-12 py-8 rounded-full shadow-2xl text-xl font-bold transition-all hover:scale-105"
              aria-label="İletişim sayfasına git"
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