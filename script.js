"use strict";

const buttons = document.querySelectorAll(".rate-btn button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.classList.remove("clicked");
    });

    button.classList.add("clicked");
  });
});
