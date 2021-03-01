const slider = document.querySelector('.slider');
const before = document.querySelector('.imgContainerBefore');
const after = document.querySelector('.imgContainerAfter');
const container = document.querySelector('.container');

const slide = (event) => {
  let xPos = event.layerX;
  let size = container.offsetWidth;

  before.style.width = xPos + "px";
  slider.style.left = xPos + "px";

  if(xPos < 40) {
    before.style.width = 0;
    slider.style.left = 0;
  }

  if(xPos + 40 > size) {
    before.style.width = size + "px";
    slider.style.left = size + "px";
  }
}

container.addEventListener('mousemove', slide);
