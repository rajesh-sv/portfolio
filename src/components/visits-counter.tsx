import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { NumberTicker } from "@/components/magicui/number-ticker";

type VisitsCounterProps = {
  className: string;
};

export function VisitsCounter({ className }: VisitsCounterProps) {
  return (
    <div className={className}>
      <HoverBorderGradient
        containerClassName="rounded-md"
        as="button"
        className="bg-background text-accent-foreground flex h-8 items-center"
      >
        <div>
          <NumberTicker
            value={100}
            className="tracking-tighter whitespace-pre-wrap"
          />{" "}
          <span className="text-sm">views</span>
        </div>
      </HoverBorderGradient>
    </div>
  );
}
