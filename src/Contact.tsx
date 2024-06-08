import {
  IconBrandDiscordFilled,
  IconBrandGithubFilled,
  IconBrandLinkedin,
  IconBrandX,
  IconMailFilled,
  IconPhone,
} from "@tabler/icons-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { useEffect } from "react";

function Contact() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <main>
      <div className="container mt-12 max-w-screen-lg animate-main px-8">
        <div className="p-8 bg-dot-black/20 dark:bg-dot-white/20 max-[350px]:p-2">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight max-[350px]:text-2xl md:text-5xl">
            Contact <span className="text-muted-foreground">Me.</span>
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-[350px]:text-base">
            Whether it's a project, a job, or a simple hello, I'm here for it.
            Reach out, and let's build the next big thing together!
          </p>
          <p className="mt-4 text-xl text-muted-foreground max-[350px]:text-base">
            (
            <span className="text-2xl tracking-tight text-foreground">
              P.S.
            </span>{" "}
            If you know{" "}
            <a
              className="text-foreground underline underline-offset-4"
              href="https://www.wuxiaworld.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wuxiaworld
            </a>{" "}
            or{" "}
            <a
              className="text-foreground underline underline-offset-4"
              href="https://www.royalroad.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Royal Road
            </a>
            , we're definitely friends)
          </p>
        </div>
        <div className="mb-6 mt-10 flex flex-wrap gap-4">
          <Card className="w-64 grow hover:bg-accent hover:text-accent-foreground active:bg-accent active:text-accent-foreground">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 max-[350px]:text-xl">
                <IconMailFilled size={28} />
                Email
              </CardTitle>
              <CardDescription className="text-lg max-[350px]:text-base">
                <a href="mailto:rajsv04@gmail.com">rajsv04@gmail.com</a>
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-64 grow hover:bg-accent hover:text-accent-foreground active:bg-accent active:text-accent-foreground">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 max-[350px]:text-xl">
                <IconPhone size={28} />
                Phone
              </CardTitle>
              <CardDescription className="text-lg max-[350px]:text-base">
                +91 636 241 6345
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-64 grow hover:bg-accent hover:text-accent-foreground active:bg-accent active:text-accent-foreground">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 max-[350px]:text-xl">
                <IconBrandLinkedin size={28} />
                LinkedIn
              </CardTitle>
              <CardDescription className="break-words text-lg max-[350px]:text-base">
                <a
                  href="https://www.linkedin.com/in/rajsv04/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.linkedin.com/in/rajsv04/
                </a>
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-64 grow hover:bg-accent hover:text-accent-foreground active:bg-accent active:text-accent-foreground">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 max-[350px]:text-xl">
                Other
              </CardTitle>
              <CardDescription className="flex gap-6 pt-4 text-lg max-[350px]:text-base">
                <a
                  href="https://github.com/rajesh-sv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandGithubFilled
                    size={28}
                    className="hover:text-foreground"
                  />
                </a>
                <a
                  href="https://x.com/rajesh__sv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandX size={28} className="hover:text-foreground" />
                </a>
                <a
                  href="https://discord.gg/VuYXwHuvZY"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandDiscordFilled
                    size={28}
                    className="hover:text-foreground"
                  />
                </a>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </main>
  );
}

export default Contact;
