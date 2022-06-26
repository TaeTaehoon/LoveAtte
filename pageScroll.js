const scrollBtns = document.querySelectorAll("#scroll-list a");
const bgImgs = document.querySelectorAll("#container img");
const footer = document.querySelector("#page-footer");
let focusIndex = 0;
scrollBtns.forEach((element) => {
  const target = element.children[0];
  element.addEventListener("click", () => {
    scrollBtns.forEach((btns) => {
      btns.children[0].classList.remove("on-focus");
    });
    target.classList.add("on-focus");
    focusIndex = parseInt(element.id);
  });
});
// function trackingIndex() {}

function scrolling(e) {
  console.log("wheel!");

  const presentView = focusIndex;
  if (e.clientY > 158.5) {
    if (e.deltaY < -8.5 && focusIndex > 0) {
      bgImgs[presentView - 1].scrollIntoView({ behavior: "smooth" });
      focusIndex = presentView - 1;
      scrollBtns.forEach((btns) => {
        btns.children[0].classList.remove("on-focus");
      });
      scrollBtns[focusIndex].children[0].classList.add("on-focus");
      pauseScroll();
    } else if (e.deltaY > 8.5 && focusIndex < 3) {
      if (presentView === 2) {
        footer.scrollIntoView({ behavior: "smooth" });
      } else {
        bgImgs[presentView + 1].scrollIntoView({ behavior: "smooth" });
      }

      focusIndex = presentView + 1;
      scrollBtns.forEach((btns) => {
        btns.children[0].classList.remove("on-focus");
      });
      scrollBtns[focusIndex].children[0].classList.add("on-focus");
      pauseScroll();
    }
  }
}

function pauseScroll() {
  document.body.removeEventListener("wheel", scrolling);
  setTimeout(addScroll, 750);
}
function addScroll() {
  document.body.addEventListener("wheel", scrolling);
}
addScroll();

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});
