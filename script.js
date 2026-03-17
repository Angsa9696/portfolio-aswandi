const elements = document.querySelectorAll(".section");

elements.forEach((el) => {
  el.classList.add("fade");
});

window.addEventListener("scroll", () => {
  elements.forEach((el) => {
    const position = el.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (position < screen - 100) {
      el.classList.add("show");
    }
  });
});
