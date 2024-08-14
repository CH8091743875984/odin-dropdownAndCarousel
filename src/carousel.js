function reorderImagesRight() {
  const container = document.querySelector(".imageContainer");

  const images = Array.from(container.querySelectorAll("img"));

  if (images.length > 0) {
    const image = images.pop();
    //container.insertBefore(image, container.firstChild);
    container.insertBefore(image, images[0]);
  }
}

function reorderImagesLeft() {
  const container = document.querySelector(".imageContainer");

  const images = Array.from(container.querySelectorAll("img"));

  if (images.length > 0) {
    const image = images.shift();
    container.insertBefore(image, images[-1]);
  }
}

function setActiveImage() {
  const container = document.querySelector(".imageContainer");
  const images = Array.from(container.querySelectorAll("img"));
  const activeImage = document.querySelector(".activeImage img");

  const imageSrc = images[0].getAttribute("src");

  activeImage.setAttribute("src", imageSrc);
}

export function shiftLeftAndSetActive() {
  reorderImagesLeft();
  setActiveImage();
}

export function shiftRightAndSetActive() {
  reorderImagesRight();
  setActiveImage();
}

export function startSlideshow() {
  setInterval(shiftLeftAndSetActive, 5000);
}

// set border on img if active

// set active and reorder images if image is clicked on - need to change everything up there
