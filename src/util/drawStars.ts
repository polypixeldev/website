const screenHeight = window.innerHeight;
const screenWidth = window.innerWidth;

const stars = document.querySelectorAll<HTMLDivElement>(".stars");
function handleResize() {
  stars.forEach((star) => {
    star.style.left = Math.floor(Math.random() * screenWidth) + "px";
    star.style.top = Math.floor(Math.random() * screenHeight) + "px";
  });
}
window.addEventListener("resize", handleResize);
handleResize();
