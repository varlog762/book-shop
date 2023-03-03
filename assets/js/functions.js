const booksIDArray = ['dCrockford', 'dHerman', 'dFlanagan', 'eElliott', 'aOsmani', 'bCherny', 'aBanks', 'bMeck', 'kSimpson', 'jResig'];
const booksCollection = [];

/*createElement: создает и вставляет элемент в указанную позицию. Принимает название html-тега, имя присваемого класса, имя родительского элемента, имя метода для вставки и содержимое создаваемого элемента (по умолчанию пустая строка), возвращает готовый html-элемент.*/

function createAndInsertElement(html, className, parrentElement, insertMethod, value = '') {
    const newElem = document.createElement(html);

    newElem.classList.add(className);
    newElem.innerHTML = value;

    switch (insertMethod) {
        case 'append':
            parrentElement.append(newElem);
            break;
        case 'prepend':
            parrentElement.prepend(newElem);
            break;
        case 'before':
            parrentElement.before(newElem);
            break;
        case 'after':
            parrentElement.after(newElem);
            break;
        case 'replaceWith':
            parrentElement.replaceWith(newElem);
            break;
    }

    return newElem;
}


//Функция парсит JSON 
function getBooksDataFromJson(arrTo, path) {
    return fetch(path)
        .then(response => response.json())
        .then(data => arrTo.push(...data))
        .catch(error => console.error(error));
}

//
function createBooks(title, author, price, cover, id) {

    const book = createAndInsertElement('div', 'book', booksContainer, 'prepend');
    book.setAttribute('id', id);

    const bookCoverCantainer = createAndInsertElement('div', 'book-cover-container', book, 'prepend');

    const bookCover = createAndInsertElement('img', 'book-cover', bookCoverCantainer, 'prepend');
    bookCover.setAttribute('src', `/assets/images/${cover}.jpeg`);
    bookCover.setAttribute('alt', `${author} - ${title}`);

    const toCartBtn = createAndInsertElement('div', 'to-cart', bookCoverCantainer, 'prepend', 'add to cart');
    const moreInfo = createAndInsertElement('div', 'more-info', bookCoverCantainer, 'prepend', 'more info');


    const bookTitle = createAndInsertElement('h4', 'book-name', book, 'append', title),
        bookAuthor = createAndInsertElement('p', 'book-author', book, 'append', author),
        bookPrice = createAndInsertElement('p', 'book-price', book, 'append', `$ ${price}.00`);
}

//
async function getBooks() {
    const arr = [];

    await getBooksDataFromJson(arr, '/assets/json/books.json');

    for (let i = 0; i < arr.length; i++) {
        createBooks(arr[i].title, arr[i].author, arr[i].price, booksIDArray[i], booksIDArray[i]);
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