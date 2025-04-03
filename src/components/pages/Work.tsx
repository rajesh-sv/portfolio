import { Hero } from "@/components/hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { experiences } from "@/data/experiences";

export function Work() {
  return (
    <>
      <Hero>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Applying <span className="text-muted-foreground">Code.</span>
        </h1>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
          Achieving <span className="text-muted-foreground">Goals.</span>
        </h1>
        <p className="text-foreground/90 mt-4 text-lg md:text-xl">
          My journey into software development has led me to apply my skills in
          practical settings. I thrive on translating complex problems into
          functional, efficient software, always eager to learn and contribute
          to team success. Below is a summary of my professional experience:
        </p>
      </Hero>
      <Accordion type="single" collapsible className="w-full p-4">
        {experiences.map((experience) => {
          return (
            <AccordionItem value={experience.id} key={experience.id}>
              <AccordionTrigger className="cursor-pointer">
                <div>
                  <p className="text-lg font-bold">{experience.company}</p>
                  <p className="text-base font-semibold">
                    {experience.jobRole}
                  </p>
                  <p className="text-muted-foreground">{experience.time}</p>
                  <p className="text-muted-foreground">{experience.location}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="mx-6 list-disc text-base sm:px-10 sm:text-justify [&>li]:mt-2">
                  {experience.points.map((point) => (
                    <li>{point}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
}
