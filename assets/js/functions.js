"use strict";

const booksIDArray = ['dCrockford', 'dHerman', 'dFlanagan', 'eElliott', 'aOsmani', 'bCherny', 'aBanks', 'bMeck', 'kSimpson', 'jResig'];
const booksCollection = [];

const itemsInCartCollection = document.getElementsByClassName('cart-popup-item');

//Cart
const cart = {
    itemsInCart: [],
    numItemsInCart: 0,
    totalCost: 0,
};

/**
 * Creates an HTML element and inserts it at the specified position. 
 * @param {html} - HTLM tag for a new element. 
 * @param {className} - CSS class for a new element. 
 * @param {parentElement} - Parent element into which the new element will be inserted.
 * @param {insertMethod} - Insert method (append, prepend, before, after, replaceWith).
 * @param {value} - Content of the new element.
 * @returns {newElem} - Object of the new element.
 */
function createAndInsertElement(html, className, parentElement, insertMethod, value = '') {
    const newElem = document.createElement(html),
        newFragment = document.createDocumentFragment();

    newElem.classList.add(className);
    newElem.innerHTML = value;

    newFragment.append(newElem);

    switch (insertMethod) {
        case 'append':
            parentElement.append(newFragment);
            break;
        case 'prepend':
            parentElement.prepend(newFragment);
            break;
        case 'before':
            parentElement.before(newFragment);
            break;
        case 'after':
            parentElement.after(newFragment);
            break;
        case 'replaceWith':
            parentElement.replaceWith(newFragment);
            break;
    }

    return newElem;
}

/**
 * Parses JSON and retrieves data for creating books.
 * @param {arr}
 * @returns ...
 */
function getDataFromJson(arr) {
    return fetch('./books.json')
        .then(response => response.json())
        .then(data => arr.push(...data))
        .catch(error => console.error(error));
}

function createBooks(title, author, descr, price, cover, id) {

    const book = createAndInsertElement('div', 'book', booksContainer, 'prepend');
    book.setAttribute('id', id);

    const bookCoverContainer = createAndInsertElement('div', 'book-cover-container', book, 'prepend');

    const bookCover = createAndInsertElement('img', 'book-cover', bookCoverContainer, 'prepend');
    bookCover.setAttribute('src', `assets/images/${cover}.jpeg`);
    bookCover.setAttribute('alt', `${author} - ${title}`);
    bookCover.setAttribute('id', id + 'Cover');
    bookCover.setAttribute('draggable', 'true');

    const toCartBtn = createAndInsertElement('button', 'to-cart', bookCoverContainer, 'prepend', 'add to cart');
    const moreInfo = createAndInsertElement('button', 'more-info', bookCoverContainer, 'prepend', 'more info');

    const bookTitle = createAndInsertElement('h4', 'book-name', book, 'append', title),
        bookAuthor = createAndInsertElement('p', 'book-author', book, 'append', author),
        bookDescr = createAndInsertElement('p', 'book-descr', book, 'append', descr),
        bookPrice = createAndInsertElement('p', 'book-price', book, 'append', `$ ${price}.00`);
}

async function getBooks() {
    const dataForBooksArray = [];

    await getDataFromJson(dataForBooksArray);

    for (let i = 0; i < dataForBooksArray.length; i++) {
        createBooks(dataForBooksArray[i].title, dataForBooksArray[i].author, dataForBooksArray[i].description, dataForBooksArray[i].price, booksIDArray[i], booksIDArray[i]);
    }
}

