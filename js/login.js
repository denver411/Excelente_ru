//мобильная версия

let contentLoginMobileSign = document.querySelector('.content-login-mobile__sign'),
    contentLoginMobileLogin = document.querySelector('.content-login-mobile__login'),
    formSign = document.querySelector('.form-sign'),
    formLog = document.querySelector('.form-log'),
    mobileTitle = document.querySelector('.row.title.mobile')

contentLoginMobileSign.onclick = function () {
    formSign.style.display = "flex"
    formLog.style.display = "none"
    contentLoginMobileLogin.style.color = "#DF5E16"
    contentLoginMobileLogin.style.borderBottom = "2px dotted #DF5E16"
    contentLoginMobileSign.style.color = "#004391"
    contentLoginMobileSign.style.borderBottom = "none"
    mobileTitle.style.flexDirection = "row"
}
contentLoginMobileLogin.onclick = function () {
    formSign.style.display = "none"
    formLog.style.display = "flex"
    contentLoginMobileSign.style.color = "#DF5E16"
    contentLoginMobileSign.style.borderBottom = "2px dotted #DF5E16"
    contentLoginMobileLogin.style.color = "#004391"
    contentLoginMobileLogin.style.borderBottom = "none"
    mobileTitle.style.flexDirection = "row-reverse"
}

if (!(window.matchMedia("(min-width: 577px)").matches)) {
    contentLoginMobileLogin.click();
}

/* Валидация форм */
//loginPage

//Вход

const formLogin = document.querySelector('.content-login-form-log'),
    loginInputs = formLogin.querySelectorAll('.content-login-form-log__input'),
    logMail = formLogin.querySelector('.content-login-form-log__input[data-name="form-login-input-mail"]'),
    logPassword = formLogin.querySelector('.content-login-form-log__input[data-name="form-login-input-pass"]');
// Регистрация
const formsSign = document.querySelector('.content-login-form-sign'),
    signInputs = formsSign.querySelectorAll('.content-login-form-sign__input'),
    signSurname = formsSign.querySelector('.content-login-form-sign__input[data-name="form-sign-input-surname"]'),
    signName = formsSign.querySelector('.content-login-form-sign__input[data-name="form-sign-input-name"]'),
    signPhone = formsSign.querySelector('.content-login-form-sign__input[data-name="form-sign-input-phone"]'),
    signMail = formsSign.querySelector('.content-login-form-sign__input[data-name="form-sign-input-mail"]'),
    signPass = formsSign.querySelector('.content-login-form-sign__input[data-name="form-sign-input-pass"]'),
    signReqpass = formsSign.querySelector('.content-login-form-sign__input[data-name="form-sign-input-reqpass"]'),
    signCheckBox = formsSign.querySelector('.content-login-form-sign-reg__check');

let generateError = function (text) {
    let error = document.createElement('output')
    error.className = 'form--error'
    error.textContent = text
    return error
}

let removeValidation = function (form) {
    let errors = form.querySelectorAll('.form--error')
    for (let i = 0; i < errors.length; i++) {
        errors[i].remove()
    }
}

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}



let checkFieldsPresence = function (inputs) {
    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            let error = generateError('Поле не может быть пустым')
            insertAfter(error, inputs[i])
        }
    }
}

let checkMailRegEx = function (input) {
    if (input.value.length === 0) return
    if (!(/^[\w\d]+[\-\_\.\w\d]+\@+[\w\d]+\.[\w]+$/).test(input.value)) {
        let error = generateError('Поле заполнено с ошибкой')
        insertAfter(error, input)
    }
}


let checkPasswordMatch = function (input) {
    if (input.value.length === 0) return
    if (input.value.length < 6) {
        let error = generateError('Пароль не может быть меньше 6 символов')
        insertAfter(error, input)
    }
}

