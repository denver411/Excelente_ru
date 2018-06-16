//popup меню регистрации/личного кабинета
let topBlockItemLogin = document.querySelector('.top-block__item_login'),
    login = document.querySelector('.login'),
    loginContentClose = document.querySelector('.login-content__close'),
    userPage = document.querySelector('.userpage'),
    userPageClose = document.querySelector('.userpage__close'),
    userPageUlistListItemExit = document.querySelector('.userpage-ulist__list-item--exit');

topBlockItemLogin.onclick = function () {
    if (topBlockItemLogin.textContent == "Вход/ Регистрация") {
        if (login.style.display == "block") login.style.display = "none"
        else login.style.display = "block"
    } else {
        if (userPage.style.display == "block") userPage.style.display = "none"
        else userPage.style.display = "block"
    }
}
userPageClose.onclick = function () {
    if (userPage.style.display == "none") userPage.style.display = "block"
    else userPage.style.display = "none"
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

/* Валидация форм */
//popup
popupLogin = document.querySelector('.login-content-ulist-list__login');
popupLogin.onclick = function () {
    let loginData = {
        mail: document.querySelector('.login-content-form__mail-input').value,
        pass: document.querySelector('.login-content-form__pass-input').value
    }
    if (!(/^[a-zA-Z0-9][a-zA-Z0-9-_\.]*@/).test(loginData.mail)) {
        document.querySelector('.login-content-form__mail-input').style.background = "#c82e2e24";
        document.querySelector('.login-content-form__mail-input--error').style.display = "block";
        return false;
    } else {
        document.querySelector('.login-content-form__mail-input').style.background = "#5ac82e24";
        document.querySelector('.login-content-form__mail-input--error').style.display = "none";
    }
    if (!(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])[0-9a-zA-Z!@#$%^&*]{6,}/g).test(loginData.pass)) {
        document.querySelector('.login-content-form__pass-input').style.background = "#c82e2e24";
        document.querySelector('.login-content-form__pass-input--error').style.display = "block";
        return false;
    }
}

//loginPage

//Вход
login = document.querySelector('.content-login-form-log__button');
login.onclick = function () {
    let loginData = {
        mail: document.querySelector('.content-login-form-log__input[name="mail"]').value,
        pass: document.querySelector('.content-login-form-log__input[name="pass"]').value
    }
    if (!(/^[a-zA-Z0-9][a-zA-Z0-9-_\.]*@/).test(loginData.mail)) {
        document.querySelector('.content-login-form-log__input[name="mail"]').style.background = "#c82e2e24";
        document.querySelector('.content-login-form-log__label--error[for="mail"]').style.display = "block";
        return false;
    } else {
        document.querySelector('.content-login-form-log__input[name="mail"]').style.background = "#5ac82e24";
        document.querySelector('.content-login-form-log__label--error[for="mail"]').style.display = "none";
    }
    if (!(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])[0-9a-zA-Z!@#$%^&*]{6,}/g).test(loginData.pass)) {
        document.querySelector('.content-login-form-log__input[name="pass"]').style.background = "#c82e2e24";
        document.querySelector('.content-login-form-log__label--error[for="pass"]').style.display = "block";
        return false;
    }
}

//Регистрация
