export type contributionType = {
  projectName: string;
  desc: string;
  link: string;
};

export const contributions: contributionType[] = [
  {
    projectName: "portfolio",
    desc: "A publicly available personal portfolio website built with React, TailwindCSS, and Shadcn-UI. Explore the code to gain insights and inspiration for creating your own portfolio website.",
    link: "https://github.com/rajesh-sv/portfolio",
  },
  {
    projectName: "daoist-dialogue",
    desc: "I have open-sourced my chat application, Daoist Dialogue, inspired by the timeless tales of Xianxia. Built with Express.js, Socket.io, and React, this app offers a seamless and engaging platform for daoists to discuss and share their dao insights.",
    link: "https://github.com/rajesh-sv/daoist-dialogue",
  },
];
