const headerElement = document.createElement('header'),
    mainElement = document.createElement('main'),
    footerElement = document.createElement('footer');

headerElement.classList.add('header-main');
mainElement.classList.add('main-content');
footerElement.classList.add('footer-main');

document.body.prepend(headerElement, mainElement, footerElement);

for (let item of document.body.children) {
    item.append(document.createElement('div'));
    item.firstElementChild.classList.add('wrapper');
}

// Header Container:

const headerContetntContainer = document.createElement('div');
headerElement.firstElementChild.append(headerContetntContainer);
headerContetntContainer.classList.add('header-content-container');

// Header H1:

const headerTitle = document.createElement('H1');
headerContetntContainer.append(headerTitle);
headerTitle.classList.add('header-title');

headerTitle.innerHTML = 'Bookshop';

// Header Nav:

const headerNav = document.createElement('nav');
headerContetntContainer.append(headerNav);
headerNav.classList.add('header-nav');

const headerNavList = document.createElement('ul');
headerNav.append(headerNavList);
headerNavList.classList.add('header-nav-list');

for (let i = 0; i < 5; i++) {
    headerNavList.append(document.createElement('li'));
}

const socialNetworks = ['facebook', 'instagram', 'linkedin', 'twitter', 'blogger'];

const headerNavListItemsCollection = headerNavList.children;

for (let i = 0; i < headerNavListItemsCollection.length; i++) {
    headerNavListItemsCollection[i].classList.add('header-list-item');
    headerNavListItemsCollection[i].append(document.createElement('a'));
    headerNavListItemsCollection[i].firstElementChild.classList.add('header-list-item-link', socialNetworks[i]);
    headerNavListItemsCollection[i].firstElementChild.setAttribute('href', '#');
}

//Main:
//User Accaunt Interface:

const userAccount = document.createElement('div');
userAccount.classList.add('user-account');
mainElement.firstElementChild.append(userAccount);

const userAccountContainer = document.createElement('div');
userAccountContainer.classList.add('user-account-container');
userAccount.append(userAccountContainer);

userAccountContainer.append(document.createElement('div'));
userAccountContainer.append(document.createElement('nav'));
userAccountContainer.append(document.createElement('ul'));
userAccountContainer.firstElementChild.classList.add('user-account-logo');
userAccountContainer.firstElementChild.nextElementSibling.classList.add('user-account-menu');
userAccountContainer.lastElementChild.classList.add('user-account-tools');

//User Menu:

const userAccountMenu = userAccountContainer.firstElementChild.nextElementSibling;
userAccountMenu.append(document.createElement('ul'));
userAccountMenu.firstElementChild.classList.add('user-account-menu-list');

for (let i = 0; i < 6; i++) {
    userAccountMenu.firstElementChild.append(document.createElement('li'));
}

const userAccountMenuItemsCollection = userAccountMenu.firstElementChild.children;
for (let item of userAccountMenuItemsCollection) {
    item.classList.add('user-account-menu-list-item');
    item.append(document.createElement('a'));
    item.lastElementChild.classList.add('user-account-menu-list-link');
    item.lastElementChild.setAttribute('href', '#');
}

userAccountMenuItemsCollection[0].firstElementChild.append(document.createTextNode('HOME'));
userAccountMenuItemsCollection[1].firstElementChild.append(document.createTextNode('ABOUT US'));
userAccountMenuItemsCollection[2].firstElementChild.append(document.createTextNode('BOOKS'));
userAccountMenuItemsCollection[3].firstElementChild.append(document.createTextNode('NEW RELEASE'));
userAccountMenuItemsCollection[4].firstElementChild.append(document.createTextNode('CONTACT US'));
userAccountMenuItemsCollection[5].firstElementChild.append(document.createTextNode('BLOG'));

//User Tools:

const userAccountTools = document.querySelector('.user-account-tools');
for (let i = 0; i < 3; i++) {
    userAccountTools.append(document.createElement('li'));
    userAccountTools.lastChild.classList.add('user-account-tools-item');
    userAccountTools.lastChild.append(document.createElement('a'));
}

userAccountTools.children[0].firstChild.classList.add('user-account-tools-item-link', 'user-settings');
userAccountTools.children[0].firstChild.setAttribute('href', '#');
userAccountTools.children[1].firstChild.classList.add('user-account-tools-item-link', 'cart');
userAccountTools.children[1].firstChild.setAttribute('href', '#');
userAccountTools.children[2].firstChild.classList.add('user-account-tools-item-link', 'favorite');
userAccountTools.children[2].firstChild.setAttribute('href', '#');