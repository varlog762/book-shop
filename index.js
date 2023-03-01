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
