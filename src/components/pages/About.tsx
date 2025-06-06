import { Hero } from "../hero";
import profileImg from "@/assets/images/profile.jpg";
import { ShineBorder } from "@/components/magicui/shine-border";
import { Card, CardContent } from "@/components/ui/card";
import { Skills } from "@/components/pages/Skills";
import { WordRotate } from "@/components/magicui/word-rotate";
import { useEffect } from "react";

export function About() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Hero>
        <Card className="relative float-end ml-4 max-w-64 min-w-34 overflow-hidden rounded-3xl p-0 max-[510px]:w-34 sm:mr-6">
          <ShineBorder
            shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            borderWidth={2}
            duration={8}
          />
          <CardContent className="p-0">
            <img src={profileImg} alt="Profile picture" />
          </CardContent>
        </Card>
        <h1 className="mt-2 text-2xl font-extrabold tracking-tight min-[400px]:text-4xl md:text-5xl">
          Hey! I'm{" "}
          <WordRotate
            className="text-muted-foreground"
            words={["Rajesh Vansjalia.", "a Software Dev."]}
          />
        </h1>
        <p className="text-foreground/90 mt-4 text-lg md:text-xl">
          <span className="text-foreground text-2xl font-semibold tracking-tight">
            TL;DR
          </span>{" "}
          Coding by day, defeating dragons by night (in web novels), sci-fi
          fanatic & competitive programmer.
        </p>
      </Hero>
      <div className="mx-6 grid gap-4 text-lg leading-7">
        <p>
          As a Data Engineer, I design and optimize data solutions using Oracle
          Fusion Data Intelligence (FDI) while automating workflows through
          Python. I have also developed fully functional web applications using
          React.js, TailwindCSS, Node.js, Express.js, MongoDB, PostgreSQL, AWS
          S3, Firebase, Kafka, Elasticsearch, and Docker; which builds over my
          professional experience and provides extra value to software
          development teams.
        </p>
        {/* <p>
          I also enjoy tackling complex problems, which is why I regularly
          participate in coding contests. I am a{" "}
          <span className="font-semibold">Guardian</span> on{" "}
          <a
            className="underline underline-offset-4"
            href="https://leetcode.com/u/rajesh_sv"
            target="_blank"
            rel="noopener noreferrer"
          >
            Leetcode
          </a>{" "}
          BTW (😎signature look of superiority).
        </p> */}
        <p>
          When I'm not coding, you'll likely find me reading on{" "}
          <a
            className="underline underline-offset-4"
            href="https://www.wuxiaworld.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wuxiaworld
          </a>{" "}
          or{" "}
          <a
            className="underline underline-offset-4"
            href="https://www.royalroad.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Royal Road
          </a>
          . My favorite genres include sci-fi, fantasy, and xianxia.
        </p>
        <p>
          On weekends, I enjoy cooking with my mother, binge watching shows, or
          tinkering with my computer.
        </p>
        <p>
          And as is mandatory for any Neovim user,{" "}
          <span className="font-semibold">I use Neovim BTW</span>.
        </p>
      </div>
      <Skills />
    </>
  );
}
