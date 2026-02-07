import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { categories } from "@/data/products";

interface CategoryTabsProps {
  activeCategory: string;
}

const CategoryTabs = ({ activeCategory }: CategoryTabsProps) => {
  return (
    <div className="border-b border-border overflow-x-auto">
      <div className="flex gap-1 min-w-max">
        {categories.map((category) => (
          <Link
            key={category.slug}
            to={`/urunler/${category.slug}`}
            className={cn(
              "px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors border-b-2",
              activeCategory === category.slug
                ? "border-primary text-primary bg-primary/5"
                : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50"
            )}
          >
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
