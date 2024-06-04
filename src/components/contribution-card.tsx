import { contributionType } from "@/data/contributions";
import { IconGitFork } from "@tabler/icons-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";

function ContributionCard({
  contribution,
}: {
  contribution: contributionType;
}) {
  return (
    <Card
      key={contribution.projectName}
      className="flex w-52 grow flex-col text-sm hover:bg-accent hover:text-accent-foreground active:bg-accent active:text-accent-foreground"
    >
      <CardHeader>
        <CardTitle className="text-base">
          <a>{contribution.projectName}</a>
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-0">{contribution.desc}</CardContent>
      <CardFooter className="mt-auto px-4 pb-4 pt-2">
        <a
          className="ml-auto"
          href={contribution.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconGitFork
            stroke={1}
            className="text-muted-foreground hover:text-foreground active:text-foreground"
          />
        </a>
      </CardFooter>
    </Card>
  );
}

export default ContributionCard;
