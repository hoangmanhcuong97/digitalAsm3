"use strict";

// About
const hideForm = document.querySelector(".personal-info");
const hideForm1 = document.querySelector(".personal-input");
const alertEmail = document.querySelector(".alert-email").textContent;

const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

document.querySelector(".button").addEventListener("click", function () {
  const valEmail = document.querySelector(".email").value;

  const checkEmail = regex.test(valEmail);
  if (checkEmail) {
    hideForm.classList.remove("hidden");
    hideForm1.classList.add("hidden");
    document.querySelector(".info-email").textContent = valEmail;
  } else {
    document.querySelector(".alert-email").textContent =
      "Email không đúng định dạng: abc@funix.edu.vn hoặc abc@gmail.com.vn";
    document.querySelector(".alert-email").style.color = "red";
  }
});

// Job info view more

function displayViewMore(i) {
  document.getElementById(`btnView${i}`).classList.remove("hidden");
}

function hiddenViewMore(i) {
  document.getElementById(`btnView${i}`).classList.add("hidden");
}

function clickDisplayInfoJob(i) {
  const checkHidden = document
    .getElementById(`infoJob${i}`)
    .classList.contains("hidden");
  if (checkHidden) {
    document.getElementById(`infoJob${i}`).classList.remove("hidden");
    document.getElementById(`btnInfo${i}`).innerHTML =
      '<span class="material-icons">arrow_drop_up</span>View Less';
  } else {
    document.getElementById(`infoJob${i}`).classList.add("hidden");
    document.getElementById(`btnInfo${i}`).innerHTML =
      '<span class="material-icons">arrow_drop_up</span>View More';
  }
}

// function clickHiddenInfoJob(i) {
//   document.querySelector(`infoJob${i}`).classList.add("hidden");
//   document.querySelector(`btnInfo${i}`).innerHTML =
//     '<span class="material-icons">arrow_drop_up</span>View More';
// }
