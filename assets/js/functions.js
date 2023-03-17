const booksIDArray = ['dCrockford', 'dHerman', 'dFlanagan', 'eElliott', 'aOsmani', 'bCherny', 'aBanks', 'bMeck', 'kSimpson', 'jResig'];
const booksCollection = [];

const itemsInCartCollection = document.getElementsByClassName('cart-popup-item');

//Cart

const cart = {
    itemsInCart: [],
    numItemsInCart: 0,
    totalCost: 0,
};

/*createElement: создает и вставляет элемент в указанную позицию. Принимает название html-тега, имя присваемого класса, имя родительского элемента, имя метода для вставки и содержимое создаваемого элемента (по умолчанию пустая строка), возвращает готовый html-элемент.*/

function createAndInsertElement(html, className, parentElement, insertMethod, value = '') {
    const newElem = document.createElement(html);

    newElem.classList.add(className);
    newElem.innerHTML = value;

    switch (insertMethod) {
        case 'append':
            parentElement.append(newElem);
            break;
        case 'prepend':
            parentElement.prepend(newElem);
            break;
        case 'before':
            parentElement.before(newElem);
            break;
        case 'after':
            parentElement.after(newElem);
            break;
        case 'replaceWith':
            parentElement.replaceWith(newElem);
            break;
    }

    return newElem;
}


//Функция парсит JSON 
function getBooksDataFromJson(arrTo) {
    return fetch('./books.json')
        .then(response => response.json())
        .then(data => arrTo.push(...data))
        .catch(error => console.error(error));
}

//
function createBooks(title, author, descr, price, cover, id) {

    const book = createAndInsertElement('div', 'book', booksContainer, 'prepend');
    book.setAttribute('id', id);

    const bookCoverContainer = createAndInsertElement('div', 'book-cover-container', book, 'prepend');

    const bookCover = createAndInsertElement('img', 'book-cover', bookCoverContainer, 'prepend');
    bookCover.setAttribute('src', `../../assets/images/${cover}.jpeg`);
    bookCover.setAttribute('alt', `${author} - ${title}`);

    const toCartBtn = createAndInsertElement('button', 'to-cart', bookCoverContainer, 'prepend', 'add to cart');
    const moreInfo = createAndInsertElement('button', 'more-info', bookCoverContainer, 'prepend', 'more info');


    const bookTitle = createAndInsertElement('h4', 'book-name', book, 'append', title),
        bookAuthor = createAndInsertElement('p', 'book-author', book, 'append', author),
        bookDescr = createAndInsertElement('p', 'book-descr', book, 'append', descr),
        bookPrice = createAndInsertElement('p', 'book-price', book, 'append', `$ ${price}.00`);
}

//
async function getBooks() {
    const arr = [];

    await getBooksDataFromJson(arr);

    for (let i = 0; i < arr.length; i++) {
        createBooks(arr[i].title, arr[i].author, arr[i].description, arr[i].price, booksIDArray[i], booksIDArray[i]);
    }
}

//
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

//
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

//
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

//

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


}

function itemsToCartAdder(collection) {
    collection.forEach(item => {
        item.addEventListener('click', () => {

            //Create and add items to cart:

            const parent = item.closest('.book'),
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