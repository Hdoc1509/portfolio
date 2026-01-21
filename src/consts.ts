import type { iconPaths } from "./components/IconPaths";

export type ProjectEntry = {
  description: string;
  image: string;
  imageAlt: string;
  title: string;
  url: string;
  repoUrl: string;
  tools: string[];
};

type IconLink = {
  label: string;
  href: string;
  icon: keyof typeof iconPaths;
};

export const iconLinks: IconLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hdocdev",
    icon: "linkedin-logo",
  },
  { label: "GitHub", href: "https://github.com/Hdoc1509", icon: "github-logo" },
  {
    label: "Send email",
    href: "mailto:hector.ochoa.dev@gmail.com",
    icon: "envelop-simple",
  },
];

// TODO: add `Five Hands Poker`
export const projects: ProjectEntry[] = [
  {
    title: "hrc",
    image: "https://hdoc1509.github.io/hrc/og.png?v=1.2", // follow querystring from hrc repo
    imageAlt: "Build your React app with hrc",
    description: `Simple and extensible components with minimalistic design for your React app.`,
    url: "https://hdoc1509.github.io/hrc",
    repoUrl: `https://github.com/Hdoc1509/hrc`,
    tools: ["React", "TypeScript", "SASS"],
  },
  {
    title: "Guess the Word Game",
    image: "https://i.imgur.com/gJtlL09.png",
    imageAlt: "Guess the Word Game",
    description: `A simple game (or not?) where the user has to guess the scrambled word. There are +7400 words to be discovered in different levels.`,
    url: "https://hdoc1509.github.io/dev-challenges/guess-the-word",
    repoUrl: `https://github.com/Hdoc1509/dev-challenges/tree/master/vanilla/guess-the-word`,
    tools: ["JavaScript", "CSS", "HTML"],
  },
];
