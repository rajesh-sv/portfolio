import htmlIcon from "../assets/icons/html.svg";
import cssIcon from "../assets/icons/css.svg";
import javascriptIcon from "../assets/icons/javascript.svg";
import typescriptIcon from "../assets/icons/typescript.svg";
import reactIcon from "../assets/icons/react.svg";
import viteIcon from "../assets/icons/vite.svg";
import tailwindIcon from "../assets/icons/tailwindcss.svg";
import shadcnIcon from "../assets/icons/shadcn.svg";
import nodeIcon from "../assets/icons/nodejs.svg";
import expressIcon from "../assets/icons/express.svg";
import pugIcon from "../assets/icons/pug.svg";
import mongoIcon from "../assets/icons/mongodb.svg";
import mantineIcon from "../assets/icons/mantine.svg";
import portfolioImg from "../assets/images/projects/portfolio-light.png";
import todoImg from "../assets/images/projects/todos-to-do.png";
import wuxiaLibImg from "../assets/images/projects/wuxia-lib.png";
import shoppingCartImg from "../assets/images/projects/shopping-cart.png";
import pokeMemoImg from "../assets/images/projects/poke-memo.png";
import tictactoeImg from "../assets/images/projects/tic-tac-toe.png";
import etchASketchImg from "../assets/images/projects/etch-a-sketch.png";

export type projectType = {
  name: string;
  desc: string;
  img: string;
  liveLink: string;
  codeLink: string;
  icons: string[];
};

export const projects: projectType[] = [
  {
    name: "Portfolio",
    desc: "The website you are currently exploring. I hope you finding it user-friendly and visually pleasing. By the way, check out the error page by visiting a random path like '/error' - I think you'll find it impressive!",
    img: portfolioImg,
    liveLink: "https://portfolio.rajesh-sv.dev/",
    codeLink: "https://github.com/rajesh-sv/portfolio",
    icons: [typescriptIcon, reactIcon, viteIcon, tailwindIcon, shadcnIcon],
  },
  {
    name: "Todo's to Do",
    desc: "Get organized and conquer your to-do list! This web app lets you create, categorize, and prioritize tasks, all while remaining accessible offline thanks to local storage. No account or internet connection required!",
    img: todoImg,
    liveLink: "https://todos-to-do.rajesh-sv.dev/",
    codeLink: "https://github.com/rajesh-sv/todos-to-do",
    icons: [typescriptIcon, reactIcon, viteIcon, mantineIcon],
  },
  {
    name: "Wuxia-Lib",
    desc: "A traditional library management system developed to learn and implement Express.js with MongoDB. This project covers the basics of CRUD operations in a web application.",
    img: wuxiaLibImg,
    liveLink: "https://wuxia-lib.rajesh-sv.dev/",
    codeLink: "https://github.com/rajesh-sv/wuxia-lib",
    icons: [nodeIcon, expressIcon, pugIcon, mongoIcon],
  },
  {
    name: "Shopping Cart",
    desc: "A React-based project aimed at honing front-end development skills. This shopping cart application includes essential features such as item selection, quantity adjustment, and checkout.",
    img: shoppingCartImg,
    liveLink: "https://shopping-cart.rajesh-sv.dev/",
    codeLink: "https://github.com/rajesh-sv/odin-shopping-cart",
    icons: [typescriptIcon, reactIcon, viteIcon, mantineIcon],
  },
  {
    name: "PokéMemo Game",
    desc: "Challenge your memory with this simple game featuring Pokémon cards. Stop calling yourself a Pokémon fan if you don't score full points in your first try!",
    img: pokeMemoImg,
    liveLink: "https://poke-memo-game.rajesh-sv.dev/",
    codeLink: "https://github.com/rajesh-sv/odin-memory-game",
    icons: [reactIcon, viteIcon],
  },
  {
    name: "Tic-Tac-Toe",
    desc: "Feeling nostalgic? Challenge a friend to a classic game of Tic-Tac-Toe. Built with SOLID principles for a clean and maintainable codebase.",
    img: tictactoeImg,
    liveLink: "https://tic-tac-toe.rajesh-sv.dev/",
    codeLink: "https://github.com/rajesh-sv/odin-tic-tac-toe",
    icons: [htmlIcon, cssIcon, javascriptIcon],
  },
  {
    name: "Etch-a-Sketch",
    desc: "Unleash your inner pixel artist! Draw anything you can imagine on customizable grids ranging from 16x16 to 128x128. This project enhanced my skills in DOM manipulation.",
    img: etchASketchImg,
    liveLink: "https://etch-a-sketch.rajesh-sv.dev/",
    codeLink: "https://github.com/rajesh-sv/odin-etch-a-sketch",
    icons: [htmlIcon, cssIcon, javascriptIcon],
  },
];
