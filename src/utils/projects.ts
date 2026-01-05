import { projects } from "./projectsData";

export const projectsListener = () => {
    const containerProjects = document.getElementById("containerProjects");
    const containerSpan = document.getElementById("containerSpan");
    const containerDark = document.getElementById("containerDark");
    if (!containerSpan || !containerDark || !containerProjects) return;

      containerSpan.addEventListener("mouseenter", () => {
        containerSpan.classList.add("hover");
        containerSpan.style.zIndex = "3";
    });
    containerSpan.addEventListener("mouseleave", () => {
        containerSpan.classList.remove("hover");
        containerSpan.style.zIndex = "1";
    });

    containerSpan.addEventListener("click", () => {
        containerDark.classList.remove("show");
        containerProjects?.classList.remove("show");
    });

    projects.forEach(project => {
        const cardContainer = document.createElement("div");
        const cardTitle = document.createElement("h3");
        const cardDescription = document.createElement("p");
        const keywords = document.createElement("p");
        const bttnDiv = document.createElement("div");
        const liveBttn = document.createElement("a");
        const gitBttn = document.createElement("a");

        cardContainer.id = "cardContainer";
        cardTitle.textContent = project.title;
        cardTitle.id = "cardTitle";
        cardDescription.id = "cardDescription";
        cardDescription.textContent = project.description;
        keywords.innerHTML = project.keywords.join(", ");
        keywords.id = "keywords";
        liveBttn.id = "liveBttn";
        liveBttn.textContent = "Live";
        liveBttn.href = project.liveBttn;
        liveBttn.target = "_blank";
        gitBttn.id = "gitBttn";
        gitBttn.href = project.gitBttn;
        gitBttn.target = "_blank";
        gitBttn.textContent = "Git";
        bttnDiv.id = "bttnDiv";


        containerProjects.appendChild(cardContainer);
        cardContainer.appendChild(cardTitle);
        cardContainer.appendChild(cardDescription);
        cardContainer.appendChild(keywords);
        cardContainer.appendChild(bttnDiv);
        bttnDiv.appendChild(liveBttn);
        bttnDiv.appendChild(gitBttn);

    });
}