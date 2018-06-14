//popup меню регистрации
let topBlockItemLogin = document.querySelector('.top-block__item_login'),
    login = document.querySelector('.login'),
    loginContentClose = document.querySelector('.login-content__close');

topBlockItemLogin.onclick = function () {
    if (login.style.display == "block") login.style.display = "none"
    else login.style.display = "block"
}

loginContentClose.onclick = function () {
    if (login.style.display == "none") login.style.display = "block"
    else login.style.display = "none"
}
//мобильная версия

let contentLoginMobileSign = document.querySelector('.content-login-mobile__sign'),
    contentLoginMobileLogin = document.querySelector('.content-login-mobile__login'),
    formSign = document.querySelector('.form-sign'),
    formLog = document.querySelector('.form-log');

contentLoginMobileSign.onclick = function () {
    formSign.style.display = "flex"
    formLog.style.display = "none"
}
contentLoginMobileLogin.onclick = function () {
    formSign.style.display = "none"
    formLog.style.display = "flex"
}