"use strict";

const result = {
    'Name': '',
    'Surname': '',
    'Street': '',
    'House number': '',
    'Flat number': '',
    'Delivery date': '',
    'Payment type': 'cash',
};

let orderStatus = false,
    giftCount = 0;

const orderForm = document.forms.order_form;

orderForm.addEventListener('focusout', dataValidator);
orderForm.addEventListener('input', dataValidator);

orderForm['payment-method'][0].addEventListener('change', () => {
    result['Payment type'] = orderForm['payment-method'][0].value
});
orderForm['payment-method'][1].addEventListener('change', () => {
    result['Payment type'] = orderForm['payment-method'][1].value
});

orderForm.addEventListener('change', giftChecker);

const submitBtn = orderForm.querySelector('.form-submit'),
    resultPopup = orderForm.querySelector('.result-popup');

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    resultPopup.classList.add('result-popup--visible');
});

function dataValidator(event) {
    if (event.target === orderForm.name) {
        if (orderForm.name.value.length < 4 || orderForm.name.value.trim().includes(' ') || !(/^[a-zA-ZА-Яа-яЁё]+$/.test(orderForm.name.value.trim()))) {
            orderForm.name.classList.add('field-error');
            result['Name'] = '';
        } else {
            result['Name'] = orderForm.name.value;
            orderForm.name.classList.remove('field-error');
            submitUnlocker(result);
        }

        /* Surname */
    } else if (event.target === orderForm.surname) {
        if (orderForm.surname.value.length < 5 || orderForm.surname.value.trim().includes(' ') || !(/^[a-zA-ZА-Яа-яЁё]+$/.test(orderForm.surname.value.trim()))) {
            orderForm.surname.classList.add('field-error');
            result['Surname'] = '';
        } else {
            result['Surname'] = orderForm.surname.value;
            orderForm.surname.classList.remove('field-error');
            submitUnlocker(result);
        }

        /* Street */
    } else if (event.target === orderForm.street) {
        if (+orderForm.street.value.length < 5) {
            orderForm.street.classList.add('field-error');
            result['Street'] = '';
        } else {
            result['Street'] = orderForm.street.value;
            orderForm.street.classList.remove('field-error');
            submitUnlocker(result);
        }

        /* House number */
    } else if (event.target === orderForm['house-number']) {
        if (+orderForm['house-number'].value < 0 || !(/^\d+$/.test(orderForm['house-number'].value.trim()))) {
            orderForm['house-number'].classList.add('field-error');
            result['House number'] = '';
        } else {
            result['House number'] = orderForm['house-number'].value;
            orderForm['house-number'].classList.remove('field-error');
            submitUnlocker(result);
        }

        /* Flat number */
    } else if (event.target === orderForm['flat-number']) {
        if (orderForm['flat-number'].value.trim()[0] === '-' || !(/^[0-9-]+$/.test(orderForm['flat-number'].value.trim()))) {
            orderForm['flat-number'].classList.add('field-error');
            result['Flat number'] = '';
        } else {
            result['Flat number'] = orderForm['flat-number'].value;
            orderForm['flat-number'].classList.remove('field-error');
            submitUnlocker(result);
        }

        /* Delivery date */
    } else if (event.target === orderForm['delivery-date']) {
        const currentDate = new Date(),
            orderDate = new Date(event.target.value);

        if (orderDate <= currentDate) {
            orderForm['delivery-date'].classList.add('field-error');
            result['Delivery date'] = '';
        } else {
            result['Delivery date'] = orderForm['delivery-date'].value;
            orderForm['delivery-date'].classList.remove('field-error');
            submitUnlocker(result);
        }
    }
}

function giftChecker(event) {
    const giftsCollection = orderForm.querySelectorAll('.checkbox');

    for (let gift of giftsCollection) {
        if (event.target === gift) {
            if (gift.checked) {
                giftCount++;
                if (giftCount >= 2) {
                    for (let gift of giftsCollection) {
                        if (!gift.checked) {
                            gift.disabled = true;
                        }
                    }
                }
            } else {
                giftCount--;
                for (let gift of giftsCollection) {
                    if (!gift.checked) {
                        gift.disabled = false;
                    }
                }
            }
        }
    }

}

function submitUnlocker(obj) {
    const submitBtn = document.querySelector('.form-submit');
    let isDataValid = true;

    for (let key in result) {
        if (result[key] === '') {
            isDataValid = false
        }
    }

    if (isDataValid) {
        submitBtn.disabled = false;
        submitBtn.classList.add('form-submit-active');
        console.log(result);
    } else {
        submitBtn.classList.remove('form-submit-active');
    }
}

// console.log(/^\d+$/.test('123'));