import { IconExternalLink, IconSourceCode } from "@tabler/icons-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import { projectType } from "@/data/projects";

function ProjectCard({ project }: { project: projectType }) {
  return (
    <Card
      key={project.name}
      className="flex h-full flex-col overflow-clip text-sm"
    >
      <img
        src={project.img}
        alt=""
        className="object-cover transition-transform hover:scale-105"
      />
      <CardHeader>
        <CardTitle className="text-base">
          <a>{project.name}</a>
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-0">{project.desc}</CardContent>
      <CardFooter className="mt-auto gap-2 p-4">
        <div className="mr-auto flex items-center justify-center gap-1 dark:invert sm:gap-2">
          {project.icons.map((icon) => {
            return <img src={icon} alt="" className="w-6" />;
          })}
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild className="ml-auto">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconExternalLink
                  stroke={1}
                  className="text-muted-foreground hover:text-foreground active:text-foreground"
                />
              </a>
            </TooltipTrigger>
            <TooltipContent sideOffset={10}>
              <small className="rounded-md border bg-popover px-3 py-1.5 text-xs text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
                Live Link
              </small>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconSourceCode
                  stroke={1}
                  className="text-muted-foreground hover:text-foreground active:text-foreground"
                />
              </a>
            </TooltipTrigger>
            <TooltipContent sideOffset={10}>
              <small className="rounded-md border bg-popover px-3 py-1.5 text-xs text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
                Source Code
              </small>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
