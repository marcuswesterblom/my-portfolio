import { ProjectCard } from "../models/projectCard";

export const projects = [
    new ProjectCard(
        "Portfolio",
        "A quick description of my project",
        ["TypeScript", "SCSS", "Vite", "HTML"],
        "https://exampel.com",
        "https://github.com/marcuswesterblom/my-portfolio.git"
    ),
    new ProjectCard(
        "Todo-list",
        "A quick description of my project",
        ["TypeScript", "SCSS", "Vite"],
        "https://exampel.com",
        "https://github.com/you/portfolio"
    ),
];