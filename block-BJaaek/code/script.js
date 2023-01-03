let firstBox = document.querySelector("#text1");
let secondBox = document.querySelector("#text2");

function randomColorGenerator(e) {
  let target = e.target;
  let r = Math.floor(Math.random() * 255 + 1);
  let g = Math.floor(Math.random() * 255 + 1);
  let b = Math.floor(Math.random() * 255 + 1);
  let color = `rgb(${r},${g},${b})`;
  if (target.id === "text1" || target.id === "text2") {
    target.style.backgroundColor = color;
  }
}

firstBox.addEventListener("click", randomColorGenerator);

secondBox.addEventListener("mousemove", randomColorGenerator);