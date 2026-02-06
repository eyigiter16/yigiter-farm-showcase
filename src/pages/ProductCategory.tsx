import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { getProductsByCategory, getCategoryBySlug } from "@/data/products";

const ProductCategory = () => {
  const { kategori } = useParams<{ kategori: string }>();
  const category = getCategoryBySlug(kategori || "");
  const categoryProducts = getProductsByCategory(kategori || "");

  if (!category) {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Kategori Bulunamadı
          </h1>
          <p className="text-muted-foreground mb-6">
            Aradığınız kategori mevcut değil.
          </p>
          <Button asChild>
            <Link to="/urunler">Ürünlere Dön</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link
          to="/urunler"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Tüm Ürünlere Dön
        </Link>

        {/* Category Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {category.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {category.description}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {categoryProducts.map((product, index) => (
            <Card
              key={product.id}
              className="group overflow-hidden border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.03}s` }}
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-3 md:p-4">
                <h3 className="text-sm md:text-base font-medium text-foreground line-clamp-2 leading-tight">
                  {product.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-muted/50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Fiyat ve Stok Bilgisi Almak İster misiniz?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Ürünlerimiz hakkında detaylı bilgi, güncel fiyat ve stok durumu için
            bize hemen ulaşın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 rounded-full"
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
              variant="outline"
              className="px-8 rounded-full"
            >
              <a href="tel:+905448474121">0544 847 41 21</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
