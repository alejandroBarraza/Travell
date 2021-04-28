const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const submit = document.querySelector(".submit");
const form = document.querySelector("#form");
function clearInput() {
  nameInput.value = "";
  emailInput.value = "";
}
window.addEventListener("load", clearInput);
