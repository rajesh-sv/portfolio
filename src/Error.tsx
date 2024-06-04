import { Link } from "react-router-dom";
import { Boxes } from "./components/ui/background-boxes";

function Error() {
  return (
    <div className="relative h-dvh w-full overflow-hidden bg-black p-8 sm:p-12">
      <div className="pointer-events-none absolute inset-0 z-20 h-full w-full bg-black [mask-image:radial-gradient(transparent,white)]" />

      <Boxes />
      <h1 className="relative z-20 mt-8 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
        Opps😅, something broke!
      </h1>
      <p className="relative z-20 leading-7 text-white [&:not(:first-child)]:mt-6">
        Take a deep breadth (hold it... ) and release!
      </p>
      <p className="relative z-20 leading-7 text-white [&:not(:first-child)]:mt-6">
        Now, you can navigate to the{" "}
        <Link to="/" className="underline underline-offset-4">
          home
        </Link>{" "}
        page or...
      </p>
      <p className="relative z-20 leading-7 text-white [&:not(:first-child)]:mt-6">
        report an issue to my{" "}
        <a
          className="underline underline-offset-4"
          href="https://github.com/rajesh-sv/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          github repo
        </a>{" "}
        or...
      </p>
      <p className="relative z-20 leading-7 text-white [&:not(:first-child)]:mt-6">
        play with the colorful boxes in the background!
      </p>
      <p className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 text-sm text-neutral-300 [&:not(:first-child)]:mt-6">
        Built using{" "}
        <a
          className="underline underline-offset-4"
          href="https://ui.aceternity.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aceternity UI
        </a>
      </p>
    </div>
  );
}

export default Error;
