const scrollBtns = document.querySelectorAll("#scroll-list a");

scrollBtns.forEach((element) => {
  const target = element.children[0];
  element.addEventListener("click", () => {
    scrollBtns.forEach((btns) => {
      btns.children[0].classList.remove("on-focus");
    });
    target.classList.add("on-focus");
  });
});
