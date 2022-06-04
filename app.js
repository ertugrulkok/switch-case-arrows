const img = document.querySelector(".pumpkin");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const up = document.querySelector(".up");
const down = document.querySelector(".down");

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      img.style.left = `${img.offsetLeft - 100}px`;
      left.classList.toggle("active");
      break;
    case "ArrowRight":
      img.style.left = `${img.offsetLeft + 100}px`;
      right.classList.toggle("active");
      break;
    case "ArrowUp":
      img.style.top = `${img.offsetTop - 100}px`;
      up.classList.toggle("active");
      break;
    case "ArrowDown":
      img.style.top = `${img.offsetTop + 100}px`;
      down.classList.toggle("active");
      break;
  }
});
window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      left.classList.remove("active");
      break;

    case "ArrowRight":
      right.classList.remove("active");

      break;
    case "ArrowUp":
      up.classList.remove("active");

      break;
    case "ArrowDown":
      down.classList.remove("active");

      break;
  }
});

function moveFunction(hareket) {
  switch (hareket) {
    case "down":
      img.style.top = `${img.offsetTop + 100}px`;
      break;
    case "up":
      img.style.top = `${img.offsetTop - 100}px`;
      break;
    case "left":
      img.style.left = `${img.offsetLeft - 100}px`;
      break;
    case "right":
      img.style.left = `${img.offsetLeft + 100}px`;
      break;
  }
}
