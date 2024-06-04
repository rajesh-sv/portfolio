import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { skillCategoryType } from "../data/skills";

function SkillCard({ skillCategory }: { skillCategory: skillCategoryType }) {
  return (
    <Card className="w-80 max-w-96 hover:bg-accent hover:text-accent-foreground active:bg-accent active:text-accent-foreground max-[350px]:w-60">
      <CardHeader>
        <CardTitle>{skillCategory.heading}</CardTitle>
        <CardDescription>{skillCategory.subHeading}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap items-center justify-center gap-10 max-[350px]:gap-4 max-[350px]:p-0">
        {skillCategory.skillList.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <img
              src={skill.icon}
              alt={skill.name}
              className="aspect-square w-12 dark:invert max-[350px]:w-8"
            />
            <p>{skill.name}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default SkillCard;
