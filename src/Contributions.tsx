import ContributionCard from "./components/contribution-card";
import { contributions } from "./data/contributions";
import workInProgressImg from "./assets/images/work-in-progress.png";
import { useEffect } from "react";

function Contributions() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <main>
      <div className="container mt-12 max-w-screen-lg animate-main px-8">
        <div className="p-8 bg-dot-black/20 dark:bg-dot-white/20 max-[350px]:p-2">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight max-[350px]:text-2xl md:text-5xl">
            My Open Source <span className="text-muted-foreground">Codex.</span>
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-[350px]:text-base">
            Welcome to the land of{" "}
            <span className="tracking-tight text-foreground">caffeinated</span>{" "}
            commits!
          </p>
          <p className="mt-4 text-xl text-muted-foreground max-[350px]:text-base">
            Here, you'll find a record of my adventures in the{" "}
            <span className="tracking-tight text-foreground">open source</span>{" "}
            world. Witness the code fueled by countless cups of coffee and the
            journey of learning, giving back, and making a difference.
          </p>
        </div>
        <div className="mb-6 mt-10 flex flex-wrap gap-4">
          {contributions.length ? (
            contributions.map((contribution) => {
              return <ContributionCard contribution={contribution} />;
            })
          ) : (
            <div className="mx-auto">
              <h2 className="scroll-m-20 text-center text-2xl font-semibold tracking-tight first:mt-0 sm:text-3xl">
                Work in progress!
              </h2>
              <img src={workInProgressImg} alt="" />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Contributions;
