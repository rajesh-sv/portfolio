import { IconX } from "@tabler/icons-react";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "../ui/drawer";
import { ScrollArea } from "../ui/scroll-area";

function AskingForHelpBlog() {
  return (
    <div className="max-w-3xl rounded-lg p-4 hover:bg-accent hover:text-accent-foreground active:bg-accent active:text-accent-foreground sm:p-6">
      <blockquote className="border-l-2 pl-2 text-sm italic sm:pl-6 sm:text-base">
        Sunday June 9, 2024
      </blockquote>
      <h2 className="scroll-m-20 border-b pb-2 text-lg font-semibold tracking-tight first:mt-0 sm:mt-2 sm:text-2xl">
        Asking for Help in the Software Industry
      </h2>
      <p className="line-clamp-2 text-sm leading-5 sm:text-base sm:leading-6">
        In the software industry, asking for help is a regular part of the job,
        unless you’re a genius. This blog offers concise tips to make the
        process smoother for you and more pleasant for the person assisting you.
      </p>
      <Drawer>
        <DrawerTrigger>
          <Button variant="link" className="test-xs p-0 sm:p-2 sm:text-sm">
            Read More
          </Button>
        </DrawerTrigger>
        <DrawerContent className="top-0 mt-0">
          <div className="mx-auto flex w-full max-w-3xl items-center p-2">
            <div className="mx-auto h-2 w-[100px] rounded-full bg-muted" />
            <DrawerClose className="mr-3">
              <IconX stroke={1} />
            </DrawerClose>
          </div>
          <div className="mx-auto h-full max-w-3xl">
            <ScrollArea className="h-5/6 p-4">
              <blockquote className="border-l-2 pl-2 text-sm italic sm:pl-6 sm:text-base">
                Sunday June 9, 2024
              </blockquote>
              <h1 className="mt-4 scroll-m-20 border-b pb-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Asking for Help in the Software Industry
              </h1>
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                In the software industry, asking for help is a regular part of
                the job, unless you’re a genius. This blog offers concise tips
                to make the process smoother for you and more pleasant for the
                person assisting you. For a deeper dive, check out the original
                articles from{" "}
                <a
                  className="underline underline-offset-4"
                  href="https://www.theodinproject.com/lessons/foundations-asking-for-help"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Odin Project
                </a>
                ,{" "}
                <a
                  className="underline underline-offset-4"
                  href="https://nohello.net/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  No Hello
                </a>
                ,{" "}
                <a
                  className="underline underline-offset-4"
                  href="https://xyproblem.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  XY Problem
                </a>
                , and{" "}
                <a
                  className="underline underline-offset-4"
                  href="https://medium.com/@gordon_zhu/how-to-be-great-at-asking-questions-e37be04d0603"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Medium
                </a>
                .
              </p>
              <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight sm:text-3xl">
                Tip 1: Say More Than Just "Hi" or "Hello"
              </h2>
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                When initiating a conversation, always include your question
                right after your greeting. Avoid sending a standalone "Hi" or
                "Hello" message. If the person you’re reaching out to is away,
                they can respond to your question upon their return instead of
                being met with a vague greeting.
              </p>
              <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight sm:text-3xl">
                Tip 2: Avoid the XY Problem
              </h2>
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                The XY problem occurs when you ask about your attempted solution
                Y instead of your actual problem X. Always ask about your
                primary problem X directly.
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                Asking for a solution to problem Y often leads to wasted time
                because people may not understand why you need to solve Y. Even
                if you get help and solve Y, it might not work for problem X as
                you originally thought.
              </p>
              <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight sm:text-3xl">
                Tip 3: Help Yourself First
              </h2>
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                Before asking others for help, try to solve the problem
                yourself. Here are some strategies:
              </p>
              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>Divide the problem into smaller, manageable parts</li>
                <li>
                  Look up solutions for the specific sub-problem you are facing
                </li>
                <li>
                  Read and understand error messages; they often contain clues
                </li>
                <li>
                  Check for typos - simple mistakes can cause big problems
                </li>
                <li>Use debugging tools to step through your code</li>
                <li>Thoroughly review relevant documentation</li>
                <li>
                  Take breaks - sometimes stepping away can provide new insights
                </li>
                <li>
                  Rubber Ducking - Explain your code line by line to a rubber
                  duck (or a patient listener)
                </li>
              </ul>
              <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight sm:text-3xl">
                Tip 4: Crafting Great Coding Questions
              </h2>
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                When you do ask for help, make sure to:
              </p>
              <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
                <li>
                  Understand Your Code: Familiarize yourself with the code as
                  much as possible
                </li>
                <li>
                  Describe the Problem Clearly: Provide a detailed description
                  of the issue
                </li>
                <li>
                  Share Relevant Code: Include the specific code snippet that
                  illustrates the problem
                </li>
                <li>
                  Ensure Reproducibility: Make sure the shared code can
                  reproduce the problem
                </li>
                <li>
                  Format Code Consistently: Use consistent formatting to improve
                  readability
                </li>
                <li>Check for Typos: Ensure there are no typing mistakes</li>
                <li>
                  Explain Troubleshooting Steps: Detail what you’ve done to
                  resolve the issue
                </li>
                <li>
                  Offer Your Insights: Share what you think might be causing the
                  problem
                </li>
                <li>
                  Proofread Your Question: Review your question for clarity and
                  completeness
                </li>
                <li>
                  Updates: Send updates and remember this will not be your last
                  question
                </li>
              </ol>
              <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight sm:text-3xl">
                Tip 5: Acknowledge Solutions
              </h2>
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                Once you find a solution, update your post or comment to include
                the answer. This helps others who encounter similar problems and
                shows appreciation to those who assisted you.
              </p>
            </ScrollArea>
          </div>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default AskingForHelpBlog;