let checkName = function(input) {
    if (input.value.length === 0) return
    if (!(/^(([A-zА-я]+[\s]{1}[A-zА-я]+[\s]{1}[A-zА-я]+)|([A-zА-я]+[\s]{1}[A-zА-я]+)|([A-zА-я]+))$/).test(input.value)) {
        let error = generateError('Недопустимые символы')
        insertAfter(error, input)
    }
}
let checkPhone = function(input) {
    if (input.value.length === 0) return
    if (!(/^\+7\s\(\d{3}\)\s\d{3}\-\d{2}-\d{2}$/).test(input.value)) {
        let error = generateError('Поле заполнено с ошибкой')
        insertAfter(error, input)
    }
}
let checkReqpass = function() {
    if (signReqpass.value.length === 0) return
    if (signReqpass.value !== signPass.value) {
        let error = generateError('Введенные пароли не совпадают')
        insertAfter(error, signReqpass)
    }
}
let reqCheckBox = function(input) {
    if (!input.checked) {
        formsSign.querySelector('.content-login-form-sign-reg__check-cust').style.background = '#c82e2e24'
    }
}
document.addEventListener('DOMContentLoaded', function(){
    formLogin.addEventListener('submit', function (event) {
        event.preventDefault()
        removeValidation(formLogin)
        checkFieldsPresence(loginInputs)
        checkMailRegEx(logMail)
        checkPasswordMatch(logPassword)
    })

    formsSign.addEventListener('submit', function (event) {
        event.preventDefault()
        removeValidation(formsSign)
        checkFieldsPresence(signInputs)
        checkName(signSurname)
        checkName(signName)
        checkPhone(signPhone)
        checkMailRegEx(signMail)
        checkPasswordMatch(signPass)
        checkReqpass()
        reqCheckBox(signCheckBox)
    })

});





// function checkLoginForm(event) {
//     function checkInputMail(input) {
//         if (!(/^[\w\d]+[\-\_\.\w\d]+\@+[\w\d]+\.[\w]+$/).test(input.value)) {
//             input.nextElementSibling.classList.add('js-active-error')
//             input.nextElementSibling.textContent = "Поле заполнено с ошибкой";
//             return false
//         }
//         input.nextElementSibling.classList.remove('js-active-error')
//         input.nextElementSibling.textContent = " ";
//     }

//     function checkInputPass(input) {
//         if (input.value < 6) {
//             input.nextElementSibling.classList.add('js-active-error')
//             input.nextElementSibling.textContent = "Длина пароля менее 6 символов";
//             return false
//         }
//         input.nextElementSibling.classList.remove('js-active-error')
//         input.nextElementSibling.textContent = " ";
//     }
//     Array.from(loginInputs).forEach(function (input) {
//         if (input.dataset.name === 'form-login-input-mail') checkInputMail(input)
//         if (input.dataset.name === 'form-login-input-pass') checkInputPass(input)
//     })
// }

// button.addEventListener('click', checkLoginForm)

// function showError(container, errorMessage) {
//     container.className.add('js-input-error'); // Добавить класс в CSS
//     container.nextElementSibling.className.add("js-active-error");
//     container.nextElementSibling.textContent = errorMessage;
// }

// function resetError(container) {
//     container.className.remove('js-input-error');
//     var msgElem = container.nextElementSibling
//     msgElem.className.remove("js-active-error");
//     msgElem.textContent = " ";
// }

// function validate(event) {
//     var elems = event.parentNode.elements;
//     resetError(elems.mail);
//     if (!elems.mail.value) {
//         showError(elems.mail.parentNode, ' Укажите от кого.');
//     }
//     resetError(elems.password.parentNode);
//     if (!elems.password.value) {
//         showError(elems.password.parentNode, ' Укажите пароль.');
//     } else if (elems.password.value != elems.password2.value) {
//         showError(elems.password.parentNode, ' Пароли не совпадают.');
//     }
// }

// button.addEventListener('click', validate)


// let loginDecstop = document.querySelector('.content-login-form-log__button');
// loginDecstop.onclick = function () {
//     let loginData = {
//         mail: document.querySelector('.content-login-form-log__input[name="mail"]').value,
//         pass: document.querySelector('.content-login-form-log__input[name="pass"]').value
//     }
//     if (!(/^[\w\d]+[\-\_\.\w\d]+\@+[\w\d]+\.[\w]+$/).test(loginData.mail)) {
//         document.querySelector('.content-login-form-log__input[name="mail"]').style.background = "#c82e2e24";
//         document.querySelector('.content-login-form-log__label--error[for="mail"]').style.display = "block";
//         //return false;
//     } else {
//         document.querySelector('.content-login-form-log__input[name="mail"]').style.background = "#5ac82e24";
//         document.querySelector('.content-login-form-log__label--error[for="mail"]').style.display = "none";
//     }
// }

