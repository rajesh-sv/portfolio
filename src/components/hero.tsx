import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";
import { Particles } from "@/components/magicui/particles";

type HeroProps = {
  children?: React.ReactNode;
  className?: string;
};

export function Hero({ children, className }: HeroProps) {
  const { theme } = useTheme();
  return (
    <div
      className={cn("relative overflow-hidden p-8 max-[400px]:p-4", className)}
    >
      <Particles
        className="absolute inset-0 z-0"
        quantity={70}
        ease={80}
        color={theme === "dark" ? "#ffffff" : "#000000"}
        refresh
      />
      {children}
    </div>
  );
}
