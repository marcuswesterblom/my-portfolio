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
}