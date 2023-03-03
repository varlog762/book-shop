const mainElement = createAndInsertElement('main', 'main-content', headerElement, 'after');

//User Accaunt Interface:

const userAccount = createAndInsertElement('div', 'user-account', mainElement, 'append');

const userAccountWrapper = createAndInsertElement('div', 'wrapper', userAccount, 'append');

const userAccountContainer = createAndInsertElement('div', 'user-account-container', userAccount.firstElementChild, 'append');

const userAccountLogo = createAndInsertElement('div', 'user-account-logo', userAccountContainer, 'append');
const userAccountMenu = createAndInsertElement('nav', 'user-account-menu', userAccountContainer, 'append');
const userAccountTools = createAndInsertElement('ul', 'user-account-tools', userAccountContainer, 'append');

//User Menu:

// const userAccountMenu = userAccountContainer.firstElementChild.nextElementSibling;
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

//User Tools:

for (let i = 0; i < 3; i++) {
    createAndInsertElement('li', 'user-account-tools-item', userAccountTools, 'append');
    createAndInsertElement('a', `user-account-tools-item-link`, userAccountTools.lastChild, 'append');
}

const userAccToolsItemsLinksCollection = userAccountTools.children;

for (let i = 0; i < 3; i++) {
    const userAccountToolsStylesArray = ['user-settings', 'cart', 'favorite'];
    userAccToolsItemsLinksCollection[i].firstElementChild.classList.add(userAccountToolsStylesArray[i]);
    userAccToolsItemsLinksCollection[i].firstElementChild.setAttribute('href', '#');
}

//New Release Books:

const newBooksSection = createAndInsertElement('section', 'new-books', mainElement, 'append');

const newBooksSectionWrapper = createAndInsertElement('div', 'wrapper', newBooksSection, 'append');

createAndInsertElement('p', 'new-books-description', newBooksSectionWrapper, 'append', 'Some quality items');
createAndInsertElement('h2', 'new-books-title', newBooksSectionWrapper, 'append', 'New Release Books');
createAndInsertElement('div', 'new-books-container', newBooksSectionWrapper, 'append');

