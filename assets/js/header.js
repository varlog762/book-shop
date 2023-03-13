const headerElement = createAndInsertElement('header', 'header-main', document.body, 'prepend');

const headerWrapper = createAndInsertElement('div', 'wrapper', headerElement, 'append');

// Header Container:

const headerContetntContainer = createAndInsertElement('div', 'header-content-container', headerElement.firstElementChild, 'append');

// Header H1:

const headerTitleLink = createAndInsertElement('a', 'header-title', headerContetntContainer, 'append');

headerTitleLink.setAttribute('href', 'index.html');

const headerTitle = createAndInsertElement('H1', 'header-title', headerTitleLink, 'append', 'Bookshop');

// Header Nav:

const headerNav = createAndInsertElement('nav', 'header-nav', headerContetntContainer, 'append');

const headerNavList = createAndInsertElement('ul', 'header-nav-list', headerNav, 'append');

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