import { useParams, useSearchParams, Link } from "react-router-dom";
import { useMemo, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import {
  getProductsByCategory,
  getCategoryBySlug,
  getBrandsByCategory,
  getCropsForCategory,
  Product,
} from "@/data/products";
import ProductFilters from "@/components/ProductFilters";
import CategoryTabs from "@/components/CategoryTabs";

const ProductCategory = () => {
  const { kategori } = useParams<{ kategori: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const category = getCategoryBySlug(kategori || "");
  const categoryProducts = getProductsByCategory(kategori || "");
  const availableBrands = getBrandsByCategory(kategori || "");
  const availableCrops = getCropsForCategory(kategori || "");

  // ... (rest of filtering logic)

  if (!category) {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <Helmet>
          <title>Kategori Bulunamadı | Yiğiter Tarım</title>
        </Helmet>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Kategori Bulunamadı
          </h1>
          <p className="text-foreground/70 mb-6">
            Aradığınız kategori mevcut değil.
          </p>
          <Button asChild className="bg-primary hover:bg-primary-glow font-bold px-8 py-6 rounded-full">
            <Link to="/urunler">Ürünlere Dön</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-background">
      <Helmet>
        <title>{`${category.title} Ürünleri | Yiğiter Tarım Ürünleri`}</title>
        <meta name="description" content={`${category.title} kategorisindeki kaliteli ve güvenilir ürünlerimizi inceleyin. Tekirdağ merkezli hızlı tedarik.`} />
      </Helmet>
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link
          to="/urunler"
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors mb-8 font-semibold"
        >
          <ArrowLeft className="h-4 w-4" />
          Tüm Ürünlere Dön
        </Link>

        {/* Category Tabs */}
        <CategoryTabs activeCategory={kategori || ""} />

        {/* Category Header */}
        <div className="mt-10 mb-8 border-b border-border/50 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {category.title}
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl font-medium leading-relaxed">
            {category.description}
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10 bg-muted/20 p-6 rounded-2xl border border-border/50 shadow-sm">
          <ProductFilters
            category={category}
            availableBrands={availableBrands}
            availableCrops={availableCrops}
            selectedSubcategories={selectedSubcategories}
            selectedBrands={selectedBrands}
            selectedCrops={selectedCrops}
            onSubcategoryChange={handleSubcategoryChange}
            onBrandChange={handleBrandChange}
            onCropChange={handleCropChange}
            onClearAll={handleClearAll}
          />
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-lg text-foreground/70 font-bold">
            <span className="text-primary">{filteredProducts.length}</span> ürün listeleniyor
          </p>
          {filteredProducts.length > 0 && (
            <Button variant="ghost" onClick={handleClearAll} className="text-primary hover:text-primary-glow font-bold">
              Filtreleri Temizle
            </Button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
            {filteredProducts.map((product, index) => (
              <Card
                key={product.id}
                className="group overflow-hidden border-2 border-border/30 hover:border-primary/40 hover:shadow-2xl transition-all duration-500 animate-fade-in bg-card"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                <div className="aspect-square overflow-hidden bg-muted/30">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-4 md:p-5">
                  <h3 className="text-base md:text-lg font-bold text-foreground line-clamp-2 leading-tight mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  {product.brand && (
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary/40" />
                      <p className="text-sm text-foreground/60 font-bold uppercase tracking-wider">{product.brand}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-muted/20 rounded-3xl border-2 border-dashed border-border">
            <p className="text-2xl font-bold text-foreground mb-4">
              Seçili filtrelere uygun ürün bulunamadı.
            </p>
            <Button variant="outline" onClick={handleClearAll} className="px-10 py-6 rounded-full border-2 font-bold text-lg">
              Tüm Filtreleri Kaldır
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 bg-primary text-primary-foreground rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
            Fiyat ve Stok Bilgisi Almak İster misiniz?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-100 font-medium relative z-10">
            Ürünlerimiz hakkında detaylı bilgi, güncel fiyat ve stok durumu için
            bize hemen ulaşın. Trakya genelinde hızlı teslimat sağlıyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-12 py-8 rounded-full shadow-xl text-xl font-bold transition-all hover:scale-105"
            >
              <a
                href="https://wa.me/905448474121?text=Merhaba,%20ürünleriniz%20hakkında%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <MessageCircle className="h-7 w-7" />
                WhatsApp ile Yazın
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-12 py-8 rounded-full shadow-xl text-xl font-bold transition-all hover:scale-105"
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
