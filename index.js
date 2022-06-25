const upRightBtn = document.querySelector("#upright-btn");

upRightBtn.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY !== 0) {
    upRightBtn.classList.remove("hidden");
    category.classList.add("top-fixed");
  } else {
    upRightBtn.classList.add("hidden");
    category.classList.remove("top-fixed");
  }
});
const category = document.querySelector("#category");
const categoryElement = document.querySelectorAll("#category > li");
const childCategory = document.querySelectorAll(".child-category");

categoryElement.forEach((Element) => {
  if (Element.children[1]) {
    Element.addEventListener("mouseenter", (event) => {
      const target = event.target.childNodes[3];
      target.classList.toggle("hidden");
    });
    Element.addEventListener("mouseleave", (event) => {
      const target = event.target.childNodes[3];
      target.classList.toggle("hidden");
    });
  }
});
