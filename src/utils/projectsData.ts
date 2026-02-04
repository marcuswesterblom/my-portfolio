import { ProjectCard } from "../models/projectCard";

export const projects = [
    new ProjectCard(
        "Todo-list",
        "A frontend application built during the Frontend Developer program. It allows users to manage tasks by adding, completing, and removing todos, with a focus on JavaScript fundamentals and dynamic UI updates.",
        ["JavaScript", "SCSS", "Vite", "HTML"],
        "https://marcuswesterblom-todolist.netlify.app/",
        "https://github.com/marcuswesterblom/todo_list_fed25"
    ),
    new ProjectCard(
        "Webshop",
        "A quick description of my project",
        ["TypeScript", "SCSS", "Vite", "HTML"],
        "https://exampel.com",
        "https://github.com/marcuswesterblom/my-portfolio.git"
    ),
    new ProjectCard(
        "Portfolio",
        "A quick description of my project",
        ["TypeScript", "SCSS", "Vite", "HTML"],
        "https://exampel.com",
        "https://github.com/marcuswesterblom/my-portfolio.git"
    ),
];