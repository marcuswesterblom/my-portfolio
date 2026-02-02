export const contactListener = () => {
    const containerContact = document.getElementById("containerContact");
    const containerSpanContact = document.getElementById("containerSpanContact");
    const containerDark = document.getElementById("containerDark");
    if (!containerSpanContact || !containerDark || !containerContact) return;

      containerSpanContact.addEventListener("mouseenter", () => {
        containerSpanContact.classList.add("hover");
        containerSpanContact.style.zIndex = "3";
    });
    containerSpanContact.addEventListener("mouseleave", () => {
        containerSpanContact.classList.remove("hover");
        containerSpanContact.style.zIndex = "1";
    });

    containerSpanContact.addEventListener("click", () => {
        containerDark.classList.remove("show");
        containerContact?.classList.remove("show");
    });

    containerDark.addEventListener("click", () => {
        containerDark.classList.remove("show");
        containerContact?.classList.remove("show");
    });
}