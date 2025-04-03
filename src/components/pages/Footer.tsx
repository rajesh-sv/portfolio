import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className="border-border/60 bg-background/95 mt-auto w-full border-t">
      <div className="flex h-16 max-w-screen-2xl items-center justify-center gap-2">
        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/rajesh-vansjalia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandLinkedin className="stroke-muted-foreground size-6 hover:stroke-[#0077B5]" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://github.com/rajesh-sv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandGithub className="stroke-muted-foreground hover:stroke-foreground size-6" />
            <span className="sr-only">Github</span>
          </a>
          <a
            href="https://x.com/rajesh__sv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandX className="stroke-muted-foreground size-6 hover:stroke-sky-400" />
            <span className="sr-only">X, previously Twitter</span>
          </a>
        </div>
        |
        <span className="text-muted-foreground text-sm">
          Build by{" "}
          <a
            className="underline underline-offset-4"
            href="https://github.com/rajesh-sv"
            target="_blank"
            rel="noopener noreferrer"
          >
            rajesh-sv.
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
