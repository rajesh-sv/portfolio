import { CircleChevronRightIcon } from "@/components/ui/circle-chevron-right";
import { VisitsCounter } from "@/components/visits-counter";
import { ModeToggle } from "@/components/mode-toggle";
import { IconCode } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import resume from "@/RajeshResume.pdf";
import { RainbowButton } from "@/components/magicui/rainbow-button";

type HeaderProps = {
  page: string;
  setPage: (page: string) => void;
};

export function Header({ page, setPage }: HeaderProps) {
  const pageLinks = [
    <a
      key={0}
      className={cn(
        "text-muted-foreground hover:text-foreground/90 flex cursor-pointer items-center gap-2 font-semibold transition-colors",
        page === "/" ? "text-foreground/90" : "",
      )}
      onClick={() => setPage("/")}
    >
      <IconCode className="h-6 w-6" />
      <span>rajesh_sv</span>
    </a>,
    <a
      key={1}
      className={cn(
        "text-muted-foreground hover:text-foreground/90 cursor-pointer transition-colors",
        page === "/projects" ? "text-foreground/90" : "",
      )}
      onClick={() => setPage("/projects")}
    >
      Projects
    </a>,
    <a
      key={2}
      className={cn(
        "text-muted-foreground hover:text-foreground/90 cursor-pointer transition-colors",
        page === "/work" ? "text-foreground/90" : "",
      )}
      onClick={() => setPage("/work")}
    >
      Work
    </a>,
    <a
      key={3}
      className={cn(
        "text-muted-foreground hover:text-foreground/90 cursor-pointer transition-colors",
        page === "/contact" ? "text-foreground/90" : "",
      )}
      onClick={() => setPage("/contact")}
    >
      Contact
    </a>,
    <a key={4} target="_blank" href={resume}>
      <RainbowButton className="h-10 w-full rounded-lg px-6 md:text-base">
        Resume
      </RainbowButton>
    </a>,
  ];

  return (
    <header className="border-grid bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="m-auto flex max-w-5xl items-center gap-4 p-4">
        <Sheet>
          <SheetTrigger asChild>
            <div className="md:hidden">
              <CircleChevronRightIcon className="size-8 p-1" />
              <span className="sr-only">Toggle navigation menu</span>
            </div>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 p-8">
            <nav className="flex grow flex-col gap-8 text-xl font-medium">
              {pageLinks.map((pageLink) => {
                return (
                  <SheetClose asChild key={pageLink.key}>
                    {pageLink}
                  </SheetClose>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
        <nav className="hidden font-medium md:flex md:items-center md:gap-5 lg:gap-6">
          {pageLinks}
        </nav>
        <VisitsCounter className="ml-auto" />
        <ModeToggle />
      </div>
    </header>
  );
}
