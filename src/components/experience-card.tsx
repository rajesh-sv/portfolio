import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { experienceType } from "@/data/experiences";

function ExperienceCard({ experience }: { experience: experienceType }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">
          <div className="flex justify-between">
            <p>{experience.company}</p>
            <p>{experience.location}</p>
          </div>
        </CardTitle>
        <CardDescription className="text-xs">
          <div className="flex justify-between">
            <p>{experience.jobRole}</p>
            <p>{experience.time}</p>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="my-6 ml-6 list-disc text-xs sm:text-sm [&>li]:mt-2">
          {experience.points.map((point) => (
            <li>{point}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default ExperienceCard;
