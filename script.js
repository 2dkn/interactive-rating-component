"use strict";

const rateButtons = document.querySelectorAll(".rate-btn button");
const submitButton = document.querySelector(".submit-btn");
const survey = document.querySelector(".survey");
const surveyBack = document.querySelector(".survey__back");
const selectedRatingText = document.querySelector(".selected__rating");

let selectedRating = 0;

rateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    rateButtons.forEach((btn) => {
      btn.classList.remove("clicked");
    });

    button.classList.add("clicked");

    selectedRating = parseInt(button.textContent, 10);

    selectedRatingText.textContent = `You selected ${selectedRating} out of 5`;
  });
});

submitButton.addEventListener("click", function () {
  while (survey.firstChild) {
    survey.removeChild(survey.firstChild);
  }

  surveyBack.style.display = "flex";
});
