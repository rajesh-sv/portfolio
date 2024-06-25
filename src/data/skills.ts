import pythonIcon from "../assets/icons/python.svg";
import javascriptIcon from "../assets/icons/javascript.svg";
import typescriptIcon from "../assets/icons/typescript.svg";
import javaIcon from "../assets/icons/java.svg";
import sqlIcon from "../assets/icons/sql.svg";
import nodeIcon from "../assets/icons/nodejs.svg";
import expressIcon from "../assets/icons/express.svg";
import socketioIcon from "../assets/icons/socketio.svg";
import reactIcon from "../assets/icons/react.svg";
import tailwindIcon from "../assets/icons/tailwindcss.svg";
import shadcnIcon from "../assets/icons/shadcn.svg";
import mongoIcon from "../assets/icons/mongodb.svg";
import oracleIcon from "../assets/icons/oracle.svg";
import gitIcon from "../assets/icons/git.svg";
import githubIcon from "../assets/icons/github.svg";
import npmIcon from "../assets/icons/npm.svg";
import viteIcon from "../assets/icons/vite.svg";
import postmanIcon from "../assets/icons/postman.svg";
import jestIcon from "../assets/icons/jest.svg";
import webpackIcon from "../assets/icons/webpack.svg";
import linuxIcon from "../assets/icons/linux.svg";
import vimIcon from "../assets/icons/vim.svg";

export type skillCategoryType = {
  name: string;
  heading: string;
  subHeading: string;
  skillList: {
    name: string;
    icon: string;
  }[];
};

export const skillCategories: skillCategoryType[] = [
  {
    name: "programming",
    heading: "Programming",
    subHeading: "language",
    skillList: [
      { name: "Python", icon: pythonIcon },
      { name: "Javascript", icon: javascriptIcon },
      { name: "Typescript", icon: typescriptIcon },
      { name: "Java", icon: javaIcon },
      { name: "SQL", icon: sqlIcon },
    ],
  },
  {
    name: "framework",
    heading: "Framework",
    subHeading: "/library",
    skillList: [
      { name: "Node.js", icon: nodeIcon },
      { name: "Express", icon: expressIcon },
      { name: "Socket.io", icon: socketioIcon },
      { name: "React", icon: reactIcon },
      { name: "Tailwind CSS", icon: tailwindIcon },
      { name: "shadcn/ui", icon: shadcnIcon },
    ],
  },
  {
    name: "database",
    heading: "Database",
    subHeading: "/cache",
    skillList: [
      {
        name: "MongoDB",
        icon: mongoIcon,
      },
      {
        name: "Oracle ADW",
        icon: oracleIcon,
      },
    ],
  },
  {
    name: "tool",
    heading: "Tool",
    subHeading: "/other",
    skillList: [
      { name: "Git", icon: gitIcon },
      { name: "Github", icon: githubIcon },
      { name: "npm", icon: npmIcon },
      { name: "Vite", icon: viteIcon },
      { name: "Postman", icon: postmanIcon },
      { name: "Jest", icon: jestIcon },
      { name: "Webpack", icon: webpackIcon },
      { name: "Linux", icon: linuxIcon },
      { name: "Vim", icon: vimIcon },
    ],
  },
];
