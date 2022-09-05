const login = document.querySelector(".login-link");
const register = document.querySelector(".register-link");
const reset = document.querySelector(".forget-link");
const loginSec = document.querySelector(".login-box");
const regSec = document.querySelector(".register-box");
const resetSec = document.querySelector(".password-box");
const closebtn = document.querySelector(".cls");

register.addEventListener("click", (e) => {
    loginSec.style.display = "none";
    regSec.style.display = "flex";
})

login.addEventListener("click", (e) => {
    loginSec.style.display = "flex";
    regSec.style.display = "none";
})

reset.addEventListener("click", (e) => {
    loginSec.style.display = "none";
    regSec.style.display = "none";
    resetSec.style.display = "flex";
})
closebtn.addEventListener("click", (e) => {
    loginSec.style.display = "flex";
    resetSec.style.display = "none";
})


