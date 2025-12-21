import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "full" | "icon";
}

const Logo = ({ className, showText = true, size = "md", variant = "full" }: LogoProps) => {
  const sizes = {
    sm: { icon: 36, text: "text-base", subtext: "text-xs" },
    md: { icon: 44, text: "text-lg", subtext: "text-xs" },
    lg: { icon: 56, text: "text-xl", subtext: "text-sm" },
    xl: { icon: 72, text: "text-2xl", subtext: "text-base" },
  };

  const { icon: iconSize, text: textSize, subtext: subtextSize } = sizes[size];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Logo Icon - Wheat field with sun */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Sun/horizon circle */}
        <circle cx="30" cy="38" r="16" className="fill-accent" />
        
        {/* Green field/hill */}
        <path
          d="M5 48 Q15 35 30 38 Q45 41 55 35 L55 55 L5 55 Z"
          className="fill-primary"
        />
        
        {/* Wheat stalks */}
        <g className="fill-primary">
          {/* Left wheat */}
          <ellipse cx="20" cy="20" rx="3" ry="6" transform="rotate(-15 20 20)" />
          <ellipse cx="18" cy="24" rx="2.5" ry="5" transform="rotate(-25 18 24)" />
          <ellipse cx="22" cy="24" rx="2.5" ry="5" transform="rotate(5 22 24)" />
          <rect x="19" y="22" width="2" height="16" rx="1" />
          
          {/* Center wheat */}
          <ellipse cx="30" cy="14" rx="3.5" ry="7" />
          <ellipse cx="27" cy="19" rx="3" ry="5.5" transform="rotate(-20 27 19)" />
          <ellipse cx="33" cy="19" rx="3" ry="5.5" transform="rotate(20 33 19)" />
          <rect x="29" y="17" width="2" height="20" rx="1" />
          
          {/* Right wheat */}
          <ellipse cx="40" cy="20" rx="3" ry="6" transform="rotate(15 40 20)" />
          <ellipse cx="42" cy="24" rx="2.5" ry="5" transform="rotate(25 42 24)" />
          <ellipse cx="38" cy="24" rx="2.5" ry="5" transform="rotate(-5 38 24)" />
          <rect x="39" y="22" width="2" height="16" rx="1" />
        </g>
      </svg>

      {/* Text */}
      {showText && variant === "full" && (
        <div className="flex flex-col leading-tight">
          <span className={cn("font-bold text-primary tracking-tight", textSize)}>
            Yiğiter
          </span>
          <span className={cn("text-muted-foreground font-medium -mt-0.5", subtextSize)}>
            Tarımsal Ürünleri
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
