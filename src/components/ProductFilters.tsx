import { useEffect, useState } from "react";
import { Check, ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Category, Subcategory } from "@/data/products";

interface ProductFiltersProps {
  category: Category;
  availableBrands: string[];
  availableCrops: string[];
  selectedSubcategories: string[];
  selectedBrands: string[];
  selectedCrops: string[];
  onSubcategoryChange: (subcategories: string[]) => void;
  onBrandChange: (brands: string[]) => void;
  onCropChange: (crops: string[]) => void;
  onClearAll: () => void;
}

const ProductFilters = ({
  category,
  availableBrands,
  availableCrops,
  selectedSubcategories,
  selectedBrands,
  selectedCrops,
  onSubcategoryChange,
  onBrandChange,
  onCropChange,
  onClearAll,
}: ProductFiltersProps) => {
  const hasActiveFilters =
    selectedSubcategories.length > 0 ||
    selectedBrands.length > 0 ||
    selectedCrops.length > 0;

  const toggleSubcategory = (slug: string) => {
    if (selectedSubcategories.includes(slug)) {
      onSubcategoryChange(selectedSubcategories.filter((s) => s !== slug));
    } else {
      onSubcategoryChange([...selectedSubcategories, slug]);
    }
  };

  const toggleBrand = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      onBrandChange(selectedBrands.filter((b) => b !== brand));
    } else {
      onBrandChange([...selectedBrands, brand]);
    }
  };

  const toggleCrop = (crop: string) => {
    if (selectedCrops.includes(crop)) {
      onCropChange(selectedCrops.filter((c) => c !== crop));
    } else {
      onCropChange([...selectedCrops, crop]);
    }
  };

  const getSubcategoryLabel = (slug: string): string => {
    const sub = category.subcategories.find((s) => s.slug === slug);
    return sub?.title || slug;
  };

  return (
    <div className="space-y-4">
      {/* Filter Dropdowns */}
      <div className="flex flex-wrap gap-3">
        {/* Subcategory Filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2">
              Alt Kategori
              {selectedSubcategories.length > 0 && (
                <Badge variant="secondary" className="ml-1 h-5 w-5 p-0 flex items-center justify-center text-xs">
                  {selectedSubcategories.length}
                </Badge>
              )}
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-background z-50" align="start">
            {category.subcategories.map((sub) => (
              <DropdownMenuCheckboxItem
                key={sub.slug}
                checked={selectedSubcategories.includes(sub.slug)}
                onCheckedChange={() => toggleSubcategory(sub.slug)}
              >
                {sub.title}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Brand Filter */}
        {availableBrands.length > 0 && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                Marka
                {selectedBrands.length > 0 && (
                  <Badge variant="secondary" className="ml-1 h-5 w-5 p-0 flex items-center justify-center text-xs">
                    {selectedBrands.length}
                  </Badge>
                )}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-background z-50" align="start">
              {availableBrands.map((brand) => (
                <DropdownMenuCheckboxItem
                  key={brand}
                  checked={selectedBrands.includes(brand)}
                  onCheckedChange={() => toggleBrand(brand)}
                >
                  {brand}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}

        {/* Crop Filter */}
        {availableCrops.length > 0 && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                Ürün / Bitki
                {selectedCrops.length > 0 && (
                  <Badge variant="secondary" className="ml-1 h-5 w-5 p-0 flex items-center justify-center text-xs">
                    {selectedCrops.length}
                  </Badge>
                )}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-background z-50" align="start">
              {availableCrops.map((crop) => (
                <DropdownMenuCheckboxItem
                  key={crop}
                  checked={selectedCrops.includes(crop)}
                  onCheckedChange={() => toggleCrop(crop)}
                >
                  {crop}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}

        {/* Clear Filters */}
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearAll}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4 mr-1" />
            Temizle
          </Button>
        )}
      </div>

      {/* Active Filter Badges */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2">
          {selectedSubcategories.map((slug) => (
            <Badge
              key={slug}
              variant="secondary"
              className="cursor-pointer hover:bg-destructive/20"
              onClick={() => toggleSubcategory(slug)}
            >
              {getSubcategoryLabel(slug)}
              <X className="h-3 w-3 ml-1" />
            </Badge>
          ))}
          {selectedBrands.map((brand) => (
            <Badge
              key={brand}
              variant="secondary"
              className="cursor-pointer hover:bg-destructive/20"
              onClick={() => toggleBrand(brand)}
            >
              {brand}
              <X className="h-3 w-3 ml-1" />
            </Badge>
          ))}
          {selectedCrops.map((crop) => (
            <Badge
              key={crop}
              variant="secondary"
              className="cursor-pointer hover:bg-destructive/20"
              onClick={() => toggleCrop(crop)}
            >
              {crop}
              <X className="h-3 w-3 ml-1" />
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductFilters;
