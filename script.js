"use strict";

const rateButtons = document.querySelectorAll(".rate-btn button");
const submitButton = document.getElementById("submit-btn");
const survey = document.querySelector("survey");

rateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    rateButtons.forEach((btn) => {
      btn.classList.remove("clicked");
    });

    button.classList.add("clicked");
  });
});

submitButton.addEventListener("click", function () {
  const text = document.createElement("p");
  text.textContent = "thank you";

  survey.innerHTML = "";
  survey.appendChild(text);
});