async function addBooksButtons(elem) {
    await getBooks();

    const dCrockford = document.getElementById('dCrockford');
    booksCollection.push(dCrockford);
    const dHerman = document.getElementById('dHerman');
    booksCollection.push(dHerman);
    const dFlanagan = document.getElementById('dFlanagan');
    booksCollection.push(dFlanagan);
    const eElliott = document.getElementById('eElliott');
    booksCollection.push(eElliott);
    const aOsmani = document.getElementById('aOsmani');
    booksCollection.push(aOsmani);
    const bCherny = document.getElementById('bCherny');
    booksCollection.push(bCherny);
    const aBanks = document.getElementById('aBanks');
    booksCollection.push(aBanks);
    const bMeck = document.getElementById('bMeck');
    booksCollection.push(bMeck);
    const kSimpson = document.getElementById('kSimpson');
    booksCollection.push(kSimpson);
    const jResig = document.getElementById('jResig');
    booksCollection.push(jResig);

    booksCollection.reverse();

    const toCartColl = document.querySelectorAll('.to-cart'),
        moreInfoColl = document.querySelectorAll('.more-info');

    for (let i = 0; i < booksCollection.length; i++) {
        booksCollection[i].addEventListener('mouseenter', () => {
            toCartColl[i].classList.add('book-hover');
            moreInfoColl[i].classList.add('book-hover');
        });

        booksCollection[i].addEventListener('mouseleave', () => {
            toCartColl[i].classList.remove('book-hover');
            moreInfoColl[i].classList.remove('book-hover');
        });
    }
}

async function createPopup() {
    await addBooksButtons();

    const booksCollection = booksContainer.children;

    for (let parent of booksCollection) {
        const parentCover = parent.querySelector('.book-cover'),
            parentTitle = parent.querySelector('.book-name'),
            parentAuthor = parent.querySelector('.book-author'),
            parentDescr = parent.querySelector('.book-descr'),
            parentPrice = parent.querySelector('.book-price');

        const bookPopup = createAndInsertElement('div', 'book-popup', parent, 'append');
        const bookPopupContainer = createAndInsertElement('div', 'book-popup-container', bookPopup, 'prepend');

        const bookPopupCoverContainer = createAndInsertElement('div', 'book-popup-cover-conteiner', bookPopupContainer, 'append');
        const bookPopupCover = createAndInsertElement('img', 'book-popup-cover', bookPopupCoverContainer, 'append');

        bookPopupCover.setAttribute('src', parentCover.getAttribute('src'));
        bookPopupCover.setAttribute('alt', `${parentAuthor.innerHTML} - ${parentTitle.innerHTML}`);

        const bookPopupContentContainer = createAndInsertElement('div', 'book-popup-content-conteiner', bookPopupContainer, 'append');

        const bookPopupTitle = createAndInsertElement('h2', 'book-popup-title', bookPopupContentContainer, 'append', parentTitle.innerHTML),
            bookPopupAuthor = createAndInsertElement('p', 'book-popup-author', bookPopupContentContainer, 'append', parentAuthor.innerHTML),
            bookPopupDescr = createAndInsertElement('p', 'book-popup-descr', bookPopupContentContainer, 'append', parentDescr.innerHTML),
            bookPopupPrice = createAndInsertElement('p', 'book-popup-price', bookPopupContentContainer, 'append', parentPrice.innerHTML),
            bookPopupBtn = createAndInsertElement('button', 'book-popup-button', bookPopupContentContainer, 'append', 'ADD TO CART');

        const bookPopupCloseBtn = createAndInsertElement('button', 'book-popup-close-button', bookPopupContainer, 'append');
    }
}

async function showAndClosePopup() {
    await createPopup();

    for (let book of booksCollection) {
        const moreInfoBtn = book.querySelector('.more-info'),
            popup = book.querySelector('.book-popup'),
            popUpCloseBtn = book.querySelector('.book-popup-close-button');

        moreInfoBtn.onclick = function () {
            popup.classList.add('book-popup-visible');
        };

        popUpCloseBtn.onclick = function () {
            popup.classList.remove('book-popup-visible');
        };
    }
}

