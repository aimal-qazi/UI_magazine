const humburger = document.getElementById("hum");
const box = document.getElementById("hum-box");

humburger.addEventListener("click", () => {
  humburger.classList.toggle("active");
  box.classList.toggle("active");
});

const searchBtn = document.getElementById("search-btn");
const searchBar = document.getElementById("searchBar");
const cancelBar = document.getElementById("cancelBar");

searchBtn.addEventListener("click", () => {
  searchBar.classList.toggle("active");
});
cancelBar.addEventListener("click", () => {
  searchBar.classList.remove("active");
});

const category = document.getElementById("forCategory");
category.addEventListener("click", () => {
  category.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const packagesList = document.querySelector(
    ".container .wrapper .detail .packages .list"
  );
  const boxes = document.querySelectorAll(
    ".container .wrapper .detail .packages .box"
  );
  const boxWidth = boxes[0].offsetWidth; // Assuming all boxes have the same width
  const numBoxes = boxes.length;
  let currentIndex = 0;

  function updateCarousel() {
    packagesList.style.transform = `translateX(-${currentIndex * boxWidth}px)`;
  }

  // Add event listeners to your navigation buttons
  const prevButton = document.querySelector(".back");
  const nextButton = document.querySelector(".next");

  prevButton.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextButton.addEventListener("click", function () {
    if (currentIndex < numBoxes - 1) {
      currentIndex++;
      updateCarousel();
    }
  });
});
