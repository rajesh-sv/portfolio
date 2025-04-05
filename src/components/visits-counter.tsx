import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { useViewCounter } from "@/hooks/useFireBaseHooks";

type VisitsCounterProps = {
  className: string;
};

export function VisitsCounter({ className }: VisitsCounterProps) {
  const { views } = useViewCounter();

  return (
    <div className={className}>
      <HoverBorderGradient
        containerClassName="rounded-md"
        as="button"
        className="bg-background text-accent-foreground flex h-8 items-center"
      >
        <div>
          <NumberTicker
            value={views}
            className="tracking-tighter whitespace-pre-wrap"
          />{" "}
          <span className="text-sm">views</span>
        </div>
      </HoverBorderGradient>
    </div>
  );
}
