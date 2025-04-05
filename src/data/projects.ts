import portfolioImg from "../assets/images/projects/portfolio-dark.png";
import daoistDialogueImg from "../assets/images/projects/daoist-dialogue.png";
import todoImg from "../assets/images/projects/todos-to-do.png";
import wuxiaLibImg from "../assets/images/projects/wuxia-lib.png";
import pokeMemoImg from "../assets/images/projects/poke-memo.png";
import tictactoeImg from "../assets/images/projects/tic-tac-toe.png";
import etchASketchImg from "../assets/images/projects/etch-a-sketch.png";

export type projectType = {
  name: string;
  description: string;
  img: string;
  website: string;
  source: string;
  techStack: string[];
};

export const projects: projectType[] = [
  {
    name: "Portfolio",
    description:
      "The website you are currently exploring. I hope you finding it user-friendly and visually pleasing.",
    img: portfolioImg,
    website: "https://portfolio.rajesh-sv.dev/",
    source: "https://github.com/rajesh-sv/portfolio",
    techStack: [
      "Typescript",
      "Firebase",
      "React.js",
      "TailwindCSS",
      "shadcn/ui",
      "Magic UI",
      "Aceternity UI",
      "Vite",
    ],
  },
  {
    name: "Daoist Dialogue",
    description:
      "A chat application inspired by the timeless tales of Xianxia. This app is designed to provide daoists with a seamless and engaging dao discussion.",
    img: daoistDialogueImg,
    website: "https://daoist-dialogue.rajesh-sv.dev/",
    source: "https://github.com/rajesh-sv/daoist-dialogue",
    techStack: [
      "Javascript",
      "Typescript",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "JWT",
      "React.js",
      "React Router",
      "TailwindCSS",
      "shadcn/ui",
      "Vite",
    ],
  },
  {
    name: "Todo's to Do",
    description:
      "Get organized and conquer your to-do list! This web app lets you create, categorize, and prioritize tasks, all while remaining accessible offline thanks to local storage. No account or internet connection required!",
    img: todoImg,
    website: "https://todos-to-do.rajesh-sv.dev/",
    source: "https://github.com/rajesh-sv/todos-to-do",
    techStack: [
      "Typescript",
      "Web Storage API",
      "React.js",
      "React Router",
      "Mantine",
      "Vite",
    ],
  },
  {
    name: "Wuxia-Lib",
    description:
      "A traditional library management system developed to learn and implement Express.js with MongoDB. This project covers the basics of CRUD operations in a web application.",
    img: wuxiaLibImg,
    website: "https://wuxia-lib.rajesh-sv.dev/",
    source: "https://github.com/rajesh-sv/wuxia-lib",
    techStack: ["Javascript", "MongoDB", "Node.js", "Express.js", "Pug.js"],
  },
  {
    name: "PokéMemo Game",
    description:
      "Challenge your memory with this simple game featuring Pokémon cards. Stop calling yourself a Pokémon fan if you don't score full points in your first try!",
    img: pokeMemoImg,
    website: "https://poke-memo-game.rajesh-sv.dev/",
    source: "https://github.com/rajesh-sv/odin-memory-game",
    techStack: ["Javascript", "PokéAPI", "React.js", "Vite"],
  },
  {
    name: "Etch-a-Sketch",
    description:
      "Unleash your inner pixel artist! Draw anything you can imagine on customizable grids ranging from 16x16 to 128x128. This project enhanced my skills in DOM manipulation.",
    img: etchASketchImg,
    website: "https://etch-a-sketch.rajesh-sv.dev/",
    source: "https://github.com/rajesh-sv/odin-etch-a-sketch",
    techStack: ["HTML", "CSS", "Javascript"],
  },
  {
    name: "Tic-Tac-Toe",
    description:
      "Feeling nostalgic? Challenge a friend to a classic game of Tic-Tac-Toe. Built with SOLID principles for a clean and maintainable codebase.",
    img: tictactoeImg,
    website: "https://tic-tac-toe.rajesh-sv.dev/",
    source: "https://github.com/rajesh-sv/odin-tic-tac-toe",
    techStack: ["HTML", "CSS", "Javascript"],
  },
];
