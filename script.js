"use strict";

const rateButtons = document.querySelectorAll(".rate-btn button");
const submitButton = document.querySelector(".submit-btn");
const survey = document.querySelector(".survey");
const surveyBack = document.querySelector(".survey__back");
const selectedRatingText = document.querySelector(".selected__rating");
const returnButton = document.querySelector(".return-btn");
const originalSurvey = survey.innerHTML;

let selectedRating = null;

rateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    rateButtons.forEach((btn) => {
      btn.classList.remove("clicked");
    });

    button.classList.add("clicked");

    selectedRating = parseInt(button.textContent);

    selectedRatingText.textContent = `You selected ${selectedRating} out of 5`;
  });
});

submitButton.addEventListener("click", function () {
  if (selectedRating != null) {
    while (survey.firstChild) {
      survey.removeChild(survey.firstChild);
    }
    surveyBack.style.display = "flex";
  } else {
    alert("Please select a rating number before hitting submit.");
  }
});

returnButton.addEventListener("click", function () {
  window.location.href = "index.html";
  //   surveyBack.style.display = "none";
  //   survey.innerHTML = originalSurvey;
  //   selectedRating = null;
  //   rateButtons.forEach((btn) => {
  //     btn.classList.remove("clicked");
  //   });
});
