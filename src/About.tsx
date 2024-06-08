import profileImg from "./assets/images/profile.jpg";
import { skillCategories } from "./data/skills";
import SkillCard from "./components/skill-card";
import { motion } from "framer-motion";
import { useEffect } from "react";

function About() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <main>
      <div className="container mt-12 max-w-screen-lg animate-main px-8">
        <div className="flex items-start gap-4 p-8 bg-dot-black/20 dark:bg-dot-white/20 max-[350px]:p-2">
          <div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight max-[470px]:text-3xl max-[400px]:text-2xl md:text-5xl">
              Hey! I'm{" "}
              <span className="text-muted-foreground">Rajesh Vansjalia.</span>
            </h1>
            <p className="mt-4 hidden text-xl text-muted-foreground md:block">
              <span className="text-2xl font-semibold tracking-tight text-foreground">
                TL;DR
              </span>{" "}
              Code by day, defeating dragons by night (in web novels). Sci-fi
              fanatic & competitive programmer.
            </p>
          </div>
          <img
            src={profileImg}
            alt="Profile picture"
            className="ml-auto aspect-square w-40 flex-none rounded-3xl bg-cover max-[470px]:w-28 max-[470px]:rounded-xl max-[350px]:w-20 md:w-48"
          />
        </div>
        <p className="mt-4 text-xl text-muted-foreground md:hidden">
          <span className="text-2xl font-semibold tracking-tight text-foreground">
            TL;DR
          </span>{" "}
          Code by day, defeating dragons by night (in web novels). Sci-fi
          fanatic & competitive programmer.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          I'm an aspiring Software Developer with a passion for coding and
          technology. My journey began in late 2022 after watching the show{" "}
          <a
            className="italic underline underline-offset-4"
            href="https://www.imdb.com/title/tt2575988/?ref_=ext_shr_lnk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Silicon Valley
          </a>
          , which ignited my fascination with the power and creativity inherent
          in software development. Inspired by the ability to build the next big
          thing, I decided to pursue a career in this field.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Programming, to me, is a continuous journey of growth and skill
          development, much like leveling up in{" "}
          <span className="font-semibold">RPG</span> games. I thrive on
          exploring new concepts and continuously learning. Currently, I focus
          on developing with <span className="font-semibold">React.js</span>,{" "}
          <span className="font-semibold">Node.js</span>, and{" "}
          <span className="font-semibold">Express.js</span>.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
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
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          When I'm not coding, you'll likely find me absorbed in reading on{" "}
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
          . My favorite genres include sci-fi, fantasy, and xianxia. On
          weekends, I enjoy cooking with my mother, binge-watching shows, or
          tinkering with my computer.
        </p>
        <h1 className="mt-10 scroll-m-20 border-b pb-2 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Skills
        </h1>
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
          viewport={{ margin: "500px" }}
          className="container my-6 flex flex-wrap justify-center gap-4 p-4"
        >
          {skillCategories.map((skillCategory) => {
            return (
              <motion.li
                key={skillCategory.name}
                className="item"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                  },
                }}
              >
                <SkillCard skillCategory={skillCategory} />
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </main>
  );
}

export default About;
