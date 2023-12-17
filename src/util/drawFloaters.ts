// Credit to https://codepen.io/RobotWizard/pen/rRVKVa for animation code
const sHeight = window.innerHeight;
const sWidth = window.innerWidth;
const speed = 2;

const floaters = document.querySelectorAll<HTMLDivElement>(".floater");

const toggle = document.getElementById("toggle") as HTMLImageElement | null;

toggle?.addEventListener("click", () => {
  toggleFloaters();
  toggleStars();
  startAnimation();
});

toggleFloaters();

function toggleFloaters() {
  document
    .querySelectorAll(".floater")
    .forEach((floater) => floater.classList.toggle("hidden"));
}

function toggleStars() {
  document
    .querySelectorAll(".stars")
    .forEach((star) => star.classList.toggle("hidden"));
}

startAnimation();

function startAnimation() {
  floaters.forEach((floater) => {
    if (floater.classList.contains("hidden")) return;
    const id = floater.id;
    const dialog = document.getElementById(`${id}-dialog`);
    if (!dialog || !(dialog instanceof HTMLDialogElement)) return;

    dialog.close();
    floater.addEventListener("click", () => {
      dialog.showModal();
      dialog.style.display = "flex";
      dialog.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", () => {
          dialog.style.display = "none";
          dialog.close();
        });
      });
    });

    let x = Math.random() * sWidth;
    let y = Math.random() * sHeight;

    const floaterW = floater!.clientWidth + 10;
    const floaterH = floater!.clientHeight + 10;

    let dirX = Math.random() + 0.25;
    let dirY = Math.random() + 0.25;
    function animate() {
      if (floater.classList.contains("hidden")) return;
      if (y + floaterH >= sHeight || y < 0) {
        dirY *= -1;
      }
      if (x + floaterW >= sWidth || x < 0) {
        dirX *= -1;
      }

      x += dirX * speed;
      y += dirY * speed;

      floater!.style.left = x + "px";
      floater!.style.top = y + "px";

      window.requestAnimationFrame(animate);
    }

    floater.style.opacity = "100";
    window.requestAnimationFrame(animate);
  });
}

startAnimation();
