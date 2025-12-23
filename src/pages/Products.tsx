import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sprout, Leaf, Bug, Wheat, Dog, Cat, Bird } from "lucide-react";

const Products = () => {
  const productGroups = [
    {
      title: "Tarımsal Ürünler",
      icon: <Sprout className="h-8 w-8 text-primary" />,
      items: [
        {
          name: "Zirai İlaç",
          description: "Bitki koruma ürünleri ve tarımsal ilaçlar",
          icon: <Bug className="h-6 w-6 text-primary" />,
        },
        {
          name: "Gübre",
          description: "Toprak ve bitki besleme ürünleri",
          icon: <Leaf className="h-6 w-6 text-primary" />,
        },
      ],
    },
    {
      title: "Tohum ve Fide",
      icon: <Wheat className="h-8 w-8 text-primary" />,
      items: [
        {
          name: "Tarla Bitkileri Tohumları",
          description: "Buğday, ayçiçeği, kanola ve daha fazlası",
        },
        {
          name: "Sebze Tohumları",
          description: "Domates, salatalık, ıspanak ve daha fazlası",
        },
        {
          name: "Bahçe ve Sera Tohumları",
          description: "Sera ve açık alan bahçe tohumları",
        },
        {
          name: "Fide Satışı",
          description: "Hazır fide çeşitleri",
        },
      ],
    },
    {
      title: "Hayvan Yemleri",
      icon: <Bird className="h-8 w-8 text-primary" />,
      items: [
        {
          name: "Büyükbaş ve Küçükbaş Yemleri",
          description: "Sığır, koyun ve keçi yemleri",
        },
        {
          name: "Tavuk ve Güvercin Yemleri",
          description: "Kanatlı hayvan yemleri",
        },
      ],
    },
    {
      title: "Evcil Hayvan Mamaları",
      icon: <Dog className="h-8 w-8 text-primary" />,
      items: [
        {
          name: "Kedi Mamaları",
          description: "Her yaş ve ırk için kedi mamaları",
          icon: <Cat className="h-6 w-6 text-primary" />,
        },
        {
          name: "Köpek Mamaları",
          description: "Her yaş ve ırk için köpek mamaları",
          icon: <Dog className="h-6 w-6 text-primary" />,
        },
      ],
    },
    {
      title: "Danışmanlık Hizmetleri",
      icon: <Sprout className="h-8 w-8 text-primary" />,
      items: [
        {
          name: "Zirai Bilgi ve Danışmanlık Desteği",
          description: "Uzman ekibimizden tarımsal danışmanlık hizmeti",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 pt-32 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Ürünlerimiz</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tarım, hayvancılık ve evcil hayvan ihtiyaçlarınız için geniş ürün yelpazemizi keşfedin.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {productGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="animate-fade-in" style={{ animationDelay: `${groupIndex * 0.1}s` }}>
                <div className="flex items-center gap-3 mb-8">
                  {group.icon}
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    {group.title}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.items.map((item, itemIndex) => (
                    <Card
                      key={itemIndex}
                      className="border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 bg-card"
                    >
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-semibold text-primary flex items-center gap-2">
                          {item.icon && item.icon}
                          {item.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ürünlerimiz Hakkında Bilgi Almak İster misiniz?
          </h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Uzman ekibimiz size en uygun ürünleri önerecek ve sorularınızı yanıtlayacaktır.
          </p>
          <a
            href="/iletisim"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 rounded-full font-medium transition-colors"
          >
            İletişime Geçin
          </a>
        </div>
      </section>
    </div>
  );
};

export default Products;
