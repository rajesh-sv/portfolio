import WebNovelBlog from "./components/blogs/webnovel-blog";
import BinarySearchBlog from "./components/blogs/webnovel-blog";

function Blogs() {
  return (
    <main>
      <div className="container mt-12 max-w-screen-lg animate-main px-8">
        <div className="p-8 bg-dot-black/20 dark:bg-dot-white/20 max-[350px]:p-2">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight max-[350px]:text-2xl md:text-5xl">
            Bits, Bytes <span className="text-muted-foreground">& Blogs.</span>
          </h1>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            "There are a million Paths in this world, Lindon, but any sage will
            tell you they can all be reduced to one. Improve yourself." - Will
            Wight (
            <a
              className="text-foreground underline underline-offset-4"
              href="https://www.goodreads.com/series/192821-cradle"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cradle
            </a>
            )
          </blockquote>
          <p className="mt-4 text-xl text-muted-foreground max-[350px]:text-base">
            All of my{" "}
            <span className="tracking-tight text-foreground">sage wisdom </span>{" "}
            in one place.
          </p>
          <p className="mt-4 text-xl text-muted-foreground max-[350px]:text-base">
            Here, I write about the things I like, my experiences with code and
            the things I've learned along the way.
          </p>
        </div>
        <div className="mb-6 mt-4 flex flex-col items-center">
          <BinarySearchBlog />
          <WebNovelBlog />
        </div>
      </div>
    </main>
  );
}

export default Blogs;
