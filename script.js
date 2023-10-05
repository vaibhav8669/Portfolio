var sidebar = document.getElementById("sidebar");

function openmenu() {
  sidebar.style.right = "0";
}
function closemenu() {
  sidebar.style.right = "-35%";
}

var experience = document.getElementById("experience");
var education = document.getElementById("education");

function edu() {
  education.style.display = "block";
  experience.style.display = "none";
}

function exp() {
  education.style.display = "none";
  experience.style.display = "block";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxYp22rY_qbZVPbVZ9LvibNHg3lxHC5lBHbPPyTvvVakgUb00J5t4ZStUww09Kd5FDr/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
