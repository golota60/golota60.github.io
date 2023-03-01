export interface Project {
  logo: React.ReactNode;
  title: string;
  description: string;
  githubLink: string;
  language?: "Typescript" | "Rust";
}

export const projects: Array<Project> = [
  {
    title: "yayfetch",
    description: "System information",
    logo: <img src="/yayfetch.svg" className="w-10" />,
    githubLink: "https://github.com/golota60/yayfetch",
    language: "Typescript",
  },
  {
    title: "termi-clicker",
    description: "In-terminal clicker game",
    logo: <span className="text-2xl">🤖</span>,
    githubLink: "https://github.com/golota60/termi-clicker",
    language: "Typescript",
  },
  {
    title: "idasen-tray-controller",
    description: "Idasen desk controller",
    logo: <img src="/carrot.png" className="w-10" />,
    githubLink: "https://github.com/golota60/idasen-tray-controller",
    language: "Rust",
  },
  {
    title: "and...",
    description: "a lot of small, less shiny tinkering projects",
    logo: <img src="/plus.svg" className="w-10" />,
    githubLink: "https://github.com/golota60",
  },
];
