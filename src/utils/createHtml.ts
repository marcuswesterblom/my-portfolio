export const createHtml = () => {
    const wrapper = document.getElementById("wrapper");
    const navBar = document.getElementById("navBar");
    const containerHome = document.getElementById("containerHome");
    const containerAll = document.getElementById("containerAll");
    const containerProjects = document.getElementById("containerProjects");
    const containerAbout = document.getElementById("containerAbout");
    const containerIntroduction = document.getElementById("containerIntroduction");
    
    const containerSpan = document.createElement("div");
    const competencesContainer = document.createElement("div");
    const containerTextHome = document.createElement("div");
    const h1 = document.createElement("h1");
    const headingHome = document.createElement("h2");
    const nav = document.createElement("nav");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    const spanContainer = document.createElement("span");
    const span3 = document.createElement("span");
    const projectTitle = document.createElement("h2");

    competencesContainer.id = "competencesContainer";
    containerTextHome.id = "containerTextHome";
    h1.textContent = "Marcus Westerblom";
    headingHome.textContent = "Front end developer";
    nav.id = "nav";
    span1.id = "span1";
    span2.id = "span2";
    span3.id = "span3";
    containerSpan.id = "containerSpan";
    spanContainer.id = "spanContainer";
    projectTitle.id = "projectTitle";
    projectTitle.textContent = "Projects";

    containerHome?.appendChild(containerTextHome);
    containerTextHome?.appendChild(h1);
    containerTextHome.appendChild(headingHome);
    navBar?.appendChild(spanContainer);
    spanContainer?.appendChild(span1);
    spanContainer?.appendChild(span2);
    navBar?.appendChild(nav);
    containerProjects?.appendChild(containerSpan);
    containerProjects?.appendChild(projectTitle);
    containerSpan?.appendChild(span3);
    containerIntroduction?.appendChild(competencesContainer);

    const links = [
        { text: "Projects", href: "#", id: "projectsBttn" },
        { text: "Contact me", href: "#", id: "contactBttn" }
    ];

    links.forEach(link => {
        const a = document.createElement("a");
        const containerDark = document.getElementById("containerDark");
        a.textContent = link.text;
        a.href = link.href;
        a.id = link.id;

        if (link.id === "projectsBttn") {
        a.addEventListener("click", (e) => {
        e.preventDefault();
        containerProjects?.classList.add("show");
        containerDark?.classList.add("show");
    });
        }
        nav.appendChild(a);
    });

    const competences = [
        { text: "HTML" },
        { text: "SCSS" },
        { text: "TYPESCRIPT" },
        { text: "NODEJS" },
        { text: "UX" },
    ];

    competences.forEach(competence => {
        const p = document.createElement("p");
        p.textContent = competence.text;

        if(competencesContainer){
            competencesContainer.appendChild(p);
        }
    });
}