const mainElement = createAndInsertElement('main', 'main-content', headerElement, 'after');

//User Accaunt Interface:

const userAccount = createAndInsertElement('div', 'user-account', mainElement, 'append');

const userAccountWrapper = createAndInsertElement('div', 'wrapper', userAccount, 'append');

const userAccountContainer = createAndInsertElement('div', 'user-account-container', userAccount.firstElementChild, 'append');

const userAccountLogo = createAndInsertElement('div', 'user-account-logo', userAccountContainer, 'append');
const userAccountMenu = createAndInsertElement('nav', 'user-account-menu', userAccountContainer, 'append');
const cartContainer = createAndInsertElement('div', 'cart-container', userAccountContainer, 'append');

//User Menu:

userAccountMenu.append(document.createElement('ul'));
userAccountMenu.firstElementChild.classList.add('user-account-menu-list');

for (let i = 0; i < 6; i++) {
    createAndInsertElement('li', 'user-account-menu-list-item', userAccountMenu.firstElementChild, 'append');
}

const userAccountMenuItemsCollection = userAccountMenu.firstElementChild.children;

for (let i = 0; i < userAccountMenuItemsCollection.length; i++) {
    const menuItemsValueArray = ['HOME', 'ABOUT US', 'BOOKS', 'NEW RELEASE', 'CONTACT US', 'BLOG'];

    createAndInsertElement('a', 'user-account-menu-list-link', userAccountMenuItemsCollection[i], 'append', menuItemsValueArray[i]);

    userAccountMenuItemsCollection[i].lastChild.setAttribute('href', '#');
}

//Cart Element:

const cartElement = userAccountContainer.querySelector('.cart-container');

const cartElementButton = createAndInsertElement('button', 'cart-button', cartElement, 'append'),
    cartElementNum = createAndInsertElement('div', 'cart-number', cartElement, 'append', cart.numItemsInCart),
    cartElementPopup = createAndInsertElement('div', 'cart-popup', cartElement, 'append');

cartElementButton.setAttribute('type', 'button');

//Cart Popup:

const cartElementPopupContainer = createAndInsertElement('div', 'cart-popup-container', cartElementPopup, 'append');

const cartElementPopupTitle = createAndInsertElement('h2', 'cart-popup-title', cartElementPopupContainer, 'append', 'Shopping Cart'),
    cartElementPopupItemsContainer = createAndInsertElement('div', 'cart-popup-items-container', cartElementPopupContainer, 'append'),
    cartElementPopupDownContainer = createAndInsertElement('div', 'cart-popup-down-container', cartElementPopupContainer, 'append'),
    cartElementPopupTotal = createAndInsertElement('div', 'cart-popup-total-cost', cartElementPopupDownContainer, 'append'),
    cartEmpty = createAndInsertElement('div', 'cart-empty', cartElementPopupItemsContainer, 'append', 'Your Cart is Empty.'),
    cartElementPopupCheckoutButton = createAndInsertElement('a', 'cart-popup-checkout-button', cartElementPopupDownContainer, 'append', 'Checkout'),
    cartElementPopupCloseButton = createAndInsertElement('button', 'cart-popup-close-button', cartElementPopupContainer, 'append');

// console.log(cartElementPopupDownContainer);

cartElementPopupCheckoutButton.setAttribute('href', 'form.html');
cartElementPopupCloseButton.setAttribute('type', 'button');

cartElementButton.addEventListener('click', () => cartElementPopup.classList.add('cart-popup-visible'));
cartElementPopupCloseButton.addEventListener('click', () => cartElementPopup.classList.remove('cart-popup-visible'));

//New Release Books:

const newBooksSection = createAndInsertElement('section', 'new-books', mainElement, 'append');

const newBooksSectionWrapper = createAndInsertElement('div', 'wrapper', newBooksSection, 'append');

createAndInsertElement('p', 'new-books-description', newBooksSectionWrapper, 'append', 'Some quality items');
createAndInsertElement('h2', 'new-books-title', newBooksSectionWrapper, 'append', 'New Release Books');
const booksContainer = createAndInsertElement('div', 'new-books-container', newBooksSectionWrapper, 'append');

addAndRemoveItemToCart();
