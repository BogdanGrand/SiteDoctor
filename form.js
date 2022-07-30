
let form = document.querySelector('.formsubm'),
    formInputs = document.querySelectorAll('.req'),
    inputEmail = document.querySelector('.emailform'),
    inputPhone = document.querySelector('.phoneform'),
    inputCheckbox = document.querySelectorAll('.check_serv');
let blockInput = document.querySelectorAll('.block_form_input')
inputCheckbox.forEach((elem) => {
    elem.addEventListener('click', () => {
        elem.closest('.block_form_input').classList.toggle('active_li')
    })
})

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



function validatePhone(phone) {
    let re = /^[0-9\s]*$/;
    return re.test(String(phone));
}

form.onsubmit = function () {
    let emailVal = inputEmail.value,
        phoneVal = inputPhone.value,
        emptyInputs = Array.from(formInputs).filter(input => input.value === '');

    formInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error');

        } else {
            input.classList.remove('error');
        }
    });

    if (emptyInputs.length !== 0) {
        console.log('inputs not filled');
        return false;
    }

    if(!validateEmail(emailVal)) {
        console.log('email not valid');
        inputEmail.classList.add('error');
        return false;
    } else {
        inputEmail.classList.remove('error');
    }

    if (!validatePhone(phoneVal)) {
        console.log('phone not valid');
        inputPhone.classList.add('error');
        return false;
    } else {
        inputPhone.classList.remove('error');
    }

    // if(!inputCheckbox.checked) {
    //     console.log('checkbox not checked');
    //     inputCheckbox.classList.add('error');
    //     return false;
    // } else {
    //     inputCheckbox.classList.remove('error')
    // }


}