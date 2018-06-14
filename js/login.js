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


