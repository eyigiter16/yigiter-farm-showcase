import { useParams, useSearchParams, Link } from "react-router-dom";
import { useMemo, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle } from "lucide-react";
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

  // Parse URL params for filters
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCrops, setSelectedCrops] = useState<string[]>([]);

  // Initialize filters from URL on mount and when URL changes
  useEffect(() => {
    const subParam = searchParams.get("sub");
    const brandParam = searchParams.get("marka");
    const cropParam = searchParams.get("urun");

    setSelectedSubcategories(subParam ? subParam.split(",") : []);
    setSelectedBrands(brandParam ? brandParam.split(",") : []);
    setSelectedCrops(cropParam ? cropParam.split(",") : []);
  }, [searchParams, kategori]);

  // Update URL when filters change
  const updateURLParams = (
    subcategories: string[],
    brands: string[],
    crops: string[]
  ) => {
    const params = new URLSearchParams();
    if (subcategories.length > 0) params.set("sub", subcategories.join(","));
    if (brands.length > 0) params.set("marka", brands.join(","));
    if (crops.length > 0) params.set("urun", crops.join(","));
    setSearchParams(params, { replace: true });
  };

  const handleSubcategoryChange = (subcategories: string[]) => {
    setSelectedSubcategories(subcategories);
    updateURLParams(subcategories, selectedBrands, selectedCrops);
  };

  const handleBrandChange = (brands: string[]) => {
    setSelectedBrands(brands);
    updateURLParams(selectedSubcategories, brands, selectedCrops);
  };

  const handleCropChange = (crops: string[]) => {
    setSelectedCrops(crops);
    updateURLParams(selectedSubcategories, selectedBrands, crops);
  };

  const handleClearAll = () => {
    setSelectedSubcategories([]);
    setSelectedBrands([]);
    setSelectedCrops([]);
    setSearchParams({}, { replace: true });
  };

  // Filter products based on selected filters
  const filteredProducts = useMemo(() => {
    return categoryProducts.filter((product) => {
      // Filter by subcategory
      if (
        selectedSubcategories.length > 0 &&
        !selectedSubcategories.includes(product.subcategory)
      ) {
        return false;
      }

      // Filter by brand
      if (
        selectedBrands.length > 0 &&
        product.brand &&
        !selectedBrands.includes(product.brand)
      ) {
        return false;
      }

      // Filter by crop
      if (selectedCrops.length > 0) {
        if (!product.crops || !product.crops.some((c) => selectedCrops.includes(c))) {
          return false;
        }
      }

      return true;
    });
  }, [categoryProducts, selectedSubcategories, selectedBrands, selectedCrops]);

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
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Tüm Ürünlere Dön
        </Link>

        {/* Category Tabs */}
        <CategoryTabs activeCategory={kategori || ""} />

        {/* Category Header */}
        <div className="mt-8 mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {category.title}
          </h1>
          <p className="text-muted-foreground max-w-3xl">
            {category.description}
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
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
        <p className="text-sm text-muted-foreground mb-4">
          {filteredProducts.length} ürün gösteriliyor
        </p>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {filteredProducts.map((product, index) => (
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
                  <h3 className="text-sm md:text-base font-medium text-foreground line-clamp-2 leading-tight mb-1">
                    {product.name}
                  </h3>
                  {product.brand && (
                    <p className="text-xs text-muted-foreground">{product.brand}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-muted/30 rounded-xl">
            <p className="text-lg text-muted-foreground mb-4">
              Seçili filtrelere uygun ürün bulunamadı.
            </p>
            <Button variant="outline" onClick={handleClearAll}>
              Filtreleri Temizle
            </Button>
          </div>
        )}

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