function createCartItem(title, author, price, coverPath) {
    const cartElementPopupItem = createAndInsertElement('div', 'cart-popup-item', cartElementPopupItemsContainer, 'append');

    const cartElementPopupItemCoverContainer = createAndInsertElement('div', 'cart-popup-item-cover-container', cartElementPopupItem, 'append'),
        cartElementPopupItemCover = createAndInsertElement('img', 'cart-popup-item-cover-container', cartElementPopupItemCoverContainer, 'append'),
        cartElementPopupItemDescr = createAndInsertElement('div', 'cart-popup-item-description', cartElementPopupItem, 'append'),
        cartElementPopupItemDescrTitle = createAndInsertElement('div', 'cart-popup-item-description-title', cartElementPopupItemDescr, 'append', `${title}`),
        cartElementPopupItemDescrAuthor = createAndInsertElement('div', 'cart-popup-item-description-author', cartElementPopupItemDescr, 'append', `${author}`),
        cartElementPopupItemDescrPrice = createAndInsertElement('div', 'cart-popup-item-description-price', cartElementPopupItemDescr, 'append', `${price}`),
        cartElementPopupItemDeleteBtn = createAndInsertElement('button', 'cart-popup-item-delete-button', cartElementPopupItem, 'append');

    cartElementPopupItemCover.setAttribute('src', coverPath);
    cartElementPopupItemCover.setAttribute('alt', `${author} - ${title}`);

    return cartElementPopupItem;
}

async function addAndRemoveItemToCart() {
    await showAndClosePopup();

    const toCartButtonsCollection = document.querySelectorAll('.to-cart'),
        toCartPopupButtonsCollection = document.querySelectorAll('.book-popup-button');

    itemsToCartAdder(toCartButtonsCollection);
    itemsToCartAdder(toCartPopupButtonsCollection);

    //Drag&Drop:
    dragNDrop();
}

function itemsToCartAdder(collection) {
    collection.forEach(item => {
        item.addEventListener('click', () => {

            //Create and add items to cart:
            createBookForCart(item);
        });
    });
}

function itemRemover(bookInCart) {
    const bookRemoveButton = bookInCart.querySelector('.cart-popup-item-delete-button');
    bookRemoveButton.addEventListener('click', () => {
        cart.numItemsInCart--;
        cartElementNum.innerHTML = cart.numItemsInCart;
        setCartTotal(bookInCart, 'remove');

        if (cart.numItemsInCart == 0) {
            cartElementNum.classList.remove('cart-number-vivsible');
            cartEmpty.classList.remove('cart-empty-invisible');
            cartElementPopupTotal.innerHTML = '';
            cartElementPopupCheckoutButton.classList.remove('cart-popup-checkout-button-active');
        }

        bookInCart.remove();
    });
}

function setCartTotal(bookInCart, method) {
    const price = bookInCart.querySelector('.cart-popup-item-description-price');

    switch (method) {
        case 'add':
            cart.totalCost += +price.innerHTML.slice(2, 4);
            break;
        case 'remove':
            cart.totalCost -= +price.innerHTML.slice(2, 4);
            break;
    }

    cartElementPopupTotal.innerHTML = `Items in cart: ${cart.numItemsInCart}<br> Total cost: $${cart.totalCost}.00`;
}

function dragNDrop() {
    const booksCoverCollection = document.querySelectorAll('.book-cover');

    cartContainer.ondragover = allowDrop;

    for (let bookCover of booksCoverCollection) {
        bookCover.ondragstart = dragBook;
    }

    cartContainer.ondrop = dropToCart;
}

function allowDrop(event) {
    event.preventDefault();
}

function dragBook(event) {
    event.dataTransfer.setData('id', event.target.id);
}

function dropToCart(event) {
    let itemID = event.dataTransfer.getData('id');
    const bookCover = document.getElementById(itemID);

    createBookForCart(bookCover);
}

function createBookForCart(element) {
    const parent = element.closest('.book'),
        parentTitle = parent.querySelector('.book-name'),
        parentAuthor = parent.querySelector('.book-author'),
        parentPrice = parent.querySelector('.book-price'),
        parentCoverPath = parent.querySelector('.book-cover');

    const newBookInCart = createCartItem(parentTitle.innerHTML, parentAuthor.innerHTML, parentPrice.innerHTML, parentCoverPath.getAttribute('src'));

    cart.numItemsInCart++;
    cartElementNum.classList.add('cart-number-vivsible');
    cartEmpty.classList.add('cart-empty-invisible');
    cartElementPopupCheckoutButton.classList.add('cart-popup-checkout-button-active');

    cartElementNum.innerHTML = cart.numItemsInCart;
    setCartTotal(newBookInCart, 'add');

    itemRemover(newBookInCart);
}

