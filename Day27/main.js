window.addEventListener("scroll", () => {
    const backToTopBtn = document.querySelector(".back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

function backToTopClicked() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}