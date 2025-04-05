import { Hero } from "@/components/hero";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IconBrandGithubFilled, IconWorld } from "@tabler/icons-react";

export function Projects() {
  return (
    <>
      <Hero>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Code<span className="text-muted-foreground">crafts.</span>
        </h1>
        <p className="text-foreground/90 mt-4 text-lg md:text-xl">
          Explore my projects, journeying from my{" "}
          <span className="text-foreground tracking-tight">
            latest creations
          </span>{" "}
          to the{" "}
          <span className="text-foreground tracking-tight">humble origins</span>{" "}
          where it all began.
        </p>
        <p className="text-foreground/90 mt-4 text-lg md:text-xl">
          This collection showcases my growth, learning path and represents
          valuable stepping stones that helped me build my current skillset.
        </p>
      </Hero>
      <div className="flex flex-wrap items-stretch justify-center gap-6">
        {projects.map((project) => {
          return (
            <CardSpotlight className="flex w-64 max-w-72 grow flex-col gap-2 overflow-clip p-0 text-sm">
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="z-20"
              >
                <img
                  src={project.img}
                  alt=""
                  className="aspect-[24/11] cursor-pointer object-fill transition-transform hover:scale-105"
                />
              </a>
              <p className="z-20 mx-4 text-base font-bold">{project.name}</p>
              <p className="z-20 mx-4">{project.description}</p>
              <ul className="z-20 mx-4 flex flex-wrap gap-2">
                {project.techStack.map((item) => (
                  <Badge className="bg-background text-foreground border-muted-background">
                    {item}
                  </Badge>
                ))}
              </ul>
              <div className="z-20 m-4 mt-auto">
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="mr-2 h-7 cursor-pointer rounded-sm p-1">
                    <IconWorld />
                    Website
                  </Button>
                </a>
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="h-7 cursor-pointer rounded-sm p-1">
                    <IconBrandGithubFilled />
                    Source
                  </Button>
                </a>
              </div>
            </CardSpotlight>
          );
        })}
      </div>
    </>
  );
}