function validateData(event) {
    // Name:
    if (event.target === orderForm.name) {
        if (orderForm.name.value.length < 4 || orderForm.name.value.trim().includes(' ') || !(/^[a-zA-ZА-Яа-яЁё]+$/.test(orderForm.name.value.trim()))) {
            showFieldError('name');
        } else {
            acceptFieldData('name');
        }

        // Surname:
    } else if (event.target === orderForm.surname) {
        if (orderForm.surname.value.length < 5 || orderForm.surname.value.trim().includes(' ') || !(/^[a-zA-ZА-Яа-яЁё]+$/.test(orderForm.surname.value.trim()))) {
            showFieldError('surname');
        } else {
            acceptFieldData('surname');
        }

        // Street:
    } else if (event.target === orderForm.street) {
        if (+orderForm.street.value.length < 5) {
            showFieldError('street');
        } else {
            acceptFieldData('street');
        }

        // House number:
    } else if (event.target === orderForm['house-number']) {
        if (+orderForm['house-number'].value < 0 || !(/^\d+$/.test(orderForm['house-number'].value.trim()))) {
            showFieldError('house-number');
        } else {
            acceptFieldData('house-number');
        }

        // Flat number:
    } else if (event.target === orderForm['flat-number']) {
        if (orderForm['flat-number'].value.trim()[0] === '-' || !(/^[0-9-]+$/.test(orderForm['flat-number'].value.trim()))) {
            showFieldError('flat-number');
        } else {
            acceptFieldData('flat-number');
        }

        /* Delivery date */
    } else if (event.target === orderForm['delivery-date']) {
        const currentDate = new Date(),
            orderDate = new Date(event.target.value);

        if (orderDate <= currentDate || event.target.value === '') {
            showFieldError('delivery-date');
        } else {
            acceptFieldData('delivery-date');
        }
    }
}

function checkGift(event) {
    const giftsCollection = orderForm.querySelectorAll('.checkbox');

    for (let gift of giftsCollection) {
        if (event.target === gift) {
            if (gift.checked) {
                result['gifts'].push(gift.nextElementSibling.innerHTML);
                giftCount++;
                if (giftCount >= 2) {
                    for (let gift of giftsCollection) {
                        if (!gift.checked) {
                            gift.disabled = true;
                        }
                    }
                }
            } else {
                const arr = result['gifts'].filter((item) => {
                    return (item !== gift.nextElementSibling.innerHTML);
                });
                result['gifts'] = arr;
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

function unlockSubmit(obj) {
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

function generateResultTable() {
    const tdNameValue = document.querySelector('.td-name-value'),
        tdSurnameValue = document.querySelector('.td-surname-value'),
        tdStreetValue = document.querySelector('.td-street-value'),
        tdHouseNumber = document.querySelector('.td-house-number-value'),
        tdFlatNumber = document.querySelector('.td-flat-number-value'),
        tdDeliveryTypeValue = document.querySelector('.td-delivery-date-value'),
        tdPaymentTypeValue = document.querySelector('.td-payment-type-value'),
        tdGiftsValue = document.querySelector('.td-gifts-value');

    tdNameValue.innerHTML = result['name'];
    tdSurnameValue.innerHTML = result['surname'];
    tdStreetValue.innerHTML = result['street'];
    tdHouseNumber.innerHTML = result['house-number'];
    tdFlatNumber.innerHTML = result['flat-number'];
    tdDeliveryTypeValue.innerHTML = result['delivery-date'];
    tdPaymentTypeValue.innerHTML = result['payment-type'];
    if (result['gifts'].length === 2) {
        tdGiftsValue.innerHTML = `${result['gifts'][0]}, ${result['gifts'][1]}`;
    } else {
        tdGiftsValue.innerHTML = result['gifts'];
    }
}

function showFieldError(formFieldName) {
    orderForm[formFieldName].classList.add('field-error');
    result[formFieldName] = '';
    orderForm.querySelector(`.${formFieldName}-container`).classList.add('container-error');
}

function acceptFieldData(formFieldName) {
    result[formFieldName] = orderForm[formFieldName].value;
    orderForm[formFieldName].classList.remove('field-error');
    orderForm.querySelector(`.${formFieldName}-container`).classList.remove('container-error');
    unlockSubmit(result);
}