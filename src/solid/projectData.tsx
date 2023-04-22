import type { JSX } from "solid-js";

export interface Project {
  logo: JSX.Element;
  title: string;
  description: string;
  githubLink: string;
  language?: "Typescript" | "Rust";
}

export const projects: Array<Project> = [
  {
    title: "yayfetch",
    description: "System information",
    logo: <img src="/yayfetch.svg" class="w-10" />,
    githubLink: "https://github.com/golota60/yayfetch",
    language: "Typescript",
  },
  {
    title: "fixelart",
    description: "Fix AI generated images",
    logo: <img src="" class="w-10" />,
    githubLink: "https://github.com/golota60/fixelart",
    language: "Typescript",
  },
  {
    title: "termi-clicker",
    description: "In-terminal clicker game",
    logo: <span class="text-2xl">🤖</span>,
    githubLink: "https://github.com/golota60/termi-clicker",
    language: "Typescript",
  },
  {
    title: "trayasen",
    description: "Idasen desk controller",
    logo: <img src="/carrot.png" class="w-10" />,
    githubLink: "https://github.com/golota60/trayasen",
    language: "Rust",
  },
  {
    title: "and a lot of small, less shiny tinkering projects",
    description: "",
    logo: <img src="/add-outline.svg" class="w-10" />,
    githubLink: "https://github.com/golota60",
  },
];
