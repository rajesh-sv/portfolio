import { Link } from "react-router-dom";
import { ModeToggle } from "./components/mode-toggle";
import { Button } from "./components/ui/button";
import {
  IconBrandGithub,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconCode,
  IconMenuDeep,
} from "@tabler/icons-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "./components/ui/sheet";
import { cn } from "@/lib/utils";
import { useState } from "react";
import cv from "./cv.pdf";

function Header() {
  const [page, setPage] = useState("about");
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-xl items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="link" size="icon" className="shrink-0 md:hidden">
              <IconMenuDeep className="h-5 w-5 rotate-180" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <SheetClose asChild>
                <Link
                  to="/"
                  className="mr-5 flex items-center gap-2 font-semibold md:mr-6 md:text-base"
                >
                  <IconCode className="h-6 w-6" />
                  <span>rajesh_sv</span>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  to="/"
                  className={cn(
                    "text-muted-foreground transition-colors hover:text-foreground/90",
                    page === "about" ? "text-foreground" : "",
                  )}
                  onClick={() => setPage("about")}
                >
                  About
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  to="/projects"
                  className={cn(
                    "text-muted-foreground transition-colors hover:text-foreground/90",
                    page === "projects" ? "text-foreground" : "",
                  )}
                  onClick={() => setPage("projects")}
                >
                  Projects
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  to="/blogs"
                  className={cn(
                    "text-muted-foreground transition-colors hover:text-foreground/90",
                    page === "blogs" ? "text-foreground" : "",
                  )}
                  onClick={() => setPage("blogs")}
                >
                  Blogs
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  to="/contributions"
                  className={cn(
                    "text-muted-foreground transition-colors hover:text-foreground/90",
                    page === "contributions" ? "text-foreground" : "",
                  )}
                  onClick={() => setPage("contributions")}
                >
                  Contributions
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  to="/contact"
                  className={cn(
                    "text-muted-foreground transition-colors hover:text-foreground/90",
                    page === "contact" ? "text-foreground" : "",
                  )}
                  onClick={() => setPage("contact")}
                >
                  Contact
                </Link>
              </SheetClose>
              <Button variant="secondary" size="lg" className="py-6">
                <Link to={cv} target="_blank" className="text-md" download>
                  Download CV
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>

        <Link
          to="/"
          className="ml-5 hidden sm:flex sm:items-center sm:gap-2 sm:text-base sm:font-semibold md:ml-0 md:mr-5 lg:mr-6"
          onClick={() => setPage("about")}
        >
          <IconCode className="h-6 w-6" />
          <span>rajesh_sv</span>
        </Link>
        <nav className="hidden font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            to="/projects"
            className={cn(
              "text-muted-foreground transition-colors hover:text-foreground/90",
              page === "projects" ? "text-foreground" : "",
            )}
            onClick={() => setPage("projects")}
          >
            Projects
          </Link>

          <Link
            to="/blogs"
            className={cn(
              "text-muted-foreground transition-colors hover:text-foreground/90",
              page === "blogs" ? "text-foreground" : "",
            )}
            onClick={() => setPage("blogs")}
          >
            Blogs
          </Link>
          <Link
            to="/contributions"
            className={cn(
              "text-muted-foreground transition-colors hover:text-foreground/90",
              page === "contributions" ? "text-foreground" : "",
            )}
            onClick={() => setPage("contributions")}
          >
            Contributions
          </Link>
          <Link
            to="/contact"
            className={cn(
              "text-muted-foreground transition-colors hover:text-foreground/90",
              page === "contact" ? "text-foreground" : "",
            )}
            onClick={() => setPage("contact")}
          >
            Contact
          </Link>
          <Button variant="secondary">
            <Link to={cv} target="_blank" download>
              Download CV
            </Link>
          </Button>
        </nav>
        <nav className="ml-auto flex items-center">
          <a
            href="https://www.linkedin.com/in/rajesh-vansjalia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon">
              <IconBrandLinkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </a>
          <a
            href="https://github.com/rajesh-sv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon">
              <IconBrandGithub className="h-5 w-5" />
              <span className="sr-only">Github</span>
            </Button>
          </a>
          <a
            href="https://leetcode.com/u/rajesh_sv/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon">
              <IconBrandLeetcode className="h-5 w-5" />
              <span className="sr-only">Leetcode</span>
            </Button>
          </a>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}

export default Header;
