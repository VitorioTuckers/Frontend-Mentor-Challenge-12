const modal = document.querySelector(".modal");
const ratingBtns = document.querySelectorAll(".selection");
const submit = document.querySelector(".submit");
const ratingValue = document.querySelector(".rating-value");

const openModal = function () {
  modal.classList.remove("hidden");
};

submit.addEventListener("click", openModal);

ratingBtns.forEach((item, i) => {
  const domIndex = item.getAttribute("data-item");
  item.addEventListener("click", () => {
    ratingBtns.forEach(option => {
      option.classList.remove("selected");
    });
    if (i == domIndex) {
      item.classList.add("selected");
      let rating = i + 1;
      ratingValue.textContent = rating;
    }
  });
});
