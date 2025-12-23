import { cn } from "@/lib/utils";
import logoImage from "@/assets/logo-yigiter.png";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "full" | "icon";
}

const Logo = ({ className, size = "md", variant = "full" }: LogoProps) => {
  const sizes = {
    sm: { height: 72 },
    md: { height: 104 },
    lg: { height: 130 },
    xl: { height: 156 },
  };

  const { height } = sizes[size];

  return (
    <div className={cn("flex items-center", className)}>
      <img
        src={logoImage}
        alt="Yiğiter Tarımsal Ürünleri"
        style={{ height: `${height}px` }}
        className="w-auto object-contain"
      />
    </div>
  );
};

export default Logo;
