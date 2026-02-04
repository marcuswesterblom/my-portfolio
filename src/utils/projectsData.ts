import { ProjectCard } from "../models/projectCard";

export const projects = [
    new ProjectCard(
        "Webshop",
        "A group project built as part of a Frontend Development course. I was responsible for the entire cart and checkout functionality, including state management with localStorage, adding and removing products, and implementing the checkout flow using HTML, SCSS, and TypeScript. The visual design was provided as part of the assignment.",
        ["TypeScript", "SCSS", "Vite", "HTML", "Agile Project Management", "School project"],
        "https://marcurwesterblom-webshop.netlify.app/",
        "https://github.com/marcuswesterblom/webshop_fed25"
    ),
    new ProjectCard(
        "Todo-list",
        "A frontend application built during the Frontend Developer program. It allows users to manage tasks by adding, completing, and removing todos, with a focus on JavaScript fundamentals and dynamic UI updates.",
        ["JavaScript", "SCSS", "Vite", "HTML", "Tailwind", "School project"],
        "https://marcuswesterblom-todolist.netlify.app/",
        "https://github.com/marcuswesterblom/todo_list_fed25"
    )
];