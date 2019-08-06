const bookShelf = document.querySelector('main');
const btnNewBook = document.querySelector('#btn-new');
const newBookForm = document.querySelector('form');
const btnAddBook = document.querySelector('#add-book');
const btnRemoveBook = document.querySelector('.btnRemove');
var myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title; 
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

const addBookToLibrary = book => {
  myLibrary.push(book);
  render();
}

const createBook = () => {
  const bookTitle = document.querySelector('#title');
  const bookAuthor = document.querySelector('#author');
  const numPages = document.querySelector('#pages');
  const hasReadBox = document.querySelector('input[type="checkbox"]');
  let hasRead;
  if(hasReadBox.checked) {
    hasRead = "Read";
  } else {
    hasRead = "Not Read";
  }

  if(bookTitle.value === "" || bookAuthor.value === "" || numPages.value === "") {
    return;
  }

  let newBook = new Book(bookTitle.value, bookAuthor.value, numPages.value, hasRead);
  addBookToLibrary(newBook);
  bookTitle.value = "";
  bookAuthor.value = "";
  numPages.value = "";
  hasReadBox.checked = false;
  newBookForm.style.display = "none";
  btnAddBook.style.display = "none";
}

const deleteBook = (removeBook, deleteBookCard) => {
  for(let i = 0; i < myLibrary.length; i++) {
    if(removeBook === myLibrary[i].title) {
      myLibrary.splice(i, 1);
    }
  }
  console.log(myLibrary);
  deleteBookCard;
}

const render = () => {
  let numBooks = myLibrary.length
  let bookCard = document.createElement('div');
  let removeBook = document.createElement('button');
  removeBook.textContent = "Delete";
  removeBook.classList.add('btnRemove');
  bookShelf.appendChild(bookCard);

  for(let key in myLibrary[numBooks - 1]) {
    let p = document.createElement('p');
    if(key === "pages") {
      p.textContent = `${myLibrary[numBooks - 1][key]} pages`;
    } else {
      p.textContent = myLibrary[numBooks - 1][key];
    }
    bookCard.appendChild(p);
    bookCard.appendChild(removeBook);
  }
}

const eventHandler = (() => {
  document.addEventListener('click', function(e) {
    console.log(e);
    if(e.target.textContent === "New Book") {
      newBookForm.style.display = "flex";
      btnAddBook.style.display = "block";
    }

    if(e.target.textContent === "Add") {
      createBook();
    }

    if(e.target.textContent === "Delete") {
      let removeBook = e.target.parentNode.children[0].textContent;
      let deleteBookCard = e.target.parentNode.parentNode.removeChild(e.target.parentNode);
      deleteBook(removeBook, deleteBookCard);
    }

    if(e.target.textContent === "Read") {
      e.target.textContent = "Not Read";
    } else if(e.target.textContent === "Not Read") {
      e.target.textContent = "Read";
    }
  })
})();