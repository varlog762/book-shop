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