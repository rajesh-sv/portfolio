function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-border/60 bg-background/95">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-center gap-2">
        <span className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear() + " "}
          <a
            className="underline underline-offset-4"
            href="https://github.com/rajesh-sv"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rajesh Vansjalia.
          </a>{" "}
          All rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
