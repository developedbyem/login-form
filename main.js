const btn = document.querySelector(".button-box");
const login = document.querySelector("#login");
const register = document.querySelector("#register");

btn.addEventListener("click", toggleBtn);
function toggleBtn() {
  const toggle = btn.querySelector("#btn");
  toggle.classList.toggle("btnToggle");

  if (toggle.classList.contains("btnToggle")) {
    login.style.left = "-100%";
    register.style.left = "50px";
  } else {
    login.style.left = "50px";
    register.style.left = "450px";
  }
}
