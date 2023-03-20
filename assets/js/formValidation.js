"use strict";

const result = {
    'name': '',
    'surname': '',
    'street': '',
    'house-number': '',
    'flat-number': '',
    'delivery-date': '',
    'payment-type': 'cash',
    'gifts': [],
};

let orderStatus = false,
    giftCount = 0;

const orderForm = document.forms.order_form;

orderForm.addEventListener('focusout', validateData);
orderForm.addEventListener('input', validateData);

orderForm['payment-type'][0].addEventListener('change', () => {
    result['payment-type'] = orderForm['payment-type'][0].value
});
orderForm['payment-type'][1].addEventListener('change', () => {
    result['payment-type'] = orderForm['payment-type'][1].value
});

orderForm.addEventListener('change', checkGift);

const submitBtn = orderForm.querySelector('.form-submit'),
    resultPopup = document.querySelector('.result-popup');

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    generateResultTable();
    resultPopup.classList.add('result-popup--visible');
});