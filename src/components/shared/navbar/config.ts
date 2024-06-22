import { Github, LucideIcon } from "lucide-react";

export interface Link {
  label: string;
  icon: LucideIcon;
  href: string;
  type: "link" | "button";
}

type Links = Link[];

const links: Links = [
  {
    label: "Github",
    icon: Github,
    href: "https://github.com/devnadeemashraf/shadcn-ui-theme-editor",
    type: "button",
  },
];

export default links;
