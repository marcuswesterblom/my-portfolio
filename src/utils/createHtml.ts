export const createHtml = () => {
    const wrapper = document.getElementById("wrapper");
    const navBar = document.getElementById("navBar");
    const containerHome = document.getElementById("containerHome");
    const containerAll = document.getElementById("containerAll");
    const containerProjects = document.getElementById("containerProjects");
    const containerAbout = document.getElementById("containerAbout");
    const containerDark = document.createElement("div");
    const containerSpan = document.createElement("div");

    const containerTextHome = document.createElement("div");
    const h1 = document.createElement("h1");
    const headingHome = document.createElement("h2");
    const nav = document.createElement("nav");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    const spanContainer = document.createElement("span");
    const span3 = document.createElement("span");
    const span4 = document.createElement("span");

    containerTextHome.id = "containerTextHome";
    h1.textContent = "Marcus Westerblom";
    headingHome.textContent = "Front end developer";
    nav.id = "nav";
    span1.id = "span1";
    span2.id = "span2";
    span3.id = "span3";
    span4.id = "span4";
    containerSpan.id = "containerSpan";
    spanContainer.id = "spanContainer";
    containerDark.id = "containerDark";

    containerHome?.appendChild(containerTextHome);
    containerTextHome?.appendChild(h1);
    containerTextHome.appendChild(headingHome);
    navBar?.appendChild(spanContainer);
    spanContainer?.appendChild(span1);
    spanContainer?.appendChild(span2);
    navBar?.appendChild(nav);
    containerProjects?.appendChild(containerSpan);
    containerSpan?.appendChild(span3);
    containerSpan?.appendChild(span4);
    containerAll?.appendChild(containerDark);

    const links = [
        { text: "Home", href: "#", id: "homeBttn" },
        { text: "Projects", href: "#", id: "projectsBttn" },
        { text: "About", href: "#", id: "aboutBttn" }
    ];

    links.forEach(link => {
        const a = document.createElement("a");
        a.textContent = link.text;
        a.href = link.href;
        a.id = link.id;

        if (link.id === "projectsBttn") {
        a.addEventListener("click", (e) => {
        e.preventDefault();
        containerProjects?.classList.add("show");
        containerDark.classList.add("show");
    });
        }
        nav.appendChild(a);
    });
}