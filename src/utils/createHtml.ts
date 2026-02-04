export const createHtml = () => {
    const navBar = document.getElementById("navBar");
    const sectionHero = document.getElementById("sectionHero");
    const containerProjects = document.getElementById("containerProjects");
    const containerIntroduction = document.getElementById("containerIntroduction");
    const containerContact = document.getElementById("containerContact");

    const containerSpan = document.createElement("div");
    const competencesContainer = document.createElement("div");
    const containerTextHome = document.createElement("div");
    const containerSpanContact = document.createElement("div");
    const containerContactInfo = document.createElement("div");

    const h1 = document.createElement("h1");
    const headingHome = document.createElement("h2");
    const nav = document.createElement("nav");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    const spanContainer = document.createElement("span");
    const span3 = document.createElement("span");
    const span4 = document.createElement("span");
    const projectTitle = document.createElement("h2");
    const contactTitle = document.createElement("h2");
    const contactText = document.createElement("h4");
    const contactList = document.createElement("ul");
    const status = document.createElement("h4");

    competencesContainer.id = "competencesContainer";
    containerTextHome.id = "containerTextHome";
    h1.textContent = "Marcus Westerblom";
    headingHome.textContent = "Front end developer";
    nav.id = "nav";
    span1.id = "span1";
    span2.id = "span2";
    span3.id = "span3";
    span4.id = "span4";
    containerSpanContact.id = "containerSpanContact";
    containerSpan.id = "containerSpan";
    spanContainer.id = "spanContainer";
    projectTitle.id = "projectTitle";
    projectTitle.textContent = "Projects";
    contactTitle.id = "contactTitle";
    contactText.id = "contactText";
    contactList.id = "contactList";
    containerContactInfo.id = "containerContactInfo";
    status.id = "status";
    status.textContent = "Available for internship - Fall 2026";

    contactTitle.textContent = "Contact me";
    contactText.textContent = "I'm currently looking for internship opportunities. Feel free to reach out via any of the following methods:";

    sectionHero?.appendChild(containerTextHome);
    containerTextHome?.appendChild(h1);
    containerTextHome.appendChild(headingHome);
    containerTextHome.appendChild(status);
    navBar?.appendChild(spanContainer);
    spanContainer?.appendChild(span1);
    spanContainer?.appendChild(span2);
    navBar?.appendChild(nav);
    containerProjects?.appendChild(containerSpan);
    containerProjects?.appendChild(projectTitle);
    containerSpan?.appendChild(span3);
    containerIntroduction?.appendChild(competencesContainer);
    containerSpanContact.appendChild(span4);
    containerContactInfo?.append(contactText, contactList);
    containerContact?.append(contactTitle, containerSpanContact);
    containerContact?.appendChild(containerContactInfo);

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
        if (link.id === "contactBttn") {
        a.addEventListener("click", (e) => {
        e.preventDefault();
        containerContact?.classList.add("show");
        containerDark?.classList.add("show");
        });
        }
        nav.appendChild(a);
    });

    const competences = [
        { text: "HTML" },
        { text: "CSS" },
        { text: "SCSS" },
        { text: "Tailwind" },
        { text: "TypeScript" },
        { text: "JavaScript" },
        { text: "NodeJS" },
        { text: "React" },
        { text: "UX" },
        { text: "Figma" },
        { text: "Adobe" },
    ];

    competences.forEach(competence => {
        const p = document.createElement("p");
        p.textContent = competence.text;

        if(competencesContainer){
            competencesContainer.appendChild(p);
        }
    });

    const contacts = [
        {   
            label: "E-mail", 
            value: "marcus.vesterblom@gmail.com",
            href: "mailto:marcus.vesterblom@gmail.com", 
        },
        {
            label: "Phone",
            value: "+46 72 311 15 14",
            href: "tel:+46723111514",
        },
        {   
            label: "LinkedIn", 
            value: "linkedin.com/marcuswesterblom",
            href: "https://www.linkedin.com/in/marcus-westerblom-034358205/" 
        },
        {   
            label: "Github", 
            value: "github.com/marcuswesterblom",
            href: "https://github.com/marcuswesterblom" 
        }
    ];
    
    contacts.forEach(contact => {
        const li = document.createElement("li");
        const p = document.createElement("p");
        const a = document.createElement("a");

        p.textContent = `${contact.label}:`
        a.textContent =  `${contact.value}`;
        a.href = contact.href;

        if(contact.href.startsWith("https")) {
            a.target = "_blank";
            a.rel = "noopener noreferrer";
        }
        li.append(p, a);
        contactList.appendChild(li);
    })
}

