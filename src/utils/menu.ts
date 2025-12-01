export const menuListener = () => {
    const spanContainer = document.getElementById("spanContainer");
    const span1 = document.getElementById("span1");
    const span2 = document.getElementById("span2");
    const nav = document.getElementById("nav");

    if (!spanContainer || !nav) return;

    spanContainer.addEventListener("click", () => {
        span1?.classList.toggle("active");
        span2?.classList.toggle("active");

        if (nav.classList.contains("show")) {
            nav.classList.remove("show");
            nav.classList.add("hide");
        } else {
            nav?.classList.remove("hide");
            nav?.classList.add("show");
        }
    });

    spanContainer.addEventListener("mouseenter", () => {
        spanContainer.classList.add("hover");
        spanContainer.style.zIndex = "3";
    });
    spanContainer.addEventListener("mouseleave", () => {
        spanContainer.classList.remove("hover");
        spanContainer.style.zIndex = "1";
    });
};