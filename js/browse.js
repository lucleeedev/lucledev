


const carousel = document.querySelector(".featured__section-carousel"),
firstImg = carousel.querySelectorAll(".featured__section-img")[0],
arrowIcons = document.querySelectorAll(".featured__section-wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

arrowIcons.forEach(icon => {
  icon.addEventListener("click", () => {
      let firstImgWidth = firstImg.clientWidth + 14;
      let maxScroll = carousel.scrollWidth - carousel.clientWidth;
      if (carousel.scrollLeft == 0 && icon.id == "left") {
          carousel.scrollLeft = maxScroll;
      } else if (carousel.scrollLeft == maxScroll && icon.id == "right") {
          carousel.scrollLeft = 0;
      } else {
          carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
      }
  });
});


const autoSlide = () => {
  let firstImgWidth = firstImg.clientWidth + 14;
  let maxScroll = carousel.scrollWidth - carousel.clientWidth; 
  if (carousel.scrollLeft >= maxScroll) {
      carousel.scrollLeft = 0;
  } else {
      carousel.scrollLeft += firstImgWidth;
  }
}

setInterval(autoSlide, 5000);

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

