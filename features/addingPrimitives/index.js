const triangleButton = document.querySelector(".triangle-button");
const circleButton = document.querySelector(".circle-button");
const canvas = document.querySelector("canvas");

const ctx = canvas?.getContext("2d");
const canvasWidth = canvas?.clientWidth;
const canvasHeight = canvas?.clientHeight;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

const triangleImage = new Image();
const circleImage = new Image();
let canAddTriangle = false;
let canAddCircle = false;

triangleImage.onload = () => {
  canAddTriangle = true;
};

circleImage.onload = () => {
  canAddCircle = true;
};

triangleImage.src = "icons/triangle.svg";
circleImage.src = "icons/circle.svg";

triangleButton.addEventListener("click", () => {
  if (canAddTriangle) {
    ctx.drawImage(
      triangleImage,
      canvasWidth / 2 - 50,
      canvasHeight / 2 - 50,
      100,
      100
    );
  }
});

circleButton.addEventListener("click", () => {
  if (canAddCircle) {
    ctx.drawImage(
      circleImage,
      canvasWidth / 2 - 50,
      canvasHeight / 2 - 50,
      100,
      100
    );
  }
});
