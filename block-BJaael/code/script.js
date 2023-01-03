let container = document.querySelector(".container");

for (let i = 0; i < 500; i++) {
  let box = document.createElement("div");
  box.style.width = "4rem";
  box.style.height = "4rem";
  box.style.border = "1px solid black";
  box.classList.add("center");
  box.style.fontSize = "1.50rem";

  container.append(box);
}

function random() {
  let boxes = document.querySelectorAll(".center");

  for (let i = 0; i < 500; i++) {
    let num = Math.floor(Math.random() * 256);
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = `rgb(${r},${g},${b})`;

    boxes[i].style.backgroundColor = color;
    boxes[i].innerText = num;
  }
}

container.addEventListener("mousemove", random);