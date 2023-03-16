const mainShop = document.querySelector('.main-content');
const mainForm = document.querySelector('.main__form');
let footerElement;

if (mainShop!= null) {
    footerElement = createAndInsertElement('footer', 'footer', mainShop, 'after');
} else {
    footerElement = createAndInsertElement('footer', 'footer', mainForm, 'after');
}

createAndInsertElement('div', 'wrapper', footerElement, 'append');

const footerContainer = createAndInsertElement('div', 'footer-container', footerElement.firstElementChild, 'append'),
    footerCopyRightsContainer = createAndInsertElement('div', 'footer-copy-cont', footerElement.firstElementChild, 'append');

const footerDescr = createAndInsertElement('div', 'footer-description', footerContainer, 'append'),
    footerCompany = createAndInsertElement('div', 'footer-company', footerContainer, 'append'),
    footerImportentLinks = createAndInsertElement('div', 'footer-importent-links', footerContainer, 'append');

const footerDescrLogo = createAndInsertElement('div', 'footer-description-logo', footerDescr, 'append'),
    footerDescrContent = createAndInsertElement('p', 'footer-description-content', footerDescr, 'append', `Lorem ipsum dolor sit, amet consectetur adipisicing elit.`),
    footerDescrLinks = createAndInsertElement('ul', 'footer-description-links', footerDescr, 'append');

for (let i = 0; i < 4; i++) {
    createAndInsertElement('li', 'footer-description-link-item', footerDescrLinks, 'append');
    createAndInsertElement('a', 'footer-description-link-icon', footerDescrLinks.lastElementChild, 'append');
}

const footerDescrLinksCollection = footerDescrLinks.children;

for (let i = 0; i < 4; i++) {
    const linkssArray = ['footer-facebook', 'footer-linkedin', 'footer-twitter', 'footer-youtube'];
    footerDescrLinksCollection[i].firstElementChild.setAttribute('href', '#');
    footerDescrLinksCollection[i].firstElementChild.classList.add(linkssArray[i]);
}

const footerCompanyTitle = createAndInsertElement('h3', 'footer-company-title', footerCompany, 'append', 'company'),
    footerCompanyMenu = createAndInsertElement('ul', 'footer-company-munu', footerCompany, 'append');

for (let i = 0; i < 6; i++) {
    const companyMenuItemsArray = ['HOME', 'ABOUT US', 'BOOKS', 'NEW RELEASE', 'CONTACT US', 'BLOG'];
    createAndInsertElement('li', 'footer-company-menu-item', footerCompanyMenu, 'append');
    createAndInsertElement('a', 'footer-company-menu-link', footerCompanyMenu.lastElementChild, 'append', companyMenuItemsArray[i]);
}

const footerCompanyMenuItems = footerCompanyMenu.children;

for (let i = 0; i < 6; i++) {
    footerCompanyMenuItems[i].firstElementChild.setAttribute('href', '#');
}

const footerImportentLinksTitle = createAndInsertElement('h3', 'footer-importent-links-title', footerImportentLinks, 'append', 'Importent Links'),
    footerImportentLinksMenu = createAndInsertElement('ul', 'footer-importent-menu', footerImportentLinks, 'append');

for (let i = 0; i < 3; i++) {
    const importentLinksMenuItemsArray = ['Privacy Policy', 'FAQs', 'Terms of Service'];
    createAndInsertElement('li', 'footer-importent-menu-item', footerImportentLinksMenu, 'append');
    createAndInsertElement('a', 'footer-importent-menu-link', footerImportentLinksMenu.lastElementChild, 'append', importentLinksMenuItemsArray[i]);
}

const footerCopyRights = createAndInsertElement('p', 'footer-copyrights', footerCopyRightsContainer, 'append', '© 2022 All Rights Reserved.'),
    footerPrivacyLink = createAndInsertElement('a', 'footer-privaci-link', footerCopyRightsContainer, 'append'),
    footerPrivacyText = createAndInsertElement('p', 'footer-privaci-link', footerCopyRightsContainer.lastElementChild, 'append', 'Privacy | Terms of Service');