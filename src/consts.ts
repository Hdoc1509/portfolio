import type { iconPaths } from "./components/IconPaths";

export const iconLinks: {
  label: string;
  href: string;
  icon: keyof typeof iconPaths;
}[] = [
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
