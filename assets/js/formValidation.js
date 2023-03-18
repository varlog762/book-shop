"use strict";

const result = {
    'Name': '',
    'Surname': '',
    'Street': '',
    'House number': '',
    'Flat number': '',
    'Delivery date': '',
    'Payment type': 'cash',
    'Gifts': [],
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
    resultPopup = document.querySelector('.result-popup');

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    resultTableGenerator();
    resultPopup.classList.add('result-popup--visible');
});

function dataValidator(event) {
    if (event.target === orderForm.name) {
        const nameContainer = orderForm.querySelector('.name-container');

        if (orderForm.name.value.length < 4 || orderForm.name.value.trim().includes(' ') || !(/^[a-zA-ZА-Яа-яЁё]+$/.test(orderForm.name.value.trim()))) {
            orderForm.name.classList.add('field-error');
            result['Name'] = '';
            nameContainer.classList.add('container-error');
        } else {
            result['Name'] = orderForm.name.value;
            orderForm.name.classList.remove('field-error');
            nameContainer.classList.remove('container-error');
            submitUnlocker(result);
        }

        /* Surname */
    } else if (event.target === orderForm.surname) {
        const surnameContainer = orderForm.querySelector('.surname-container');

        if (orderForm.surname.value.length < 5 || orderForm.surname.value.trim().includes(' ') || !(/^[a-zA-ZА-Яа-яЁё]+$/.test(orderForm.surname.value.trim()))) {
            orderForm.surname.classList.add('field-error');
            result['Surname'] = '';
            surnameContainer.classList.add('container-error');
        } else {
            result['Surname'] = orderForm.surname.value;
            orderForm.surname.classList.remove('field-error');
            surnameContainer.classList.remove('container-error');
            submitUnlocker(result);
        }

        /* Street */
    } else if (event.target === orderForm.street) {
        const streetContainer = orderForm.querySelector('.street-container');

        if (+orderForm.street.value.length < 5) {
            orderForm.street.classList.add('field-error');
            result['Street'] = '';
            streetContainer.classList.add('container-error');
        } else {
            result['Street'] = orderForm.street.value;
            orderForm.street.classList.remove('field-error');
            streetContainer.classList.remove('container-error');
            submitUnlocker(result);
        }

        /* House number */
    } else if (event.target === orderForm['house-number']) {
        const houseNumberContainer = orderForm.querySelector('.house-number-container');

        if (+orderForm['house-number'].value < 0 || !(/^\d+$/.test(orderForm['house-number'].value.trim()))) {
            orderForm['house-number'].classList.add('field-error');
            result['House number'] = '';
            houseNumberContainer.classList.add('container-error');
        } else {
            result['House number'] = orderForm['house-number'].value;
            orderForm['house-number'].classList.remove('field-error');
            houseNumberContainer.classList.remove('container-error');
            submitUnlocker(result);
        }

        /* Flat number */
    } else if (event.target === orderForm['flat-number']) {
        const flatNumberContainer = orderForm.querySelector('.flat-number-container');

        if (orderForm['flat-number'].value.trim()[0] === '-' || !(/^[0-9-]+$/.test(orderForm['flat-number'].value.trim()))) {
            orderForm['flat-number'].classList.add('field-error');
            result['Flat number'] = '';
            flatNumberContainer.classList.add('container-error');
        } else {
            result['Flat number'] = orderForm['flat-number'].value;
            orderForm['flat-number'].classList.remove('field-error');
            flatNumberContainer.classList.remove('container-error');
            submitUnlocker(result);
        }

        /* Delivery date */
    } else if (event.target === orderForm['delivery-date']) {
        const deliveryDateContainer = orderForm.querySelector('.delivery-date-container'),
            currentDate = new Date(),
            orderDate = new Date(event.target.value);

        if (orderDate <= currentDate || event.target.value === '') {
            orderForm['delivery-date'].classList.add('field-error');
            result['Delivery date'] = '';
            deliveryDateContainer.classList.add('container-error');
        } else {
            result['Delivery date'] = orderForm['delivery-date'].value;
            orderForm['delivery-date'].classList.remove('field-error');
            deliveryDateContainer.classList.remove('container-error');
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
    } else {
        submitBtn.classList.remove('form-submit-active');
    }
}

function resultTableGenerator() {
    const tdNameValue = document.querySelector('.td-name-value'),
        tdSurnameValue = document.querySelector('.td-surname-value'),
        tdStreetValue = document.querySelector('.td-street-value'),
        tdHouseNumber = document.querySelector('.td-house-number-value'),
        tdFlatNumber = document.querySelector('.td-flat-number-value'),
        tdDeliveryTypeValue = document.querySelector('.td-delivery-date-value'),
        tdPaymentTypeValue = document.querySelector('.td-payment-type-value');

        tdNameValue.innerHTML = result['Name'];
        tdSurnameValue.innerHTML = result['Surname'];
        tdStreetValue.innerHTML = result['Street'];
        tdHouseNumber.innerHTML = result['House number'];
        tdFlatNumber.innerHTML = result['Flat number'];
        tdDeliveryTypeValue.innerHTML = result['Delivery date'];
        tdPaymentTypeValue.innerHTML = result['Payment type'];
}