//Регистрация

// let sign = document.querySelector('.content-login-form-sign__button');
// sign.onclick = function () {
//     let countError = 0;
//     let signData = {
//         phone: document.querySelector('.content-login-form-sign__input[name="phone"]').value,
//         mail: document.querySelector('.content-login-form-sign__input[name="mail"]').value,
//         pass: document.querySelector('.content-login-form-sign__input[name="pass"]').value,
//         reqpass: document.querySelector('.content-login-form-sign__input[name="reqpass"]').value,
//         surname: document.querySelector('.content-login-form-sign__input[name="surname"]').value,
//         name: document.querySelector('.content-login-form-sign__input[name="name"]').value

//     }

//     if (!(/^(([A-zА-я]+[\s]{1}[A-zА-я]+[\s]{1}[A-zА-я]+)|([A-zА-я]+[\s]{1}[A-zА-я]+)|([A-zА-я]+))$/).test(signData.surname)) {
//         document.querySelector('.content-login-form-sign__input[name="surname"]').style.background = "#c82e2e24";
//         countError++
//     } else {
//         document.querySelector('.content-login-form-sign__input[name="surname"]').style.background = "#5ac82e24";
//     }
//     if (!(/^(([A-zА-я]+[\s]{1}[A-zА-я]+[\s]{1}[A-zА-я]+)|([A-zА-я]+[\s]{1}[A-zА-я]+)|([A-zА-я]+))$/).test(signData.name)) {
//         document.querySelector('.content-login-form-sign__input[name="name"]').style.background = "#c82e2e24";
//         countError++
//     } else {
//         document.querySelector('.content-login-form-sign__input[name="name"]').style.background = "#5ac82e24";
//     }
//     if (!(/^\+7\s\(\d{3}\)\s\d{3}\-\d{2}-\d{2}$/).test(signData.phone)) {
//         document.querySelector('.content-login-form-sign__input[name="phone"]').style.background = "#c82e2e24";
//         document.querySelector('.content-login-form-sign__label--error[for="phone"]').style.display = "block";
//         countError++
//     } else {
//         document.querySelector('.content-login-form-sign__input[name="phone"]').style.background = "#5ac82e24";
//         document.querySelector('.content-login-form-sign__label--error[for="phone"]').style.display = "none";
//     }
//     if (!(/^[\w\d]+[\-\_\.\w\d]+\@+[\w\d]+\.[\w]+$/).test(signData.mail)) {
//         document.querySelector('.content-login-form-sign__input[name="mail"]').style.background = "#c82e2e24";
//         document.querySelector('.content-login-form-sign__label--error[for="mail"]').style.display = "block";
//         countError++
//     } else {
//         document.querySelector('.content-login-form-sign__input[name="mail"]').style.background = "#5ac82e24";
//         document.querySelector('.content-login-form-sign__label--error[for="mail"]').style.display = "none";
//     }

//     if (!(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])[0-9a-zA-Z!@#$%^&*]{6,50}/g).test(signData.pass)) {
//         document.querySelector('.content-login-form-sign__input[name="pass"]').style.background = "#c82e2e24";
//         document.querySelector('.content-login-form-sign__label--error[for="pass"]').style.display = "block";
//         countError++
//     } else {
//         document.querySelector('.content-login-form-sign__input[name="pass"]').style.background = "#5ac82e24";
//         document.querySelector('.content-login-form-sign__label--error[for="pass"]').style.display = "none";
//     }
//     if (signData.pass !== signData.reqpass || signData.pass.length < 6) {
//         document.querySelector('.content-login-form-sign__input[name="pass"]').style.background = "#c82e2e24";
//         document.querySelector('.content-login-form-sign__input[name="reqpass"]').style.background = "#c82e2e24";
//         document.querySelector('.content-login-form-sign__label--error[for="reqpass"]').style.display = "block";
//         countError++
//     } else {
//         document.querySelector('.content-login-form-sign__input[name="pass"]').style.background = "#5ac82e24";
//         document.querySelector('.content-login-form-sign__input[name="reqpass"]').style.background = "#5ac82e24";
//         document.querySelector('.content-login-form-sign__label--error[for="reqpass"]').style.display = "none";
//     }

//     if (countError > 0) return false;
// }