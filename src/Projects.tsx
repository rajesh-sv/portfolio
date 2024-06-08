import { useEffect } from "react";
import ProjectCard from "./components/project-card";
import { projects } from "./data/projects";
import { motion } from "framer-motion";

function Projects() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <main>
      <div className="container mt-12 max-w-screen-lg animate-main px-8">
        <div className="p-8 bg-dot-black/20 dark:bg-dot-white/20 max-[350px]:p-2">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight max-[350px]:text-2xl md:text-5xl">
            Code
            <span className="text-muted-foreground">crafts.</span>
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-[350px]:text-base">
            Explore my projects, journeying from my{" "}
            <span className="tracking-tight text-foreground">
              latest creations
            </span>{" "}
            to the{" "}
            <span className="tracking-tight text-foreground">
              humble origins
            </span>{" "}
            where it all began.
          </p>
          <p className="mt-4 text-xl text-muted-foreground max-[350px]:text-base">
            This collection showcases my growth and learning path, including
            projects from{" "}
            <a
              className="text-foreground underline underline-offset-4"
              href="https://www.theodinproject.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Odin Project
            </a>
            . These projects represent valuable stepping stones that helped me
            build my current skillset.
          </p>
        </div>
        <motion.ul
          variants={{
            hidden: { opacity: 1, scale: 0 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "1200px" }}
          className="mb-6 mt-10 flex flex-wrap justify-center gap-8"
        >
          {projects.map((project) => {
            return (
              <motion.li
                key={project.name}
                className="item w-64 max-w-72 grow"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                  },
                }}
              >
                <ProjectCard project={project} />
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </main>
  );
}

export default Projects;
