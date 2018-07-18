'use strict'

let generateError = function (text) {
    let error = document.createElement('output');
    error.className = 'form--error';
    error.textContent = text;
    return error;
}

let removeValidation = function (form) {
    let errors = form.querySelectorAll('.form--error');
    for (let i = 0; i < errors.length; i++) {
        errors[i].remove();
    }
}

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

let checkFieldsPresence = function (inputs) {
    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            let error = generateError('Поле не может быть пустым');
            insertAfter(error, inputs[i]);
        }
    }
}

let checkMailRegEx = function (input) {
    if (input.value.length === 0) return;
    if (!(/^[\w\d]+[\-\_\.\w\d]+\@+[\w\d]+\.[\w]+$/).test(input.value)) {
        let error = generateError('Поле заполнено с ошибкой');
        insertAfter(error, input);
    }
}


let checkPasswordMatch = function (input) {
    if (input.value.length === 0) return;
    if (input.value.length < 6) {
        let error = generateError('Пароль не может быть меньше 6 символов');
        insertAfter(error, input);
    }
}

let checkName = function(input) {
    if (input.value.length === 0) return;
    if (!(/^(([A-zА-я]+[\s]{1}[A-zА-я]+[\s]{1}[A-zА-я]+)|([A-zА-я]+[\s]{1}[A-zА-я]+)|([A-zА-я]+))$/).test(input.value)) {
        let error = generateError('Недопустимые символы');
        insertAfter(error, input);
    }
}
let checkPhone = function(input) {
    if (input.value.length === 0) return;
    if (!(/^\+7\s\(\d{3}\)\s\d{3}\-\d{2}-\d{2}$/).test(input.value)) {
        let error = generateError('Поле заполнено с ошибкой');
        insertAfter(error, input);
    }
}
let checkReqpass = function() {
    if (signReqpass.value.length === 0) return;
    if (signReqpass.value !== signPass.value) {
        let error = generateError('Введенные пароли не совпадают');
        insertAfter(error, signReqpass);
    }
}
let reqCheckBox = function(input) {
    if (!input.checked) {
        formsSign.querySelector('.content-login-form-sign-reg__check-cust').style.background = '#c82e2e24';
    }
}