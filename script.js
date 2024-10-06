const bookTitle = document.querySelector('.book-title');
const bookAuthor = document.querySelector('.book-author');
const bookPages = document.querySelector('.page-number');

const radioValue = document.querySelectorAll('.read-book');
const modal = document.querySelector('[data-modal]')
const openModal = document.querySelector('[data-open-modal]')
const closeModal = document.querySelector('[data-close-modal]')

const form = document.querySelector('.form');

const submitButton = document.querySelector('.submit');

const gridElement = document.querySelector('.grid-container')
const lastItem = document.querySelector('.last-item');

const emptyDisplay = document.querySelector('.empty-library');

const myLibrary = [];

// Constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// add book to library
function addBookToLibrary() {
  const title = bookTitle.value;
  const author = bookAuthor.value;
  const pages = bookPages.value;
  let read;
  radioValue.forEach(function(radio) {
    if (radio.checked) {
      read = radio.value;
    }
  })
  const newBook = new Book(title, author, pages, read);
  return newBook;
}

// add values to grid
function gridArray(array) {
  const deleteElement = document.createElement('button');
  deleteElement.classList.add('delete-button');
  deleteElement.innerText = 'Remove';

  let itemValue;

//  remove values from grid and array
  deleteElement.addEventListener('click', function(event) {
    gridElement.removeChild(item);
    
    itemValue = event.target.parentElement.value;

    myLibrary.splice(itemValue, 1);

    if (myLibrary.length === 0) {
      emptyDisplay.style.display = 'block';
    } else {
      emptyDisplay.style.display = 'none'
    }
  })

  let item = '';
  for(let i = 0; i < myLibrary.length; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('items');
    
    const gridTitle = document.createElement('div');
    gridTitle.classList.add('title');
    gridTitle.innerText = array[i].title;
    gridItem.appendChild(gridTitle);
  
    const gridAuthor = document.createElement('div');
    gridAuthor.classList.add('author');
    gridAuthor.innerText = array[i].author;
    gridItem.appendChild(gridAuthor);
  
    const gridPages = document.createElement('div');
    gridPages.classList.add('pages');
    gridPages.innerText = `${array[i].pages} pages`;
    gridItem.appendChild(gridPages);

    const readBook = document.createElement('div');
    readBook.classList.add('radio-value');
    readBook.innerText = array[i].read;
    gridItem.appendChild(readBook);

    gridItem.appendChild(deleteElement);
    
    item = gridItem;
  }

  gridElement.appendChild(item);
  gridElement.insertBefore(item, lastItem);

  emptyDisplay.style.display = 'none';
}

// submit modal
form.addEventListener('submit', function() {
  // event.preventDefault();
  myLibrary.push(addBookToLibrary());
  gridArray(myLibrary);
  console.log(myLibrary);
})

// open modal
openModal.addEventListener('click', function() {
  modal.showModal();
})

// close modal
closeModal.addEventListener('click', function() {
  modal.close();
})

