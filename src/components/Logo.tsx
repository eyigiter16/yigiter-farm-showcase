import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "full" | "icon";
}

const Logo = ({ className, showText = true, size = "md", variant = "full" }: LogoProps) => {
  const sizes = {
    sm: { icon: 32, text: "text-lg" },
    md: { icon: 40, text: "text-xl" },
    lg: { icon: 56, text: "text-2xl" },
    xl: { icon: 72, text: "text-3xl" },
  };

  const { icon: iconSize, text: textSize } = sizes[size];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Logo Icon - Stylized Y with leaf/sprout element */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Background circle */}
        <circle 
          cx="32" 
          cy="32" 
          r="30" 
          className="fill-primary"
        />
        
        {/* Stylized Y shape forming from two leaves meeting at center */}
        <path
          d="M32 52V36"
          className="stroke-primary-foreground"
          strokeWidth="4"
          strokeLinecap="round"
        />
        
        {/* Left branch of Y with leaf curve */}
        <path
          d="M32 36L18 18C16 15 18 12 22 14C26 16 30 24 32 36"
          className="fill-primary-foreground"
        />
        
        {/* Right branch of Y with leaf curve */}
        <path
          d="M32 36L46 18C48 15 46 12 42 14C38 16 34 24 32 36"
          className="fill-primary-foreground"
        />
        
        {/* Small sprout/leaf detail at top */}
        <path
          d="M32 14C32 14 36 10 40 12C36 14 34 18 32 22C30 18 28 14 24 12C28 10 32 14 32 14Z"
          className="fill-accent"
        />
        
        {/* Subtle horizon line representing fields */}
        <path
          d="M12 44C16 42 24 43 32 42C40 41 48 42 52 44"
          className="stroke-primary-foreground/30"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Text */}
      {showText && variant === "full" && (
        <div className="flex flex-col leading-tight">
          <span className={cn("font-bold text-primary tracking-tight", textSize)}>
            Yiğiter
          </span>
          <span className="text-sm text-muted-foreground font-medium -mt-0.5">
            Tarım Ürünleri
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
