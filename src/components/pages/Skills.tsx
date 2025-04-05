import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { skillsList } from "@/data/skills";

const skills = [
  {
    name: "programming",
    description: "language",
    className: "col-span-3 sm:col-span-1",
    background: (
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {skillsList
          .filter((skill) => skill.category === "programming")
          .map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <img
                src={skill.icon}
                alt={skill.name}
                className="aspect-square w-12 dark:invert"
              />
              <p>{skill.name}</p>
            </div>
          ))}
      </div>
    ),
  },
  {
    name: "frameworks",
    description: "/libraries",
    className: "col-span-3 sm:col-span-2",
    background: (
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {skillsList
          .filter((skill) => skill.category === "frameworks")
          .map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <img
                src={skill.icon}
                alt={skill.name}
                className="aspect-square w-12 dark:invert"
              />
              <p>{skill.name}</p>
            </div>
          ))}
      </div>
    ),
  },
  {
    name: "tools",
    description: "/other",
    className: "col-span-3 sm:col-span-2",
    background: (
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {skillsList
          .filter((skill) => skill.category === "tools")
          .map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <img
                src={skill.icon}
                alt={skill.name}
                className="aspect-square w-12 dark:invert"
              />
              <p>{skill.name}</p>
            </div>
          ))}
      </div>
    ),
  },
  {
    name: "database",
    description: "",
    className: "col-span-3 sm:col-span-1",
    background: (
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {skillsList
          .filter((skill) => skill.category === "database")
          .map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <img
                src={skill.icon}
                alt={skill.name}
                className="aspect-square w-12 dark:invert"
              />
              <p>{skill.name}</p>
            </div>
          ))}
      </div>
    ),
  },
];

export function Skills() {
  return (
    <div>
      <h1 className="my-10 scroll-m-20 border-b pb-2 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Skills
      </h1>
      <BentoGrid>
        {skills.map((skill, i) => (
          <BentoCard key={i} {...skill} />
        ))}
      </BentoGrid>
    </div>
  );
}
