import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "@/components/theme-provider";
import { Textarea } from "@/components/ui/textarea";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Hero } from "@/components/hero";
import { ShineBorder } from "@/components/magicui/shine-border";

export function Contact() {
  const { theme } = useTheme();
  return (
    <>
      <Hero>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Contact <span className="text-muted-foreground">Me.</span>
        </h1>
        <p className="text-foreground/90 mt-4 text-lg md:text-xl">
          Whether it's a project, a job, or a simple hello, I'm here for it.
          Reach out, and let's build the next big thing together!
        </p>
        <p className="text-foreground/90 mt-4 text-lg md:text-xl">
          (<span className="text-foreground text-xl tracking-tight">P.S.</span>{" "}
          If you know{" "}
          <a
            className="text-foreground text-lg underline underline-offset-4 md:text-xl"
            href="https://www.wuxiaworld.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wuxiaworld
          </a>{" "}
          or{" "}
          <a
            className="text-foreground text-lg underline underline-offset-4 md:text-xl"
            href="https://www.royalroad.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Royal Road
          </a>
          , we're already friends)
        </p>
      </Hero>
      <Card className="relative overflow-hidden p-0">
        <ShineBorder
          shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          className="md:hidden"
        />
        <MagicCard
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          className="p-10 md:p-14"
        >
          <CardContent>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-6 text-sm">
                <div className="grid gap-4">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Hello..."
                    required
                    maxLength={80}
                  />
                </div>
                <div className="grid gap-4">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Where can I reply?"
                    required
                    maxLength={100}
                  />
                </div>
                <div className="grid gap-4">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Your company or website!"
                  />
                </div>
                <div className="grid gap-4">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="I want to build..."
                    className="min-h-30"
                    required
                    maxLength={2000}
                  />
                </div>
                <div className="ml-auto">
                  <InteractiveHoverButton className="rounded-lg px-8 py-2 text-base">
                    Say Hi!
                  </InteractiveHoverButton>
                </div>
              </div>
            </form>
          </CardContent>
        </MagicCard>
      </Card>
    </>
  );
}
