const products = document.querySelectorAll("#product-table img");
const a = document.querySelectorAll("#page-list a");

a.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
  });
});
function addMouseOnEvent(img) {
  const PRODUCTINDEX = img.alt[3];
  img.addEventListener("mouseover", () => {
    if (img.attributes.src.value === "../img/product/sampleImage.jpg") return;
    img.attributes.src.value = `../img/product/${PRODUCTINDEX}-back.jpg`;
  });
  img.addEventListener("mouseleave", () => {
    if (img.attributes.src.value === "../img/product/sampleImage.jpg") return;
    img.attributes.src.value = `../img/product/${PRODUCTINDEX}-front.jpg`;
  });
}
products.forEach((img) => {
  addMouseOnEvent(img);
});
