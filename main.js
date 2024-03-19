import "./style.css";

const canvas = document.querySelector("canvas");

if (canvas) {
  canvas.width = canvas?.clientWidth;
  canvas.height = canvas?.clientHeight;
}
