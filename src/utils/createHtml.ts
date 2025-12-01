export const createHtml = () => {
    const wrapper = document.getElementById("wrapper");
    const navBar = document.getElementById("navBar");
    const containerHome = document.getElementById("containerHome");
    const containerProjects = document.getElementById("containerProjects");
    const containerAbout = document.getElementById("containerAbout");

    const containerTextHome = document.createElement("div");
    const h1 = document.createElement("h1");
    const headingHome = document.createElement("h2");
    const nav = document.createElement("nav");

    containerTextHome.id = "containerTextHome";
    h1.textContent = "Marcus Westerblom";
    headingHome.textContent = "Front end developer";

    containerHome?.appendChild(containerTextHome);
    containerTextHome?.appendChild(h1);
    containerTextHome.appendChild(headingHome);
    navBar?.appendChild(nav);

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
        nav.appendChild(a);
    });
}